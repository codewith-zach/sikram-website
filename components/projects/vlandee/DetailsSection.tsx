import Image from "next/image";

import { Button } from "@/components/ui/button";

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
                Vlandee Guest Houses
              </h1>
              <p className="font-display text-[16px] font-semibold text-black">
                Premium Living with Every Stay.
              </p>
              <div className="space-y-4 font-display text-[14px] leading-[1.7] text-[#585858] sm:text-[15px]">
                <p>
                Vlandee Guest Houses is Sikram Africa's hospitality development in Kpaja Johnsonville, Paynesville, 
                20 to 30 minutes from the CBD of Monrovia. Designed for discerning guests and residents who expect 
                nothing less than the finest, Vlandee combines the comfort of a luxury home with the amenities of a 
                world-class retreat. Whether you are visiting Liberia for business or pleasure, or simply looking 
                for a premium short-stay address that feels like living at its very best, Vlandee Guest Houses 
                delivers an experience unlike anything else in Liberia.
                </p>
              </div>
            </div>

            <Button
              type="button"
              className="h-11 w-fit rounded-[10px] bg-[#00A651] px-6 text-[12px] font-semibold uppercase tracking-[0.06em] text-white hover:bg-[#00A651]/90"
            >
              Enquire About Vlandee Guest Houses
            </Button>
          </div>

          <div className="relative min-h-[420px] overflow-hidden sm:min-h-[480px] lg:h-full">
            <Image
              src="/images/project_details/vlandee/house.png"
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
