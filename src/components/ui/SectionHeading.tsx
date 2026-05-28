// Har section ke upar ka heading block: chhota "eyebrow" label, bada title,
// aur optional subtitle. `centered` se center-align ho jata hai.

import type { ReactNode } from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  centered?: boolean;
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  centered = false,
  className = "",
}: SectionHeadingProps) {
  return (
    <div
      className={`max-w-2xl ${centered ? "mx-auto text-center" : ""} ${className}`}
    >
      {eyebrow && (
        <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-green-700 dark:text-green-400">
          <span className="h-px w-6 bg-amber-500" aria-hidden />
          {eyebrow}
        </span>
      )}
      <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-slate-900 sm:text-4xl dark:text-white">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-400">
          {subtitle}
        </p>
      )}
    </div>
  );
}
