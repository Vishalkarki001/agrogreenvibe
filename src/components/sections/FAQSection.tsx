// FAQ section — accordion + FAQPage structured data ek saath.
//
// Server component hai, isliye JSON-LD seedha HTML me render hota hai aur
// Google ko crawl ke waqt hi mil jaata hai. Accordion ka interactive hissa
// alag client component (FaqAccordion) me hai.

import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import FaqAccordion from "@/components/ui/FaqAccordion";
import JsonLd from "@/components/seo/JsonLd";
import { faqSchema } from "@/lib/schema";
import type { FaqItem } from "@/lib/faqs";
import { MessageCircleQuestion } from "lucide-react";

interface FAQSectionProps {
  faqs: FaqItem[];
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  /** Alternate background — adjacent sections se alag dikhne ke liye. */
  tinted?: boolean;
  /** Page par ek hi FAQPage schema hona chahiye — baaki ke liye false karein. */
  withSchema?: boolean;
  idPrefix?: string;
}

export default function FAQSection({
  faqs,
  eyebrow = "FAQs",
  title = "Frequently Asked Questions",
  subtitle = "Everything people usually ask us before starting a project. Can't find your question? Just give us a call.",
  tinted = false,
  withSchema = true,
  idPrefix = "faq",
}: FAQSectionProps) {
  if (faqs.length === 0) return null;

  return (
    <section
      id="faq"
      className={`py-20 lg:py-24 ${tinted ? "bg-green-50/50 dark:bg-[#131d18]" : ""}`}
    >
      {withSchema && <JsonLd data={faqSchema(faqs)} />}

      <Container>
        <Reveal>
          <SectionHeading centered eyebrow={eyebrow} title={title} subtitle={subtitle} />
        </Reveal>

        <Reveal delay={100} className="mx-auto mt-12 max-w-3xl">
          <FaqAccordion faqs={faqs} idPrefix={idPrefix} />

          {/* Still-have-questions card */}
          <div className="mt-8 flex flex-col items-center gap-4 rounded-2xl border border-green-100 bg-green-50/70 px-6 py-7 text-center dark:border-[#26332c] dark:bg-[#131d18] sm:flex-row sm:text-left">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-700 text-white">
              <MessageCircleQuestion className="h-6 w-6" />
            </span>
            <div className="flex-1">
              <p className="font-display font-bold text-slate-900 dark:text-white">
                Still have a question?
              </p>
              <p className="mt-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                Talk to our team — site visit and quotation are free.
              </p>
            </div>
            <Button href="/contact" size="md" className="shrink-0">
              Ask Us
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
