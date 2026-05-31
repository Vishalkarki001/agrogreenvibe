"use client";

// SmartImage: agar di gayi `src` par asli image maujood hai to use dikhata hai
// (Next.js Image optimization ke saath). Agar image abhi nahi hai (404), to
// ek sundar green gradient placeholder dikhata hai jisme emoji/icon hota hai —
// taaki layout kabhi toota hua na lage.
//
// >> Jab aap asli images dein, bas unhe sahi path par rakh dein
//    (jaise public/images/services/landscaping/1.jpg) — placeholder apne aap
//    asli photo se replace ho jayega. Koi code change nahi.

import Image from "next/image";
import { useState } from "react";
import type { LucideIcon } from "lucide-react";

export type ObjectPosition = "center" | "top" | "bottom" | "left" | "right";

// Explicit static map taaki Tailwind purge break na ho.
const POSITION_CLASS: Record<ObjectPosition, string> = {
  center: "object-center",
  top: "object-top",
  bottom: "object-bottom",
  left: "object-left",
  right: "object-right",
};

interface SmartImageProps {
  src: string;
  alt: string;
  /** Aspect ratio classes, e.g. "aspect-[4/3]" ya "aspect-video". */
  className?: string;
  /** Placeholder mein dikhne wala emoji. */
  emoji?: string;
  /** Placeholder mein dikhne wala icon (emoji na ho to). */
  icon?: LucideIcon;
  /** Chhota label placeholder ke neeche. */
  label?: string;
  /** Border-radius classes (default rounded-2xl). Cards ke liye badal sakte hain. */
  rounded?: string;
  /** Image crop position — `top` se face/subject upar dikhega (default `center`). */
  objectPosition?: ObjectPosition;
  priority?: boolean;
  sizes?: string;
}

export default function SmartImage({
  src,
  alt,
  className = "aspect-4/3",
  emoji,
  icon: Icon,
  label,
  rounded = "rounded-2xl",
  objectPosition = "center",
  priority = false,
  sizes = "(max-width: 768px) 100vw, 33vw",
}: SmartImageProps) {
  const [failed, setFailed] = useState(false);

  return (
    <div
      className={`relative w-full overflow-hidden ${rounded} bg-green-50 dark:bg-[#131d18] ${className}`}
    >
      {!failed ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          onError={() => setFailed(true)}
          className={`object-cover ${POSITION_CLASS[objectPosition]} transition-transform duration-500 ease-out hover:scale-105`}
        />
      ) : (
        // ---- Fallback placeholder (jab tak asli image na ho) ----
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-linear-to-br from-green-100 via-emerald-50 to-amber-50 dark:from-[#1a241e] dark:via-[#1a241e] dark:to-[#0f1613]">
          {/* subtle dotted texture */}
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                "radial-gradient(circle, #15803d 1px, transparent 1px)",
              backgroundSize: "16px 16px",
            }}
            aria-hidden
          />
          <div className="relative flex flex-col items-center px-4 text-center">
            {emoji ? (
              <span className="text-4xl sm:text-5xl" aria-hidden>
                {emoji}
              </span>
            ) : Icon ? (
              <Icon className="h-10 w-10 text-green-600" aria-hidden />
            ) : null}
            <span className="mt-2 text-xs font-medium text-green-700/80">
              {label ?? alt}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
