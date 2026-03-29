import Image from "next/image";

export function EcoBannerSection() {
  return (
    <section aria-label="Eco friendly banner" className="bg-white">
      <div className="mx-auto w-full max-w-[1440px] px-0 pt-4 pb-14 sm:pt-6 sm:pb-18 md:pt-8 md:pb-20 xl:pt-[18px] xl:pb-[96px]">
        <div className="relative aspect-[1440/719] w-full overflow-hidden">
          <Image
            src="/images/about/vision/ellipse.png"
            alt="Tree-lined eco-friendly development with walking paths and open green spaces"
            fill
            priority={false}
            sizes="100vw"
            className="object-contain"
          />

          <div className="absolute inset-x-0 top-[36%] flex -translate-y-1/2 justify-center px-6 text-center sm:top-[37%] sm:px-10 xl:top-[38%] xl:px-20">
            <h2 className="max-w-[900px] font-display text-[20px] leading-[1.2] text-white sm:text-[28px] md:text-[34px] xl:text-[40px] xl:leading-[1.18]">
              <span>Eco-Friendly Is Not What We Do:</span>
              <br />
              <span className="font-bold">It&apos;s Who We Are.</span>
            </h2>
          </div>
        </div>

        <div className="px-4 sm:px-8 md:px-12 xl:px-[80px]">
          <div className="mt-5 grid gap-10 sm:mt-6 md:mt-8 xl:-mt-[94px] xl:grid-cols-[minmax(0,710px)_minmax(0,1fr)] xl:gap-0">
            <div className="xl:pr-[86px]">
              <div className="flex items-center gap-6">
                <span className="shrink-0 text-[16px] font-medium uppercase text-[#00A651]">
                  Vision
                </span>
                <div className="h-px flex-1 bg-[#00A651]/50" />
              </div>

              <h2 className="mt-8 max-w-[720px] font-display text-[24px] leading-[1.18] font-bold text-black xl:text-[40px] xl:leading-[1.18]">
                Where We Are Going
              </h2>
            </div>

            <div className="max-w-[760px] font-display text-[14px] leading-[22px] text-[#585858] xl:pl-[72px] xl:text-[16px] xl:leading-6">
              <p className="m-0">
                For us, building eco-friendly homes in Liberia is not a selling
                point; it&apos;s a responsibility. A responsibility to our
                residents, our communities, and an Africa our children will
                inherit.
              </p>
              <p className="mt-[22px] mb-0 xl:mt-3">
                Every Sikram property features integrated green infrastructure,
                responsible construction methods, and community design that
                prioritises the health and wellbeing of the people who live
                there. We don&apos;t just build houses - we build environments
                and living spaces.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
