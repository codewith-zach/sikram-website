import Image from "next/image";

const steps = [
  "Connect with our sales team to discuss your needs and explore available properties across our developments.",
  "Take a guided site visit and experience the development of your choice for yourself.",
  "Choose your property and complete our straightforward, transparent documentation process.",
  "Make your payment through our flexible, clearly structured payment plan.",
  "Receive your keys and begin your new chapter: the art of living in Liberia, at its finest.",
] as const;

export function StepsSection() {
  return (
    <section aria-label="How to own a Sikram home" className="bg-white">
      <div className="mx-auto w-full max-w-[1440px] px-4 pt-6 pb-16 sm:px-8 sm:pt-8 sm:pb-20 md:px-12 md:pt-10 md:pb-24 xl:px-[80px] xl:pt-[8px] xl:pb-[110px]">
        <div className="flex flex-col gap-10 xl:grid xl:grid-cols-[minmax(0,516px)_710px] xl:items-start xl:justify-between xl:gap-20">
          <div className="flex min-w-0 flex-col">
            <div className="flex items-center gap-6">
              <span className="shrink-0 text-[16px] font-medium uppercase text-[#00A651]">
                How to Own a Sikram Home
              </span>
              <div className="h-px flex-1 bg-[#00A651]/60" />
            </div>

            <div className="mt-6 xl:mt-[42px]">
              <h2 className="font-display text-[24px] leading-[1.14] font-bold tracking-[-0.03em] text-black xl:text-[40px] xl:leading-[1.08]">
                <span className="block">Five Steps to Your</span>
                <span className="block">New Life in Liberia.</span>
              </h2>
            </div>

            <div className="mt-8 border-t border-[#e7e7e7] xl:mt-12">
              {steps.map((step, index) => (
                <div
                  key={step}
                  className="grid grid-cols-[72px_minmax(0,1fr)] gap-3 border-b border-[#e7e7e7] py-[14px] xl:grid-cols-[72px_minmax(0,1fr)] xl:gap-0 xl:py-[16px]"
                >
                  <span className="text-[14px] font-semibold text-[#00A651] xl:text-[16px]">
                    {`STEP ${index + 1}`}
                  </span>
                  <p className="m-0 font-display text-[14px] leading-[1.4] text-[#686868] xl:pl-[2px] xl:text-[16px] xl:leading-[1.35]">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative w-full xl:w-[710px] xl:shrink-0">
            <div className="relative h-[418px] w-full overflow-hidden xl:hidden">
              <Image
                src="/images/projects/home.png"
                alt="Modern living room interior"
                fill
                className="object-cover object-center"
              />
            </div>

            <div className="relative hidden h-[742px] w-[710px] xl:block">
              <div className="absolute bottom-0 right-0 top-0 w-[8px] bg-[#59b96f]" />
              <Image
                src="/images/projects/home.png"
                alt="Modern living room interior"
                fill
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
