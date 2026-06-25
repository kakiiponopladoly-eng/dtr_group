import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

const nextConfig: NextConfig = {
  // output: "export" — à réactiver pour la génération statique finale
};

export default withNextIntl(nextConfig);
