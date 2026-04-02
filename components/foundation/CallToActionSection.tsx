import Image from "next/image";
import Link from "next/link";

export function CallToActionSection() {
  return (
    <section aria-label="About call to action" className="bg-white">
      <div className="mx-auto w-full max-w-[1440px] overflow-hidden">
        <div className="relative isolate min-h-[740px] md:min-h-[700px]">
          <div className="md:hidden">
            <Image
              src="/images/home/cta/cta_mobile.png"
              alt="Family preparing food together in a warm kitchen"
              fill
              sizes="(min-width: 640px) calc(100vw - 40px), calc(100vw - 32px)"
              className="object-cover object-center"
            />
          </div>

          <div className="hidden md:block">
            <Image
              src="/images/foundation/cta.png"
              alt="Warm, luxurious bedroom interior"
              fill
              sizes="(min-width: 1536px) 1440px, 100vw"
              className="object-cover object-center"
            />
          </div>

          <div className="relative z-10 flex min-h-[760px] items-start px-5 py-8 sm:px-8 md:items-center md:px-12 xl:min-h-[597px] xl:px-[74px] xl:py-[80px]">
          <div className="max-w-[720px] rounded-[18px] bg-white px-8 py-10 shadow-[0_10px_30px_rgba(0,0,0,0.08)] md:max-w-[760px] md:px-10 md:py-12">
            <h2 className="max-w-[460px] font-display text-[24px] leading-[1.05] font-bold tracking-[-0.03em] text-black md:text-[40px] md:leading-[1.02] md:tracking-[-0.04em]">
                Be Part of Something
                <br />
                Bigger.
            </h2>

            <div className="mt-6 max-w-[560px]">
                <p className="text-[15px] leading-[1.7] text-[#5a5a5a] md:text-[16px]">
                Whether you are an individual who wants to support youth education, a
                business looking to partner with a community-driven initiative, or an
                organisation aligned with our mission, the Sikram Foundation welcomes you.
                </p>

                <p className="mt-4 text-[15px] leading-[1.7] text-[#5a5a5a] md:text-[16px]">
                Together, we can build more than homes – we can build a generation.
                </p>
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                href="https://wa.me/61485696123"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-[64px] items-center justify-center whitespace-nowrap rounded-[14px] bg-[#16a34a] px-8 font-sans text-[16px] font-semibold text-white transition hover:bg-[#15803d] sm:max-w-[280px]"
                >
                Partner With the Foundation
                </a>

                <Link
                href="/support"
                className="inline-flex h-[64px] items-center justify-center whitespace-nowrap rounded-[14px] border border-[#16a34a] bg-white px-8 font-sans text-[16px] font-semibold text-[#16a34a] transition hover:bg-[#f0fdf4] sm:max-w-[280px]"
                >
                Support the Foundation
                </Link>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
