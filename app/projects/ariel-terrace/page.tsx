import { DetailsSection } from "@/components/projects/ariel/DetailsSection";
import { HeroSection } from "@/components/projects/ariel/HeroSection";
import { GallerySection } from "@/components/projects/ariel/GallerySection";
import { CallToActionSection } from "@/components/projects/CallToActionSection";
import { ScrollReveal } from "@/components/shared";

export default function ArielTerracePage() {
  return (
    <>
      <HeroSection />
      <ScrollReveal direction="up" delayMs={40}>
        <DetailsSection />
      </ScrollReveal>
      <ScrollReveal direction="up" delayMs={120}>
        <GallerySection/>
      </ScrollReveal>
      <ScrollReveal direction="up" delayMs={160}>
        <CallToActionSection />
      </ScrollReveal>
    </>
  );
}
