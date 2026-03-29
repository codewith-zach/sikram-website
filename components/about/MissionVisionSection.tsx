type MissionVisionRowProps = {
  body: React.ReactNode;
  label: string;
  title: string;
};

function MissionVisionRow({ body, label, title }: MissionVisionRowProps) {
  return (
    <div className="grid gap-10 xl:grid-cols-[minmax(0,710px)_minmax(0,1fr)] xl:gap-0">
      <div className="xl:pr-[86px]">
        <div className="flex items-center gap-6">
          <span className="shrink-0 text-[16px] font-medium uppercase text-[#00A651]">
            {label}
          </span>
          <div className="h-px flex-1 bg-[#00A651]/50" />
        </div>

        <h2 className="mt-8 max-w-[720px] font-display text-[24px] leading-[1.18] font-bold text-black xl:text-[40px] xl:leading-[1.18]">
          {title}
        </h2>
      </div>

      <div className="max-w-[760px] font-display text-[14px] leading-[22px] text-[#585858] xl:pl-[72px] xl:text-[16px] xl:leading-6">
        {body}
      </div>
    </div>
  );
}

export function MissionVisionSection() {
  return (
    <section aria-label="Mission and vision" className="bg-white">
      <div className="mx-auto w-full max-w-[1440px] px-4 pt-6 pb-14 sm:px-8 sm:pt-8 sm:pb-18 md:px-12 md:pt-10 md:pb-20 xl:px-[80px] xl:pt-[28px] xl:pb-[86px]">
        <MissionVisionRow
          label="Mission"
          title="Why We Exist"
          body={
            <p className="m-0">
              To innovatively solve the housing and construction challenges of
              Africa through the application of best global practices,
              technology, and services creating eco-friendly, healthy living
              conditions that improve the lives of every person we serve.
            </p>
          }
        />

        <div className="pt-14 sm:pt-18 md:pt-20 xl:pt-[96px]">
          <MissionVisionRow
            label="Vision"
            title="Where We Are Going"
            body={
              <>
                <p className="m-0">
                  A well-sheltered, eco-friendly Liberia and Africa where real
                  estate and residential development meet global standards.
                </p>
                <p className="mt-[22px] mb-0 xl:mt-3">
                  A future where African cities are defined by sustainable,
                  well-planned communities built to global standards: beginning
                  in Liberia and expanding across the continent.
                </p>
              </>
            }
          />
        </div>
      </div>
    </section>
  );
}
