// Reusable button. `href` doge to ye Next.js <Link> banta hai, warna <button>.
// Sirf zaroori props rakhe hain — simple aur type-safe.

import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "outline" | "white";
type Size = "sm" | "md" | "lg";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-green-700 text-white hover:bg-green-800 shadow-sm shadow-green-700/25",
  secondary:
    "bg-amber-500 text-white hover:bg-amber-600 shadow-sm shadow-amber-500/25",
  outline:
    "border-2 border-green-700 text-green-800 hover:bg-green-50 dark:border-green-500 dark:text-green-300 dark:hover:bg-green-900/30",
  white: "bg-white text-green-800 hover:bg-green-50 shadow-sm",
};

const sizeClasses: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-[0.95rem]",
  lg: "px-8 py-4 text-base",
};

interface ButtonProps {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  /** Diya to <Link> banega, warna <button>. */
  href?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  target?: string;
  rel?: string;
  "aria-label"?: string;
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  href,
  type = "button",
  onClick,
  target,
  rel,
  "aria-label": ariaLabel,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2";
  const classes = `${base} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes} target={target} rel={rel} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} type={type} onClick={onClick} aria-label={ariaLabel}>
      {children}
    </button>
  );
}
