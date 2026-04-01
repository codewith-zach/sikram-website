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
  { href: "tel:+61485696123", label: "+61 485 696 123" },
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

function YouTubeIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505a3.017 3.017 0 0 0-2.122 2.136C0 7.339 0 12 0 12s0 4.661.505 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 16.661 24 12 24 12s0-4.661-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

function SnapchatIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor">
      <path d="M12.001 0C5.375 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12.001 0zm3.7 18.066c-.236.088-.632.17-.974.25a16.474 16.474 0 0 1-2.727.241c-.916 0-1.817-.083-2.727-.241a15.887 15.887 0 0 1-.975-.25c-.076-.027-.118-.041-.118-.146 0-.089.064-.136.117-.164.226-.116.552-.093 1.048-.018 1.565.168.077.028.193.057.267.06.093.003.162.064.162.15 0 .134-.12.242-.269.242-.048 0-.091-.016-.129-.047l-.036-.028c-.447-.314-.663-.8-.663-1.525 0-.966.582-1.618 1.58-1.618.362 0 .692.106.968.273.045.027.068.06.068.11 0 .065-.06.125-.095.195-.095h-.004c-.417 0-.753-.336-.753-.753 0-.416.336-.753.753-.753.389 0 .72.263.756.668.006.077.064.129.077.129.046 0 .075-.032.087-.073.097-.27.06-.545.178-.791.374-.054.044-.096.082-.125.118-.028.022-.055.034-.055.084 0 .039.018.07.061.092.06.054.08.087.08.087.058 0 .094-.064.121-.13.026-.043.073-.112.073-.198 0-.13-.034-.228-.104-.288-.069-.059-.176-.085-.322-.078-.062.003-.146.009-.256.018-.08.006-.159.013-.24.017-.081.005-.162.008-.243.008-.253 0-.456-.204-.456-.456 0-.252.204-.456.456-.456.252 0 .456.204.456.456z" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor">
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08-1.53.63-3.09 1.75-4.17.08-.08.16-.19.21-.3-.07-.14.08-.15.05-.24.03-1.09-.22-2.17-.42-3.26-.65a8.86 8.86 0 0 0-2.28-.05c-.29.02-.58.05-.86.08-1.54.17-3.07.33-4.61.48a.33.33 0 0 0-.26.31c0 1.57-.01 3.14.01 4.71-.05.03-.11.04-.17.04a9.05 9.05 0 0 1-2.26.35c-1.43.29-2.7 1.09-3.31 2.34-.46.93-.6 1.96-.6 1.96.08 1.14.4 2.22.9 3.21 1.12 2.21 3.13 2.8 5.24 1.48a8.05 8.05 0 0 0 4.39-.85c.14-.07.24-.18.32-.32.05-.08.03-.16-.06-.24.03-1.13-.42-2.28-.8-3.43-1.19a5.07 5.07 0 0 1-2.64-2.39c-.24-.41-.36-.89-.36-1.38-.01-1.12.51-2.24 1.12-3.31.35-.61.63-1.13 1.07-1.41 1.62-.11.22-.14.51-.15.78 0 1.6-.01 3.2.01 4.8.03.06.04.11.11.12.19.17.15.32.3 1.21.35 1.21h.02c.36 0 .72-.03 1.07-.07.27-.03.53-.07.8-.12.26-.05.51-.1.76-.16.25-.06.49-.12.72-.2.14-.36.21-.78.12-1.07a.3.3 0 0 0-.26-.32c-1.04.2-2.07.37-3.1.55-.13.02-.26.04-.38.07-.26.06-.49.13-.69.24a1.99 1.99 0 0 0-.67.9c-.08.29-.07.6.03.88.19.54.5.98.8 1.32.92.27.01.54.02.8.03h2.46c.25-.01.5-.02.75-.04.06-.01.12-.02.18-.04.15-.05.28-.13.34-.28.05-.16.03-.33-.04-.49-.07-.17-.04-.33-.09-.5-.15-.16-.06-.32-.12-.49-.13a.34.34 0 0 0-.3.09c-.09.25-.15.53-.15.82.01.54.18 1.07.44 1.55.26.46.62.84.79 1.15.23.15.3.37.32.57.39.29.02.59.02.88-.01.25-.02.49-.06.73-.12.24-.07.47-.16.68-.28.2-.13.37-.29.55-.51a2.2 2.2 0 0 0-.44-.37c-.17-.1-.37-.13-.57-.1-.04.01-.08.03-.12.04-.24.06-.47.17-.67.35a1.7 1.7 0 0 0-.58.75c-.18.27-.22.6-.13.92.19.58.48 1.06.84 1.3.18.12.38.18.58.19.29.01.57.01.86-.01.27-.03.53-.08.79-.15.23-.08.43-.19.6-.34.16-.16.26-.36.35-.58.09-.23.13-.49.13-.78-.01-.3-.03-.6-.09-.89-.19-.58-.49-1.07-.91-1.4-.23-.16-.49-.23-.76-.19-.13.02-.25.07-.37.11a6.6 6.6 0 0 0-.61.35c-.2.1-.38.27-.51.49a2.19 2.19 0 0 0-.34.59c-.06.23-.04.48.06.71.2.54.49.98.84 1.3.18.12.38.18.58.19.29.01.57.01.86-.01.27-.03.53-.08.79-.15.23-.08.43-.19.6-.34.16-.16.26-.36.35-.58.09-.23.13-.49.13-.78-.01-.3-.03-.6-.09-.89-.19-.58-.49-1.07-.91-1.4-.23-.16-.49-.23-.76-.19z" />
    </svg>
  );
}

function SocialButton({
  icon,
  label,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="inline-flex h-16 w-16 items-center justify-center border border-white/18 text-white transition hover:bg-white/8"
    >
      {icon}
    </a>
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
                <SocialButton icon={<InstagramIcon />} label="Instagram" href="https://www.instagram.com/sikram_africa?igsh=a3o3cHN0M2p4MXJ4" />
                <SocialButton icon={<LinkedInIcon />} label="LinkedIn" href="#" />
                <SocialButton icon={<FacebookIcon />} label="Facebook" href="https://www.facebook.com/share/1aoiYBCeXe/?mibextid=wwXIfr" />
                <SocialButton icon={<XIcon />} label="X" href="#" />
                <SocialButton icon={<YouTubeIcon />} label="YouTube" href="https://www.youtube.com/@sikramrealestate1747?si=RDLbIgGy0kpYUiMH" />
                <SocialButton icon={<SnapchatIcon />} label="Snapchat" href="#" />
                <SocialButton icon={<TikTokIcon />} label="TikTok" href="#" />
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
