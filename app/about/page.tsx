import { CallToActionSection } from "@/components/about/CallToActionSection";
import { CoreValuesSection } from "@/components/about/CoreValuesSection";
import { EcoBannerSection } from "@/components/about/EcoBannerSection";
import { HeroSection } from "@/components/about/HeroSection";
import { MissionVisionSection } from "@/components/about/MissionVisionSection";
import { PhilosophySection } from "@/components/about/PhilosophySection";
import { TeamSection } from "@/components/about/TeamSection";
import { ScrollReveal } from "@/components/shared";

export default function AboutPage() {
  return (
    <>
      <HeroSection />
      <ScrollReveal direction="up">
        <PhilosophySection />
      </ScrollReveal>
      <ScrollReveal direction="left" delayMs={40}>
        <MissionVisionSection />
      </ScrollReveal>
      <ScrollReveal direction="up" delayMs={60}>
        <EcoBannerSection />
      </ScrollReveal>
      <ScrollReveal direction="right" delayMs={80}>
        <CoreValuesSection />
      </ScrollReveal>
      <ScrollReveal direction="left" delayMs={100}>
        <TeamSection />
      </ScrollReveal>
      <ScrollReveal direction="up" delayMs={120}>
        <CallToActionSection />
      </ScrollReveal>
    </>
  );
}
