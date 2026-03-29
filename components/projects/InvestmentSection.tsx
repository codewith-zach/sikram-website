import Image from "next/image";
import { ArrowUpRight, BarChart3, Search, ShieldCheck, Users } from "lucide-react";

const investmentPoints = [
  { icon: BarChart3, label: "A Growing Market" },
  { icon: ShieldCheck, label: "A Developer You Can Trust" },
  { icon: Search, label: "Total Transparency" },
  { icon: Users, label: "Community That Holds Its Value" },
] as const;

export function InvestmentSection() {
  return (
    <section aria-label="Investment opportunity" className="bg-white">
      <div className="mx-auto w-full max-w-[1440px] px-4 pt-6 pb-16 sm:px-8 sm:pt-8 sm:pb-20 md:px-12 md:pt-10 md:pb-24 xl:px-[80px] xl:pt-[8px] xl:pb-[110px]">
        <div className="grid gap-10 xl:grid-cols-[minmax(0,540px)_minmax(0,1fr)] xl:items-start xl:gap-[64px]">
          <div>
            <div className="flex items-center gap-6">
              <span className="shrink-0 text-[16px] font-medium uppercase text-[#00A651]">
                Sustainability
              </span>
              <div className="h-px flex-1 bg-[#00A651]/50" />
            </div>

            <h2 className="mt-8 font-display text-[24px] leading-[1.18] font-bold text-black xl:max-w-[31rem] xl:text-[40px] xl:leading-[1.18]">
              <span>Invest in Real Estate in</span>
              <br />
              <span>Liberia. Invest in Your</span>
              <br />
              <span>Future.</span>
            </h2>

            <p className="mt-8 font-display text-[14px] leading-[22px] text-[#585858] xl:mt-10 xl:max-w-[31rem] xl:text-[16px] xl:leading-6">
              A Sikram Africa property is more than a beautiful home: it&apos;s
              a smart real estate investment starting at $XXX,XXX in
              Liberia&apos;s booming market. Rapid urbanisation across Liberia
              is increasing demand for well-planned, sustainable housing faster
              than supply can keep up. Our developments are designed to meet
              that growing need.
            </p>

            <div className="mt-8 flex flex-col gap-3 xl:mt-12 xl:gap-[12px]">
              {investmentPoints.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-4 rounded-[14px] bg-[#f7f8f5] px-4 py-4 sm:px-5 xl:min-h-[64px] xl:px-4"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#edf8f0] text-[#64bf79]">
                    <Icon aria-hidden="true" className="h-5 w-5" strokeWidth={1.9} />
                  </div>
                  <span className="min-w-0 flex-1 font-display text-[18px] leading-[1.25] font-semibold text-[#5e5e5e] xl:text-[16px] xl:leading-6">
                    {label}
                  </span>
                  <ArrowUpRight
                    aria-hidden="true"
                    className="h-5 w-5 shrink-0 text-[#111111]"
                    strokeWidth={2.2}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden bg-white xl:pt-[10px]">
            <div className="absolute bottom-0 left-0 top-[50%] hidden w-[10px] -translate-y-1/2 bg-[#59b96f] xl:block" />
            <div className="relative aspect-[710/774] w-full overflow-hidden xl:ml-[10px]">
              <Image
                src="/images/projects/sustainability/building.png"
                alt="Mid-rise residential building in a landscaped development"
                fill
                sizes="(min-width: 1280px) 700px, 100vw"
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
