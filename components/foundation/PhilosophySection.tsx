export function PhilosophySection() {
    return (
      <section aria-label="Philosophy" className="bg-white">
        <div className="mx-auto w-full max-w-[1440px] px-4 pt-14 pb-20 sm:px-8 sm:pt-18 sm:pb-24 md:px-12 md:pt-20 md:pb-28 xl:grid xl:grid-cols-[minmax(0,710px)_minmax(0,1fr)] xl:gap-0 xl:px-[80px] xl:pt-[86px] xl:pb-[128px]">
          <div className="xl:pr-[86px]">
            <div className="flex items-center gap-6">
              <span className="shrink-0 text-[16px] font-medium uppercase text-[#00A651]">
                Philosophy
              </span>
              <div className="h-px flex-1 bg-[#00A651]/50" />
            </div>
  
            <h2 className="mt-8 max-w-[720px] font-display text-[24px] leading-[1.18] font-bold text-black xl:text-[40px] xl:leading-[1.18]">
              <span>Giving Back to the</span>
              <br />
              <span>Communities We Build </span>
            </h2>
          </div>
  
          <div className="mt-10 max-w-[760px] font-display text-[14px] leading-[22px] text-[#585858] xl:mt-0 xl:pl-[72px] xl:text-[16px] xl:leading-6">
            <p className="m-0">
            At the heart of every home is a community. Through our foundation, we are committed to 
            supporting initiatives that improve lives, strengthen neighborhoods, and create opportunities 
            for future generations. From education and housing support to community development projects, 
            we believe real impact begins where we live and build.
            </p>
          </div>
        </div>
      </section>
    );
  }
  