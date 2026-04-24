"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import * as React from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

type FadeInProps = {
  children: React.ReactNode;
  /** Trigger on scroll-into-view (default true). Set false for above-the-fold immediate play. */
  onView?: boolean;
  /** Pixels to translate from. Default 24. */
  y?: number;
  /** Animation duration in seconds. Default 0.55. */
  duration?: number;
  /** Delay in seconds. Default 0. */
  delay?: number;
  /** Element class. */
  className?: string;
  /** Render as different element. Default div. */
  as?: "div" | "section" | "article" | "header" | "footer" | "li";
};

export function FadeIn({
  children,
  onView = true,
  y = 24,
  duration = 0.55,
  delay = 0,
  className,
  as = "div",
}: FadeInProps) {
  const reduced = useReducedMotion();
  const MotionTag = motion[as];

  const initial = reduced ? { opacity: 1, y: 0 } : { opacity: 0, y };
  const animate = { opacity: 1, y: 0 };
  const transition = { duration: reduced ? 0 : duration, delay: reduced ? 0 : delay, ease: EASE };

  if (onView) {
    return (
      <MotionTag
        className={className}
        initial={initial}
        whileInView={animate}
        viewport={{ once: true, amount: 0.2 }}
        transition={transition}
      >
        {children}
      </MotionTag>
    );
  }

  return (
    <MotionTag
      className={className}
      initial={initial}
      animate={animate}
      transition={transition}
    >
      {children}
    </MotionTag>
  );
}

type StaggerProps = {
  children: React.ReactNode;
  className?: string;
  /** Stagger delay between children in seconds. Default 0.08. */
  stagger?: number;
  /** Initial delay before first child animates. Default 0. */
  initialDelay?: number;
  /** Trigger on scroll-into-view. Default true. */
  onView?: boolean;
  as?: "div" | "ul" | "section";
};

const containerVariants = (stagger: number, initialDelay: number): Variants => ({
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: { staggerChildren: stagger, delayChildren: initialDelay },
  },
});

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
};

export function Stagger({
  children,
  className,
  stagger = 0.08,
  initialDelay = 0,
  onView = true,
  as = "div",
}: StaggerProps) {
  const reduced = useReducedMotion();
  const MotionTag = motion[as];

  if (reduced) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  if (onView) {
    return (
      <MotionTag
        className={className}
        variants={containerVariants(stagger, initialDelay)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
      >
        {children}
      </MotionTag>
    );
  }

  return (
    <MotionTag
      className={className}
      variants={containerVariants(stagger, initialDelay)}
      initial="hidden"
      animate="show"
    >
      {children}
    </MotionTag>
  );
}

export function StaggerItem({
  children,
  className,
  as = "div",
}: {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "li" | "article";
}) {
  const reduced = useReducedMotion();
  const MotionTag = motion[as];

  if (reduced) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <MotionTag className={className} variants={itemVariants}>
      {children}
    </MotionTag>
  );
}
