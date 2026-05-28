// Stats strip — green band with 4 key numbers. Home page par hero ke neeche.

import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { STATS } from "@/lib/data";

export default function StatsBar() {
  return (
    <section className="bg-green-800 dark:bg-[#131d18]">
      <Container className="py-12">
        <dl className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {STATS.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <Reveal key={stat.label} delay={i * 80}>
                <div className="flex flex-col items-center text-center">
                  <Icon className="h-7 w-7 text-amber-400" aria-hidden />
                  <dd className="mt-3 font-display text-3xl font-extrabold text-white sm:text-4xl">
                    {stat.value}
                  </dd>
                  <dt className="mt-1 text-sm font-medium text-green-100/80">
                    {stat.label}
                  </dt>
                </div>
              </Reveal>
            );
          })}
        </dl>
      </Container>
    </section>
  );
}
