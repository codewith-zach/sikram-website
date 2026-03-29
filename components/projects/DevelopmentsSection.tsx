export function DevelopmentsSection() {
  return (
    <section aria-label="Our developments" className="bg-white">
      <div className="mx-auto w-full max-w-[1440px] px-4 pt-14 pb-16 sm:px-8 sm:pt-18 sm:pb-20 md:px-12 md:pt-20 md:pb-24 xl:grid xl:grid-cols-[minmax(0,710px)_minmax(0,1fr)] xl:gap-0 xl:px-[80px] xl:pt-[86px] xl:pb-[110px]">
        <div className="xl:pr-[86px]">
          <div className="flex items-center gap-6">
            <span className="shrink-0 text-[16px] font-medium uppercase text-[#00A651]">
              Our Developments
            </span>
            <div className="h-px flex-1 bg-[#00A651]/50" />
          </div>

          <h2 className="mt-8 max-w-[720px] font-display text-[24px] leading-[1.18] font-bold text-black xl:text-[40px] xl:leading-[1.18]">
            <span>Homes Designed for the</span>
            <br />
            <span className="text-[#4fb164]">Life You Deserve.</span>
          </h2>
        </div>

        <div className="mt-10 max-w-[760px] font-display text-[14px] leading-[22px] text-[#585858] xl:mt-0 xl:pl-[72px] xl:text-[16px] xl:leading-6">
          <p className="m-0">
            From concept to completion, every Sikram Africa development in
            Liberia is a testament to what is possible when innovation,
            planet-smart thinking, and genuine care come together in one place.
          </p>
          <p className="mt-[22px] mb-0 xl:mt-3">
            Sikram Africa is currently developing four properties across
            Liberia, ranging from residential row houses to a landmark
            mixed-use golfing estate. Every project shares the same
            foundation: green construction, global standards, and communities
            designed around the people who will live and work in them.
          </p>
        </div>
      </div>
    </section>
  );
}
