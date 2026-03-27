import Image from "next/image";

const sustainabilityPoints = [
  "Green spaces and tree canopies integrated into every development",
  "Proper drainage, sewage, and utility infrastructure as standard",
  "Responsible material selection that minimises environmental impact",
  "Zoning that prioritises human health and community connection",
  "Open recreational areas, including swimming pools and playgrounds",
] as const;

export function Sustainability() {
  return (
    <section aria-label="Sustainability" className="bg-white">
      <div className="mx-auto w-full max-w-[1440px] px-4 py-10 sm:px-6 md:px-8 xl:px-[80px] xl:py-16">
        <div className="flex flex-col gap-10 xl:grid xl:grid-cols-[minmax(0,516px)_710px] xl:items-start xl:justify-between xl:gap-20">
          <div className="flex min-w-0 flex-col">
            <div className="flex items-center gap-6">
              <span className="shrink-0 text-[16px] font-medium uppercase text-[#62bf7b]">
                SUSTAINABILITY
              </span>
              <div className="h-px flex-1 bg-[#62bf7b]/60" />
            </div>

            <div className="mt-6 xl:mt-[42px]">
              <h2 className="font-display text-[24px] leading-[1.14] font-bold tracking-[-0.03em] text-black xl:text-[40px] xl:leading-[1.08]">
                <span className="block">Sustainable Living,</span>
                <span className="block text-[#49b96b]">Redefined.</span>
              </h2>

              <p className="mt-4 max-w-[32rem] font-display text-[14px] leading-[1.58] text-[#6a6a6a] xl:mt-6 xl:text-[16px] xl:leading-[1.45]">
                At Sikram Africa, eco-friendly design is not an afterthought: it is
                our starting point. From the moment we break ground, every
                decision we make is guided by a commitment to green spaces,
                responsible materials, healthy environments, and communities that
                support human wellbeing for generations to come.
              </p>
            </div>

            <div className="mt-8 border-t border-[#e7e7e7] xl:mt-12">
              {sustainabilityPoints.map((point, index) => (
                <div
                  key={point}
                  className="grid grid-cols-[28px_minmax(0,1fr)] gap-3 border-b border-[#e7e7e7] py-[14px] xl:grid-cols-[40px_minmax(0,1fr)] xl:gap-0 xl:py-[16px]"
                >
                  <span className="text-[14px] font-semibold text-[#62bf7b] xl:text-[16px]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="m-0 font-display text-[14px] leading-[1.4] text-[#686868] xl:pl-[2px] xl:text-[16px] xl:leading-[1.35]">
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full xl:w-[710px] xl:shrink-0">
            <div className="relative h-[418px] w-full overflow-hidden xl:hidden">
              <Image
                src="/images/home/sustainability/worker.svg"
                alt="Construction worker on a development site"
                fill
                className="object-cover object-center"
              />
            </div>

            <div className="relative hidden h-[742px] w-[710px] xl:block">
              <Image
                src="/images/home/sustainability/worker.svg"
                alt="Construction worker on a development site"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
