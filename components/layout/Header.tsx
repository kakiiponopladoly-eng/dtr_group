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

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const other = locale === "fr" ? "en" : "fr";

  const isActive = (href: string) => {
    const full = `/${locale}${href}`;
    if (href === "") return pathname === `/${locale}` || pathname === `/${locale}/`;
    return pathname.startsWith(full);
  };

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white shadow-md border-b border-gray-100"
            : "bg-white/95 backdrop-blur-md"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between" style={{ height: "5.5rem" }}>

            {/* Logo — agrandi */}
            <Link href={`/${locale}`} className="flex items-center flex-shrink-0">
              <Image
                src="/images/logo.png"
                alt="DTR GROUP"
                width={180}
                height={64}
                className="object-contain mix-blend-multiply"
                priority
              />
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
                        ? "text-brand-500 bg-brand-50"
                        : "text-gray-600 hover:text-navy-900 hover:bg-gray-50"
                    }`}
                  >
                    {t(key)}
                    {active && (
                      <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-brand-500 rounded-full" />
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
                           hover:text-brand-500 border border-gray-200 rounded px-2.5 py-1.5
                           hover:border-brand-300 transition-all duration-200"
              >
                {other}
              </Link>

              <Link
                href={`/${locale}/contact`}
                className="hidden md:inline-flex items-center px-5 py-2.5 bg-navy-900 text-white
                           text-xs font-display font-bold tracking-widest uppercase rounded-sm
                           hover:bg-brand-500 transition-colors duration-200"
              >
                {locale === "fr" ? "Nous contacter" : "Contact us"}
              </Link>

              <button
                onClick={() => setOpen(true)}
                className="md:hidden p-2 text-gray-600 hover:text-navy-900"
                aria-label="Ouvrir le menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Overlay sombre */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-40 md:hidden bg-black/50 backdrop-blur-sm
                    transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Drawer latéral — slide de gauche vers droite */}
      <div
        className={`fixed top-0 left-0 z-50 h-full w-72 bg-white shadow-2xl md:hidden
                    transition-transform duration-300 ease-in-out ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* En-tête du drawer */}
        <div className="flex items-center justify-between px-5 border-b border-gray-100" style={{ height: "5.5rem" }}>
          <Image
            src="/images/logo.png"
            alt="DTR GROUP"
            width={150}
            height={54}
            className="object-contain mix-blend-multiply"
          />
          <button
            onClick={() => setOpen(false)}
            className="p-2 text-gray-400 hover:text-navy-900 transition-colors"
            aria-label="Fermer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Liens de navigation */}
        <nav className="py-2">
          {navLinks.map(({ key, href }) => {
            const active = isActive(href);
            return (
              <Link
                key={key}
                href={`/${locale}${href}`}
                onClick={() => setOpen(false)}
                className={`flex items-center px-6 py-4 text-sm font-display font-medium
                            border-b border-gray-50 transition-colors ${
                  active
                    ? "text-brand-500 bg-brand-50 border-l-4 border-l-brand-500 pl-5"
                    : "text-gray-700 hover:text-brand-500 hover:bg-brand-50"
                }`}
              >
                {t(key)}
              </Link>
            );
          })}
        </nav>

        {/* Pied du drawer */}
        <div className="absolute bottom-0 left-0 right-0 p-5 border-t border-gray-100">
          <Link
            href={`/${locale}/contact`}
            onClick={() => setOpen(false)}
            className="btn-primary w-full justify-center"
          >
            {locale === "fr" ? "Nous contacter" : "Contact us"}
          </Link>
        </div>
      </div>
    </>
  );
}
