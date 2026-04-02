import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden bg-[#0f1113]">
      <Image
        src="/images/about/hero/Hero.png"
        alt="Modern apartment buildings under a bright sky"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/34" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.12)_0%,rgba(0,0,0,0.44)_100%)]" />

      <div className="relative mx-auto flex min-h-[min(78vw,720px)] w-full max-w-[1440px] items-center justify-center px-5 py-20 text-center sm:px-8 md:px-12 xl:px-[76px] xl:py-28">
        <div className="max-w-[980px] text-white">
          <div className="inline-flex items-center justify-center rounded-full bg-white/12 px-7 py-3 text-sm font-medium uppercase tracking-[0.03em] text-white/92 backdrop-blur-[8px] sm:text-base">
            Our Story
          </div>

          <h1 className="mt-10 font-display text-[32px] leading-[0.98] tracking-[-0.06em] text-white md:text-[64px]">
            <span className="block">Driven by Purpose</span>
            <span className="mt-2 block">and Vision</span>
          </h1>

          <p className="mx-auto mt-10 max-w-[840px] font-display text-[16px] leading-[1.5] tracking-[-0.03em] text-white/86 md:text-[18px]">
            Sikram Africa exists because Africa deserves better housing, and we
            are doing something about it.
          </p>
        </div>
      </div>
    </section>
  );
}
