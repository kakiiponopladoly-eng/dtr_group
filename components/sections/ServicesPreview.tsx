import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import { TrendingUp, Scale, FileText, Users, ArrowRight } from "lucide-react";

const icons = [TrendingUp, Scale, FileText, Users];
const serviceKeys = ["financial", "legal", "business", "hr"] as const;

export default function ServicesPreview() {
  const t = useTranslations("services");
  const locale = useLocale();

  return (
    <section className="bg-white py-24 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Header row — left text + right label */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 items-end mb-16 pb-8 border-b border-gray-100">
          <div>
            <p className="label-tag text-orange-500 mb-4">{t("title")}</p>
            <h2
              className="font-display font-black text-navy-900 leading-tight"
              style={{ fontSize: "clamp(1.9rem, 3.5vw, 2.75rem)" }}
            >
              {t("subtitle")}
            </h2>
          </div>
          <Link
            href={`/${locale}/services`}
            className="hidden lg:inline-flex items-center gap-2 text-sm font-display font-semibold text-orange-500 hover:text-orange-600 transition-colors flex-shrink-0"
          >
            {locale === "fr" ? "Voir tout" : "View all"} <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Numbered rows — no cards, just structured list */}
        <div>
          {serviceKeys.map((key, i) => {
            const Icon = icons[i];
            return (
              <div
                key={key}
                className="grid grid-cols-[3rem_1fr_auto] gap-6 py-7 border-b border-gray-100
                           group hover:bg-gray-50 -mx-4 px-4 transition-colors duration-150 cursor-default"
              >
                {/* Number */}
                <span className="font-display font-black text-2xl text-gray-150 leading-none pt-0.5
                                 group-hover:text-orange-200 transition-colors">
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* Content */}
                <div>
                  <h3 className="font-display font-bold text-navy-900 text-lg mb-1
                                 group-hover:text-orange-600 transition-colors">
                    {t(`${key}.title`)}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{t(`${key}.desc`)}</p>
                </div>

                {/* Icon */}
                <div className="self-start pt-1">
                  <Icon className="w-5 h-5 text-gray-250 group-hover:text-orange-400 transition-colors" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile CTA */}
        <div className="mt-8 lg:hidden">
          <Link href={`/${locale}/services`} className="btn-primary text-sm">
            {locale === "fr" ? "Voir tous les services" : "View all services"} <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
