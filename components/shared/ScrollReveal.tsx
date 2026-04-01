"use client";

import { motion, useReducedMotion } from "motion/react";
import { useRef } from "react";
import { useInView } from "motion/react";

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
      return { opacity: 0, x: -40, y: 0 };
    case "right":
      return { opacity: 0, x: 40, y: 0 };
    case "up":
    default:
      return { opacity: 0, x: 0, y: 40 };
  }
}

export function ScrollReveal({
  children,
  className,
  delayMs = 0,
  direction = "up",
}: ScrollRevealProps) {
  const ref = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  const isInView = useInView(ref, {
    once: true,
    margin: "-10% 0px",
  });

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={getHiddenState(direction)}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{
        delay: delayMs / 1000,
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
      style={{
        willChange: "transform, opacity",
        transform: "translateZ(0)",
      }}
    >
      {children}
    </motion.div>
  );
}