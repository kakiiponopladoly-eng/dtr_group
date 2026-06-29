"use client";

import { useTranslations, useLocale } from "next-intl";
import { useState } from "react";
import { Send, MapPin, Mail, ArrowRight } from "lucide-react";

export default function ContactPage() {
  const t = useTranslations("contact");
  const locale = useLocale();
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <div>
      {/* Hero */}
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

      {/* Content */}
      <section className="bg-white py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-16 lg:gap-24">

            {/* Info */}
            <div className="space-y-8">
              <div>
                <p className="text-2xs font-display font-semibold tracking-[0.2em] uppercase text-gray-400 mb-3">
                  {locale === "fr" ? "Localisation" : "Location"}
                </p>
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-brand-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-600 font-body">Congo · Inde</span>
                </div>
              </div>
              <div>
                <p className="text-2xs font-display font-semibold tracking-[0.2em] uppercase text-gray-400 mb-3">
                  Email
                </p>
                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-brand-500 flex-shrink-0 mt-0.5" />
                  <a
                    href="mailto:contact@dtrgroup.com"
                    className="text-sm text-navy-700 hover:text-brand-500 transition-colors font-body"
                  >
                    contact@dtrgroup.com
                  </a>
                </div>
              </div>
            </div>

            {/* Form */}
            <div>
              {sent ? (
                <div className="border border-green-200 bg-green-50 p-10 flex items-center gap-6">
                  <div className="w-10 h-10 bg-green-100 flex items-center justify-center flex-shrink-0">
                    <Send className="w-5 h-5 text-green-600" />
                  </div>
                  <p className="font-display font-semibold text-green-800">{t("success")}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-display font-semibold uppercase tracking-widest text-gray-500 mb-2">
                        {t("name")}
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 border border-gray-200 font-body text-sm
                                   focus:outline-none focus:border-brand-400 focus:ring-1 focus:ring-brand-400
                                   transition-colors placeholder:text-gray-300"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-display font-semibold uppercase tracking-widest text-gray-500 mb-2">
                        {t("email")}
                      </label>
                      <input
                        type="email"
                        required
                        className="w-full px-4 py-3 border border-gray-200 font-body text-sm
                                   focus:outline-none focus:border-brand-400 focus:ring-1 focus:ring-brand-400
                                   transition-colors placeholder:text-gray-300"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-display font-semibold uppercase tracking-widest text-gray-500 mb-2">
                      {t("subject")}
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-gray-200 font-body text-sm
                                 focus:outline-none focus:border-brand-400 focus:ring-1 focus:ring-brand-400
                                 transition-colors placeholder:text-gray-300"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-display font-semibold uppercase tracking-widest text-gray-500 mb-2">
                      {t("message")}
                    </label>
                    <textarea
                      rows={6}
                      required
                      className="w-full px-4 py-3 border border-gray-200 font-body text-sm
                                 focus:outline-none focus:border-brand-400 focus:ring-1 focus:ring-brand-400
                                 transition-colors placeholder:text-gray-300 resize-none"
                    />
                  </div>

                  <button type="submit" className="btn-primary">
                    <Send className="w-4 h-4" />
                    {t("send")}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
