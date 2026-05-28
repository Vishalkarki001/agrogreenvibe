"use client";

// Dark / Light mode toggle. <html> par `.dark` class lagata/hatata hai aur
// choice localStorage me save karta hai (refresh par bhi yaad rehti hai).
// No-flash script (layout.tsx me) page load par theme pehle hi set kar deta hai.

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

interface ThemeToggleProps {
  className?: string;
}

export default function ThemeToggle({ className = "" }: ThemeToggleProps) {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
    setMounted(true);
  }, []);

  function toggle() {
    const el = document.documentElement;
    const next = !el.classList.contains("dark");

    // Smooth transition sirf toggle ke 300ms ke liye
    el.classList.add("theme-transition");
    el.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {
      /* localStorage blocked — koi baat nahi */
    }
    setIsDark(next);
    window.setTimeout(() => el.classList.remove("theme-transition"), 320);
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Light mode" : "Dark mode"}
      className={`flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-700 transition-colors hover:bg-slate-100 dark:border-[#26332c] dark:text-slate-200 dark:hover:bg-white/5 ${className}`}
    >
      {/* mounted hone tak icon na flash ho, isliye opacity guard */}
      <span className={mounted ? "" : "opacity-0"}>
        {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
      </span>
    </button>
  );
}
