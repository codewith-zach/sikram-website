import { DetailsSection } from "@/components/projects/anaya/DetailsSection";
import { HeroSection } from "@/components/projects/anaya/HeroSection";
import { GallerySection } from "@/components/projects/anaya/GallerySection";
import { CallToActionSection } from "@/components/projects/CallToActionSection";
import { ScrollReveal } from "@/components/shared";

export default function AnayaTerracePage() {
  return (
    <>
      <HeroSection />
      <ScrollReveal direction="up" delayMs={40}>
        <DetailsSection />
        <GallerySection/>
        <CallToActionSection />
      </ScrollReveal>
    </>
  );
}
