import { getTranslations, setRequestLocale } from "next-intl/server";
import Link from "next/link";
import { Baby, UserCheck, Apple, Stethoscope, HandHeart } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Fondation / Foundation" };

export default async function FoundationPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "foundation" });

  const pillars = [
    { Icon: Apple,       label: locale === "fr" ? "Alimentation"  : "Food aid" },
    { Icon: Stethoscope, label: locale === "fr" ? "Soins médicaux" : "Medical care" },
    { Icon: HandHeart,   label: locale === "fr" ? "Accompagnement" : "Support" },
  ];

  return (
    <div>
      {/* Hero — warm amber */}
      <section className="bg-amber-700 py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <p className="label-tag text-amber-300 mb-6">{t("title")}</p>
          <h1
            className="font-display font-black text-white leading-tight mb-4"
            style={{ fontSize: "clamp(2.2rem, 4.5vw, 3.5rem)" }}
          >
            {t("subtitle")}
          </h1>
          <p className="text-amber-200/80 text-lg leading-relaxed max-w-2xl">
            {t("description")}
          </p>
        </div>
      </section>

      {/* 3 pillars */}
      <section className="bg-cream-50 py-16 px-6 lg:px-8 border-b border-cream-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 border border-cream-200">
            {pillars.map(({ Icon, label }, i) => (
              <div
                key={label}
                className={`flex items-center gap-4 p-8 bg-white ${i < 2 ? "border-b sm:border-b-0 sm:border-r border-cream-200" : ""}`}
              >
                <div className="w-10 h-10 border border-amber-200 flex items-center justify-center flex-shrink-0 bg-amber-50">
                  <Icon className="w-5 h-5 text-amber-600" />
                </div>
                <span className="font-display font-semibold text-navy-900">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Beneficiaries */}
      <section className="bg-white py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-gray-100">
            <div className="p-10 border-b md:border-b-0 md:border-r border-gray-100">
              <div className="w-10 h-10 border border-amber-200 bg-amber-50 flex items-center justify-center mb-6">
                <Baby className="w-5 h-5 text-amber-600" />
              </div>
              <h2 className="font-display font-bold text-navy-900 text-xl mb-3">{t("children_title")}</h2>
              <p className="text-gray-500 text-sm leading-relaxed">{t("children_desc")}</p>
            </div>
            <div className="p-10">
              <div className="w-10 h-10 border border-navy-100 bg-navy-50 flex items-center justify-center mb-6">
                <UserCheck className="w-5 h-5 text-navy-600" />
              </div>
              <h2 className="font-display font-bold text-navy-900 text-xl mb-3">{t("elderly_title")}</h2>
              <p className="text-gray-500 text-sm leading-relaxed">{t("elderly_desc")}</p>
            </div>
          </div>

          <div className="mt-10">
            <Link href={`/${locale}/contact`} className="btn-primary">
              {t("donate")}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
