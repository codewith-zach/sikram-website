import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="overflow-hidden bg-(image:--hero-gradient)">
      <div className="mx-auto w-full max-w-[1440px] px-6 sm:px-8 md:px-12 xl:px-[76px]">
        <div className="relative min-h-[calc(100svh-57px)] pb-[90vw] pt-9 sm:pb-[66vw] sm:pt-10 md:pb-[34vw] md:pt-12 xl:min-h-[760px] xl:pb-0 xl:pt-[56px]">
          <div className="relative z-10 flex max-w-lg flex-col items-center text-center md:max-w-xl md:items-start md:text-left xl:max-w-2xl">
            <div className="inline-flex max-w-full items-center gap-3 rounded-full border border-white/20 bg-white/10 px-4 py-2.5 text-xs text-white backdrop-blur-[10px] sm:px-5 sm:text-sm md:px-7 md:py-3 md:text-base">
              <Image
                src="/images/home/hero/liberia-flag.png"
                alt="Liberia flag"
                width={34}
                height={34}
                priority
                className="h-[22px] w-[22px] rounded-full md:h-[28px] md:w-[28px]"
              />
              <span className="font-display font-medium uppercase tracking-[0.04em] text-white/90">
                Sustainable Property Developer · Liberia
              </span>
            </div>

            <h1 className="mt-8 font-display text-4xl leading-tight tracking-tight text-white sm:text-7xl md:mt-12 md:text-8xl">
              <span className="block  md:whitespace-nowrap">
                Africa&apos;s Future,
              </span>
              <span className="mt-1 block font-bold xl:mt-3">Built Today.</span>
            </h1>

            <p className="mt-10 max-w-xs font-display text-base leading-[1.36] tracking-[-0.025em] text-white/88 sm:max-w-sm sm:text-lg md:mt-11 md:max-w-md md:text-base xl:mt-16 xl:max-w-[41rem] xl:text-[1.32rem] xl:leading-[1.42]">
              Building thoughtfully designed homes and communities where comfort,
              security, and excellence are not luxuries but expectations.
            </p>

            <div className="mt-10 flex w-full max-w-xs flex-col gap-4 md:mt-12 md:max-w-none md:flex-row xl:mt-18">
              <Link href="/projects">
                <button
                  className="inline-flex w-full min-h-[56px] items-center justify-center rounded-[12px] bg-white px-8 py-4 font-sans text-sm font-bold uppercase tracking-[0.01em] text-[#3f3f3f] transition hover:bg-[#f8f8f8] md:min-w-[228px]"
                >
                  <span>EXPLORE PROPERTIES</span>
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    className="ml-3 h-5 w-5 text-[#00A651]"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </button>
              </Link>
              <Link href="/about">
                <button
                  className="inline-flex w-full min-h-[56px] items-center justify-center rounded-[12px] border border-white/40 bg-transparent px-8 py-4 font-sans text-sm font-bold uppercase tracking-[0.01em] text-white transition hover:bg-white/10 md:min-w-[228px]"
                >
                  <span>LEARN OUR STORY</span>
                </button>
              </Link>
            </div>
          </div>

          <div className="pointer-events-none absolute bottom-[-6%] left-[-12%] w-[118%] sm:bottom-[-4%] sm:left-[-6%] sm:w-[100%] md:right-[-12%] md:bottom-0 md:left-auto md:w-[52%] xl:right-[-2%] xl:top-[22px] xl:bottom-auto xl:w-[50%]">
            <Image
              src="/images/home/hero/building.png"
              alt="Modern white building"
              width={850}
              height={850}
              priority
              className="block h-auto w-full object-contain object-bottom"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
