import Image from "next/image";

const amenities = [
  { icon: "/images/project_details/vlandee/material-symbols-light_bed-outline-rounded.svg", label: "5-bedroom luxury accommodation" },
  { icon: "/images/project_details/anaro/amenities/material-symbols-light_pool-sharp.svg", label: "Indoor pool and bar" },
  { icon: "/images/project_details/vlandee/guidance_massage.svg", label: "Outdoor pool, jacuzzi, and spa" },
  { icon: "/images/project_details/vlandee/material-symbols-light_meeting-room-outline-rounded.svg", label: "Open-plan living across two floors" },
  { icon: "/images/project_details/vlandee/circum_basketball.svg", label: "Basketball court and tennis court" },
  { icon: "/images/project_details/vlandee/guidance_gym.svg", label: "Gymnasium" },
  { icon: "/images/project_details/anaro/amenities/material-symbols-light_cinematic-blur-outline-sharp.svg", label: "Cinema room" },
  { icon: "/images/project_details/anaro/amenities/guidance_office.svg", label: "In-house office" },
  { icon: "/images/project_details/anaro/amenities/guidance_bar.svg", label: "Rooftop bar" },
] as const;

export function AmenitiesSection() {
  return (
    <section aria-label="Estate amenities" className="bg-white">
      <div className="mx-auto w-full max-w-[1400px] px-4 pb-16 pt-10 sm:px-8 sm:pb-20 sm:pt-12 md:px-12 md:pb-24 xl:px-[80px]">
        <div className="mb-6">
          <h2 className="font-display text-[28px] font-bold text-black">Estate Amenities</h2>
        </div>
        <div className="grid auto-rows-min gap-6 sm:gap-8 lg:gap-10 xl:gap-12 lg:grid-cols-7 md:grid-cols-4 sm:grid-cols-2">
          {amenities.map((item) => (
            <div key={item.label} className="flex flex-col items-center justify-between gap-3 text-center">
              <div className="h-16 w-16">
                <Image src={item.icon} alt="" width={64} height={64} className="h-full w-full object-contain" />
              </div>
              <p className="text-[12px] font-semibold uppercase leading-[1.4] tracking-[0.04em] text-[#1b1b1b]">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
