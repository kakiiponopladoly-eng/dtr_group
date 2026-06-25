import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["fr", "en"],
  defaultLocale: "fr",
  pathnames: {
    "/": "/",
    "/about": { fr: "/a-propos", en: "/about" },
    "/foundation": { fr: "/fondation", en: "/foundation" },
    "/services": "/services",
    "/sectors": { fr: "/secteurs", en: "/sectors" },
    "/contact": "/contact",
  },
});

export type Locale = (typeof routing.locales)[number];
