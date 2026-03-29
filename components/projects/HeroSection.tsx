import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden bg-[#111315]">
      <Image
        src="/images/projects/Hero.png"
        alt="Modern residential development with multi-level homes and a gated frontage"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/28" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.1)_0%,rgba(0,0,0,0.4)_100%)]" />

      <div className="relative mx-auto flex min-h-[min(78vw,720px)] w-full max-w-[1440px] items-center justify-center px-5 py-20 text-center sm:px-8 md:px-12 xl:px-[76px] xl:py-28">
        <div className="max-w-[980px] text-white">
          <div className="inline-flex items-center justify-center rounded-full bg-white/12 px-7 py-3 text-sm font-medium uppercase tracking-[0.03em] text-white/92 backdrop-blur-[8px] sm:text-base">
            Our Projects
          </div>

          <h1 className="mt-10 font-display text-5xl leading-[0.98] tracking-[-0.06em] text-white sm:text-[3.7rem] md:text-[4.2rem] lg:text-[5.7rem]">
            <span className="block">Where Vision Becomes</span>
            <span className="mt-2 block">Real Places to Live.</span>
          </h1>

          <p className="mx-auto mt-10 max-w-[840px] font-display text-lg leading-[1.5] tracking-[-0.03em] text-white/86 sm:text-xl md:text-[1.6rem] md:leading-[1.45]">
            Explore the developments shaping Sikram Africa&apos;s new standard
            for sustainable, comfortable, and design-forward living in Liberia.
          </p>
        </div>
      </div>
    </section>
  );
}
