import Image from "next/image";
import Link from "next/link";

const houseCards = [
  {
    alt: "Exterior view of Bannah House",
    href: undefined,
    location: "Kpaja, Monrovia",
    src: "/images/projects/smart_homes/bannah_house.png",
    title: "Bannah House",
  },
  {
    alt: "Exterior view of Vlandee Guest House",
    href: "/projects/vlandee-guest-house",
    location: "Kpaja Johnsonville, Paynesville",
    src: "/images/projects/smart_homes/vlandee_house.png",
    title: "Vlandee Guest House",
  },
  {
    alt: "Exterior view of Zulu House",
    href: undefined,
    location: "Kpaja, Monrovia",
    src: "/images/projects/smart_homes/zulu_house.png",
    title: "Zulu House",
  },
] as const;

function LocationIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4 w-4 shrink-0"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 21s-6-4.35-6-10a6 6 0 1 1 12 0c0 5.65-6 10-6 10Z" />
      <circle cx="12" cy="11" r="2.5" />
    </svg>
  );
}

function HouseCard({
  alt,
  href,
  location,
  src,
  title,
}: (typeof houseCards)[number]) {
  const card = (
    <article className="group relative h-[430px] overflow-hidden rounded-[14px] sm:h-[500px] xl:h-[535px]">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
        className="object-cover object-center transition-transform duration-700 ease-out will-change-transform group-hover:scale-[1.04] group-focus-within:scale-[1.04]"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70" />

      <div className="absolute inset-x-0 bottom-0 px-5 pb-6 text-white sm:px-6 sm:pb-7 xl:px-5 xl:pb-6">
        <h3 className="font-display text-[24px] leading-[1.02] font-bold tracking-[-0.03em] sm:text-[28px] xl:text-[32px]">
          {title}
        </h3>
        <div className="mt-3 flex items-start gap-2 text-[12px] font-semibold text-white sm:text-[14px] xl:text-[16px]">
          <LocationIcon />
          <span>{location}</span>
        </div>
      </div>
    </article>
  );

  if (href) {
    return (
      <Link href={href} aria-label={`View ${title}`}>
        {card}
      </Link>
    );
  }

  return card;
}

export function SmartHousesSection() {
  return (
    <section aria-label="Smart houses" className="bg-white">
      <div className="mx-auto w-full max-w-[1440px] px-4 pt-6 pb-16 sm:px-8 sm:pt-8 sm:pb-20 md:px-12 md:pt-10 md:pb-24 xl:px-[80px] xl:pt-[8px] xl:pb-[110px]">
        <div className="xl:grid xl:grid-cols-[minmax(0,710px)_minmax(0,1fr)] xl:gap-0">
          <div className="xl:pr-[86px]">
            <div className="flex items-center gap-6">
              <span className="shrink-0 text-[16px] font-medium uppercase text-[#00A651]">
                Houses
              </span>
              <div className="h-px flex-1 bg-[#00A651]/50" />
            </div>

            <h2 className="mt-8 max-w-[720px] font-display text-[24px] leading-[1.18] font-bold text-black xl:text-[40px] xl:leading-[1.18]">
              Our Smart Houses
            </h2>
          </div>

          <div className="mt-10 max-w-[760px] font-display text-[14px] leading-[22px] text-[#585858] xl:mt-0 xl:pl-[72px] xl:text-[16px] xl:leading-6">
            <p className="m-0">
              A well-sheltered, eco-friendly Liberia and Africa where real
              estate and residential development meet global standards.
            </p>
            <p className="mt-[22px] mb-0 xl:mt-3">
              A future where African cities are defined by sustainable,
              well-planned communities built to global standards: beginning in
              Liberia and expanding across the continent.
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:mt-[54px] xl:grid-cols-3 xl:gap-[20px]">
          {houseCards.map((house) => (
            <HouseCard key={house.title} {...house} />
          ))}
        </div>
      </div>
    </section>
  );
}
