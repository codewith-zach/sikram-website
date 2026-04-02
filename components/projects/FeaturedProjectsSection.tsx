"use client";

import Image from "next/image";
import Link from "next/link";

const projectCards = [
  {
    alt: "Exterior view of Anaya Terrace",
    description:
      "Anaya Terrace is a boutique row house development in Boys Town, Upper Margibi, Liberia - a small, carefully designed residential community comprising four homes, each offering comfortable, well-finished living spaces for families and individuals seeking quality and comfort.",
    href: "/projects/anaya-terrace",
    imageClassName: "object-center",
    location: "Boys Town, Upper Margibi",
    src: "/images/home/projects/anaya.png",
    tagline: "Quiet Living, Thoughtfully Designed.",
    title: "Anaya Terrace",
  },
  {
    alt: "Interior view of Anaro Estate",
    description:
      "Anaro Estate is Sikram Africa's most ambitious development to date: a premier mixed-use golfing community set on 35 acres of land in Lower Margibi, Liberia, just five minutes from Roberts International Airport.",
    href: "/projects/anaro-estate",
    imageClassName: "object-center",
    location: "Lower Margibi",
    src: "/images/home/projects/anaro.png",
    tagline: "Live. Work. Play. All in One Place.",
    title: "Anaro Estate",
  },
] as const;

function ArrowIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

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

function ProjectCard({
  alt,
  description,
  imageClassName,
  href,
  location,
  src,
  tagline,
  title,
}: (typeof projectCards)[number]) {
  const card = (
    <article className="group relative h-[262px] overflow-hidden rounded-[10px] md:h-[380px] xl:h-[570px]">
      {/* Image */}
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(min-width: 1280px) 1280px, 100vw"
        className={`object-cover transition-transform duration-700 ease-out will-change-transform group-hover:scale-[1.045] ${imageClassName}`}
      />

      {/* Dark gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/55 transition-opacity duration-500 group-hover:opacity-90" />

      {/* Green overlay */}
      {description && (
        <div className="overlay absolute inset-0 bg-[#00A651]/100 opacity-0 transition-opacity duration-500" />
      )}

      {/* Default content */}
      <div className="default-content absolute inset-x-0 bottom-0 flex items-end justify-between gap-6 px-4 pb-4 md:px-10 md:pb-8 transition-opacity duration-300">
        <div className="min-w-0 text-white">
          <h3 className="font-display text-[24px] leading-none font-bold tracking-[-0.03em] md:text-[32px]">
            {title}
          </h3>
          <div className="mt-2 flex items-center gap-2 text-[12px] font-semibold text-white md:text-[16px]">
            <LocationIcon />
            <span className="truncate">{location}</span>
          </div>
        </div>
      </div>

      {/* Overlay panel */}
      {description && (
        <div className="panel absolute inset-x-0 bottom-0 translate-y-full transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]">
          <div className="grid min-h-[220px] gap-3 px-4 pb-5 pt-4 text-white md:min-h-[300px] md:px-10 md:pb-8 md:pt-7 xl:min-h-[340px]">
            <h3 className="font-display text-[24px] leading-none font-bold tracking-[-0.03em] md:text-[32px]">
              {title}
            </h3>

            {tagline && (
              <p className="font-display text-[12px] leading-[1.5] md:text-[15px] xl:text-[18px]">
                {tagline}
              </p>
            )}

            <p className="max-w-[800px] text-[12px] leading-[1.5] md:text-[15px] xl:text-[18px]">
              {description}
            </p>
          </div>
        </div>
      )}

      {/* Button */}
      <div className="absolute bottom-4 right-4 md:bottom-8 md:right-10 z-20 flex items-center gap-3 text-[13px] font-semibold uppercase tracking-[0.02em] text-white">
        <span>View Project</span>
        <ArrowIcon className="h-6 w-6 transition-transform duration-300 group-hover:translate-x-1" />
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

export function FeaturedProjectsSection() {
  return (
    <section
      aria-label="Featured projects"
      className="bg-white"
    >
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center gap-[60px] px-4 py-8 sm:px-6 md:px-8 xl:px-[80px] xl:py-[80px]">
        <div className="flex w-full max-w-[320px] flex-col items-center gap-4">
          <div className="flex w-full items-center gap-6">
            <div className="h-px flex-1 bg-[#00A651]/35" />
            <span className="shrink-0 text-[10px] font-medium uppercase tracking-[0.02em] text-[#00A651] md:text-[16px]">
              Featured Projects
            </span>
            <div className="h-px flex-1 bg-[#00A651]/35" />
          </div>
          <h2 className="font-display text-[24px] leading-none font-bold tracking-[-0.03em] text-black md:text-[40px]">
            View our Work
          </h2>
        </div>

        <div className="flex w-full flex-col gap-6">
          {projectCards.map((project) => (
            <ProjectCard
              key={project.title}
              {...project}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
