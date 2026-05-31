"use client";

// Floating chatbot widget — bottom-right corner par hamesha visible, har page
// par. AI nahi hai — STATIC predefined questions aur answers (FAQ-style).
// User question chip par click karta hai aur answer chat bubble me dikh jata hai.
// "Send feedback" link bhi hai jo /feedback page par le jata hai.

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { MessageCircle, X, Sparkles, MessageSquareHeart } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/SocialIcons";
import { SOCIAL_LINKS } from "@/lib/constants";

// 6 most-common questions ke static answers. Yahan badal sakte ho — aur
// add karne ke liye bas array me entry badhao.
const FAQS: { q: string; a: string }[] = [
  {
    q: "What services do you offer?",
    a: "We specialize in 7 green services: Landscaping, Terrace Gardening, Mini & Large Parks, Natural & Artificial Ponds, Kitchen Gardening, Aranya Cottages and Other Gardening Services. Each one is designed, built and maintained by our expert team.",
  },
  {
    q: "Where are you located?",
    a: "Our office is at Ground Floor, Plot 023, Agro Greenvibe India, Rudrapur, Udham Singh Nagar 263153, Uttarakhand, India. We mainly serve clients across Uttarakhand and nearby regions.",
  },
  {
    q: "How can I get a quote?",
    a: "Easy — just head to our Contact page and fill the short form, or message us on WhatsApp at +91 88688 57255. We share a transparent, no-obligation quote within 24 hours.",
  },
  {
    q: "Are your practices eco-friendly?",
    a: "Yes — 100% eco-friendly! We use organic fertilizers, water-smart irrigation, and sustainably sourced materials on every project. Caring for the earth is at the heart of what we do.",
  },
  {
    q: "How long does a project take?",
    a: "It depends on the scope — a terrace garden can take 1–2 weeks, while a full park or large landscape might take 1–3 months. We share a clear timeline upfront so you always know what to expect.",
  },
];

interface Message {
  role: "bot" | "user";
  text: string;
  id: number;
}

let msgId = 0;
const nextId = () => ++msgId;

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [hasNew, setHasNew] = useState(true); // chhota dot fab par
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "bot",
      id: nextId(),
      text: "Hi! 🌿 I'm AgroBot — your quick assistant. Pick a question below and I'll help you right away.",
    },
  ]);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom jab nayi message aaye
  useEffect(() => {
    if (!open) return;
    const node = scrollRef.current;
    if (node) node.scrollTop = node.scrollHeight;
  }, [messages, open]);

  // Esc se panel close
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  function toggle() {
    setOpen((v) => !v);
    setHasNew(false);
  }

  function ask(faq: { q: string; a: string }) {
    setMessages((m) => [
      ...m,
      { role: "user", id: nextId(), text: faq.q },
      { role: "bot", id: nextId(), text: faq.a },
    ]);
  }

  const waLink = SOCIAL_LINKS.whatsapp;

  return (
    <>
      {/* ===== Floating FAB ===== */}
      <button
        type="button"
        onClick={toggle}
        aria-label={open ? "Close chat" : "Open chat"}
        aria-expanded={open}
        className="fixed bottom-6 right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-700 text-white shadow-lg shadow-green-900/30 transition-all duration-300 hover:-translate-y-1 hover:bg-green-800 sm:right-6 sm:h-16 sm:w-16"
      >
        <span
          className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
            open ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100"
          }`}
        >
          <MessageCircle className="h-6 w-6 sm:h-7 sm:w-7" />
        </span>
        <span
          className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
            open ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0"
          }`}
        >
          <X className="h-6 w-6 sm:h-7 sm:w-7" />
        </span>
        {hasNew && !open && (
          <span className="absolute right-1 top-1 flex h-3 w-3">
            <span className="absolute inset-0 animate-ping rounded-full bg-amber-400 opacity-75" />
            <span className="relative inline-flex h-3 w-3 rounded-full bg-amber-500" />
          </span>
        )}
      </button>

      {/* ===== Chat panel ===== */}
      <div
        role="dialog"
        aria-label="AgroBot chat"
        aria-hidden={!open}
        className={`fixed bottom-24 right-3 z-50 flex w-[calc(100vw-1.5rem)] max-w-sm origin-bottom-right flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-2xl shadow-green-900/20 transition-all duration-300 sm:right-6 sm:bottom-28 sm:w-96 dark:border-[#26332c] dark:bg-[#1a241e] ${
          open
            ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
            : "pointer-events-none translate-y-2 scale-95 opacity-0"
        }`}
      >
        {/* Header */}
        <div className="relative bg-linear-to-br from-green-700 to-green-800 px-5 py-4 text-white">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15 backdrop-blur-sm">
              <Sparkles className="h-5 w-5 text-amber-300" />
            </span>
            <div>
              <p className="font-display text-base font-bold leading-tight">
                AgroBot
              </p>
              <p className="flex items-center gap-1.5 text-xs text-green-100/80">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-green-300" />
                Quick answers, instantly
              </p>
            </div>
          </div>
        </div>

        {/* Messages */}
        <div
          ref={scrollRef}
          className="flex max-h-80 flex-1 flex-col gap-2.5 overflow-y-auto bg-slate-50 px-4 py-4 dark:bg-[#131d18]"
        >
          {messages.map((m) => (
            <div
              key={m.id}
              className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed shadow-sm ${
                  m.role === "user"
                    ? "rounded-br-md bg-green-700 text-white"
                    : "rounded-bl-md bg-white text-slate-700 dark:bg-[#1a241e] dark:text-slate-200"
                }`}
              >
                {m.text}
              </div>
            </div>
          ))}
        </div>

        {/* Quick questions */}
        <div className="border-t border-slate-100 bg-white p-3 dark:border-[#26332c] dark:bg-[#1a241e]">
          <p className="mb-2 px-1 text-[0.7rem] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            Quick questions
          </p>
          <div className="flex flex-wrap gap-1.5">
            {FAQS.map((faq) => (
              <button
                key={faq.q}
                onClick={() => ask(faq)}
                className="rounded-full border border-green-200 bg-green-50 px-3 py-1.5 text-xs font-medium text-green-800 transition-colors hover:bg-green-100 dark:border-green-900/60 dark:bg-green-900/30 dark:text-green-200 dark:hover:bg-green-900/50"
              >
                {faq.q}
              </button>
            ))}
          </div>

          {/* Bottom actions */}
          <div className="mt-3 flex items-center gap-2 border-t border-slate-100 pt-3 dark:border-[#26332c]">
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-[#25D366] px-3 py-2 text-xs font-semibold text-white transition-colors hover:bg-[#1ebe5d]"
            >
              <WhatsAppIcon className="h-3.5 w-3.5" />
              WhatsApp
            </a>
            <Link
              href="/feedback"
              onClick={() => setOpen(false)}
              className="flex flex-1 items-center justify-center gap-1.5 rounded-xl border border-green-700 px-3 py-2 text-xs font-semibold text-green-800 transition-colors hover:bg-green-50 dark:border-green-500 dark:text-green-300 dark:hover:bg-green-900/30"
            >
              <MessageSquareHeart className="h-3.5 w-3.5" />
              Feedback
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
