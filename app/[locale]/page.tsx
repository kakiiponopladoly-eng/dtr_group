import { useTranslations } from "next-intl";
import Link from "next/link";
import { useLocale } from "next-intl";
import HeroSection from "@/components/sections/HeroSection";
import FoundationPreview from "@/components/sections/FoundationPreview";
import ServicesPreview from "@/components/sections/ServicesPreview";
import SectorsPreview from "@/components/sections/SectorsPreview";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FoundationPreview />
      <ServicesPreview />
      <SectorsPreview />
    </>
  );
}
