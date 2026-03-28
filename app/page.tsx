import { HomeHero } from "@/components/HomeHero";
import { HomeFeatures } from "@/components/HomeFeatures";
import { HomeProjects } from "@/components/HomeProjects";
import { Sustainability } from "@/components/Sustainability";
import { WhoWeAre } from "@/components/WhoWeAre";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeFeatures />
      <WhoWeAre />
      <Sustainability />
      <HomeProjects />
    </>
  );
}
