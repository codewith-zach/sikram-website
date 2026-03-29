import Image from "next/image";

const audienceCards = [
  {
    alt: "Two young professionals reviewing a tablet",
    src: "/images/projects/home_for_everyone/img1.png",
    title: "Young Professionals",
  },
  {
    alt: "A family preparing food together",
    src: "/images/projects/home_for_everyone/img2.png",
    title: "Families",
  },
  {
    alt: "Two professionals discussing an investment portfolio",
    src: "/images/projects/home_for_everyone/img3.png",
    title: "Diaspora Investors",
  },
  {
    alt: "A high-net-worth individual using a smartphone",
    src: "/images/projects/home_for_everyone/img4.png",
    title: "High-Net-Worth\nIndividuals",
  },
] as const;

function AudienceCard({
  alt,
  src,
  title,
}: (typeof audienceCards)[number]) {
  return (
    <article className="group relative h-[340px] overflow-hidden rounded-[14px] sm:h-[380px] xl:h-[420px]">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
        className="object-cover object-center transition-transform duration-700 ease-out will-change-transform group-hover:scale-[1.04] group-focus-within:scale-[1.04]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />

      <div className="absolute inset-x-0 bottom-0 px-5 pb-6 text-white sm:px-6 sm:pb-7">
        <h3 className="whitespace-pre-line font-display text-[24px] leading-[1.05] font-bold tracking-[-0.03em] sm:text-[26px] xl:text-[28px]">
          {title}
        </h3>
      </div>
    </article>
  );
}

export function GallerySection() {
  return (
    <section aria-label="Who we build for" className="bg-white">
      <div className="mx-auto w-full max-w-[1440px] px-4 pt-6 pb-16 sm:px-8 sm:pt-8 sm:pb-20 md:px-12 md:pt-10 md:pb-24 xl:px-[80px] xl:pt-[8px] xl:pb-[110px]">
        <div className="flex flex-col items-center text-center">
          <div className="flex w-full max-w-[460px] items-center justify-center gap-4 xl:max-w-[520px] xl:gap-5">
            <div className="h-px flex-1 bg-[#00A651]/35" />
            <span className="shrink-0 text-[16px] font-medium uppercase text-[#00A651]">
              Gallery
            </span>
            <div className="h-px flex-1 bg-[#00A651]/35" />
          </div>

          <h2 className="mt-6 font-display text-[28px] leading-[1.14] font-bold text-black sm:text-[34px] xl:text-[40px] xl:leading-[1.18]">
            A Home for Everyone
          </h2>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:mt-[48px] xl:grid-cols-4">
          {audienceCards.map((card) => (
            <AudienceCard key={card.title} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}
