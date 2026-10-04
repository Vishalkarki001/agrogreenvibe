"use client";

// FAQ accordion — ek waqt me ek sawaal khulta hai, smooth height animation ke
// saath. Accessible hai: button + aria-expanded + aria-controls, keyboard se
// chalta hai. Grid-rows trick use ki hai taaki height auto hone par bhi
// transition smooth rahe (max-height hack se better).

import { useState } from "react";
import { Plus } from "lucide-react";
import type { FaqItem } from "@/lib/faqs";

interface FaqAccordionProps {
  faqs: FaqItem[];
  /** Pehla sawaal by default khula rakhein? */
  defaultOpen?: number | null;
  idPrefix?: string;
}

export default function FaqAccordion({
  faqs,
  defaultOpen = 0,
  idPrefix = "faq",
}: FaqAccordionProps) {
  const [open, setOpen] = useState<number | null>(defaultOpen);

  return (
    <div className="divide-y divide-slate-100 overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm dark:divide-[#26332c] dark:border-[#26332c] dark:bg-[#1a241e]">
      {faqs.map((faq, i) => {
        const isOpen = open === i;
        const panelId = `${idPrefix}-panel-${i}`;
        const btnId = `${idPrefix}-btn-${i}`;

        return (
          <div key={faq.question}>
            <h3>
              <button
                id={btnId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-start gap-4 px-5 py-5 text-left transition-colors hover:bg-green-50/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-green-500 sm:px-7 dark:hover:bg-[#1f2b24]"
              >
                <span className="flex-1 font-display text-base font-semibold leading-relaxed text-slate-900 sm:text-lg dark:text-white">
                  {faq.question}
                </span>
                <span
                  className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                    isOpen
                      ? "rotate-45 bg-green-700 text-white"
                      : "bg-green-50 text-green-700 dark:bg-green-900/40 dark:text-green-300"
                  }`}
                  aria-hidden
                >
                  <Plus className="h-4 w-4" strokeWidth={2.5} />
                </span>
              </button>
            </h3>

            <div
              id={panelId}
              role="region"
              aria-labelledby={btnId}
              className={`grid transition-all duration-300 ease-out ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-5 pb-6 pr-14 text-sm leading-relaxed text-slate-600 sm:px-7 sm:pr-16 sm:text-[0.95rem] dark:text-slate-400">
                  {faq.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
