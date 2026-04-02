export function QuoteSection() {
  return (
    <section aria-label="Quote" className="bg-white">
      <div className="mx-auto w-full max-w-[1440px] px-4 py-16 sm:px-8 sm:py-20 md:px-12 md:py-24 xl:px-[80px] xl:py-[128px]">
        <div className="text-center">
          <blockquote className="mx-auto max-w-[1000px] font-display text-[24px] leading-[1.3] font-medium text-black md:text-[32px] md:leading-[1.25]">
            &ldquo;The art of living is not just about where you live. It is about the opportunities you have to become who you are meant to be.&rdquo;
          </blockquote>
          <cite className="mt-8 block font-display text-[18px] font-medium text-[#00A651] md:mt-10 md:text-[20px]">
            — Sikram Foundation
          </cite>
        </div>
      </div>
    </section>
  );
}