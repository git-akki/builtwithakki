import { useEffect, useRef, useState } from "react";
import { ArrowUp, Loader2 } from "lucide-react";
import { attributionSource, withAttribution } from "@/lib/attribution";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const MAX_USER_MESSAGES = 5;
const COUNT_KEY = "portfolio_chat_count";

const SUGGESTED = [
  "What have you actually built?",
  "What would this cost me?",
  "Can you automate my bookings?",
  "How do you work?",
];

/** Turn bare URLs in a reply into links, leaving the rest of the text alone. */
function renderWithLinks(text: string) {
  const parts = text.split(/(https?:\/\/[^\s)]+)/g);
  return parts.map((part, i) =>
    /^https?:\/\//.test(part) ? (
      <a
        key={i}
        href={withAttribution(part)}
        target="_blank"
        rel="noopener noreferrer"
        className="underline underline-offset-4 decoration-foreground/30 hover:decoration-foreground"
      >
        {part.replace(/^https?:\/\//, "")}
      </a>
    ) : (
      <span key={i}>{part}</span>
    )
  );
}

const AskChat = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [streaming, setStreaming] = useState(false);
  const [used, setUsed] = useState(0);
  const [leadSent, setLeadSent] = useState(false);
  const [lead, setLead] = useState({ name: "", email: "" });
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stored = Number(localStorage.getItem(COUNT_KEY) ?? 0);
    if (!Number.isNaN(stored)) setUsed(stored);
  }, []);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [messages, streaming]);

  const limitReached = used >= MAX_USER_MESSAGES;

  async function send(text: string) {
    const question = text.trim();
    if (!question || streaming || limitReached) return;

    const next: Message[] = [...messages, { role: "user", content: question }];
    setMessages(next);
    setInput("");
    setStreaming(true);

    const nextCount = used + 1;
    setUsed(nextCount);
    localStorage.setItem(COUNT_KEY, String(nextCount));

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: next }),
      });

      if (!res.ok || !res.body) throw new Error("Request failed");

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let reply = "";
      setMessages([...next, { role: "assistant", content: "" }]);

      let buffer = "";
      // eslint-disable-next-line no-constant-condition
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        buffer += decoder.decode(value, { stream: true });

        const lines = buffer.split("\n");
        buffer = lines.pop() ?? "";

        for (const line of lines) {
          if (!line.startsWith("data: ")) continue;
          const payload = line.slice(6).trim();
          if (payload === "[DONE]") continue;
          try {
            const parsed = JSON.parse(payload);
            if (parsed.text) {
              reply += parsed.text;
              setMessages([...next, { role: "assistant", content: reply }]);
            }
          } catch {
            /* partial frame, wait for the rest */
          }
        }
      }
    } catch {
      setMessages([
        ...next,
        {
          role: "assistant",
          content:
            "That did not go through. The proof is all below, or you can book a call and ask me directly.",
        },
      ]);
    } finally {
      setStreaming(false);
    }
  }

  async function submitLead(e: React.FormEvent) {
    e.preventDefault();
    if (!lead.name || !lead.email) return;
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: lead.name,
          email: lead.email,
          message: messages
            .filter((m) => m.role === "user")
            .map((m) => m.content)
            .join(" | ")
            .slice(0, 900),
          source: attributionSource("chat"),
        }),
      });
      setLeadSent(true);
    } catch {
      setLeadSent(true); // Never trap someone in a form that appears broken.
    }
  }

  const started = messages.length > 0;
  /* Ask for details once there is a real conversation, not on the first reply. */
  const askForDetails = !leadSent && used >= 2;

  return (
    <div className="flex flex-col gap-8">
      {started && (
        <div className="flex flex-col gap-7">
          {messages.map((m, i) => (
            <div key={i} className="flex flex-col gap-1.5">
              <span className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                {m.role === "user" ? "You" : "Akash"}
              </span>
              <p className="text-[17px] leading-relaxed text-foreground whitespace-pre-wrap">
                {m.role === "assistant" ? renderWithLinks(m.content) : m.content}
                {m.role === "assistant" && streaming && i === messages.length - 1 && (
                  <span className="ml-1 inline-block w-2 h-4 align-middle bg-foreground/40 animate-pulse" />
                )}
              </p>
            </div>
          ))}
          <div ref={endRef} />
        </div>
      )}

      {!limitReached && (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            send(input);
          }}
          className="relative"
        >
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={started ? "Ask another" : "Ask me anything about what I have built"}
            aria-label="Ask a question"
            className="w-full bg-transparent border-b border-border focus:border-foreground/60 outline-none py-4 pr-12 text-[17px] placeholder:text-muted-foreground/70 transition-colors"
          />
          <button
            type="submit"
            disabled={streaming || !input.trim()}
            aria-label="Send"
            className="absolute right-0 top-1/2 -translate-y-1/2 p-2 text-muted-foreground hover:text-foreground disabled:opacity-30 transition-colors"
          >
            {streaming ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <ArrowUp className="w-4 h-4" />
            )}
          </button>
        </form>
      )}

      {!started && !limitReached && (
        <div className="flex flex-wrap gap-x-6 gap-y-2">
          {SUGGESTED.map((q) => (
            <button
              key={q}
              onClick={() => send(q)}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors text-left"
            >
              {q}
            </button>
          ))}
        </div>
      )}

      {limitReached && (
        <div className="border-t border-border pt-6 flex flex-col gap-3">
          <p className="text-[17px] leading-relaxed">
            That is five questions — about as much as this is useful for. Everything below is
            the same information, and a call gets you the rest.
          </p>
          <a
            href={withAttribution("https://cal.com/akash-yadav-xfz9ms/automation-audit")}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm underline underline-offset-4 decoration-foreground/30 hover:decoration-foreground w-fit"
          >
            Book a 30-minute audit
          </a>
        </div>
      )}

      {askForDetails && (
        <div className="border-t border-border pt-6">
          {leadSent ? (
            <p className="text-sm text-muted-foreground">
              Got it. Akash will follow up himself.
            </p>
          ) : (
            <form onSubmit={submitLead} className="flex flex-col gap-3 max-w-md">
              <p className="text-sm text-muted-foreground">
                Leave your name and email and Akash will pick this up personally — no
                sequence, no newsletter.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  value={lead.name}
                  onChange={(e) => setLead({ ...lead, name: e.target.value })}
                  placeholder="Name"
                  aria-label="Your name"
                  className="flex-1 bg-transparent border-b border-border focus:border-foreground/60 outline-none py-2 text-sm placeholder:text-muted-foreground/70"
                />
                <input
                  value={lead.email}
                  onChange={(e) => setLead({ ...lead, email: e.target.value })}
                  placeholder="Email"
                  type="email"
                  aria-label="Your email"
                  className="flex-1 bg-transparent border-b border-border focus:border-foreground/60 outline-none py-2 text-sm placeholder:text-muted-foreground/70"
                />
                <button
                  type="submit"
                  className="text-sm text-foreground underline underline-offset-4 decoration-foreground/30 hover:decoration-foreground whitespace-nowrap"
                >
                  Send
                </button>
              </div>
            </form>
          )}
        </div>
      )}
    </div>
  );
};

export default AskChat;
