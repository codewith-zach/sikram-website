import Image from "next/image";

const amenities = [
  { icon: "/images/project_details/anaro/amenities/solar_golf-linear.svg", label: "Golfing facilities and sports complex with gym" },
  { icon: "/images/project_details/anaro/amenities/material-symbols-light_pool-sharp.svg", label: "Swimming pool, sauna, and spa" },
  { icon: "/images/project_details/anaro/amenities/material-symbols-light_cinematic-blur-outline-sharp.svg", label: "Entertainment centre and cinema" },
  { icon: "/images/project_details/anaro/amenities/uit_hospital.svg", label: "Medical centre" },
  { icon: "/images/project_details/anaro/amenities/lets-icons_shop-light.svg", label: "Supermarket and library" },
  { icon: "/images/project_details/anaro/amenities/guidance_office.svg", label: "Co-working spaces and business complexes" },
  { icon: "/images/project_details/anaro/amenities/ph_park-thin.svg", label: "Outdoor parks, BBQ and picnic areas, and pedestrian walks" },
  { icon: "/images/project_details/anaro/amenities/material-symbols-light_school-outline.svg", label: "School" },
  { icon: "/images/project_details/anaro/amenities/material-symbols-light_wifi-rounded.svg", label: "Fibre optic internet and intercom throughout" },
  { icon: "/images/project_details/anaro/amenities/material-symbols-light_solar-power-outline.svg", label: "Solar powered with metered central generator backup" },
  { icon: "/images/project_details/anaro/amenities/hugeicons_waste-restore.svg", label: "Biodigester waste management system" },
  { icon: "/images/project_details/anaro/amenities/hugeicons_cctv-camera.svg", label: "CCTV and security systems across the estate" },
  { icon: "/images/project_details/anaro/amenities/ph_taxi-thin.svg", label: "Airport pickup service" },
  { icon: "/images/project_details/anaro/amenities/guidance_bar.svg", label: "Salon, rooftop bar, and dedicated parking" },
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
