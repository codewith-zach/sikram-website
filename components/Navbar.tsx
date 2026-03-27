"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navItems = [
  { href: "/", isEnabled: true, label: "Home" },
  { isEnabled: false, label: "About" },
  { isEnabled: false, label: "Projects" },
  { isEnabled: false, label: "Foundation" },
  { isEnabled: false, label: "Contact" },
];

type NavItem = (typeof navItems)[number];

function DesktopNavItem({ item }: { item: NavItem }) {
  if (item.isEnabled && item.href) {
    return (
      <Link
        href={item.href}
        className="text-sm font-medium uppercase tracking-[0.04em] text-white transition hover:text-[#173052]"
      >
        {item.label}
      </Link>
    );
  }

  return (
    <span className="select-none text-sm font-medium uppercase tracking-[0.04em] text-white/72">
      {item.label}
    </span>
  );
}

function MobileNavItem({
  item,
  onSelect,
}: {
  item: NavItem;
  onSelect: () => void;
}) {
  if (item.isEnabled && item.href) {
    return (
      <Link
        href={item.href}
        className="block rounded-[20px] px-5 py-4 text-lg font-medium uppercase tracking-[0.08em] text-white transition hover:bg-white/10"
        onClick={onSelect}
      >
        {item.label}
      </Link>
    );
  }

  return (
    <span className="block rounded-[20px] px-5 py-4 text-lg font-medium uppercase tracking-[0.08em] text-white/70">
      {item.label}
    </span>
  );
}

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-(image:--hero-gradient)">
      <div className="mx-auto w-full max-w-[1720px] px-4 py-4 sm:px-6 lg:px-10 xl:px-12">
        <div className="flex items-center justify-between xl:grid xl:grid-cols-[auto_1fr_auto] xl:gap-8">
          <Link
            href="/"
            className="flex items-center gap-2.5 text-white lg:gap-3"
            onClick={() => setIsMenuOpen(false)}
          >
            <Image
              src="/images/brand/logo.png"
              alt="Sikram Africa logo"
              width={23}
              height={23}
              priority
              className="h-7 w-7 lg:h-8 lg:w-8"
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
              <DesktopNavItem key={item.label} item={item} />
            ))}
          </nav>

          <span className="hidden min-w-[126px] select-none items-center justify-center rounded-[8px] bg-white px-7 py-3.5 text-sm font-bold uppercase tracking-[-0.01em] text-[#3f3f3f] xl:inline-flex">
            Get Started
          </span>

          <button
            type="button"
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            className="flex h-10 w-10 flex-col items-center justify-center gap-[4px] rounded-xl transition hover:bg-white/10 xl:hidden"
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <span
              className={`block h-[4px] w-7 rounded-full bg-white transition ${
                isMenuOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-[4px] w-7 rounded-full bg-white transition ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-[4px] w-7 rounded-full bg-white transition ${
                isMenuOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>
        </div>

        {isMenuOpen ? (
          <div className="mt-4 border-t border-white/25 pt-4 xl:hidden">
            <nav className="rounded-[28px] bg-white/14 p-3 shadow-[0_16px_40px_rgb(0_0_0_/_0.12)] backdrop-blur-xl">
              {navItems.map((item) => (
                <MobileNavItem
                  key={item.label}
                  item={item}
                  onSelect={() => setIsMenuOpen(false)}
                />
              ))}
              <span className="mt-3 flex select-none items-center justify-center rounded-[22px] bg-white px-5 py-4 text-base font-bold uppercase tracking-[0.05em] text-[#3f3f3f]">
                Get Started
              </span>
            </nav>
          </div>
        ) : null}
      </div>
    </header>
  );
}
