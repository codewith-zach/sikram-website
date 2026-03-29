import { EcoBannerSection } from "@/components/about/EcoBannerSection";
import { HeroSection } from "@/components/about/HeroSection";
import { MissionVisionSection } from "@/components/about/MissionVisionSection";
import { PhilosophySection } from "@/components/about/PhilosophySection";

export default function AboutPage() {
  return (
    <>
      <HeroSection />
      <PhilosophySection />
      <MissionVisionSection />
      <EcoBannerSection />
    </>
  );
}
