import Image from "next/image";

export function HeroSection() {
    return (
      <section aria-label="Vlandee Guest House hero" className="bg-white">
        <div className="relative h-[260px] sm:h-[360px] md:h-[420px] xl:h-[520px]">
          <Image
            src="/images/project_details/vlandee/Hero.png"
            alt="Exterior view of Vlandee Guest House"
            fill
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
      </section>
    );
  }
  