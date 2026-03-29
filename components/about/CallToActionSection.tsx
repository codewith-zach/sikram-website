import Image from "next/image";
import Link from "next/link";

export function CallToActionSection() {
  return (
    <section aria-label="About call to action" className="bg-white">
      <div className="mx-auto w-full max-w-[1440px] overflow-hidden">
        <div className="relative isolate min-h-[760px] sm:min-h-[720px] xl:min-h-[597px]">
          <Image
            src="/images/about/cta/cta.png"
            alt="Luxury living room interior with chandelier, staircase, and dining area"
            fill
            sizes="(min-width: 1536px) 1440px, 100vw"
            className="object-cover object-center"
          />

          <div className="relative z-10 flex min-h-[760px] items-center px-5 py-8 sm:px-8 md:px-12 xl:min-h-[597px] xl:px-[74px] xl:py-[80px]">
            <div className="w-full max-w-[760px] rounded-[18px] bg-white px-6 py-10 shadow-[0_22px_60px_rgba(0,0,0,0.12)] sm:px-8 sm:py-12 md:max-w-[700px] md:px-10 md:py-14 xl:max-w-[760px] xl:px-[48px] xl:py-[54px]">
              <h2 className="max-w-[22rem] font-display text-[24px] leading-[1.05] font-bold tracking-[-0.05em] text-black md:max-w-[29rem] md:text-[40px] md:leading-[1.02]">
                <span>At Sikram, We</span>
                <br />
                <span>Believe Liberia</span>
                <br />
                <span className="text-[#53b66a]">Deserves the Best.</span>
              </h2>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row xl:mt-[46px] xl:gap-[14px]">
                <Link
                  href="/projects"
                  className="inline-flex h-[70px] min-w-0 flex-1 items-center justify-center rounded-[14px] bg-[#4da65a] px-8 font-sans text-[17px] font-semibold text-white transition hover:bg-[#449450] md:h-[58px] md:max-w-[271px] md:rounded-[12px] md:text-[16px]"
                >
                  See Our Work
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex h-[70px] min-w-0 flex-1 items-center justify-center rounded-[14px] border border-[#62bf79] bg-white px-8 font-sans text-[17px] font-semibold text-[#4da65a] transition hover:bg-[#f8fff9] md:h-[58px] md:max-w-[271px] md:rounded-[12px] md:text-[16px]"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
