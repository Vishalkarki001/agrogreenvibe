"use client";

// Site header: logo + brand wordmark, desktop navigation (Services par dropdown),
// phone CTA aur mobile slide-down menu. Scroll par halki shadow aati hai.

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { COMPANY, NAV_LINKS } from "@/lib/constants";
import { SERVICES } from "@/lib/services";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false); // mobile menu
  const [servicesOpen, setServicesOpen] = useState(false); // desktop dropdown
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Route badalte hi sab menus band karo
  useEffect(() => {
    setOpen(false);
    setServicesOpen(false);
    setMobileServicesOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const phoneHref = `tel:${COMPANY.phone.replace(/\s/g, "")}`;

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-white transition-shadow duration-300 ${
        scrolled ? "shadow-md shadow-slate-900/5" : "border-b border-slate-100"
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo + wordmark */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo/logo.png"
            alt={`${COMPANY.shortName} logo`}
            width={48}
            height={48}
            priority
            className="h-11 w-11 rounded-lg object-cover"
          />
          <span className="flex flex-col leading-none">
            <span className="font-display text-lg font-extrabold tracking-tight text-slate-900">
              Agro <span className="text-green-700">Greenvibe</span>
            </span>
            <span className="mt-0.5 text-[0.65rem] font-medium uppercase tracking-[0.18em] text-amber-600">
              India Pvt. Ltd.
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) =>
            link.href === "/services" ? (
              // ---- Services dropdown ----
              <li
                key={link.href}
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button
                  onClick={() => setServicesOpen((v) => !v)}
                  className={`flex items-center gap-1 rounded-full px-4 py-2 text-[0.95rem] font-medium transition-colors ${
                    isActive(link.href)
                      ? "text-green-700"
                      : "text-slate-700 hover:text-green-700"
                  }`}
                  aria-expanded={servicesOpen}
                  aria-haspopup="true"
                >
                  {link.label}
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-200 ${
                      servicesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Dropdown panel */}
                <div
                  className={`absolute left-1/2 top-full z-50 w-72 -translate-x-1/2 pt-3 transition-all duration-200 ${
                    servicesOpen
                      ? "visible translate-y-0 opacity-100"
                      : "invisible translate-y-1 opacity-0"
                  }`}
                >
                  <div className="overflow-hidden rounded-2xl border border-slate-100 bg-white p-2 shadow-xl shadow-slate-900/10">
                    {SERVICES.map((s) => {
                      const Icon = s.icon;
                      return (
                        <Link
                          key={s.slug}
                          href={`/services/${s.slug}`}
                          className="flex items-center gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-green-50"
                        >
                          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-green-50 text-green-700">
                            <Icon className="h-5 w-5" />
                          </span>
                          <span className="text-sm font-medium text-slate-700">
                            {s.title}
                          </span>
                        </Link>
                      );
                    })}
                    <Link
                      href="/services"
                      className="mt-1 block rounded-xl bg-green-700 px-3 py-2.5 text-center text-sm font-semibold text-white transition-colors hover:bg-green-800"
                    >
                      View All Services
                    </Link>
                  </div>
                </div>
              </li>
            ) : (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`relative rounded-full px-4 py-2 text-[0.95rem] font-medium transition-colors ${
                    isActive(link.href)
                      ? "text-green-700"
                      : "text-slate-700 hover:text-green-700"
                  }`}
                >
                  {link.label}
                  {isActive(link.href) && (
                    <span className="absolute inset-x-4 -bottom-0.5 h-0.5 rounded-full bg-amber-500" />
                  )}
                </Link>
              </li>
            )
          )}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={phoneHref}
            className="flex items-center gap-2 text-sm font-semibold text-slate-700 transition-colors hover:text-green-700"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-green-50 text-green-700">
              <Phone className="h-4 w-4" />
            </span>
            {COMPANY.phoneDisplay}
          </a>
          <Link
            href="/contact"
            className="rounded-full bg-green-700 px-6 py-2.5 text-sm font-semibold text-white shadow-sm shadow-green-700/25 transition-all hover:-translate-y-0.5 hover:bg-green-800"
          >
            Get a Quote
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="flex h-11 w-11 items-center justify-center rounded-lg text-slate-700 transition-colors hover:bg-slate-100 lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden border-t border-slate-100 bg-white transition-[max-height] duration-300 ease-in-out lg:hidden ${
          open ? "max-h-[34rem]" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col gap-1 px-4 py-4">
          {NAV_LINKS.map((link) =>
            link.href === "/services" ? (
              <li key={link.href}>
                {/* Services + expandable list */}
                <button
                  onClick={() => setMobileServicesOpen((v) => !v)}
                  className="flex w-full items-center justify-between rounded-lg px-4 py-3 text-base font-medium text-slate-700 transition-colors hover:bg-slate-50"
                  aria-expanded={mobileServicesOpen}
                >
                  Services
                  <ChevronDown
                    className={`h-5 w-5 transition-transform duration-200 ${
                      mobileServicesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-[max-height] duration-300 ${
                    mobileServicesOpen ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <div className="ml-3 flex flex-col gap-0.5 border-l-2 border-green-100 pl-3 pt-1">
                    {SERVICES.map((s) => (
                      <Link
                        key={s.slug}
                        href={`/services/${s.slug}`}
                        className="rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-green-50 hover:text-green-700"
                      >
                        {s.title}
                      </Link>
                    ))}
                    <Link
                      href="/services"
                      className="rounded-lg px-3 py-2 text-sm font-semibold text-green-700 hover:bg-green-50"
                    >
                      View All Services →
                    </Link>
                  </div>
                </div>
              </li>
            ) : (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`block rounded-lg px-4 py-3 text-base font-medium transition-colors ${
                    isActive(link.href)
                      ? "bg-green-50 text-green-700"
                      : "text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            )
          )}
          <li className="mt-2 flex flex-col gap-3 px-1">
            <a
              href={phoneHref}
              className="flex items-center justify-center gap-2 rounded-full border-2 border-green-700 px-6 py-3 text-sm font-semibold text-green-800"
            >
              <Phone className="h-4 w-4" />
              {COMPANY.phoneDisplay}
            </a>
            <Link
              href="/contact"
              className="rounded-full bg-green-700 px-6 py-3 text-center text-sm font-semibold text-white"
            >
              Get a Quote
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
