import { AmenitiesSection } from "@/components/projects/anaro/AmenitiesSection";
import { DetailsSection } from "@/components/projects/anaro/DetailsSection";
import { HeroSection } from "@/components/projects/anaro/HeroSection";
import { GallerySection } from "@/components/projects/anaya/GallerySection";
import { CallToActionSection } from "@/components/projects/CallToActionSection";

export default function AnaroEstatePage() {
  return (
    <>
      <HeroSection />
      <DetailsSection />
      <AmenitiesSection />
      <GallerySection/>
      <CallToActionSection />
    </>
  );
}
