import { getTranslations, setRequestLocale } from "next-intl/server";
import { Pill, Plane, Ship, Wheat, Factory, HardHat, Truck } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Secteurs / Sectors" };

const sectors = [
  { key: "pharmaceutical", Icon: Pill },
  { key: "aviation",       Icon: Plane },
  { key: "maritime",       Icon: Ship },
  { key: "agriculture",    Icon: Wheat },
  { key: "industry",       Icon: Factory },
  { key: "construction",   Icon: HardHat },
  { key: "transportation", Icon: Truck },
] as const;

export default async function SectorsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "sectors" });

  return (
    <div>
      <section className="bg-navy-900 py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <p className="label-tag text-orange-500 mb-6">{t("title")}</p>
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border border-gray-100">
            {sectors.map(({ key, Icon }, i) => (
              <div
                key={key}
                className={`p-10 group hover:bg-gray-50 transition-colors
                            ${i % 3 !== 2 ? "lg:border-r border-gray-100" : ""}
                            ${i % 2 !== 1 ? "sm:border-r lg:border-r-0 border-gray-100" : ""}
                            border-b border-gray-100`}
              >
                <div className="flex items-start justify-between mb-8">
                  <div className="w-10 h-10 border border-gray-200 flex items-center justify-center group-hover:border-orange-200 group-hover:bg-orange-50 transition-colors">
                    <Icon className="w-5 h-5 text-gray-400 group-hover:text-orange-500 transition-colors" />
                  </div>
                  <span className="font-display font-black text-gray-100 text-4xl group-hover:text-orange-100 transition-colors select-none">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h2 className="font-display font-bold text-navy-900 text-xl mb-2 group-hover:text-orange-600 transition-colors">
                  {t(`${key}.title`)}
                </h2>
                <p className="text-gray-500 text-sm leading-relaxed">{t(`${key}.desc`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
