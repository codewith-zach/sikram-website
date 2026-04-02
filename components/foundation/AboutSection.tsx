import Image from "next/image";

export function AboutSection() {
  return (
    <section aria-label="Who we are" className="bg-white">
      <div className="flex w-full flex-col gap-10 px-4 py-10 xl:mx-auto xl:max-w-[1440px] xl:grid xl:grid-cols-[710px_minmax(0,1fr)] xl:items-start xl:gap-0 xl:px-0">
        <div className="flex w-full flex-col gap-6 xl:order-2 xl:min-w-0  xl:pl-[80px] xl:pr-[80px] xl:gap-14">
          <div className="flex items-center gap-6">
            <span className="shrink-0 text-[16px] font-medium text-[#00A651] uppercase">
              ABOUT THE FOUNDATION
            </span>
            <div className="h-px flex-1 bg-[#00A651]/50" />
          </div>

          <div className="flex flex-col gap-6">
            <h2 className="font-display text-[24px] leading-[1.18] font-bold text-black xl:max-w-[580px] xl:text-[40px] xl:leading-[1.18]">
              <span>The Sikram Foundation</span>
            </h2>

            <div className="max-w-[572px] font-display text-[14px] leading-[22px] text-[#585858] xl:text-[16px] xl:leading-6">
              <p className="m-0">
              We have always believed that the art of living goes beyond the homes we build. 
              True community development means investing in the people who live in those communities:  
              their potential, their futures, and their ability to contribute to a stronger, more prosperous Africa.
              </p>
              <p className="mt-[22px] mb-0 xl:mt-6">
              The Sikram Foundation is the embodiment of that belief.
              </p>
              <p className="mt-[22px] mb-0 xl:mt-6">
              Established as an integral part of the Sikram Africa family, 
              the Foundation exists to empower youth through two core pillars: 
              education and job creation. A well-built home means little in a community 
              where young people lack access to learning and opportunity, and we are here to change that.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full xl:order-1 xl:w-[710px] xl:shrink-0">
          <div className="relative h-[536px] w-full overflow-hidden xl:hidden">
            <Image
              src="/images/foundation/sustainability.png"
              alt="Exterior of a modern apartment building with green balconies"
              fill
              className="object-cover object-left"
            />
          </div>

          <div className="relative hidden h-[750px] w-[710px] xl:block">
            <Image
              src="/images/foundation/sustainability.png"
              alt="Exterior of a modern apartment building with green balconies"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
