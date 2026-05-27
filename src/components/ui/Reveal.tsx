"use client";

// Smooth scroll-reveal animation. Jab element screen par aata hai to animate
// hota hai. IntersectionObserver use karta hai — lightweight, koi heavy lib nahi.
//  - `direction`: kis taraf se aaye (up/left/right/zoom)
//  - `delay`: stagger ke liye (cards ek-ek karke aate hain)
// prefers-reduced-motion respect karta hai (accessibility).

import { useEffect, useRef, useState, type ReactNode } from "react";

type Direction = "up" | "down" | "left" | "right" | "zoom";

interface RevealProps {
  children: ReactNode;
  direction?: Direction;
  delay?: number; // milliseconds
  className?: string;
  as?: "div" | "li" | "section";
}

export default function Reveal({
  children,
  direction = "up",
  delay = 0,
  className = "",
  as: Tag = "div",
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref as React.Ref<HTMLDivElement & HTMLLIElement>}
      className={`reveal reveal-${direction} ${visible ? "is-visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}
