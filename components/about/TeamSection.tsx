import Image from "next/image";

const teamMembers = [
  {
    bio: [
      `Markis Nebo is the Founder and CEO of Sikram Africa, where he leverages a rich educational
      background and extensive experience to drive the company's mission. Holding a Bachelor's
      degree in Business Management, Social Science, and Civil Engineering, Markis blends technical
      proficiency with a deep understanding of human dynamics and organizational management.`,
      `Markis Nebo is the Founder and CEO of Sikram Africa, where he leverages a rich educational
      background and extensive experience to drive the company's mission. Holding a Bachelor's
      degree in Business Management, Social Science, and Civil Engineering, Markis blends technical
      proficiency with a deep understanding of human dynamics and organizational management.`,
    ],
    imageAlt: "Portrait of team member one",
    imageSrc: "/images/about/Team/ceo.jpg",
    name: "Markis Myers Nebo",
    role: "Chief Executive Officer",
  },
  {
    bio: [
      `Macthony Nebo serves as the Chief Financial Officer at Sikram Africa, bringing a wealth of
      expertise in accounting and financial management. With a Master's degree in Accounting and
      Financial Management and credentials as a Chartered Registered Accountant, Macthony is
      instrumental in shaping the financial strategies that drive the company's success.`,
      `His strong analytical skills and strategic vision enable him to oversee financial operations, ensure
      compliance, and optimize resource allocation. Macthony is committed to fostering transparency
      and efficiency within the organization, playing a key role in Sikram Africa's growth and
      sustainability. His leadership in finance is pivotal to achieving the company's long-term
      objectives.`,
    ],
    imageAlt: "Portrait of team member two",
    imageSrc: "/images/about/Team/cfo.JPG",
    name: "Macthony Nebo",
    role: "Chief Financial Officer",
  },
  {
    bio: [
      `Usman Ghani is the Director of Design and Planning at Sikram Africa, where he oversees the
      architectural department with a keen eye for innovation and detail. Holding a degree in
      Architecture and Design, Usman brings over 10 years of diverse experience, having worked in his
      home country of Pakistan as well as in the UAE and Liberia.`,
      `His extensive background equips him with a unique perspective on architectural practices,
      enabling him to lead projects that are both functional and aesthetically pleasing. Usman's
      commitment to excellence drives his team to create impactful designs that align with Sikram
      Africa's vision for sustainable development and growth. His leadership and expertise play a
      crucial role in shaping the future of our architectural initiatives.`,
    ],
    imageAlt: "Portrait of team member three",
    imageSrc: "/images/about/Team/design.jpg",
    name: "Usman Ghani",
    role: "Director of Design and Planning",
  },
  {
    bio: [
      `John Moses Adayilo serves as the Global Talent Acquisition Manager at Sikram Africa, where he
      leverages his extensive experience in healthcare and the arts to foster a diverse and dynamic
      workforce. Currently specializing in anesthesia as a nurse, John demonstrates a strong
      commitment to compassionate care in critical situations.`,
      `Beyond his medical expertise, he is a talented singer and songwriter, using music to connect with
      and inspire others. Additionally, John contributes to the African entertainment industry as a
      movie producer, bringing impactful stories to life.`,
      `His hardworking and confident approach drives his efforts to empower and attract top talent for
      Sikram Africa. John is passionate about harnessing Africa's limitless potential and aspires to
      build a workforce that reflects diversity and innovation, contributing to the company's vision and
      success.`
    ],
    imageAlt: "Portrait of team member three",
    imageSrc: "/images/about/Team/talent.jpg",
    name: "John Moses Adayilo",
    role: "Global Talent Acquisition Manager",
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
