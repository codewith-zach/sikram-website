import Image from "next/image";
import Link from "next/link";

const companyLinks = [
  { label: "About Us" },
  { label: "Our Story" },
  { label: "Sustainability" },
  { label: "Careers" },
  { label: "News" },
] as const;

const propertyLinks = [
  { label: "Ariel Terrace" },
  { label: "All Projects" },
  { label: "Buy a Home" },
  { label: "Invest" },
] as const;

const contactLinks = [
  { label: "Monrovia, Liberia" },
  { href: "mailto:hello@sikramafrica.com", label: "hello@sikramafrica.com" },
  { href: "tel:+231000000000", label: "+231 XXX XXX XXXX" },
  { href: "/contact", label: "Get Directions" },
] as const;

type TextLink = {
  href?: string;
  label: string;
};

function FooterTextLink({ href, label }: TextLink) {
  const className =
    "font-display text-[16px] leading-[1.35] text-white transition hover:text-white/80 md:text-[18px]";

  if (href) {
    return (
      <Link href={href} className={className}>
        {label}
      </Link>
    );
  }

  return <span className={className}>{label}</span>;
}

function FooterHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-[14px] font-medium uppercase tracking-[0.02em] text-white/90">
      {children}
    </h3>
  );
}

function InstagramIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-7 w-7"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor">
      <path d="M6.94 8.5A1.56 1.56 0 1 0 6.94 5.38 1.56 1.56 0 0 0 6.94 8.5Z" />
      <path d="M5.6 9.88h2.67V18.4H5.6zM10.3 9.88h2.56v1.16h.04c.35-.67 1.23-1.38 2.54-1.38 2.72 0 3.22 1.79 3.22 4.12v4.62H16V14.3c0-.98-.02-2.24-1.36-2.24-1.36 0-1.57 1.06-1.57 2.17v4.17H10.3V9.88Z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor">
      <path d="M13.37 20v-7.3h2.45l.37-2.84h-2.82V8.04c0-.82.22-1.38 1.4-1.38h1.5V4.12c-.26-.03-1.15-.12-2.18-.12-2.16 0-3.64 1.32-3.64 3.74v2.12H8v2.84h2.45V20h2.92Z" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor">
      <path d="M18.9 4H21l-4.58 5.23L21.8 20h-4.2l-3.3-4.79L10.1 20H8l4.89-5.59L7.8 4H12l2.98 4.33L18.9 4Zm-.74 14.73h1.17L11.36 5.2h-1.26l8.06 13.53Z" />
    </svg>
  );
}

function SocialButton({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      className="inline-flex h-16 w-16 items-center justify-center border border-white/18 text-white transition hover:bg-white/8"
    >
      {icon}
    </button>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#00A651]">
      <div className="mx-auto w-full max-w-[1440px]">
        <div className="px-5 py-8 text-white sm:px-8 sm:py-10 md:px-12 md:py-14 xl:px-[80px] xl:pt-[82px] xl:pb-[56px]">
          <div className="grid gap-10 xl:grid-cols-[1.55fr_0.78fr_0.78fr_0.72fr] xl:gap-16">
            <div className="max-w-[390px]">
              <Link href="/" className="flex items-center gap-2.5 text-white">
                <Image
                  src="/images/brand/logo.png"
                  alt="Sikram Africa logo"
                  width={34}
                  height={34}
                  className="h-8 w-8"
                />
                <div className="flex items-baseline gap-1.5 uppercase leading-none">
                  <span className="text-[20px] font-bold tracking-[-0.06em]">Sikram</span>
                  <span className="text-[20px] font-light tracking-[-0.07em]">Africa</span>
                </div>
              </Link>

              <p className="mt-7 max-w-[23rem] font-display text-[16px] leading-[1.55] text-white/92 md:text-[18px]">
                Building a new standard for real estate across the continent,
                launching in Liberia with eco-friendly, thoughtfully designed
                homes and communities.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <SocialButton icon={<InstagramIcon />} label="Instagram" />
                <SocialButton icon={<LinkedInIcon />} label="LinkedIn" />
                <SocialButton icon={<FacebookIcon />} label="Facebook" />
                <SocialButton icon={<XIcon />} label="X" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-x-8 gap-y-10 xl:contents">
              <div>
                <FooterHeading>Company</FooterHeading>
                <div className="mt-7 flex flex-col gap-6">
                  {companyLinks.map((item) => (
                    <FooterTextLink key={item.label} {...item} />
                  ))}
                </div>
              </div>

              <div>
                <FooterHeading>Properties</FooterHeading>
                <div className="mt-7 flex flex-col gap-6">
                  {propertyLinks.map((item) => (
                    <FooterTextLink key={item.label} {...item} />
                  ))}
                </div>
              </div>

              <div className="col-span-2 xl:col-span-1">
                <FooterHeading>Contact</FooterHeading>
                <div className="mt-7 flex flex-col gap-6">
                  {contactLinks.map((item) => (
                    <FooterTextLink key={item.label} {...item} />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-9 border-t border-white/35 pt-6 md:mt-12 md:pt-7 xl:mt-[92px] xl:pt-[58px]">
            <div className="flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">
              <p className="font-display text-[16px] leading-[1.5] text-white/92 md:text-[18px]">
                &copy; 2024 Sikram Africa. All rights reserved
              </p>
              <p className="font-display text-[16px] leading-[1.5] uppercase tracking-[-0.03em] text-white/92 md:text-[18px] xl:text-right">
                Africa&apos;s Future, <span className="font-bold text-white">Built Today.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
