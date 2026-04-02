import { HeroSection } from "@/components/foundation/HeroSection";
import { WhatWeDoSection } from "@/components/foundation/PhilosophySection";
import { AboutSection } from "@/components/foundation/AboutSection";
import { GallerySection } from "@/components/foundation/GallerySection";
import { PurposeSection } from "@/components/foundation/PurposeSection";
import { CallToActionSection } from "@/components/foundation/CallToActionSection";
import { QuoteSection } from "@/components/foundation/QuoteSection";
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
      <ScrollReveal direction="up" delayMs={60}>
        <PurposeSection />
      </ScrollReveal>
      <ScrollReveal direction="up" delayMs={60}>
        <CallToActionSection />
      </ScrollReveal>
      <ScrollReveal direction="up" delayMs={80}>
        <QuoteSection />
      </ScrollReveal>
    </>
  );
}
