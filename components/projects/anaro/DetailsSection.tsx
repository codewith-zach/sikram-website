import Image from "next/image";

import { Button } from "@/components/ui/button";

const highlights = [
  {
    icon: "/images/project_details/anaya/hugeicons_real-estate-02.svg",
    title: "4 Residential\nRow Houses",
  },
  {
    icon: "/images/project_details/anaya/mynaui_tree.svg",
    title: "Eco-Friendly Construction\nBuilt to Global Standards",
  },
  {
    icon: "/images/project_details/anaya/fluent_people-community-32-light.svg",
    title: "Quiet, Well-Planned\nCommunity Setting",
  },
  {
    icon: "/images/project_details/anaya/material-symbols-light_multiple-airports-outline.svg",
    title: "15 Minutes From Roberts\nInternational Airport, Upper Margibi",
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
                Anaro Estate
              </h1>
              <p className="font-display text-[16px] font-semibold text-black">
                Quiet Living, Thoughtfully Designed.
              </p>
              <div className="space-y-4 font-display text-[14px] leading-[1.7] text-[#585858] sm:text-[15px]">
                <p>
                  Anaro Estate is Sikram Africa's most ambitious development to date: 
                  a premier mixed-use golfing community set on 35 acres of land in Lower 
                  Margibi, Liberia, just five minutes from Roberts International Airport. 
                  Designed for achievers and urbane personalities who refuse to compromise 
                  on lifestyle, Anaro Estate is where luxury, functionality, and nature exist 
                  in perfect harmony.
                </p>
                <p>
                  This is an entire world, one where you can live in a beautifully designed home, 
                  work from a state-of-the-art co-working space, play a round of golf, and end 
                  the evening at the cinema, all without leaving the premises.
                </p>
                <p>
                  Homes at Anaro Estate range from studio apartments to six-bedroom luxury 
                  residences, each built to the highest standards of craftsmanship and 
                  set within lush, well-spaced green neighbourhoods.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="font-display text-[20px] font-bold text-black">
                Development Highlights
              </h2>
              <div className="grid gap-6 sm:grid-cols-2">
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
              Enquire About Anaro Estate
            </Button>
          </div>

          <div className="relative min-h-[420px] overflow-hidden sm:min-h-[480px] lg:h-full">
            <Image
              src="/images/project_details/anaya/room.png"
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
