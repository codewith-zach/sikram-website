"use client";

import { motion, useReducedMotion } from "motion/react";

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
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={getHiddenState(direction)}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.2, margin: "0px 0px -10% 0px" }}
      transition={{
        delay: delayMs / 1000,
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1],
      }}
      style={{ willChange: "transform, opacity" }}
    >
      {children}
    </motion.div>
  );
}
