import { DevelopmentsSection } from "@/components/projects/DevelopmentsSection";
import { FeaturedProjectsSection } from "@/components/projects/FeaturedProjectsSection";
import { HeroSection } from "@/components/projects/HeroSection";
import { HomeForEveryoneSection } from "@/components/projects/HomeForEveryoneSection";
import { InvestmentSection } from "@/components/projects/InvestmentSection";
import { SmartHousesSection } from "@/components/projects/SmartHousesSection";
import { StepsSection } from "@/components/projects/StepsSection";
import { CallToActionSection } from "@/components/projects/CallToActionSection";
import { ScrollReveal } from "@/components/shared";

export default function ProjectsPage() {
  return (
    <>
      <HeroSection />
      <ScrollReveal direction="up">
        <DevelopmentsSection />
      </ScrollReveal>
      <ScrollReveal direction="left" delayMs={40}>
        <FeaturedProjectsSection />
      </ScrollReveal>
      <ScrollReveal direction="right" delayMs={60}>
        <SmartHousesSection />
      </ScrollReveal>
      <ScrollReveal direction="up" delayMs={80}>
        <InvestmentSection />
      </ScrollReveal>
      <ScrollReveal direction="left" delayMs={100}>
        <HomeForEveryoneSection />
      </ScrollReveal>
      <ScrollReveal direction="up" delayMs={120}>
        <StepsSection />
      </ScrollReveal>
      <ScrollReveal direction="left" delayMs={140}>
        <CallToActionSection />
      </ScrollReveal>
    </>
  );
}
