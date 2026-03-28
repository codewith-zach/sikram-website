import { HomeCta } from "@/components/HomeCta";
import { HomeHero } from "@/components/HomeHero";
import { HomeFeatures } from "@/components/HomeFeatures";
import { HomeProjects } from "@/components/HomeProjects";
import { SikramDifference } from "@/components/SikramDifference";
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
      <SikramDifference />
      <HomeCta />
    </>
  );
}
