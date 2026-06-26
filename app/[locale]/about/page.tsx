import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "À propos / About" };

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "about" });

  const values = ["excellence", "integrity", "impact"] as const;

  return (
    <div>
      {/* Hero */}
      <section className="bg-navy-900 py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <p className="label-tag text-orange-500 mb-6">{t("title")}</p>
          <h1
            className="font-display font-black text-white leading-tight mb-6"
            style={{ fontSize: "clamp(2.2rem, 4.5vw, 3.5rem)" }}
          >
            {t("title")}
          </h1>
          <p className="text-navy-100/60 text-lg leading-relaxed max-w-2xl">
            {t("description")}
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <p className="label-tag text-orange-500 mb-12">{t("values_title")}</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-gray-100">
            {values.map((v, i) => (
              <div
                key={v}
                className={`p-10 ${i < values.length - 1 ? "border-b md:border-b-0 md:border-r border-gray-100" : ""}`}
              >
                <h3 className="font-display font-black text-navy-900 text-xl mb-3">
                  {t(`values.${v}.title`)}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {t(`values.${v}.desc`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
