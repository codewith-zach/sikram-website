import Image from "next/image";

import { Button } from "@/components/ui/button";

const highlights = [
  {
    icon: "/images/project_details/anaya/hugeicons_real-estate-02.svg",
    title: "Architecturally distinctive\nluxury homes built to\nglobal standards",
  },
  {
    icon: "/images/project_details/anaro/amenities/material-symbols-light_pool-sharp.svg",
    title: "Swimming pool and premium\nrecreational amenities",
  },
  {
    icon: "/images/project_details/anaya/mynaui_tree.svg",
    title: "Eco-Friendly Construction\nwith green spaces woven\nthroughout",
  },
  {
    icon: "/images/project_details/ariel/material-symbols-light_space-dashboard-outline.svg",
    title: "Full drainage, sewage, and\nutility infrastructure\nincluded",
  },
  {
    icon: "/images/project_details/ariel/material-symbols-light_gate-outline-rounded.svg",
    title: "Gated community with 24-\nhour security and\ncontrolled access",
  },
  {
    icon: "/images/project_details/ariel/streamline-ultimate_engineer-project-superviser-1.svg",
    title: "Thoughtfully zoned with\nproper spacing for comfort\nand privacy",
  },
] as const;

export function DetailsSection() {
  return (
    <section aria-label="Anaya Terrace project details" className="bg-white">
      <div className="mx-auto w-full max-w-[1440px] px-4 pb-16 pt-10 sm:px-8 sm:pb-20 sm:pt-12 md:px-12 md:pb-24 xl:px-[80px]">
        <div className="grid items-stretch gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-12">
          <div className="flex flex-col gap-8">
            <div className="flex items-center gap-4">
              <span className="text-[12px] font-semibold uppercase tracking-[0.2em] text-[#00A651]">
                Project Details
              </span>
              <div className="h-px flex-1 bg-[#00A651]/35" />
            </div>

            <div className="space-y-3">
              <h1 className="font-display text-[34px] leading-[1.05] font-bold tracking-[-0.03em] text-black sm:text-[40px]">
                Ariel Terrace
              </h1>
              <p className="font-display text-[16px] font-semibold text-black">
                Your Step Into Luxury Living.
              </p>
              <div className="space-y-4 font-display text-[14px] leading-[1.7] text-[#585858] sm:text-[15px]">
                <p>
                Ariel Terrace is the most exciting new residential address 
                in Liberia: a masterfully designed, eco-friendly estate that 
                permanently redefines what it means to live well in Monrovia. 
                This is not just real estate, but a statement about the Liberia 
                we believe in: one that is healthy, beautiful, well-planned, and built to last.
                </p>
                <p>
                Situated in Kpaja Johnsonville, Paynesville, approximately 20 to 30 minutes from 
                the CBD of Monrovia, Ariel Terrace brings together architectural elegance, sustainable 
                construction, and a genuine sense of community that Liberia has never seen before.
                Every home on this estate has been designed with your comfort, your health, 
                and your family in mind.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="font-display text-[20px] font-bold text-black">
                Development Highlights
              </h2>
              <div className="grid gap-6 sm:grid-cols-3">
                {highlights.map((item) => (
                  <div key={item.title} className="space-y-3">
                    <div className="flex h-10 w-10 items-center justify-center">
                      <Image
                        src={item.icon}
                        alt=""
                        width={36}
                        height={36}
                        className="h-12 w-12"
                      />
                    </div>
                    <p className="whitespace-pre-line text-[12px] font-semibold uppercase leading-[1.4] tracking-[0.02em] text-[#2e2e2e]">
                      {item.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <Button
              type="button"
              className="h-11 w-fit rounded-[10px] bg-[#00A651] px-6 text-[12px] font-semibold uppercase tracking-[0.06em] text-white hover:bg-[#00A651]/90"
            >
              Enquire About Ariel Terrace
            </Button>
          </div>

          <div className="relative min-h-[420px] overflow-hidden sm:min-h-[480px] lg:h-full">
            <Image
              src="/images/project_details/ariel/car.png"
              alt="Interior view of Anaya Terrace bedroom"
              fill
              sizes="(min-width: 1280px) 480px, 100vw"
              className="h-full w-full object-cover object-center"
            />
            <div className="absolute inset-y-0 left-0 w-1.5 bg-[#00A651]" />
          </div>
        </div>
      </div>
    </section>
  );
}
