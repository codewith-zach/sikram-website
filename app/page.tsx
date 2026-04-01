import {
  CallToActionSection,
  DifferenceSection,
  FeaturesSection,
  HeroSection,
  ProjectsSection,
  SustainabilitySection,
  WhoWeAreSection,
} from "@/components/home";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <WhoWeAreSection />
      <SustainabilitySection />
      <ProjectsSection />
      <DifferenceSection />
      <CallToActionSection />
    </>
  );
}
