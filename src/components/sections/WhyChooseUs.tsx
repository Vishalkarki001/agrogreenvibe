// "Why choose us" — 6 feature cards ka grid with icons.

import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { FEATURES } from "@/lib/data";

export default function WhyChooseUs() {
  return (
    <section className="py-20 lg:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            centered
            eyebrow="Why Agro Greenvibe"
            title="Built on Trust, Grown with Care"
            subtitle="Here's what makes us the green-space partner of choice for homes, societies and businesses."
          />
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <Reveal key={feature.title} delay={(i % 3) * 100}>
                <div className="group flex h-full gap-5 rounded-2xl border border-slate-100 bg-white p-6 transition-all duration-300 hover:border-green-200 hover:shadow-lg hover:shadow-green-900/5">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-50 text-green-700 transition-colors duration-300 group-hover:bg-green-700 group-hover:text-white">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-bold text-slate-900">
                      {feature.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
