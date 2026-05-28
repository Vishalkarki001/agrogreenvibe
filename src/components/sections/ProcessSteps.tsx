// "How we work" — 4 simple steps, connected by a line on desktop.

import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { PROCESS_STEPS } from "@/lib/data";

export default function ProcessSteps() {
  return (
    <section className="bg-green-50/60 py-20 lg:py-24 dark:bg-[#131d18]">
      <Container>
        <Reveal>
          <SectionHeading
            centered
            eyebrow="How We Work"
            title="From First Sketch to Final Bloom"
            subtitle="A simple, transparent process that keeps you in the loop at every step."
          />
        </Reveal>

        <div className="relative mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* connecting line (desktop) */}
          <div
            className="absolute left-0 right-0 top-8 hidden h-0.5 bg-green-200 lg:block dark:bg-[#26332c]"
            aria-hidden
          />

          {PROCESS_STEPS.map((step, i) => {
            const Icon = step.icon;
            return (
              <Reveal key={step.step} delay={i * 120}>
                <div className="relative flex flex-col items-center text-center">
                  <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-md shadow-green-900/5 ring-1 ring-green-100 dark:bg-[#1a241e] dark:ring-[#26332c]">
                    <Icon className="h-7 w-7 text-green-700 dark:text-green-300" aria-hidden />
                    <span className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-amber-500 text-xs font-bold text-white">
                      {step.step}
                    </span>
                  </div>
                  <h3 className="mt-5 font-display text-lg font-bold text-slate-900 dark:text-white">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
