import { AmenitiesSection } from "@/components/projects/anaro/AmenitiesSection";
import { DetailsSection } from "@/components/projects/anaro/DetailsSection";
import { HeroSection } from "@/components/projects/anaro/HeroSection";
import { GallerySection } from "@/components/projects/anaya/GallerySection";
import { CallToActionSection } from "@/components/projects/CallToActionSection";
import { ScrollReveal } from "@/components/shared";

export default function AnaroEstatePage() {
  return (
    <>
      <HeroSection />
      <ScrollReveal direction="up" delayMs={40}>
        <DetailsSection />
      </ScrollReveal>
      <ScrollReveal direction="up" delayMs={120}>
        <AmenitiesSection />
      </ScrollReveal>
      <ScrollReveal direction="up" delayMs={160}>
        <GallerySection/>
      </ScrollReveal>
      <ScrollReveal direction="up" delayMs={200}>
        <CallToActionSection />
      </ScrollReveal>
    </>
  );
}
