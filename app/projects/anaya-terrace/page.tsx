import { DetailsSection } from "@/components/projects/anaya/DetailsSection";
import { GallerySection } from "@/components/projects/anaya/GallerySection";
import { CallToActionSection } from "@/components/projects/CallToActionSection";
import { HeroSection } from "@/components/projects/anaya/HeroSection";
import { ScrollReveal } from "@/components/shared";

export default function AnayaTerracePage() {
  return (
    <>
      <HeroSection />
      <ScrollReveal direction="up" delayMs={40}>
        <DetailsSection />
      </ScrollReveal>
      <ScrollReveal direction="up" delayMs={120}>
        <GallerySection />
      </ScrollReveal>
      <ScrollReveal direction="up" delayMs={160}>
        <CallToActionSection />
      </ScrollReveal>
    </>
  );
}
