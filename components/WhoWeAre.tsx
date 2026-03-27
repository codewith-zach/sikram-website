import Image from "next/image";

function DiscoverLink() {
  return (
    <button
      type="button"
      className="inline-flex items-center gap-[10px] text-[16px] font-medium text-[#00a651] uppercase"
    >
      <span>DISCOVER SKIRAM AFRICA</span>
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M5 12h14" />
        <path d="m12 5 7 7-7 7" />
      </svg>
    </button>
  );
}

export function WhoWeAre() {
  return (
    <section aria-label="Who we are" className="bg-white">
      <div className="flex w-full flex-col gap-10 px-4 py-10 xl:mx-auto xl:max-w-[1720px] xl:grid xl:grid-cols-[710px_minmax(0,1fr)] xl:items-start xl:gap-0 xl:px-0">
        <div className="flex w-full flex-col gap-6 xl:order-2 xl:min-w-0 xl:pt-[34px] xl:pl-[80px] xl:pr-[80px] xl:gap-14">
          <div className="flex items-center gap-6">
            <span className="shrink-0 text-[16px] font-medium text-[#00a651] uppercase">
              WHO WE ARE
            </span>
            <div className="h-px flex-1 bg-[#00a651]/50" />
          </div>

          <div className="flex flex-col gap-6">
            <h2 className="font-display text-[24px] leading-[1.18] font-bold text-black xl:max-w-[580px] xl:text-[40px] xl:leading-[1.18]">
              <span>We Don&apos;t Just Build Houses. We Create </span>
              <span className="text-[#00a651]">the Good Life</span>
              <span>.</span>
            </h2>

            <div className="max-w-[572px] font-display text-[14px] leading-[22px] text-[#585858] xl:text-[16px] xl:leading-6">
              <p className="m-0">
                At Sikram Africa, we believe everyone deserves access to a good,
                healthy, and comfortable living environment. That belief drives
                everything we do, from the quality of materials we select to the
                communities we design around the people who will call them home.
              </p>
              <p className="mt-[22px] mb-0 xl:mt-6">
                Sikram Africa is a sustainable property developer headquartered in
                Monrovia, Liberia, building a new model for housing development
                across Africa. Our mission is to solve the continent&apos;s housing
                challenges through innovation, sustainability, and global best
                practices.
              </p>
            </div>
          </div>

          <DiscoverLink />
        </div>

        <div className="w-full xl:order-1 xl:w-[710px] xl:shrink-0">
          <div className="relative h-[536px] w-full overflow-hidden xl:hidden">
            <Image
              src="/images/home/who_we_are/building.svg"
              alt="Exterior of a modern apartment building with green balconies"
              fill
              className="object-cover object-left"
            />
          </div>

          <div className="relative hidden h-[750px] w-[710px] xl:block">
            <Image
              src="/images/home/who_we_are/building.svg"
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
