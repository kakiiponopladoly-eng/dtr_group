import { getTranslations, setRequestLocale } from "next-intl/server";
import { TrendingUp, Scale, FileText, Users } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Services" };

const icons = [TrendingUp, Scale, FileText, Users];
const serviceKeys = ["financial", "legal", "business", "hr"] as const;

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "services" });

  return (
    <div>
      <section className="bg-navy-900 py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <p className="label-tag text-brand-500 mb-6">{t("title")}</p>
          <h1
            className="font-display font-black text-white leading-tight"
            style={{ fontSize: "clamp(2.2rem, 4.5vw, 3.5rem)" }}
          >
            {t("subtitle")}
          </h1>
        </div>
      </section>

      <section className="bg-white py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {serviceKeys.map((key, i) => {
            const Icon = icons[i];
            return (
              <div
                key={key}
                className="grid grid-cols-[3.5rem_auto_1fr] gap-8 py-10 border-b border-gray-100 group hover:bg-gray-50 -mx-4 px-4 transition-colors"
              >
                <span className="font-display font-black text-3xl text-gray-150 leading-none pt-1 group-hover:text-brand-200 transition-colors">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="w-12 h-12 border border-gray-100 flex items-center justify-center flex-shrink-0 group-hover:border-brand-200 group-hover:bg-brand-50 transition-colors">
                  <Icon className="w-5 h-5 text-gray-400 group-hover:text-brand-500 transition-colors" />
                </div>
                <div>
                  <h2 className="font-display font-bold text-navy-900 text-xl mb-2 group-hover:text-brand-600 transition-colors">
                    {t(`${key}.title`)}
                  </h2>
                  <p className="text-gray-500 text-sm leading-relaxed max-w-2xl">{t(`${key}.desc`)}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
