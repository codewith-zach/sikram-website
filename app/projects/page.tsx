import { DevelopmentsSection } from "@/components/projects/DevelopmentsSection";
import { FeaturedProjectsSection } from "@/components/projects/FeaturedProjectsSection";
import { HeroSection } from "@/components/projects/HeroSection";
import { HomeForEveryoneSection } from "@/components/projects/HomeForEveryoneSection";
import { InvestmentSection } from "@/components/projects/InvestmentSection";
import { SmartHousesSection } from "@/components/projects/SmartHousesSection";
import { StepsSection } from "@/components/projects/StepsSection";
import { CallToActionSection } from "@/components/projects/CallToActionSection";

export default function ProjectsPage() {
  return (
    <>
      <HeroSection />
      <DevelopmentsSection />
      <FeaturedProjectsSection />
      <SmartHousesSection />
      <InvestmentSection />
      <HomeForEveryoneSection />
      <StepsSection />
      <CallToActionSection />
    </>
  );
}
