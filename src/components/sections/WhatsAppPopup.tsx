"use client";

// WhatsApp side-popup — service detail page par mount hone ke ~18 sec baad
// bottom-LEFT corner se slide-in hota hai. Goal: user ko gentle nudge dena ki
// "more details ke liye WhatsApp karein" — kyunki kuch clients form bharna
// avoid karte hain.
//
// Close karne par session ke liye yaad rehta hai (localStorage), wapas nahi aata.
// (Chatbot bottom-right me hai, isliye ye bottom-LEFT pe — overlap nahi hota.)

import { useCallback, useEffect, useRef, useState } from "react";
import { X } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/SocialIcons";
import { COMPANY, SOCIAL_LINKS } from "@/lib/constants";

const DELAY_MS = 0; // service page khulte hi turant dikhe
const AUTO_HIDE_MS = 15000; // dikhne ke 15 sec baad apne aap chhup jayega

export default function WhatsAppPopup() {
  const [visible, setVisible] = useState(false);
  const [mounted, setMounted] = useState(false);
  const hoveringRef = useRef(false);

  const close = useCallback(() => {
    setVisible(false);
  }, []);

  // Mount hote hi popup dikhao. (Har naye service page par parent component
  // `key={slug}` use karta hai jisse remount hota hai aur popup dobara aata hai.)
  useEffect(() => {
    setMounted(true);
    const t = window.setTimeout(() => setVisible(true), DELAY_MS);
    return () => window.clearTimeout(t);
  }, []);

  // Visible hone ke 15 sec baad apne aap close. Agar user hover kar raha ho
  // to timer pause — taaki padhte waqt accidentally chhupe na.
  useEffect(() => {
    if (!visible) return;
    let t: number | undefined;
    const start = () => {
      t = window.setTimeout(() => {
        if (!hoveringRef.current) close();
      }, AUTO_HIDE_MS);
    };
    start();
    return () => {
      if (t) window.clearTimeout(t);
    };
  }, [visible, close]);

  if (!mounted) return null;

  // Social links wala same WhatsApp URL — consistent rahega.
  const waLink = SOCIAL_LINKS.whatsapp;

  return (
    <div
      role="dialog"
      aria-label="WhatsApp contact prompt"
      aria-hidden={!visible}
      onMouseEnter={() => (hoveringRef.current = true)}
      onMouseLeave={() => (hoveringRef.current = false)}
      className={`fixed bottom-6 left-4 z-40 max-w-88 transition-all duration-500 sm:left-6 ${
        visible
          ? "pointer-events-auto translate-y-0 opacity-100"
          : "pointer-events-none translate-y-6 opacity-0"
      }`}
    >
      <div className="relative overflow-hidden rounded-2xl border border-green-100 bg-white shadow-2xl shadow-green-900/20 dark:border-[#26332c] dark:bg-[#1a241e]">
        {/* Top accent line */}
        <div className="h-1 w-full bg-linear-to-r from-[#25D366] via-[#128C7E] to-[#25D366]" />

        {/* Close — visibly clickable button (background + bigger hit area) */}
        <button
          type="button"
          onClick={close}
          aria-label="Close"
          className="absolute right-2.5 top-2.5 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-600 shadow-sm transition-all hover:scale-110 hover:bg-slate-200 hover:text-slate-900 dark:bg-white/10 dark:text-slate-300 dark:hover:bg-white/20 dark:hover:text-white"
        >
          <X className="h-4 w-4" strokeWidth={2.5} />
        </button>

        <div className="flex gap-4 p-5">
          {/* WA icon */}
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#25D366] text-white shadow-sm shadow-[#25D366]/40">
            <WhatsAppIcon className="h-6 w-6" />
          </span>

          <div className="min-w-0 flex-1 pr-5">
            <p className="text-sm font-bold text-slate-900 dark:text-white">
              Want more details? 💬
            </p>
            <p className="mt-1 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
              Chat with us directly on WhatsApp — we usually reply within minutes.
            </p>
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-4 py-2 text-xs font-semibold text-white shadow-sm shadow-[#25D366]/30 transition-all hover:-translate-y-0.5 hover:bg-[#1ebe5d]"
              onClick={close}
            >
              <WhatsAppIcon className="h-3.5 w-3.5" />
              Chat on WhatsApp
            </a>
            <p className="mt-2 text-[0.7rem] font-medium text-slate-500 dark:text-slate-500">
              {COMPANY.phoneDisplay}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
