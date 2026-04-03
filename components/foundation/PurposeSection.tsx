export function PurposeSection() {
    return (
      <section aria-label="Philosophy" className="bg-white">
        <div className="mx-auto w-full max-w-[1440px] px-4 pt-14 pb-20 sm:px-8 sm:pt-18 sm:pb-24 md:px-12 md:pt-20 md:pb-28 xl:grid xl:grid-cols-[minmax(0,710px)_minmax(0,1fr)] xl:gap-0 xl:px-[80px] xl:pt-[86px] xl:pb-[128px]">
          <div className="xl:pr-[86px]">
            <div className="flex items-center gap-6">
              <span className="shrink-0 text-[16px] font-medium uppercase text-[#00A651]">
                WHY IT MATTERS
              </span>
              <div className="h-px flex-1 bg-[#00A651]/50" />
            </div>
  
            <h2 className="mt-8 max-w-[720px] font-display text-[24px] leading-[1.18] font-bold text-black xl:text-[40px] xl:leading-[1.18]">
              <span>A Better-Built Africa Starts</span>
              <br />
              <span>With Its People</span>
            </h2>
          </div>
  
          <div className="mt-10 max-w-[760px] font-display text-[14px] leading-[22px] text-[#585858] xl:mt-0 xl:pl-[72px] xl:text-[16px] xl:leading-6">
            <p className="m-0">
            Africa is a continent of extraordinary potential, and its greatest asset is its youth. A young, ambitious, and growing population that deserves access to the tools, training, and opportunities that will allow them to lead the next chapter of this continent&apos;s story.
            </p>
            <p className="mt-[22px] mb-0 xl:mt-3">
            The Sikram Foundation exists because we recognise that a property developer&apos;s responsibility does not end at the boundary of its estates. The communities we build are part of something wider; and that wider world is only as strong as the people within it.
            </p>
          </div>
        </div>
      </section>
    );
  }
  