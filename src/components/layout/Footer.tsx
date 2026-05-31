// Site footer: dark green. Company info + logo, quick links, services list,
// contact details, working hours, social icons aur bottom copyright bar.

import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";
import { COMPANY, NAV_LINKS, SOCIAL_LINKS } from "@/lib/constants";
import { SERVICES } from "@/lib/services";
import {
  WhatsAppIcon,
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  YoutubeIcon,
} from "@/components/ui/SocialIcons";

const socials = [
  { icon: WhatsAppIcon, href: SOCIAL_LINKS.whatsapp, label: "WhatsApp" },
  { icon: FacebookIcon, href: SOCIAL_LINKS.facebook, label: "Facebook" },
  { icon: InstagramIcon, href: SOCIAL_LINKS.instagram, label: "Instagram" },
  { icon: LinkedinIcon, href: SOCIAL_LINKS.linkedin, label: "LinkedIn" },
  { icon: YoutubeIcon, href: SOCIAL_LINKS.youtube, label: "YouTube" },
];

export default function Footer() {
  const phoneHref = `tel:${COMPANY.phone.replace(/\s/g, "")}`;

  return (
    <footer className="bg-green-950 text-green-100/80 dark:bg-[#0b110e]">
      {/* Top accent line */}
      <div className="h-1 w-full bg-linear-to-r from-green-600 via-amber-500 to-green-600" />

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:pr-4">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/logo/logo.jpeg"
                alt={`${COMPANY.shortName} logo`}
                width={48}
                height={48}
                className="h-12 w-12 rounded-lg object-cover"
              />
              <span className="font-display text-xl font-extrabold text-white">
                Agro <span className="text-green-400">Greenvibe</span>
              </span>
            </Link>
            <p className="mt-5 text-sm leading-relaxed text-green-100/70">
              {COMPANY.description}
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-green-100 transition-all hover:-translate-y-0.5 hover:bg-amber-500 hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-display text-base font-bold uppercase tracking-wide text-white">
              Quick Links
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="inline-flex items-center gap-1.5 text-green-100/70 transition-colors hover:text-amber-400"
                  >
                    <ArrowUpRight className="h-3.5 w-3.5 text-green-500" />
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/feedback"
                  className="inline-flex items-center gap-1.5 text-green-100/70 transition-colors hover:text-amber-400"
                >
                  <ArrowUpRight className="h-3.5 w-3.5 text-green-500" />
                  Feedback
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display text-base font-bold uppercase tracking-wide text-white">
              Our Services
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="inline-flex items-center gap-1.5 text-green-100/70 transition-colors hover:text-amber-400"
                  >
                    <ArrowUpRight className="h-3.5 w-3.5 text-green-500" />
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-base font-bold uppercase tracking-wide text-white">
              Get In Touch
            </h3>
            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-amber-400" />
                <span className="text-green-100/70">{COMPANY.address}</span>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-amber-400" />
                <a
                  href={phoneHref}
                  className="text-green-100/70 transition-colors hover:text-amber-400"
                >
                  {COMPANY.phoneDisplay}
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-amber-400" />
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="text-green-100/70 transition-colors hover:text-amber-400"
                >
                  {COMPANY.email}
                </a>
              </li>
            </ul>

            <div className="mt-6 rounded-xl bg-white/5 p-4 text-xs leading-relaxed text-green-100/70">
              <p className="font-semibold text-white">Working Hours</p>
              <p className="mt-2">{COMPANY.hours.weekdays}</p>
              <p>{COMPANY.hours.saturday}</p>
              <p>{COMPANY.hours.sunday}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-6 text-xs text-green-100/60 sm:flex-row sm:px-6 lg:px-8">
          <p>
            © {new Date().getFullYear()} {COMPANY.name}. All rights reserved.
          </p>
          <p>
            Crafted with <span className="text-amber-400">♥</span> for greener
            spaces.
          </p>
        </div>
      </div>
    </footer>
  );
}
