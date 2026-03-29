import {
  Award,
  Heart,
  Lightbulb,
  Search,
  ShieldCheck,
  Users,
} from "lucide-react";

const coreValues = [
  {
    body: "We apply cutting-edge thinking and global technology to sustainable housing development in Liberia, solving old problems in bold new ways.",
    icon: Lightbulb,
    title: "Innovation",
  },
  {
    body: "Every step of your property journey is open and honest. We are clear about timelines, costs, and processes because you deserve to know.",
    icon: Search,
    title: "Transparency",
  },
  {
    body: "Beyond shelter, we design eco-friendly environments that support physical health, mental peace, and a genuinely high quality of life for every resident.",
    icon: Heart,
    title: "Health & Wellbeing",
  },
  {
    body: "Quality above quantity, always. We pay attention to every detail, work with the best hands in the business, and refuse to compromise on standard.",
    icon: Award,
    title: "Excellence",
  },
  {
    body: "Our word is our bond, and our homes are the proof. Everything we commit to, we deliver with integrity at every stage of the journey.",
    icon: ShieldCheck,
    title: "Trust",
  },
  {
    body: "We create thoughtfully designed living hubs that provide every necessary amenity for the good life, improving livelihoods across Africa beginning in Liberia.",
    icon: Users,
    title: "Community",
  },
] as const;

export function CoreValuesSection() {
  return (
    <section aria-label="Core values" className="bg-white">
      <div className="mx-auto w-full max-w-[1440px] px-4 pt-6 pb-16 sm:px-8 sm:pt-8 sm:pb-20 md:px-12 md:pt-10 md:pb-24 xl:px-[80px] xl:pt-[10px] xl:pb-[110px]">
        <div className="flex flex-col items-center text-center">
          <div className="flex w-full max-w-[406px] items-center justify-center gap-4 xl:max-w-[470px] xl:gap-5">
            <div className="h-px flex-1 bg-[#00A651]/35" />
            <span className="shrink-0 text-[16px] font-medium uppercase text-[#00A651]">
              Core Values
            </span>
            <div className="h-px flex-1 bg-[#00A651]/35" />
          </div>

          <h2 className="mt-6 font-display text-[28px] leading-[1.14] font-bold text-black sm:text-[34px] xl:text-[40px] xl:leading-[1.18]">
            The Principles We Build On
          </h2>
        </div>

        <div className="mt-12 grid border border-[#ededed] md:grid-cols-2 xl:mt-[52px] xl:grid-cols-3">
          {coreValues.map(({ body, icon: Icon, title }) => (
            <article
              key={title}
              className="border-b border-[#ededed] px-6 py-10 last:border-b-0 md:min-h-[262px] md:px-7 md:py-11 md:[&:nth-last-child(-n+2)]:border-b-0 xl:min-h-[264px] xl:border-b-0 xl:border-r xl:px-[26px] xl:py-[50px] xl:[&:nth-child(3n)]:border-r-0 xl:[&:nth-child(n+4)]:border-t"
            >
              <Icon
                aria-hidden="true"
                className="h-6 w-6 text-[#53b66a] xl:h-7 xl:w-7"
                strokeWidth={1.8}
              />

              <h3 className="mt-7 font-display text-[24px] leading-[1.18] font-bold text-black xl:text-[26px]">
                {title}
              </h3>

              <p className="mt-4 max-w-[292px] font-display text-[14px] leading-[22px] text-[#585858] xl:text-[16px] xl:leading-6">
                {body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
