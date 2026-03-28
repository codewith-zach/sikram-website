import Image from "next/image";

export function HomeCta() {
  return (
    <section aria-label="Contact Sikram Africa" className="bg-white">
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
              src="/images/home/cta/cta.png"
              alt="Warm, luxurious bedroom interior"
              fill
              sizes="(min-width: 1536px) 1440px, 100vw"
              className="object-cover object-center"
            />
          </div>

          <div className="relative z-10 flex min-h-[740px] items-center justify-center px-5 py-6 md:min-h-[700px] md:items-start md:justify-start md:px-[58px] md:pt-[149px] md:pb-12">
            <div className="w-full max-w-[456px] rounded-[20px] bg-white px-6 py-[52px] shadow-[0_22px_60px_rgba(0,0,0,0.16)] md:max-w-[620px] md:rounded-[18px] md:px-[40px] md:py-[58px]">
              <h2 className="max-w-[22rem] font-display text-[24px] leading-[1.05] font-bold tracking-[-0.05em] text-black md:max-w-[29rem] md:text-[40px] md:leading-[1.02]">
                Ready to Experience the Art of{" "}
                <span className="text-[#00A651]">Living in Africa?</span>
              </h2>

              <p className="mt-10 max-w-[22rem] font-sans text-[16px] leading-[1.6] tracking-[-0.02em] text-[#2f2f2f] md:max-w-[31rem] md:text-[17px] md:leading-[1.5]">
                Whether you are looking for a luxury home, a low-impact
                investment, or a community in Liberia you can be proud of —
                Sikram Africa has built it for you.
              </p>

              <button
                type="button"
                className="mt-10 inline-flex h-[70px] w-full items-center justify-center rounded-[14px] bg-[#00A651] px-8 font-sans text-[17px] font-semibold text-white transition hover:bg-[#00A651]/90 md:mt-11 md:h-[58px] md:w-[271px] md:rounded-[12px] md:text-[16px]"
              >
                Contact Us Today
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
