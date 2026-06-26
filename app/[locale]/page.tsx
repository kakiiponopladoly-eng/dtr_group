import { setRequestLocale } from "next-intl/server";
import HeroSection from "@/components/sections/HeroSection";
import FoundationPreview from "@/components/sections/FoundationPreview";
import ServicesPreview from "@/components/sections/ServicesPreview";
import SectorsPreview from "@/components/sections/SectorsPreview";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <HeroSection />
      <FoundationPreview />
      <ServicesPreview />
      <SectorsPreview />
    </>
  );
}
