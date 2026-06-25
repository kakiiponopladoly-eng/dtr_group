import Link from "next/link";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";

export default function Footer() {
  const t   = useTranslations("footer");
  const tNav = useTranslations("nav");
  const locale = useLocale();
  const year = new Date().getFullYear();

  const cols = [
    {
      heading: locale === "fr" ? "Organisation" : "Organisation",
      links: [
        { label: tNav("about"),      href: "/about" },
        { label: tNav("foundation"), href: "/foundation" },
      ],
    },
    {
      heading: locale === "fr" ? "Solutions" : "Solutions",
      links: [
        { label: tNav("services"), href: "/services" },
        { label: tNav("sectors"),  href: "/sectors" },
      ],
    },
    {
      heading: locale === "fr" ? "Contact" : "Contact",
      links: [
        { label: tNav("contact"), href: "/contact" },
        { label: "contact@dtrgroup.com", href: "mailto:contact@dtrgroup.com" },
      ],
    },
  ];

  return (
    <footer className="bg-navy-950 text-white">

      {/* Top strip — orange */}
      <div className="bg-orange-500 px-6 lg:px-8 py-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
          <p className="font-display font-semibold text-sm tracking-wide">
            {locale === "fr" ? "Votre énergie, notre engagement." : "Your energy, our commitment."}
          </p>
          <div className="flex gap-4 text-xs font-display font-semibold tracking-widest uppercase">
            <span>Puissance</span>
            <span className="opacity-40">·</span>
            <span>Fiabilité</span>
            <span className="opacity-40">·</span>
            <span>Performance</span>
          </div>
        </div>
      </div>

      {/* Main footer grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-16">

          {/* Brand column */}
          <div>
            <Link href={`/${locale}`} className="inline-flex items-center gap-3 mb-5">
              <div className="bg-white rounded-md p-1">
                <Image
                  src="/images/logo.jpg"
                  alt="DTR GROUP"
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
              <div>
                <div className="font-display font-bold text-base">DTR GROUP</div>
                <div className="text-2xs text-orange-400 font-display font-semibold tracking-widest uppercase mt-0.5">
                  Congo · Inde
                </div>
              </div>
            </Link>
            <p className="text-navy-100/40 text-sm leading-relaxed max-w-xs">
              {t("tagline")}
            </p>
          </div>

          {/* Nav columns */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
            {cols.map(({ heading, links }) => (
              <div key={heading}>
                <h4 className="text-2xs font-display font-semibold tracking-[0.2em] uppercase text-orange-500 mb-5">
                  {heading}
                </h4>
                <ul className="space-y-3">
                  {links.map(({ label, href }) => (
                    <li key={href}>
                      <Link
                        href={href.startsWith("mailto") ? href : `/${locale}${href}`}
                        className="text-sm text-navy-100/50 hover:text-white transition-colors font-body"
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-6 border-t border-white/8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-xs text-navy-100/25 font-body">
            © {year} DTR GROUP — {t("rights")}
          </p>
          <div className="flex gap-4">
            {(["fr", "en"] as const).map((loc) => (
              <Link
                key={loc}
                href={`/${loc}`}
                className={`text-xs font-display font-semibold uppercase tracking-widest transition-colors ${
                  loc === locale ? "text-orange-500" : "text-navy-100/30 hover:text-white"
                }`}
              >
                {loc}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
