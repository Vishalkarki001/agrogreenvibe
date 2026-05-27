import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import ServicesOverview from "@/components/sections/ServicesOverview";
import ProcessSteps from "@/components/sections/ProcessSteps";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Explore Agro Greenvibe's services — landscaping, gardening, terrace gardening, parks, ponds and more. Design, build and maintenance under one roof.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Complete Green-Space Solutions"
        subtitle="Whatever your outdoor space needs, we have the expertise to design, build and maintain it — beautifully and sustainably."
        crumbs={[{ label: "Services" }]}
      />

      {/* withCta false — yahan pehle se hi services page hai */}
      <ServicesOverview withCta={false} />

      <ProcessSteps />
      <CTASection />
    </>
  );
}
