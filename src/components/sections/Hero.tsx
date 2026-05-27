// Home page ka hero — sabse pehla impression. Left par headline + CTAs,
// right par image (abhi placeholder). Page load par halki fade-up animation.

import { Star, Leaf, ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import SmartImage from "@/components/ui/SmartImage";
import { COMPANY } from "@/lib/constants";

interface HeroProps {
  imageSrc?: string;
}

export default function Hero({ imageSrc }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-green-50/80 to-white">
      {/* Background dotted pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "radial-gradient(#15803d 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
        aria-hidden
      />
      {/* Soft glow blobs */}
      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-green-200/40 blur-3xl" aria-hidden />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-amber-100/50 blur-3xl" aria-hidden />

      <Container className="relative grid items-center gap-12 py-16 lg:grid-cols-2 lg:py-24">
        {/* Left — text */}
        <div>
          <span
            className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-green-200 bg-white px-4 py-1.5 text-sm font-semibold text-green-700 shadow-sm"
            style={{ animationDelay: "0ms" }}
          >
            <Leaf className="h-4 w-4 text-amber-500" />
            {COMPANY.tagline}
          </span>

          <h1
            className="animate-fade-up mt-6 font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl"
            style={{ animationDelay: "80ms" }}
          >
            Creating{" "}
            <span className="relative whitespace-nowrap text-green-700">
              Beautiful
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 200 12"
                fill="none"
                aria-hidden
              >
                <path
                  d="M2 9C50 3 150 3 198 9"
                  stroke="#f59e0b"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </span>{" "}
            Green Spaces
          </h1>

          <p
            className="animate-fade-up mt-6 max-w-xl text-lg leading-relaxed text-slate-600"
            style={{ animationDelay: "160ms" }}
          >
            From <strong className="font-semibold text-slate-800">landscaping</strong> and{" "}
            <strong className="font-semibold text-slate-800">terrace gardens</strong> to{" "}
            <strong className="font-semibold text-slate-800">parks &amp; ponds</strong> — we design,
            build and maintain outdoor spaces that bring nature closer to you.
          </p>

          <div
            className="animate-fade-up mt-8 flex flex-wrap items-center gap-4"
            style={{ animationDelay: "240ms" }}
          >
            <Button href="/contact" size="lg">
              Get a Free Quote
              <ArrowRight className="h-5 w-5" />
            </Button>
            <Button href="/services" variant="outline" size="lg">
              Explore Services
            </Button>
          </div>

          {/* Trust row */}
          <div
            className="animate-fade-up mt-10 flex flex-wrap items-center gap-6"
            style={{ animationDelay: "320ms" }}
          >
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <p className="text-sm text-slate-600">
              <strong className="font-bold text-slate-900">950+</strong> happy clients across{" "}
              {COMPANY.city}
            </p>
          </div>
        </div>

        {/* Right — image */}
        <div className="animate-fade-up relative" style={{ animationDelay: "200ms" }}>
          <SmartImage
            src={imageSrc ?? "/services/landscaping/image (2).jpeg"}
            alt="Beautifully landscaped garden by Agro Greenvibe"
            emoji="🌿"
            label="Add your hero image here"
            className="aspect-4/5 shadow-2xl shadow-green-900/10 sm:aspect-square lg:aspect-4/5"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />

          {/* Floating card — top */}
          <div className="animate-float absolute -left-4 top-8 hidden rounded-2xl bg-white p-4 shadow-xl shadow-green-900/10 sm:block">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-100 text-2xl">
                🌳
              </span>
              <div>
                <p className="font-display text-xl font-extrabold text-slate-900">1,200+</p>
                <p className="text-xs text-slate-500">Projects done</p>
              </div>
            </div>
          </div>

          {/* Floating card — bottom */}
          <div
            className="animate-float absolute -right-4 bottom-8 hidden rounded-2xl bg-white p-4 shadow-xl shadow-green-900/10 sm:block"
            style={{ animationDelay: "1.5s" }}
          >
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-100 text-2xl">
                🌱
              </span>
              <div>
                <p className="font-display text-xl font-extrabold text-slate-900">100%</p>
                <p className="text-xs text-slate-500">Eco-friendly</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
