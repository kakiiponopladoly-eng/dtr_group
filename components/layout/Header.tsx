"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navLinks = [
  { key: "home",       href: "" },
  { key: "about",      href: "/about" },
  { key: "foundation", href: "/foundation" },
  { key: "services",   href: "/services" },
  { key: "sectors",    href: "/sectors" },
  { key: "contact",    href: "/contact" },
] as const;

export default function Header() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const other = locale === "fr" ? "en" : "fr";

  const isActive = (href: string) => {
    const full = `/${locale}${href}`;
    if (href === "") return pathname === `/${locale}` || pathname === `/${locale}/`;
    return pathname.startsWith(full);
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-md border-b border-gray-100"
          : "bg-white/95 backdrop-blur-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-18" style={{ height: "4.5rem" }}>

          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center gap-3 flex-shrink-0">
            <Image
              src="/images/logo.jpg"
              alt="DTR GROUP"
              width={42}
              height={42}
              className="object-contain rounded-sm"
              priority
            />
            <div className="hidden sm:block">
              <div className="font-display font-bold text-navy-900 text-sm tracking-widest uppercase leading-tight">
                DTR GROUP
              </div>
              <div className="text-orange-500 text-[0.55rem] font-display font-semibold tracking-[0.25em] uppercase">
                Congo · Inde
              </div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map(({ key, href }) => {
              const active = isActive(href);
              return (
                <Link
                  key={key}
                  href={`/${locale}${href}`}
                  className={`relative px-4 py-2 text-sm font-display font-medium rounded-sm transition-colors duration-200 ${
                    active
                      ? "text-orange-500 bg-orange-50"
                      : "text-gray-600 hover:text-navy-900 hover:bg-gray-50"
                  }`}
                >
                  {t(key)}
                  {active && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-orange-500 rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right controls */}
          <div className="flex items-center gap-3">
            <Link
              href={`/${other}`}
              className="text-xs font-display font-bold tracking-widest uppercase text-gray-400
                         hover:text-orange-500 border border-gray-200 rounded px-2.5 py-1.5
                         hover:border-orange-300 transition-all duration-200"
            >
              {other}
            </Link>

            <Link
              href={`/${locale}/contact`}
              className="hidden md:inline-flex items-center px-5 py-2.5 bg-navy-900 text-white
                         text-xs font-display font-bold tracking-widest uppercase rounded-sm
                         hover:bg-orange-500 transition-colors duration-200"
            >
              {locale === "fr" ? "Nous contacter" : "Contact us"}
            </Link>

            <button
              onClick={() => setOpen(!open)}
              className="md:hidden p-2 text-gray-600 hover:text-navy-900"
              aria-label="Menu"
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-xl">
          {navLinks.map(({ key, href }) => {
            const active = isActive(href);
            return (
              <Link
                key={key}
                href={`/${locale}${href}`}
                onClick={() => setOpen(false)}
                className={`flex items-center px-6 py-4 text-sm font-display font-medium border-b border-gray-50 transition-colors ${
                  active
                    ? "text-orange-500 bg-orange-50 border-l-2 border-l-orange-500"
                    : "text-gray-700 hover:text-orange-500 hover:bg-orange-50"
                }`}
              >
                {t(key as keyof ReturnType<typeof t>)}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}
