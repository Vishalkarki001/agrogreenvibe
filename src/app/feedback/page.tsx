import type { Metadata } from "next";
import { Sparkles, Heart, Lightbulb } from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import FeedbackForm from "@/components/sections/FeedbackForm";

export const metadata: Metadata = {
  title: "Feedback",
  description:
    "Share your feedback with Agro Greenvibe — we'd love to hear what you think about our work, our website, or anything else.",
};

const why = [
  {
    icon: Sparkles,
    title: "We Listen",
    text: "Every word from you helps us improve our services and experience.",
  },
  {
    icon: Heart,
    title: "You Matter",
    text: "Your honest thoughts shape how we serve every future client.",
  },
  {
    icon: Lightbulb,
    title: "Ideas Welcome",
    text: "Got a suggestion or an idea? We'd love to explore it with you.",
  },
];

export default function FeedbackPage() {
  return (
    <>
      <PageHero
        eyebrow="Your Voice"
        title="We'd Love Your Feedback"
        subtitle="Tell us how we did, what you loved, or what we can do better. Just a few lines from you go a long way."
        crumbs={[{ label: "Feedback" }]}
      />

      <section className="py-20 lg:py-24">
        <Container className="grid gap-10 lg:grid-cols-2">
          {/* Left — why feedback */}
          <Reveal>
            <h2 className="font-display text-2xl font-bold text-slate-900 dark:text-white">
              Help Us Grow 🌿
            </h2>
            <p className="mt-3 leading-relaxed text-slate-600 dark:text-slate-400">
              Whether it&apos;s about our website, a recent project, or just a
              friendly suggestion — we read every single message. Thank you for
              taking the time.
            </p>

            <div className="mt-8 space-y-4">
              {why.map((w) => {
                const Icon = w.icon;
                return (
                  <div
                    key={w.title}
                    className="flex h-full gap-4 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm transition-shadow hover:shadow-md dark:border-[#26332c] dark:bg-[#1a241e]"
                  >
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-50 text-green-700 dark:bg-green-900/40 dark:text-green-300">
                      <Icon className="h-6 w-6" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-slate-900 dark:text-white">
                        {w.title}
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                        {w.text}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </Reveal>

          {/* Right — form */}
          <Reveal delay={120}>
            <FeedbackForm />
          </Reveal>
        </Container>
      </section>
    </>
  );
}
