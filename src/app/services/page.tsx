import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import ServicesOverview from "@/components/sections/ServicesOverview";
import ProcessSteps from "@/components/sections/ProcessSteps";
import CTASection from "@/components/sections/CTASection";
import FAQSection from "@/components/sections/FAQSection";
import JsonLd from "@/components/seo/JsonLd";
import { GENERAL_FAQS } from "@/lib/faqs";
import { buildKeywords } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Landscaping & Gardening Services in Rudrapur, Haldwani & Uttarakhand",
  description:
    "Explore Agro Greenvibe's services — landscaping, terrace gardening, park development, natural ponds, kitchen gardens, eco cottages and year-round garden maintenance. Design, build and upkeep under one roof across Rudrapur, Haldwani and Uttarakhand.",
  keywords: buildKeywords(),
  alternates: { canonical: "/services" },
  openGraph: {
    url: "/services",
    title: "Landscaping & Gardening Services in Rudrapur, Haldwani & Uttarakhand",
    description:
      "Landscaping, terrace gardens, parks, ponds, kitchen gardens and maintenance — design, build and upkeep under one roof.",
  },
};

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ])}
      />

      <PageHero
        eyebrow="Our Services"
        title="Complete Green-Space Solutions"
        subtitle="Whatever your outdoor space needs, we have the expertise to design, build and maintain it — beautifully and sustainably."
        crumbs={[{ label: "Services" }]}
      />

      {/* withCta false — yahan pehle se hi services page hai */}
      <ServicesOverview withCta={false} />

      <ProcessSteps />
      <FAQSection faqs={GENERAL_FAQS} tinted idPrefix="faq-services" />
      <CTASection />
    </>
  );
}
