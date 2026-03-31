"use client";

import { useCallback, useState } from "react";
import Image from "next/image";

const audienceCards = [
  {
    alt: "Two young professionals reviewing a tablet",
    description:
      "Ambitious, driven, and ready for a home that matches your momentum. Our property developments offer the luxury, planet-smart design, and community you have worked for, at a value that makes smart financial sense for your future.",
    src: "/images/projects/home_for_everyone/img1.png",
    title: "Young Professionals",
  },
  {
    alt: "A family preparing food together",
    description:
      "Your family deserves space, safety, and a sustainable community where children can grow, neighbours become friends, and every day feels like the life you always wanted.",
    src: "/images/projects/home_for_everyone/img2.png",
    title: "Families",
  },
  {
    alt: "Two professionals discussing an investment portfolio",
    description:
      "You want to invest in real estate in Liberia, but you need an environmentally conscious property developer you can trust from a distance. Sikram Africa offers full transparency, professional management, and homes built to a global standard you can be proud of, wherever in the world you are.",
    src: "/images/projects/home_for_everyone/img3.png",
    title: "Diaspora Investors",
  },
  {
    alt: "A high-net-worth individual using a smartphone",
    description:
      "Class, exclusivity, and a return on your real estate investment that reflects your standing. From the golfing community at Anaro Estate to the luxury retreat of Vlandee Guest Houses, Sikram delivers without compromise.",
    src: "/images/projects/home_for_everyone/img4.png",
    title: "High-Net-Worth\nIndividuals",
  },
] as const;

function AudienceCard({
  alt,
  description,
  src,
  title,
}: {
  alt: string;
  description: string;
  src: string;
  title: string;
}) {
  const [isTouched, setIsTouched] = useState(false);

  const handleTouchStart = useCallback(() => {
    setIsTouched(true);
  }, []);

  const handleTouchEnd = useCallback(() => {
    setTimeout(() => setIsTouched(false), 2500);
  }, []);

  return (
    <article
      className={`group relative h-[340px] overflow-hidden rounded-[14px] sm:h-[380px] xl:h-[420px] ${isTouched ? "is-touched" : ""}`}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
        className={`object-cover object-center transition-transform duration-700 ease-out will-change-transform group-hover:scale-[1.04] group-focus-within:scale-[1.04] ${isTouched ? "scale-[1.04]" : ""}`}
      />
      <div className={`absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent transition-opacity duration-500 group-hover:opacity-90 group-focus-within:opacity-90 ${isTouched ? "opacity-90" : ""}`} />
      <div className={`absolute inset-0 bg-[#00A651]/100 opacity-0 transition-opacity duration-500 group-hover:opacity-60 group-focus-within:opacity-60 ${isTouched ? "opacity-60" : ""}`} />

      {/* Default content (fades on hover) */}
      <div className={`absolute inset-x-0 bottom-0 px-5 pb-6 text-white transition-opacity duration-300 group-hover:opacity-0 group-focus-within:opacity-0 sm:px-6 sm:pb-7 ${isTouched ? "opacity-0" : ""}`}>
        <h3 className="whitespace-pre-line font-display text-[24px] leading-[1.05] font-bold tracking-[-0.03em] sm:text-[26px] xl:text-[28px]">
          {title}
        </h3>
      </div>

      {/* Hover panel */}
      <div className={`absolute inset-x-0 bottom-0 translate-y-full transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0 group-focus-within:translate-y-0 ${isTouched ? "translate-y-0" : ""}`}>
        <div className="flex flex-col gap-3 px-5 pb-6 pt-4 text-white sm:px-6 sm:pb-7">
          <h3 className="whitespace-pre-line font-display text-[24px] leading-[1.05] font-bold tracking-[-0.03em] sm:text-[26px] xl:text-[28px]">
            {title}
          </h3>
          <p className="text-[14px] leading-[1.5] md:text-[16px] xl:text-[18px]">
            {description}
          </p>
        </div>
      </div>
    </article>
  );
}

export function HomeForEveryoneSection() {
  return (
    <section aria-label="Who we build for" className="bg-white">
      <div className="mx-auto w-full max-w-[1440px] px-4 pt-6 pb-16 sm:px-8 sm:pt-8 sm:pb-20 md:px-12 md:pt-10 md:pb-24 xl:px-[80px] xl:pt-[8px] xl:pb-[110px]">
        <div className="flex flex-col items-center text-center">
          <div className="flex w-full max-w-[460px] items-center justify-center gap-4 xl:max-w-[520px] xl:gap-5">
            <div className="h-px flex-1 bg-[#00A651]/35" />
            <span className="shrink-0 text-[16px] font-medium uppercase text-[#00A651]">
              Who We Build For
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
