import { DevelopmentsSection } from "@/components/projects/DevelopmentsSection";
import { FeaturedProjectsSection } from "@/components/projects/FeaturedProjectsSection";
import { HeroSection } from "@/components/projects/HeroSection";
import { SmartHousesSection } from "@/components/projects/SmartHousesSection";

export default function ProjectsPage() {
  return (
    <>
      <HeroSection />
      <DevelopmentsSection />
      <FeaturedProjectsSection />
      <SmartHousesSection />
    </>
  );
}
