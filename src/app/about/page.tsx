import type { Metadata } from "next";
import { Target, Eye, Check } from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import SmartImage from "@/components/ui/SmartImage";
import Reveal from "@/components/ui/Reveal";
import StatsBar from "@/components/sections/StatsBar";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import CTASection from "@/components/sections/CTASection";
import { COMPANY } from "@/lib/constants";
import { VALUES } from "@/lib/data";
import { getServiceImages } from "@/lib/serviceImages";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Agro Greenvibe — a passionate team of landscapers and gardeners creating sustainable, beautiful green spaces across Uttarakhand.",
};

const storyPoints = [
  "Trained, licensed and insured professionals",
  "Sustainable, organic-first methods",
  "Projects of every scale — homes to townships",
  "Long-term maintenance & support",
];

export default function AboutPage() {
  const imgs = getServiceImages("landscaping");

  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Growing Greener Spaces Since 2018"
        subtitle="We are a team of landscapers, gardeners and dreamers on a mission to bring more green into everyday life — beautifully and responsibly."
        crumbs={[{ label: "About Us" }]}
      />

      {/* Story */}
      <section className="py-20 lg:py-24">
        <Container className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal className="relative">
            <SmartImage
              src={imgs[6] ?? imgs[0] ?? "/images/about/story.jpg"}
              alt="Agro Greenvibe team working on a landscape project"
              emoji="🌳"
              label="Company / team image"
              className="aspect-4/3 shadow-xl shadow-green-900/10"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute -bottom-6 -right-4 rounded-2xl bg-green-700 px-6 py-5 text-white shadow-lg">
              <p className="font-display text-3xl font-extrabold leading-none">
                18
              </p>
              <p className="mt-1 text-xs font-medium text-green-100">
                Spaces transformed
              </p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <SectionHeading
              eyebrow="Our Story"
              title="From a Small Nursery to a Trusted Green Partner"
            />
            <div className="mt-5 space-y-4 text-base leading-relaxed text-slate-600 dark:text-slate-400">
              <p>
                {COMPANY.shortName} began in {COMPANY.foundedYear} with a simple
                belief — that <strong className="font-semibold text-slate-800 dark:text-slate-200">everyone
                deserves a beautiful green space</strong>, no matter how big or small.
                What started as a small nursery has grown into a full-service
                landscaping and gardening company trusted across {COMPANY.city}.
              </p>
              <p>
                Today, our team designs and builds everything from cozy terrace
                gardens to sprawling community parks and tranquil water features.
                Through every project, our promise stays the same:{" "}
                <strong className="font-semibold text-green-700">
                  quality craftsmanship, sustainable practices, and care that lasts.
                </strong>
              </p>
            </div>

            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {storyPoints.map((point) => (
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
          </Reveal>
        </Container>
      </section>

      {/* Mission & Vision */}
      <section className="bg-green-50/60 py-20 lg:py-24 dark:bg-[#131d18]">
        <Container>
          <div className="grid gap-6 lg:grid-cols-2">
            <Reveal>
              <div className="flex h-full flex-col rounded-2xl border border-green-100 bg-white p-8 shadow-sm dark:border-[#26332c] dark:bg-[#1a241e]">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-700 text-white">
                  <Target className="h-7 w-7" />
                </span>
                <h3 className="mt-6 font-display text-2xl font-bold text-slate-900 dark:text-white">
                  Our Mission
                </h3>
                <p className="mt-3 leading-relaxed text-slate-600 dark:text-slate-400">
                  To create and care for green spaces that enrich lives and the
                  environment — combining expert design, sustainable methods and
                  honest service to make greenery accessible to every home and
                  community.
                </p>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="flex h-full flex-col rounded-2xl border border-amber-100 bg-white p-8 shadow-sm dark:border-[#26332c] dark:bg-[#1a241e]">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-500 text-white">
                  <Eye className="h-7 w-7" />
                </span>
                <h3 className="mt-6 font-display text-2xl font-bold text-slate-900 dark:text-white">
                  Our Vision
                </h3>
                <p className="mt-3 leading-relaxed text-slate-600 dark:text-slate-400">
                  To be the most trusted name in landscaping and green-space
                  development — leading the way toward greener cities where nature
                  and people thrive together, one project at a time.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Core values */}
          <Reveal className="mt-16">
            <SectionHeading
              centered
              eyebrow="What Drives Us"
              title="Our Core Values"
            />
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {VALUES.map((value, i) => {
              const Icon = value.icon;
              return (
                <Reveal key={value.title} delay={i * 100}>
                  <div className="flex h-full flex-col items-center rounded-2xl bg-white p-7 text-center shadow-sm ring-1 ring-slate-100 dark:bg-[#1a241e] dark:ring-[#26332c]">
                    <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-50 text-green-700 dark:bg-green-900/40 dark:text-green-300">
                      <Icon className="h-7 w-7" />
                    </span>
                    <h4 className="mt-5 font-display text-lg font-bold text-slate-900 dark:text-white">
                      {value.title}
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                      {value.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      <StatsBar />
      <WhyChooseUs />
      <CTASection />
    </>
  );
}
