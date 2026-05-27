// Client testimonials — review cards grid with star ratings.

import { Star, Quote } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { TESTIMONIALS } from "@/lib/data";

export default function Testimonials() {
  return (
    <section className="py-20 lg:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            centered
            eyebrow="Client Love"
            title="What Our Clients Say"
            subtitle="Real words from the families, societies and businesses we've helped go green."
          />
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.id} delay={(i % 4) * 90}>
              <figure className="flex h-full flex-col rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-lg hover:shadow-green-900/5">
                <Quote className="h-8 w-8 text-green-200" aria-hidden />
                <div className="mt-3 flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star
                      key={idx}
                      className={`h-4 w-4 ${
                        idx < t.rating
                          ? "fill-amber-400 text-amber-400"
                          : "fill-slate-200 text-slate-200"
                      }`}
                    />
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-slate-700">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-5 flex items-center gap-3 border-t border-slate-100 pt-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-green-100 font-display text-lg font-bold text-green-700">
                    {t.name.charAt(0)}
                  </span>
                  <div>
                    <p className="font-semibold text-slate-900">{t.name}</p>
                    <p className="text-xs text-slate-500">
                      {t.role} • {t.location}
                    </p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
