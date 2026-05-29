import { useEffect, useRef, useState } from "react";
import { useRouterState } from "@tanstack/react-router";
import { Sparkles, X, Send } from "lucide-react";

const PHONE = "(214) 555-0142";

const QUICK_PROMPTS = [
  "What services do you offer?",
  "How much does AC install cost?",
  "How do I book service?",
  "Do you serve my area?",
];

const KNOWLEDGE = [
  {
    match: /service|offer|do you do|what can/i,
    reply:
      "Elite Air Dallas offers premium AC repair and installation, furnace service, smart climate integrations, maintenance plans, and indoor air quality solutions. All work includes white-glove service and up to 10-year warranties.",
  },
  {
    match: /price|cost|estimate|how much|pricing|calculator/i,
    reply:
      "Pricing depends on system size and scope. AC installs typically start around $2,900 for a 3-ton system. Use our instant pricing calculator on the homepage — scroll to Instant Pricing or I can take you there.",
  },
  {
    match: /book|schedule|appointment|visit|when/i,
    reply:
      "Booking takes under 60 seconds. Scroll to Book Service on the homepage, or call us at (214) 555-0142 for same-day dispatch. We confirm via text within a minute.",
  },
  {
    match: /area|zip|serve|neighborhood|coverage|dallas|plano|highland/i,
    reply:
      "We serve Dallas, Highland Park, Preston Hollow, Uptown, Plano, and surrounding zip codes. Enter your zip in the Service Area Check section on the homepage for instant confirmation.",
  },
  {
    match: /warrant|guarantee/i,
    reply:
      "Every install includes up to a 10-year parts and labor warranty. Annual maintenance plan members get priority dispatch and free yearly tune-ups.",
  },
  {
    match: /emergency|urgent|24|asap|tonight/i,
    reply:
      "We are available 24/7 for emergencies. Average response time is 38 minutes across Dallas County. Call (214) 555-0142 or book with ASAP selected.",
  },
  {
    match: /hello|hi|hey|help/i,
    reply:
      "Welcome to Elite Air Dallas. I can help with services, pricing, booking, and service area questions. What would you like to know?",
  },
];

function getReply(input: string) {
  const trimmed = input.trim();
  if (!trimmed) return "Ask me about services, pricing, booking, or coverage. I am here to help.";
  for (const { match, reply } of KNOWLEDGE) {
    if (match.test(trimmed)) return reply;
  }
  return `For personalized help, call ${PHONE} or use the booking form on our homepage. Our concierge team responds within minutes.`;
}

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

type Message = { role: "user" | "assistant"; text: string };

export function AiNavigator() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      text: "Hello. I am your Elite Air guide. Ask about services, pricing, booking, or your service area.",
    },
  ]);
  const [typing, setTyping] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) requestAnimationFrame(() => inputRef.current?.focus());
  }, [open]);

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, typing]);

  if (pathname === "/owner") return null;

  const send = (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || typing) return;
    setMessages((m) => [...m, { role: "user", text: trimmed }]);
    setInput("");
    setTyping(true);
    window.setTimeout(() => {
      const reply = getReply(trimmed);
      setMessages((m) => [...m, { role: "assistant", text: reply }]);
      setTyping(false);
      if (/pricing|calculator|estimate/i.test(trimmed)) scrollToSection("pricing");
      if (/book|schedule|appointment/i.test(trimmed)) scrollToSection("booking");
      if (/area|zip|serve/i.test(trimmed)) scrollToSection("top");
    }, 650);
  };

  return (
    <div
      className="fixed z-50 flex flex-col items-end gap-3 pointer-events-none"
      style={{
        bottom: "max(1.25rem, env(safe-area-inset-bottom))",
        right: "max(1.25rem, env(safe-area-inset-right))",
      }}
    >
      <div
        className={`pointer-events-auto w-[min(calc(100vw-2.5rem),380px)] origin-bottom-right transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          open
            ? "opacity-100 scale-100 translate-y-0"
            : "opacity-0 scale-95 translate-y-3 pointer-events-none"
        }`}
        aria-hidden={!open}
      >
        <div className="rounded-3xl bg-card/95 backdrop-blur-xl shadow-luxe overflow-hidden">
          <div className="gradient-navy px-5 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3 min-w-0">
              <div className="size-9 rounded-3xl gradient-gold flex items-center justify-center shadow-gold shrink-0">
                <Sparkles className="size-4 text-navy" />
              </div>
              <div className="min-w-0">
                <div className="font-display font-bold text-white text-sm">Smart Navigator</div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-gold">
                  Elite Air Assistant
                </div>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="btn-elite is-icon is-ghost text-white shrink-0"
              aria-label="Close assistant"
            >
              <X className="size-4" />
            </button>
          </div>

          <div
            ref={listRef}
            className="h-64 sm:h-72 overflow-y-auto px-4 py-4 space-y-3 scroll-smooth"
          >
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"} animate-fade-up`}
                style={{ animationDuration: "0.4s" }}
              >
                <div
                  className={`max-w-[88%] rounded-3xl px-4 py-2.5 text-sm leading-relaxed break-words ${
                    msg.role === "user" ? "bg-navy text-white" : "bg-muted text-foreground"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {typing && (
              <div className="flex justify-start">
                <div className="bg-muted rounded-3xl px-4 py-3 flex gap-1">
                  {[0, 1, 2].map((d) => (
                    <span
                      key={d}
                      className="size-1.5 rounded-full bg-gold animate-pulse"
                      style={{ animationDelay: `${d * 150}ms` }}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="px-4 pb-3 flex gap-2 overflow-x-auto scrollbar-none">
            {QUICK_PROMPTS.map((p) => (
              <button
                key={p}
                type="button"
                onClick={() => send(p)}
                className="btn-elite is-ghost h-9 px-3 text-xs whitespace-nowrap shrink-0"
              >
                {p}
              </button>
            ))}
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              send(input);
            }}
            className="p-3 flex gap-2"
          >
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about services, pricing, or booking"
              className="flex-1 h-10 rounded-3xl bg-muted px-4 text-sm outline-none focus:shadow-[inset_0_0_0_1px_#d4af5a] transition-shadow"
              aria-label="Message"
            />
            <button
              type="submit"
              disabled={!input.trim() || typing}
              className="btn-elite is-primary h-10 px-4 disabled:opacity-40"
              aria-label="Send message"
            >
              <Send className="size-4" />
            </button>
          </form>

          <div className="px-4 pb-4">
            <button
              type="button"
              onClick={() => {
                setOpen(false);
                scrollToSection("booking");
              }}
              className="w-full btn-elite is-ghost h-10 text-xs"
            >
              Book service now
            </button>
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className={`pointer-events-auto btn-elite is-icon size-14 shadow-luxe transition-transform duration-300 ${
          open ? "is-ghost bg-card" : "is-primary"
        }`}
        aria-label={open ? "Close AI assistant" : "Open AI assistant"}
        aria-expanded={open}
      >
        {open ? (
          <X className="size-5" />
        ) : (
          <Sparkles className="size-5 animate-pulse" style={{ animationDuration: "3s" }} />
        )}
      </button>
    </div>
  );
}
