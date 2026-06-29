import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import { Baby, UserCheck, ArrowRight } from "lucide-react";

export default function FoundationPreview() {
  const t = useTranslations("foundation");
  const locale = useLocale();

  const pillars = locale === "fr"
    ? ["Alimentation", "Soins médicaux", "Accompagnement"]
    : ["Food aid", "Medical care", "Daily support"];

  return (
    <section className="bg-cream-50 py-24 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-16 lg:gap-24 items-start">

          {/* LEFT — Statement */}
          <div>
            <p className="label-tag text-green-600 mb-6">{t("title")}</p>

            <h2
              className="font-display font-black text-navy-900 leading-tight mb-6 text-balance"
              style={{ fontSize: "clamp(1.9rem, 3.5vw, 2.75rem)" }}
            >
              {t("subtitle")}
            </h2>

            <p className="text-gray-600 text-base leading-relaxed mb-8">
              {t("description")}
            </p>

            {/* Pillars — inline dots */}
            <div className="flex flex-wrap gap-x-6 gap-y-2 mb-10">
              {pillars.map((p) => (
                <span key={p} className="flex items-center gap-2 text-sm font-body text-gray-500">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0" />
                  {p}
                </span>
              ))}
            </div>

            <Link
              href={`/${locale}/foundation`}
              className="group inline-flex items-center gap-2 text-green-700 font-display font-semibold text-sm hover:text-green-800 transition-colors"
            >
              {t("donate")}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </div>

          {/* RIGHT — Two sharp-edged beneficiary blocks */}
          <div className="space-y-0 border border-cream-200">

            <div className="flex gap-6 p-8 bg-white border-b border-cream-200 group hover:border-green-200 transition-colors">
              <div className="w-10 h-10 rounded-none bg-green-50 border border-green-200 flex items-center justify-center flex-shrink-0">
                <Baby className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <h3 className="font-display font-bold text-navy-900 text-base mb-2">
                  {t("children_title")}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{t("children_desc")}</p>
              </div>
            </div>

            <div className="flex gap-6 p-8 bg-white group hover:border-navy-100 transition-colors">
              <div className="w-10 h-10 rounded-none bg-navy-50 border border-navy-100 flex items-center justify-center flex-shrink-0">
                <UserCheck className="w-5 h-5 text-navy-600" />
              </div>
              <div>
                <h3 className="font-display font-bold text-navy-900 text-base mb-2">
                  {t("elderly_title")}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{t("elderly_desc")}</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
