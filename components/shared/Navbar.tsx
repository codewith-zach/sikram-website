"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSyncExternalStore, useState } from "react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/foundation", label: "Foundation" },
  { href: "/contact", label: "Contact" },
];

type NavItem = (typeof navItems)[number];

function DesktopNavItem({
  currentPath,
  item,
  isLightVariant,
}: {
  currentPath: string;
  item: NavItem;
  isLightVariant: boolean;
}) {
  const isActive = currentPath === item.href;
  const baseClassName =
    "text-sm font-medium uppercase tracking-[0.04em] transition";
  const colorClassName = isLightVariant
    ? isActive
      ? "text-[#0f1720]"
      : "text-[#1e1e1e] hover:text-[#00A651]"
    : isActive
      ? "text-white"
      : "text-white hover:text-[#173052]";

  return (
    <Link href={item.href} className={`${baseClassName} ${colorClassName}`}>
      {item.label}
    </Link>
  );
}

function MobileNavItem({
  currentPath,
  isLightVariant,
  item,
  onSelect,
}: {
  currentPath: string;
  isLightVariant: boolean;
  item: NavItem;
  onSelect: () => void;
}) {
  const isActive = currentPath === item.href;
  const className = isLightVariant
    ? `block rounded-[20px] px-5 py-4 text-lg font-medium uppercase tracking-[0.08em] transition ${
        isActive
          ? "bg-[#f1f5f1] text-[#111111]"
          : "text-[#222222] hover:bg-black/5"
      }`
    : `block rounded-[20px] px-5 py-4 text-lg font-medium uppercase tracking-[0.08em] transition ${
        isActive ? "bg-white/12 text-white" : "text-white hover:bg-white/10"
      }`;

  return (
    <Link href={item.href} className={className} onClick={onSelect}>
      {item.label}
    </Link>
  );
}

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const scrollY = useSyncExternalStore(
    (onStoreChange) => {
      if (typeof window === "undefined") {
        return () => {};
      }
      window.addEventListener("scroll", onStoreChange, { passive: true });
      return () => window.removeEventListener("scroll", onStoreChange);
    },
    () => (typeof window === "undefined" ? 0 : window.scrollY),
    () => 0,
  );

  const isLightVariant = pathname !== "/" || scrollY > 10;

  const headerClassName = isLightVariant
    ? "sticky top-0 z-50 border-b border-black/6 bg-white"
    : "sticky top-0 z-50 bg-(image:--hero-gradient)";
  const brandClassName = isLightVariant ? "text-[#121212]" : "text-white";
  const ctaClassName = isLightVariant
    ? "hidden min-w-[190px] items-center justify-center rounded-[14px] bg-[#00A651] px-8 py-4 text-sm font-bold uppercase tracking-[0.01em] text-white transition hover:bg-[#00A651]/90 xl:inline-flex"
    : "hidden min-w-[126px] select-none items-center justify-center rounded-[8px] bg-white px-7 py-3.5 text-sm font-bold uppercase tracking-[-0.01em] text-[#3f3f3f] xl:inline-flex";
  const menuButtonClassName = isLightVariant
    ? "flex h-10 w-10 flex-col items-center justify-center gap-[4px] rounded-xl transition hover:bg-black/5 xl:hidden"
    : "flex h-10 w-10 flex-col items-center justify-center gap-[4px] rounded-xl transition hover:bg-white/10 xl:hidden";
  const menuBarClassName = isLightVariant ? "bg-[#121212]" : "bg-white";
  const mobilePanelClassName = isLightVariant
    ? "mt-4 border-t border-black/10 pt-4 xl:hidden"
    : "mt-4 border-t border-white/25 pt-4 xl:hidden";
  const mobilePanelSurfaceClassName = isLightVariant
    ? "rounded-[28px] border border-black/8 bg-white p-3 shadow-[0_16px_40px_rgb(0_0_0_/_0.08)]"
    : "rounded-[28px] bg-white/14 p-3 shadow-[0_16px_40px_rgb(0_0_0_/_0.12)] backdrop-blur-xl";
  const mobileCtaClassName = isLightVariant
    ? "mt-3 flex select-none items-center justify-center rounded-[22px] bg-[#4da65a] px-5 py-4 text-base font-bold uppercase tracking-[0.05em] text-white"
    : "mt-3 flex select-none items-center justify-center rounded-[22px] bg-white px-5 py-4 text-base font-bold uppercase tracking-[0.05em] text-[#3f3f3f]";

  return (
    <header className={headerClassName}>
      <div className="mx-auto w-full max-w-[1440px] px-4 py-4 sm:px-6 lg:px-10 xl:px-12">
        <div className="flex items-center justify-between xl:grid xl:grid-cols-[auto_1fr_auto] xl:gap-8">
          <Link
            href="/"
            className={`flex items-center gap-2.5 lg:gap-3 ${brandClassName}`}
            onClick={() => setIsMenuOpen(false)}
          >
            <Image
              src={isLightVariant ? "/images/brand/green-logo.png" : "/images/brand/logo.png"}
              alt="Sikram Africa logo"
              width={23}
              height={23}
              priority
              className={isLightVariant ? "h-9 w-9 lg:h-10 lg:w-10" : "h-7 w-7 lg:h-8 lg:w-8"}
            />
            <div className="flex items-baseline gap-1.5 uppercase leading-none lg:gap-2">
              <span className="text-base font-bold tracking-[-0.06em] sm:text-xl lg:text-3xl">
                Sikram
              </span>
              <span className="text-base font-light tracking-[-0.07em] sm:text-lg lg:text-3xl">
                Africa
              </span>
            </div>
          </Link>

          <nav className="hidden items-center justify-center gap-10 xl:flex xl:gap-14">
            {navItems.map((item) => (
              <DesktopNavItem
                key={item.label}
                currentPath={pathname}
                item={item}
                isLightVariant={isLightVariant}
              />
            ))}
          </nav>

          <Link href="/contact" className={ctaClassName}>
            Get Started
          </Link>

          <button
            type="button"
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            className={menuButtonClassName}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <span
              className={`block h-[4px] w-7 rounded-full transition ${menuBarClassName} ${
                isMenuOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-[4px] w-7 rounded-full transition ${menuBarClassName} ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-[4px] w-7 rounded-full transition ${menuBarClassName} ${
                isMenuOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>
        </div>

        {isMenuOpen ? (
          <div className={mobilePanelClassName}>
            <nav className={mobilePanelSurfaceClassName}>
              {navItems.map((item) => (
                <MobileNavItem
                  key={item.label}
                  currentPath={pathname}
                  isLightVariant={isLightVariant}
                  item={item}
                  onSelect={() => setIsMenuOpen(false)}
                />
              ))}
              <Link
                href="/contact"
                className={mobileCtaClassName}
                onClick={() => setIsMenuOpen(false)}
              >
                Get Started
              </Link>
            </nav>
          </div>
        ) : null}
      </div>
    </header>
  );
}
