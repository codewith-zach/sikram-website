import { CallToActionSection } from "@/components/about/CallToActionSection";
import { CoreValuesSection } from "@/components/about/CoreValuesSection";
import { EcoBannerSection } from "@/components/about/EcoBannerSection";
import { HeroSection } from "@/components/about/HeroSection";
import { MissionVisionSection } from "@/components/about/MissionVisionSection";
import { PhilosophySection } from "@/components/about/PhilosophySection";
import { TeamSection } from "@/components/about/TeamSection";

export default function AboutPage() {
  return (
    <>
      <HeroSection />
      <PhilosophySection />
      <MissionVisionSection />
      <EcoBannerSection />
      <CoreValuesSection />
      <TeamSection />
      <CallToActionSection />
    </>
  );
}
