import Image from "next/image";

const teamMembers = [
  {
    bio: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    ],
    imageAlt: "Portrait of team member one",
    imageSrc: "/images/about/Team/team1.png",
    name: "John Doe",
    role: "Chief Executive Officer",
  },
  {
    bio: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    ],
    imageAlt: "Portrait of team member two",
    imageSrc: "/images/about/Team/team2.png",
    name: "John Doe",
    role: "Chief Executive Officer",
  },
  {
    bio: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    ],
    imageAlt: "Portrait of team member three",
    imageSrc: "/images/about/Team/team3.png",
    name: "John Doe",
    role: "Chief Executive Officer",
  },
] as const;

export function TeamSection() {
  return (
    <section aria-label="Our team" className="bg-white">
      <div className="mx-auto w-full max-w-[1440px] px-4 pt-6 pb-16 sm:px-8 sm:pt-8 sm:pb-20 md:px-12 md:pt-10 md:pb-24 xl:px-[80px] xl:pt-[8px] xl:pb-[120px]">
        <div className="max-w-[760px]">
          <div className="flex items-center gap-6">
            <span className="shrink-0 text-[16px] font-medium uppercase text-[#00A651]">
              Our Team
            </span>
            <div className="h-px flex-1 bg-[#00A651]/50" />
          </div>

          <h2 className="mt-6 font-display text-[28px] leading-[1.14] font-bold text-black sm:text-[34px] xl:text-[40px] xl:leading-[1.18]">
            <span>Meet the brains behind </span>
            <span className="text-[#53b66a]">Sikram</span>
          </h2>
        </div>

        <div className="mt-10 flex flex-col gap-12 sm:mt-12 sm:gap-14 xl:mt-[54px] xl:gap-[62px]">
          {teamMembers.map((member) => (
            <article
              key={member.imageSrc}
              className="grid gap-8 xl:grid-cols-[330px_minmax(0,1fr)] xl:items-start xl:gap-[72px]"
            >
              <div className="relative aspect-[312/412] w-[210px] overflow-hidden bg-[#f4f4f4] sm:w-[240px] md:w-[280px] xl:w-[330px]">
                <Image
                  src={member.imageSrc}
                  alt={member.imageAlt}
                  fill
                  sizes="(min-width: 1280px) 330px, (min-width: 768px) 280px, (min-width: 640px) 240px, 210px"
                  className="object-cover"
                />
              </div>

              <div className="min-w-0">
                <p className="m-0 text-[16px] font-medium uppercase text-[#00A651]">
                  {member.role}
                </p>

                <h3 className="mt-2 font-display text-[24px] leading-[1.18] font-bold text-black xl:text-[40px] xl:leading-[1.18]">
                  {member.name}
                </h3>

                <div className="mt-5 font-display text-[14px] leading-[22px] text-[#585858] xl:mt-6 xl:text-[16px] xl:leading-6">
                  {member.bio.map((paragraph, index) => (
                    <p
                      key={`${member.imageSrc}-${index}`}
                      className={index === 0 ? "m-0" : "mt-[22px] mb-0 xl:mt-6"}
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
