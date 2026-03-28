import {
  CallToActionSection,
  DifferenceSection,
  FeaturesSection,
  HeroSection,
  ProjectsSection,
  SustainabilitySection,
  WhoWeAreSection,
} from "@/components/home";
import { ScrollReveal } from "@/components/shared";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ScrollReveal direction="up">
        <FeaturesSection />
      </ScrollReveal>
      <ScrollReveal direction="left" delayMs={40}>
        <WhoWeAreSection />
      </ScrollReveal>
      <ScrollReveal direction="right" delayMs={60}>
        <SustainabilitySection />
      </ScrollReveal>
      <ScrollReveal direction="up" delayMs={80}>
        <ProjectsSection />
      </ScrollReveal>
      <ScrollReveal direction="left" delayMs={100}>
        <DifferenceSection />
      </ScrollReveal>
      <ScrollReveal direction="up" delayMs={120}>
        <CallToActionSection />
      </ScrollReveal>
    </>
  );
}
