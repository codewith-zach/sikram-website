import Image from "next/image";

export function WhatWeDoSection() {
  return (
    <section aria-label="What we do" className="bg-white">
      <div className="flex w-full flex-col gap-10 px-4 py-10 xl:mx-auto xl:max-w-[1440px] xl:grid xl:grid-cols-[710px_minmax(0,1fr)] xl:items-start xl:gap-0 xl:px-0">
        <div className="flex w-full flex-col gap-6 xl:order-1 xl:min-w-0 xl:pl-[80px] xl:pr-[80px] xl:gap-14">
          <div className="flex items-center gap-6">
            <span className="shrink-0 text-[16px] font-medium text-[#00A651] uppercase">
              WHAT WE DO
            </span>
            <div className="h-px flex-1 bg-[#00A651]/50" />
          </div>

          <div className="flex flex-col gap-6">
            <h2 className="font-display text-[24px] leading-[1.18] font-bold text-black xl:max-w-[580px] xl:text-[40px] xl:leading-[1.18]">
              <span>Empowering Through</span>
              <br />
              <span>Education & Opportunity</span>
            </h2>

            <div className="max-w-[572px] font-display text-[14px] leading-[22px] text-[#585858] xl:text-[16px] xl:leading-6">
              <p className="m-0 font-bold">Education</p>
              <p className=" mb-0">
              We believe that access to quality education is the single most powerful tool for transforming a young person&apos;s life, and, by extension, an entire community. The Sikram Foundation supports educational initiatives that give youth the knowledge, skills, and confidence to build futures they are proud of.
              </p>
              <p className="mt-[22px] mb-0 xl:mt-6 font-bold">Job Creation</p>
              <p className="mb-0">
              The Sikram Foundation is committed to creating meaningful employment opportunities for young people, whether through direct employment across our development sites, skills training programmes, or partnerships with local businesses and organisations.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full xl:order-2 xl:w-[710px] xl:shrink-0">
          <div className="relative h-[536px] w-full overflow-hidden xl:hidden">
            <Image
              src="/images/foundation/handshake.png"
              alt="Exterior of a modern apartment building with green balconies"
              fill
              className="object-cover object-left"
            />
          </div>

          <div className="relative hidden h-[750px] w-[710px] xl:block">
            <Image
              src="/images/foundation/handshake.png"
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
