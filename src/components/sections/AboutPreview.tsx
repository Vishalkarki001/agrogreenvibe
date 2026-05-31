// About preview — home page par ek short "company intro" section.
// Left par images (placeholder), right par text + checklist + CTA.

import { Check } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import SmartImage from "@/components/ui/SmartImage";
import Reveal from "@/components/ui/Reveal";
import { COMPANY } from "@/lib/constants";

const points = [
  "4 years of hands-on landscaping experience",
  "Eco-friendly, sustainable practices on every project",
  "Licensed experts and end-to-end project management",
  "Transparent pricing with no hidden costs",
];

interface AboutPreviewProps {
  image1?: string;
  image2?: string;
}

export default function AboutPreview({ image1, image2 }: AboutPreviewProps) {
  return (
    <section className="bg-green-50/60 py-20 lg:py-24 dark:bg-[#131d18]">
      <Container className="grid items-center gap-12 lg:grid-cols-2">
        {/* Images */}
        <Reveal direction="left" className="relative">
          <SmartImage
            src={image1 ?? "/services/landscaping/image (5).jpeg"}
            alt="Our landscaping team at work"
            emoji="👩‍🌾"
            label="Team / project image"
            className="aspect-4/3 shadow-xl shadow-green-900/10"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute -bottom-8 -right-4 hidden w-44 sm:block">
            <SmartImage
              src={image2 ?? "/services/landscaping/image (9).jpeg"}
              alt="A finished garden project"
              emoji="🌷"
              label="Project"
              className="aspect-square border-4 border-white shadow-xl"
              sizes="180px"
            />
          </div>
          {/* Experience badge */}
          <div className="absolute -left-4 -top-4 rounded-2xl bg-amber-500 px-5 py-4 text-white shadow-lg">
            <p className="font-display text-3xl font-extrabold leading-none">4</p>
            <p className="mt-1 text-xs font-medium">Years of Trust</p>
          </div>
        </Reveal>

        {/* Text */}
        <Reveal direction="right" delay={120}>
          <SectionHeading
            eyebrow="Who We Are"
            title="Your Trusted Partner for Greener Living"
            subtitle={`${COMPANY.shortName} is a team of passionate landscapers, gardeners and horticulturists dedicated to turning ordinary spaces into thriving green environments — beautifully and sustainably.`}
          />

          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {points.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300">
                  <Check className="h-4 w-4" strokeWidth={3} />
                </span>
                <span className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                  {point}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-9">
            <Button href="/about" size="lg">
              More About Us
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
