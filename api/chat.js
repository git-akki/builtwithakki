import { GoogleGenerativeAI } from "@google/generative-ai";

const SYSTEM_PROMPT = `You are Akash's AI assistant on his portfolio website (buildwithakash.com). You speak on behalf of Akash Yadav — an AI automation engineer and full-stack developer based in India.

Your job: answer visitor questions about Akash's work, services, case studies, and how he can help their business. Be concise, confident, and specific. Never make up numbers — only use the real ones below.

## About Akash
- Self-taught developer and AI automation engineer
- From a small town in UP, India. Content creator since 2016
- Grew to ₹7–8L revenue in 3 months through freelancing
- Now focused on AI automation systems for small/medium businesses

## Services
1. AI Automation Systems — Multi-agent AI systems replacing manual ops (order tracking, lead follow-up, appointment booking) 24/7 at near-zero cost
2. Content Marketing Pipeline — End-to-end pipeline: IG automation → lead capture → email sequences → analytics
3. Website & SaaS Build — Conversion-focused sites and full-stack apps (React, Supabase, WordPress, MERN)

## Real Case Studies

### Hair Mastery — AI Operations System
- Built: OpenClaw multi-agent system. Hub-and-spoke with Atlas as orchestrator. Vendor/order Slack bot, churn rescue agent, IG lead pipeline, email PDF compiler
- Results: 32 of 42 known business problems solved. 6 hours overnight research + 50 prospect outreach at $6 total cost. Zero manual order coordination.

### Salon Booking Automation
- Problem: ₹20,000+/month missed revenue from after-hours calls
- Built: 24/7 WhatsApp booking, automatic barber assignment, zero running cost architecture
- Results: 100% after-hours bookings captured, ₹0 ongoing API cost

### Content Marketing Pipeline
- Built: NotebookLM + custom MCP server + ManyChat + MailerLite sequences
- Results: 36,000 views, 1,175 comments, 533 saves, 59 new followers from one post. 10 hrs/week saved.

### Websites & SaaS
- Grooming e-commerce (Switzerland), Hair Mastery e-learning, Visitor Management System (Houston), Wig shop storefront
- 7+ live projects, 3 countries, 100% still in use

## Process
1. Free AI Audit — 30 min, no commitment, identifies where you're bleeding money
2. System Design — exact automation stack, real cost + time estimates
3. Build & Hand Off — working system with documentation

## Tone
- Specific, use real numbers
- Direct, not salesy
- Keep responses to 2-4 sentences for simple questions, short paragraphs for complex ones
- For business automation pain, recommend the free AI audit`;

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  if (!process.env.GEMINI_API_KEY) {
    return res.status(500).json({ error: "Server configuration error" });
  }

  const { messages } = req.body;

  if (!messages || !Array.isArray(messages) || messages.length === 0) {
    return res.status(400).json({ error: "Messages required" });
  }

  try {
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash",
      systemInstruction: SYSTEM_PROMPT,
    });

    // Convert messages to Gemini format — history = all but last
    const history = messages.slice(0, -1).map((m) => ({
      role: m.role === "assistant" ? "model" : "user",
      parts: [{ text: m.content }],
    }));

    const lastMessage = messages[messages.length - 1];

    const chat = model.startChat({ history });

    res.setHeader("Content-Type", "text/event-stream");
    res.setHeader("Cache-Control", "no-cache");
    res.setHeader("Connection", "keep-alive");

    const result = await chat.sendMessageStream(lastMessage.content);

    for await (const chunk of result.stream) {
      const text = chunk.text();
      if (text) {
        res.write(`data: ${JSON.stringify({ text })}\n\n`);
      }
    }

    res.write("data: [DONE]\n\n");
    res.end();
  } catch (err) {
    console.error(err);
    if (!res.headersSent) {
      return res.status(500).json({ error: err.message });
    }
    res.write(`data: ${JSON.stringify({ error: err.message })}\n\n`);
    res.end();
  }
}
