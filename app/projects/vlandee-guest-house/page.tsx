import { DetailsSection } from "@/components/projects/vlandee/DetailsSection";
import { HeroSection } from "@/components/projects/vlandee/HeroSection";
import { AmenitiesSection } from "@/components/projects/vlandee/AmenitiesSection";
import { GallerySection } from "@/components/projects/vlandee/GallerySection";
import { CallToActionSection } from "@/components/projects/CallToActionSection";

export default function VlandeeHousesPage() {
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
