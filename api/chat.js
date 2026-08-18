import { GoogleGenerativeAI } from "@google/generative-ai";
import {
  PROFILE,
  SERVICES,
  CASE_STUDIES,
  PROCESS,
  BOOKING,
  GUARDRAILS,
} from "./_facts.js";

/**
 * The system prompt is generated from _facts.js rather than written by hand, so
 * updating a number in one place updates what the assistant says. The previous
 * hand-written prompt drifted out of sync with the site ($6 vs $27).
 */
function buildSystemPrompt() {
  const services = SERVICES.map(
    (s) => `- ${s.title}: ${s.promise} Includes: ${s.includes.join("; ")}. Proof: ${s.proof}`
  ).join("\n");

  const cases = CASE_STUDIES.map((c) => {
    const numbers = c.numbers.map(([v, l]) => `${v} ${l}`).join(", ");
    return [
      `### ${c.title} — ${c.client}`,
      `Problem: ${c.problem}`,
      `Built: ${c.built.join("; ")}`,
      `Numbers: ${numbers}`,
    ].join("\n");
  }).join("\n\n");

  const booking = Object.entries(BOOKING.types)
    .map(([, t]) => `- ${t.label} (${BOOKING.base}/${t.slug}) — for ${t.when}`)
    .join("\n");

  return `You are the assistant on ${PROFILE.name}'s site, ${PROFILE.site}. You speak for him, in his voice: plain, specific, unhurried. Never salesy.

## Who he is
${PROFILE.role}. ${PROFILE.based}.
${PROFILE.background}

## Services
${services}

## Real work
${cases}

## How he works
${PROCESS.map(([step, detail], i) => `${i + 1}. ${step} — ${detail}`).join("\n")}

## Booking links
${booking}

Calls are 30 minutes, Tuesday / Thursday / Saturday, 13:00–20:00 India time.

## Hard rules
${GUARDRAILS.map((g) => `- ${g}`).join("\n")}

## How to answer
- Two to four sentences for a simple question. A short paragraph for a complex one. Never a wall of text.
- Lead with the specific thing. A real number beats an adjective every time.
- Plain words. No "leverage", "robust", "seamless", "game-changer".
- When someone describes a business problem, name which of the three services fits and give the matching booking link as a plain URL. Pick the link by what they described, not by default.
- If someone seems ready to talk but is not booking, ask for their name and email so he can follow up, and say why you are asking.
- If you do not know, say so. Then offer the audit. Guessing is worse than a gap.`;
}

const SYSTEM_PROMPT = buildSystemPrompt();

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

  // The 5-message limit is enforced client-side for UX, but a limit that only
  // lives in the browser is not a limit. Cap the server side too, generously,
  // so a crafted request cannot run up the Gemini bill.
  if (messages.length > 24) {
    return res.status(400).json({ error: "Conversation too long" });
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
