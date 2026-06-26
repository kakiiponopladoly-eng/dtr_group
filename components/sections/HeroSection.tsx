import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Heart } from "lucide-react";

export default function HeroSection() {
  const t = useTranslations("hero");
  const locale = useLocale();

  return (
    <section className="relative bg-navy-900 overflow-hidden">

      {/* Main content */}
      <div className="relative max-w-7xl mx-auto w-full px-6 lg:px-10 pt-24 pb-16 lg:pt-36 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-12 lg:gap-24 items-center">

          {/* LEFT — Text */}
          <div>
            <p className="label-tag text-orange-500 mb-7">
              DTR GROUP
            </p>

            <h1
              className="font-display font-black text-white leading-none tracking-tight mb-7 text-balance"
              style={{ fontSize: "clamp(2.8rem, 5.5vw, 5.2rem)" }}
            >
              <span className="block">UN GROUPE.</span>
              <span className="block text-orange-500">UNE FONDATION.</span>
              <span className="block">DES SOLUTIONS.</span>
            </h1>

            <p className="text-navy-100/60 text-lg leading-relaxed max-w-lg mb-10">
              {t("subtitle")}
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href={`/${locale}/services`} className="btn-primary">
                {t("cta_primary")} <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href={`/${locale}/foundation`}
                className="btn-ghost text-white border-white/20 hover:border-orange-400 hover:text-orange-400"
              >
                <Heart className="w-4 h-4 text-orange-400" />
                {t("cta_secondary")}
              </Link>
            </div>

            <p className="mt-12 text-xs font-display font-bold tracking-[0.3em] uppercase text-orange-500/50">
              Votre énergie, notre engagement
            </p>
          </div>

          {/* RIGHT — Logo */}
          <div className="hidden lg:flex justify-end items-center">
            <div className="relative">
              <div className="absolute -inset-8 bg-orange-500/10 rounded-full blur-3xl" />
              <div className="relative bg-white rounded-2xl p-6 shadow-2xl shadow-black/50">
                <Image
                  src="/images/logo.jpg"
                  alt="DTR GROUP"
                  width={320}
                  height={320}
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats strip */}
      <div className="border-t border-white/10 bg-navy-950/70">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-7">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { num: "7", label: locale === "fr" ? "Secteurs d'activité" : "Business sectors" },
              { num: "4", label: locale === "fr" ? "Services de conseil" : "Advisory services" },
              { num: "2", label: locale === "fr" ? "Pays · Congo & Inde" : "Countries · Congo & India" },
              { num: "2", label: locale === "fr" ? "Publics soutenus" : "Communities served" },
            ].map(({ num, label }) => (
              <div key={label} className="flex items-start gap-3">
                <span className="font-display font-black text-orange-500 text-3xl leading-none">
                  {num}+
                </span>
                <span className="text-navy-100/40 text-xs leading-snug pt-1 font-body">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
