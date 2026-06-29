import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import { Pill, Plane, Ship, Wheat, Factory, HardHat, Truck, ArrowRight } from "lucide-react";

const sectors = [
  { key: "pharmaceutical", Icon: Pill },
  { key: "aviation",       Icon: Plane },
  { key: "maritime",       Icon: Ship },
  { key: "agriculture",    Icon: Wheat },
  { key: "industry",       Icon: Factory },
  { key: "construction",   Icon: HardHat },
  { key: "transportation", Icon: Truck },
] as const;

export default function SectorsPreview() {
  const t = useTranslations("sectors");
  const locale = useLocale();

  return (
    <section className="bg-navy-900 py-24 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Header row */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
          <div>
            <p className="label-tag text-brand-500 mb-4">{t("title")}</p>
            <h2
              className="font-display font-black text-white leading-tight"
              style={{ fontSize: "clamp(1.9rem, 3.5vw, 2.75rem)" }}
            >
              {t("subtitle")}
            </h2>
          </div>
          <Link
            href={`/${locale}/sectors`}
            className="hidden sm:inline-flex items-center gap-2 text-sm font-display font-semibold
                       text-brand-400 hover:text-brand-300 transition-colors flex-shrink-0"
          >
            {locale === "fr" ? "Explorer" : "Explore"} <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Grid — cells with border-line structure (no floating cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border border-white/10">

          {sectors.map(({ key, Icon }, i) => (
            <div
              key={key}
              className={`p-8 border-white/10 group cursor-default
                          hover:bg-white/5 transition-colors duration-200
                          ${i % 3 !== 2 ? "lg:border-r" : ""}
                          ${i % 2 !== 1 ? "sm:border-r lg:border-r-0" : "sm:border-r-0"}
                          ${i < sectors.length - (sectors.length % 3 || 3) ? "border-b" : "border-b sm:border-b-0"}
                          border-b`}
            >
              {/* Top row: icon + sector number */}
              <div className="flex items-start justify-between mb-6">
                <div className="w-10 h-10 border border-white/10 flex items-center justify-center
                                group-hover:border-brand-500/40 group-hover:bg-brand-500/5 transition-colors">
                  <Icon className="w-5 h-5 text-brand-400" />
                </div>
                <span className="font-display font-black text-white/8 text-4xl leading-none select-none
                                 group-hover:text-brand-500/15 transition-colors">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              <h3 className="font-display font-bold text-white text-lg mb-2
                             group-hover:text-brand-400 transition-colors">
                {t(`${key}.title`)}
              </h3>
              <p className="text-white/40 text-sm leading-relaxed">{t(`${key}.desc`)}</p>
            </div>
          ))}

          {/* 6th cell — CTA */}
          <div className="p-8 flex flex-col justify-center items-start border-t border-white/10 sm:border-t-0 sm:border-l border-white/10">
            <p className="text-white/40 text-xs font-display uppercase tracking-widest mb-4">
              {locale === "fr" ? "Et plus encore" : "And more"}
            </p>
            <Link
              href={`/${locale}/sectors`}
              className="btn-primary text-sm"
            >
              {locale === "fr" ? "Tous les secteurs" : "All sectors"}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
