"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "@/lib/gsapConfig";

type RevealDirection = "left" | "right" | "up";

type ScrollRevealProps = {
  children: React.ReactNode;
  className?: string;
  delayMs?: number;
  direction?: RevealDirection;
};

function getHiddenState(direction: RevealDirection) {
  switch (direction) {
    case "left":
      return { x: -40, opacity: 0 };
    case "right":
      return { x: 40, opacity: 0 };
    case "up":
    default:
      return { y: 40, opacity: 0 };
  }
}

export function ScrollReveal({
  children,
  className,
  delayMs = 0,
  direction = "up",
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const triggers: ScrollTrigger[] = [];

      if (ref.current) {
        gsap.set(ref.current, getHiddenState(direction));

        const trigger = ScrollTrigger.create({
          trigger: ref.current,
          start: "top 85%",
          once: true,
          onEnter: () => {
            gsap.to(ref.current, {
              x: 0,
              y: 0,
              opacity: 1,
              duration: 0.8,
              delay: delayMs / 1000,
              ease: "power3.out" as gsap.EaseString,
            });
          },
        });

        triggers.push(trigger);
      }

      return () => {
        triggers.forEach((trigger) => trigger.kill());
      };
    },
    { scope: ref }
  );

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}