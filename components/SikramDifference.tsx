import {
  Award,
  HeartPulse,
  Lightbulb,
  type LucideIcon,
  Search,
  ShieldCheck,
  Users,
} from "lucide-react";

type DifferenceItem = {
  body: string;
  icon: LucideIcon;
  title: string;
};

const differenceItems: DifferenceItem[] = [
  {
    icon: Lightbulb,
    title: "Innovation",
    body:
      "We apply cutting-edge thinking and global technology to sustainable housing development in Liberia, solving old problems in bold new ways.",
  },
  {
    icon: Search,
    title: "Transparency",
    body:
      "Every step of your property journey is open and honest. We are clear about timelines, costs, and processes because you deserve to know.",
  },
  {
    icon: HeartPulse,
    title: "Health & Wellbeing",
    body:
      "Beyond shelter, we design eco-friendly environments that support physical health, mental peace, and a genuinely high quality of life for every resident.",
  },
  {
    icon: Award,
    title: "Excellence",
    body:
      "Quality above quantity, always. We pay attention to every detail, work with the best hands in the business, and refuse to compromise on standard.",
  },
  {
    icon: ShieldCheck,
    title: "Trust",
    body:
      "Our word is our bond, and our homes are the proof. Everything we commit to, we deliver with integrity at every stage of the journey.",
  },
  {
    icon: Users,
    title: "Community",
    body:
      "We create thoughtfully designed living hubs that provide every necessary amenity for the good life, improving livelihoods across Africa beginning in Liberia.",
  },
] as const;

function DifferenceCard({
  body,
  icon: Icon,
  title,
}: DifferenceItem) {
  return (
    <article className="px-6 py-8 md:flex md:flex-col md:items-center md:text-center xl:block xl:min-h-[262px] xl:px-6 xl:pt-12 xl:pb-10 xl:text-left">
      <div className="text-[#62bf7b]">
        <Icon className="h-5 w-5 xl:h-6 xl:w-6" strokeWidth={1.9} aria-hidden="true" />
      </div>
      <h3 className="mt-8 font-display text-[18px] leading-[1.05] font-semibold tracking-[-0.03em] text-black xl:mt-9 xl:text-[19px]">
        {title}
      </h3>
      <p className="mt-4 max-w-[19rem] font-display text-[14px] leading-[1.45] text-[#5d5d5d] md:mx-auto md:max-w-[32rem] xl:mx-0 xl:max-w-[18.75rem] xl:text-[16px] xl:leading-[1.42]">
        {body}
      </p>
    </article>
  );
}

export function SikramDifference() {
  return (
    <section aria-label="The Sikram difference" className="bg-white">
      <div className="mx-auto w-full max-w-[1440px] px-4 py-10 sm:px-5 md:px-6 xl:px-[80px] xl:py-[72px]">
        <div className="xl:grid xl:grid-cols-[minmax(0,1fr)_315px] xl:items-start xl:gap-16">
          <div>
            <div className="flex items-center gap-4 xl:gap-7">
              <span className="shrink-0 text-[11px] font-medium uppercase tracking-[0.02em] text-[#62bf7b] xl:text-[15px]">
                The Sikram Difference
              </span>
              <div className="h-px w-[64px] bg-[#62bf7b]/70 xl:w-[143px]" />
            </div>
            <h2 className="mt-4 max-w-[17rem] font-display text-[24px] leading-[0.98] font-bold tracking-[-0.05em] text-black xl:mt-6 xl:max-w-none xl:text-[40px]">
              What Sets Us Apart
            </h2>
          </div>

          <p className="mt-4 font-display text-[14px] leading-[1.48] text-[#666] xl:mt-0 xl:max-w-[315px] xl:pt-[2px] xl:text-[16px] xl:leading-[1.45]">
            Six principles guide everything we build - from the communities we
            design to the standards we absolutely refuse to compromise on.
          </p>
        </div>

        <div className="mt-8 overflow-hidden border border-[#ececec] xl:mt-14">
          <div className="grid grid-cols-1 divide-y divide-[#ececec] xl:grid-cols-3 xl:divide-y-0 xl:[&>*:not(:nth-child(3n))]:border-r xl:[&>*:nth-child(-n+3)]:border-b xl:[&>*]:border-[#ececec]">
            {differenceItems.map((item) => (
              <DifferenceCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
