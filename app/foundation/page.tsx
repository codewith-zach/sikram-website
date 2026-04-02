import { HeroSection } from "@/components/foundation/HeroSection";
import { WhatWeDoSection } from "@/components/foundation/PhilosophySection";
import { AboutSection } from "@/components/foundation/AboutSection";
import { GallerySection } from "@/components/foundation/GallerySection";
import { ScrollReveal } from "@/components/shared";

export default function FoundationPage() {
  return (
    <>
      <HeroSection />
      <ScrollReveal direction="up">
        <AboutSection />
      </ScrollReveal>
      <ScrollReveal direction="left" delayMs={40}>
        <WhatWeDoSection />
      </ScrollReveal>
      <ScrollReveal direction="right" delayMs={60}>
        <GallerySection />
      </ScrollReveal>
    </>
  );
}
