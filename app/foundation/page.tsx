import { HeroSection } from "@/components/foundation/HeroSection";
import { PhilosophySection } from "@/components/foundation/PhilosophySection";
import { SustainabilitySection } from "@/components/foundation/SustainabilitySection";
import { GallerySection } from "@/components/foundation/GallerySection";
import { ScrollReveal } from "@/components/shared";

export default function FoundationPage() {
  return (
    <>
      <HeroSection />
      <ScrollReveal direction="up">
        <PhilosophySection />
      </ScrollReveal>
      <ScrollReveal direction="left" delayMs={40}>
        <SustainabilitySection />
      </ScrollReveal>
      <ScrollReveal direction="right" delayMs={60}>
        <GallerySection />
      </ScrollReveal>
    </>
  );
}
