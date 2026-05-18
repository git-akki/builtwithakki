import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Sparkles, User, ArrowRight, Zap } from "lucide-react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const MAX_USER_MESSAGES = 5;
const STORAGE_KEY = "portfolio_chat_count";

const SUGGESTED_QUESTIONS = [
  "What AI systems have you built?",
  "How much did the Hair Mastery run cost?",
  "What's in the free AI audit?",
  "Can you build automations for my business?",
];

const LimitReached = () => (
  <motion.div
    initial={{ opacity: 0, y: 8 }}
    animate={{ opacity: 1, y: 0 }}
    className="p-4 m-3 rounded-xl bg-primary/5 border border-primary/20 text-center"
  >
    <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-3">
      <Zap className="w-5 h-5 text-primary" />
    </div>
    <p className="text-sm font-semibold mb-1">You've reached the free limit</p>
    <p className="text-xs text-muted-foreground mb-4">
      Want to go deeper? Book a free 30-min call — I'll audit your setup live.
    </p>
    <a
      href="#book-call"
      className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground text-sm font-medium rounded-lg hover:bg-primary/90 transition-colors"
    >
      Book Free AI Audit
      <ArrowRight className="w-3.5 h-3.5" />
    </a>
  </motion.div>
);

const PortfolioChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hey! Ask me anything about Akash's work, case studies, or how AI automation can help your business.",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [userMessageCount, setUserMessageCount] = useState(() => {
    try {
      return parseInt(localStorage.getItem(STORAGE_KEY) || "0", 10);
    } catch {
      return 0;
    }
  });

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const isLimitReached = userMessageCount >= MAX_USER_MESSAGES;

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
      if (!isLimitReached) inputRef.current?.focus();
    }
  }, [isOpen, messages, isLimitReached]);

  const sendMessage = async (text: string) => {
    if (!text.trim() || isLoading || isLimitReached) return;

    const newCount = userMessageCount + 1;
    setUserMessageCount(newCount);
    try { localStorage.setItem(STORAGE_KEY, String(newCount)); } catch {}

    const userMessage: Message = { role: "user", content: text.trim() };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput("");
    setIsLoading(true);

    setMessages((prev) => [...prev, { role: "assistant", content: "" }]);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMessages }),
      });

      if (!res.ok) throw new Error("Request failed");

      const reader = res.body!.getReader();
      const decoder = new TextDecoder();
      let buffer = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split("\n");
        buffer = lines.pop() ?? "";

        for (const line of lines) {
          if (!line.startsWith("data: ")) continue;
          const data = line.slice(6);
          if (data === "[DONE]") break;
          try {
            const parsed = JSON.parse(data);
            if (parsed.text) {
              setMessages((prev) => {
                const updated = [...prev];
                updated[updated.length - 1] = {
                  role: "assistant",
                  content: updated[updated.length - 1].content + parsed.text,
                };
                return updated;
              });
            }
          } catch { /* skip */ }
        }
      }
    } catch {
      setMessages((prev) => {
        const updated = [...prev];
        updated[updated.length - 1] = {
          role: "assistant",
          content: "Something went wrong. Try the contact form below or book a call directly.",
        };
        return updated;
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  return (
    <>
      {/* Floating trigger button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 z-50 group flex items-center gap-2.5 px-4 py-3 bg-primary text-primary-foreground rounded-2xl shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:scale-105 transition-all duration-200"
          >
            <div className="relative">
              <Sparkles className="w-4 h-4" />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            </div>
            <span className="text-sm font-medium">Ask AI</span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            className="fixed bottom-6 right-6 z-50 w-[360px] sm:w-[400px] h-[540px] bg-card/95 backdrop-blur-xl border border-border/60 rounded-2xl shadow-2xl shadow-black/20 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-border/60">
              <div className="flex items-center gap-2.5">
                <div className="relative w-8 h-8 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-primary" />
                  <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-green-400 rounded-full border border-card animate-pulse" />
                </div>
                <div>
                  <p className="text-sm font-semibold leading-none">Akash's AI</p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {isLimitReached ? "Limit reached" : `${MAX_USER_MESSAGES - userMessageCount} questions left`}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg hover:bg-muted transition-colors text-muted-foreground"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-3 py-3 space-y-3">
              {messages.map((msg, i) => (
                <div key={i} className={`flex gap-2 ${msg.role === "user" ? "flex-row-reverse" : "flex-row"}`}>
                  <div
                    className={`w-6 h-6 rounded-lg flex-shrink-0 flex items-center justify-center mt-0.5 ${
                      msg.role === "assistant"
                        ? "bg-primary/10 border border-primary/20"
                        : "bg-muted border border-border"
                    }`}
                  >
                    {msg.role === "assistant"
                      ? <Sparkles className="w-3 h-3 text-primary" />
                      : <User className="w-3 h-3 text-muted-foreground" />
                    }
                  </div>
                  <div
                    className={`max-w-[82%] px-3 py-2 rounded-xl text-sm leading-relaxed ${
                      msg.role === "user"
                        ? "bg-primary text-primary-foreground rounded-tr-sm"
                        : "bg-muted/80 text-foreground rounded-tl-sm"
                    }`}
                  >
                    {msg.content || (
                      <span className="inline-flex gap-1 items-center h-4">
                        <span className="w-1.5 h-1.5 rounded-full bg-current animate-bounce [animation-delay:0ms]" />
                        <span className="w-1.5 h-1.5 rounded-full bg-current animate-bounce [animation-delay:150ms]" />
                        <span className="w-1.5 h-1.5 rounded-full bg-current animate-bounce [animation-delay:300ms]" />
                      </span>
                    )}
                  </div>
                </div>
              ))}

              {/* Limit reached CTA (shown after last AI response) */}
              {isLimitReached && !isLoading && <LimitReached />}

              <div ref={messagesEndRef} />
            </div>

            {/* Suggested questions (first screen only) */}
            {messages.length === 1 && !isLimitReached && (
              <div className="px-3 pb-2 flex flex-wrap gap-1.5">
                {SUGGESTED_QUESTIONS.map((q) => (
                  <button
                    key={q}
                    onClick={() => sendMessage(q)}
                    className="text-xs px-2.5 py-1 rounded-lg border border-border/60 hover:border-primary/40 hover:bg-primary/5 transition-colors text-muted-foreground hover:text-foreground"
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}

            {/* Input */}
            {!isLimitReached && (
              <form onSubmit={handleSubmit} className="px-3 pb-3 pt-2 border-t border-border/60">
                <div className="flex gap-2">
                  <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Ask anything..."
                    disabled={isLoading}
                    className="flex-1 px-3 py-2 text-sm bg-muted/60 rounded-xl border border-border/60 focus:outline-none focus:border-primary/40 disabled:opacity-50 placeholder:text-muted-foreground/60"
                  />
                  <button
                    type="submit"
                    disabled={!input.trim() || isLoading}
                    className="p-2.5 bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default PortfolioChat;
