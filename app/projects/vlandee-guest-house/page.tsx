import { DetailsSection } from "@/components/projects/vlandee/DetailsSection";
import { HeroSection } from "@/components/projects/vlandee/HeroSection";
import { AmenitiesSection } from "@/components/projects/vlandee/AmenitiesSection";
import { GallerySection } from "@/components/projects/vlandee/GallerySection";
import { CallToActionSection } from "@/components/projects/CallToActionSection";
import { ScrollReveal } from "@/components/shared";

export default function VlandeeHousesPage() {
  return (
    <>
      <HeroSection />
      <ScrollReveal direction="up" delayMs={40}>
        <DetailsSection />
        <AmenitiesSection />
        <GallerySection/>
        <CallToActionSection />
      </ScrollReveal>
    </>
  );
}
