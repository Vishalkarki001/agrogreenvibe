// Offline fallback — jab user installed app kholta hai par internet nahi hai.
// Service worker is page ko pehle se cache kar leta hai.

import type { Metadata } from "next";
import { WifiOff, Phone } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "You're Offline",
  robots: { index: false, follow: false },
};

export default function OfflinePage() {
  const phoneHref = `tel:${COMPANY.phone.replace(/\s/g, "")}`;

  return (
    <section className="flex min-h-[70vh] items-center py-20">
      <Container className="text-center">
        <span className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-green-50 text-green-700 dark:bg-green-900/40 dark:text-green-300">
          <WifiOff className="h-10 w-10" />
        </span>
        <h1 className="mt-8 font-display text-3xl font-extrabold text-slate-900 sm:text-4xl dark:text-white">
          You&apos;re offline
        </h1>
        <p className="mx-auto mt-4 max-w-md leading-relaxed text-slate-600 dark:text-slate-400">
          Looks like there&apos;s no internet connection right now. Pages you
          visited earlier will still open — reconnect to see the rest.
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href="/" size="md">
            Go to Home
          </Button>
          <a
            href={phoneHref}
            className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-green-700 px-6 py-3 text-[0.95rem] font-semibold text-green-800 transition-colors hover:bg-green-50 dark:border-green-500 dark:text-green-300 dark:hover:bg-green-900/30"
          >
            <Phone className="h-4 w-4" />
            Call {COMPANY.phoneDisplay}
          </a>
        </div>
      </Container>
    </section>
  );
}
