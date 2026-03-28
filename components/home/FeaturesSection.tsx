import Image from "next/image";

const features = [
  {
    alt: "Illustration of a modern property development",
    desktopWidth: "xl:w-[192px]",
    iconClassName: "h-[44px] w-[44px] xl:h-16 xl:w-16",
    src: "/images/home/features/img1.svg",
    text: "State-of-the-art Property Developments",
  },
  {
    alt: "Illustration of global value and sustainable pricing",
    desktopWidth: "xl:w-[155px]",
    iconClassName: "h-[44px] w-[44px] xl:h-16 xl:w-16",
    src: "/images/home/features/img2.svg",
    text: "Sustainable Luxury Starting From $50K",
  },
  {
    alt: "Illustration of fast delivery",
    desktopWidth: "xl:w-[127px]",
    iconClassName: "h-[44px] w-[44px] xl:h-16 xl:w-16",
    src: "/images/home/features/img3.svg",
    text: "On-Time Delivery Record",
  },
  {
    alt: "Illustration of Liberia with a global marker",
    desktopWidth: "xl:w-[171px]",
    iconClassName: "h-[44px] w-[44px] xl:h-16 xl:w-16",
    src: "/images/home/features/img4.svg",
    text: "Global Standards, Local Roots in Liberia",
  },
] as const;

export function FeaturesSection() {
  return (
    <section aria-label="Sikram Africa features" className="bg-white">
      <div className="mx-auto w-full max-w-[1440px] px-4 py-[60px] sm:px-6 md:px-8 xl:px-[80px]">
        <div className="grid grid-cols-2 gap-x-5 gap-y-10 xl:flex xl:items-start xl:justify-between xl:gap-8">
          {features.map((feature) => (
            <article
              key={feature.text}
              className={`flex min-w-0 flex-col items-start gap-[15px] ${feature.desktopWidth}`}
            >
              <Image
                src={feature.src}
                alt={feature.alt}
                width={64}
                height={64}
                className={feature.iconClassName}
              />
              <p className="max-w-full text-[14px] leading-[1.25] font-medium uppercase text-black">
                {feature.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
