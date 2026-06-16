"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

/** Cinematic ease — a soft, confident decelerating curve. */
const EASE = [0.22, 1, 0.36, 1] as const;

const viewport = { once: true, margin: "-80px" } as const;

/**
 * Fades + lifts its children into view once, as they enter the viewport.
 * Drop-in wrapper for headings, paragraphs, and standalone blocks.
 */
export function Reveal({
  children,
  className = "",
  delay = 0,
  y = 24,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewport}
      transition={{ duration: 0.7, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

const groupVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

/**
 * Container that reveals its <StaggerItem> children one after another.
 * Use it in place of the grid/list wrapper <div>.
 */
export function Stagger({
  children,
  className = "",
  stagger = 0.12,
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      variants={{ ...groupVariants, show: { transition: { staggerChildren: stagger } } }}
    >
      {children}
    </motion.div>
  );
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

/**
 * A soft, slowly breathing gold radial glow for cinematic full-bleed sections.
 * Sizing comes from `className` (e.g. "h-112 w-md").
 */
export function AmbientGlow({ className = "" }: { className?: string }) {
  return (
    <motion.div
      aria-hidden
      className={`pointer-events-none absolute left-1/2 top-1/2 -z-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-[120px] ${className}`}
      animate={{ opacity: [0.3, 0.6, 0.3], scale: [0.95, 1.06, 0.95] }}
      transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}

/** A single item inside a <Stagger> container. */
export function StaggerItem({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div className={className} variants={itemVariants}>
      {children}
    </motion.div>
  );
}
