import Image from "next/image";

const audienceCards = [
  {
    alt: "Sikram Foundation community program",
    src: "/images/foundation/img1.png",
  },
  {
    alt: "Sikram Foundation community program",
    src: "/images/foundation/img2.png",
  },
  {
    alt: "Sikram Foundation community program",
    src: "/images/foundation/img3.png",
  },
  {
    alt: "Sikram Foundation community program",
    src: "/images/foundation/img4.png",
  },
] as const;

function AudienceCard({ alt, src }: (typeof audienceCards)[number]) {
  return (
    <article className="group relative h-[380px] overflow-hidden sm:h-[420px] xl:h-[460px]">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
        className="object-cover object-center transition-transform duration-700 ease-out will-change-transform group-hover:scale-[1.04] group-focus-within:scale-[1.04]"
      />
    </article>
  );
}

export function GallerySection() {
  return (
    <section aria-label="Who we build for" className="bg-white">
      <div className="mx-auto w-full max-w-[1440px] px-4 pt-6 pb-16 sm:px-8 sm:pt-8 sm:pb-20 md:px-12 md:pt-10 md:pb-24 xl:px-[80px] xl:pt-[80px] xl:pb-[110px]">
        <div className="flex flex-col items-center text-center">
          <div className="flex w-full max-w-[460px] items-center justify-center gap-4 xl:max-w-[520px] xl:gap-5">
            <div className="h-px flex-1 bg-[#00A651]/35" />
            <span className="shrink-0 text-[16px] font-medium uppercase text-[#00A651]">
              Gallery
            </span>
            <div className="h-px flex-1 bg-[#00A651]/35" />
          </div>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:mt-[48px] xl:grid-cols-4">
          {audienceCards.map((card, index) => (
            <AudienceCard key={`${card.src}-${index}`} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}
