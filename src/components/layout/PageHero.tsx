// Inner pages (About, Services, Contact) ka top banner — consistent design.
// Title, subtitle aur breadcrumb. Green gradient background with pattern.

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Container from "@/components/ui/Container";

interface Crumb {
  label: string;
  href?: string;
}

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  crumbs?: Crumb[];
}

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  crumbs = [],
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-green-800 dark:bg-[#0e1512]">
      {/* pattern + glow */}
      <div
        className="pointer-events-none absolute inset-0 opacity-10"
        style={{
          backgroundImage: "radial-gradient(#ffffff 1.2px, transparent 1.2px)",
          backgroundSize: "26px 26px",
        }}
        aria-hidden
      />
      <div className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-amber-500/20 blur-3xl" aria-hidden />
      <div className="pointer-events-none absolute -left-16 bottom-0 h-64 w-64 rounded-full bg-green-500/20 blur-3xl" aria-hidden />

      <Container className="relative py-16 text-center lg:py-20">
        {eyebrow && (
          <span className="animate-fade-up text-sm font-semibold uppercase tracking-wider text-amber-400">
            {eyebrow}
          </span>
        )}
        <h1 className="animate-fade-up mt-3 font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="animate-fade-up mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-green-100/90">
            {subtitle}
          </p>
        )}

        {/* Breadcrumb */}
        <nav
          className="animate-fade-up mt-6 flex items-center justify-center gap-1.5 text-sm text-green-100/80"
          aria-label="Breadcrumb"
        >
          <Link href="/" className="transition-colors hover:text-amber-300">
            Home
          </Link>
          {crumbs.map((c) => (
            <span key={c.label} className="flex items-center gap-1.5">
              <ChevronRight className="h-4 w-4 text-green-300/60" />
              {c.href ? (
                <Link href={c.href} className="transition-colors hover:text-amber-300">
                  {c.label}
                </Link>
              ) : (
                <span className="font-medium text-white">{c.label}</span>
              )}
            </span>
          ))}
        </nav>
      </Container>
    </section>
  );
}
