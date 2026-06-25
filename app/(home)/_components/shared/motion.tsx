"use client";

import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
  type Variants,
} from "framer-motion";
import {
  useEffect,
  useRef,
  useState,
  useSyncExternalStore,
  type ReactNode,
} from "react";

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

/* ------------------------------------------------------------------ *
 * Continuous (non-reveal) animation primitives                        *
 * Each honours prefers-reduced-motion with a static fallback.         *
 * ------------------------------------------------------------------ */

/** Deterministic mote field — fixed positions so SSR and client agree. */
const MOTES = [
  { x: "12%", y: "24%", size: 3, delay: 0, dur: 7 },
  { x: "82%", y: "18%", size: 2, delay: 1.3, dur: 8 },
  { x: "24%", y: "72%", size: 4, delay: 0.6, dur: 9 },
  { x: "68%", y: "66%", size: 2, delay: 2.1, dur: 7.5 },
  { x: "48%", y: "14%", size: 2, delay: 1.6, dur: 8.4 },
  { x: "90%", y: "52%", size: 3, delay: 0.3, dur: 6.8 },
  { x: "8%", y: "54%", size: 2, delay: 2.4, dur: 7.9 },
  { x: "58%", y: "84%", size: 3, delay: 1, dur: 8.7 },
  { x: "34%", y: "40%", size: 2, delay: 2.9, dur: 6.4 },
  { x: "76%", y: "34%", size: 2, delay: 0.9, dur: 7.7 },
  { x: "18%", y: "88%", size: 3, delay: 1.8, dur: 9.2 },
  { x: "94%", y: "78%", size: 2, delay: 0.4, dur: 8.1 },
];

/**
 * A drifting field of gold motes for cinematic ambient depth. Renders an
 * absolute, non-interactive layer — drop it inside a `relative` section.
 */
export function FloatingMotes({
  count = 8,
  className = "",
}: {
  count?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  if (reduce) return null;

  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 -z-10 overflow-hidden ${className}`}
    >
      {MOTES.slice(0, count).map((p, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full bg-accent-strong"
          style={{ left: p.x, top: p.y, width: p.size, height: p.size }}
          animate={{
            y: [0, -26, 0],
            opacity: [0, 0.8, 0],
            scale: [0.6, 1, 0.6],
          }}
          transition={{
            duration: p.dur,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

/** A soft diagonal beam that periodically sweeps across its container. */
export function LightSweep({
  className = "",
  duration = 7,
  delay = 0,
  repeatDelay = 4,
}: {
  className?: string;
  duration?: number;
  delay?: number;
  repeatDelay?: number;
}) {
  const reduce = useReducedMotion();
  if (reduce) return null;

  return (
    <motion.div
      aria-hidden
      className={`pointer-events-none absolute inset-y-0 -z-10 w-1/2 -skew-x-12 ${className}`}
      style={{
        background:
          "linear-gradient(90deg, transparent, color-mix(in srgb, var(--accent) 7%, transparent), transparent)",
      }}
      animate={{ x: ["-60%", "260%"] }}
      transition={{ duration, delay, repeat: Infinity, ease: "easeInOut", repeatDelay }}
    />
  );
}

/**
 * Heading word with a gold gradient that continuously shimmers. Falls back to
 * a static gradient under reduced motion.
 */
export function ShimmerText({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.span
      className={`bg-clip-text text-transparent ${className}`}
      style={{
        backgroundImage:
          "linear-gradient(110deg, var(--accent) 20%, var(--accent-strong) 40%, #fff5dc 50%, var(--accent-strong) 60%, var(--accent) 80%)",
        backgroundSize: "220% 100%",
      }}
      animate={reduce ? undefined : { backgroundPosition: ["150% 0%", "-50% 0%"] }}
      transition={
        reduce
          ? undefined
          : { duration: 5, repeat: Infinity, repeatDelay: 1.5, ease: "easeInOut" }
      }
    >
      {children}
    </motion.span>
  );
}

/** Wraps a child so it gently floats forever (vertical by default). */
export function Float({
  children,
  amplitude = 8,
  duration = 6,
  delay = 0,
  axis = "y",
  as = "div",
  className = "",
}: {
  children: ReactNode;
  amplitude?: number;
  duration?: number;
  delay?: number;
  axis?: "x" | "y";
  as?: "div" | "span";
  className?: string;
}) {
  const reduce = useReducedMotion();
  const Tag = as === "span" ? motion.span : motion.div;
  const Static = as === "span" ? "span" : "div";

  if (reduce) return <Static className={className}>{children}</Static>;

  const move = axis === "x" ? { x: [0, amplitude, 0] } : { y: [0, -amplitude, 0] };

  return (
    <Tag
      className={className}
      animate={move}
      transition={{ duration, delay, repeat: Infinity, ease: "easeInOut" }}
    >
      {children}
    </Tag>
  );
}

/** Counts from 0 to `value` once, when scrolled into view. */
export function CountUp({
  value,
  duration = 1.6,
  prefix = "",
  suffix = "",
  className = "",
}: {
  value: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduce = useReducedMotion();
  const [display, setDisplay] = useState(reduce ? value : 0);

  useEffect(() => {
    if (!inView || reduce) return;
    const controls = animate(0, value, {
      duration,
      ease: EASE,
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, reduce, value, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}

/** Subscribes to whether the device has a fine pointer (mouse/trackpad). */
function usePointerFine() {
  return useSyncExternalStore(
    (onChange) => {
      const mq = window.matchMedia("(pointer: fine)");
      mq.addEventListener("change", onChange);
      return () => mq.removeEventListener("change", onChange);
    },
    () => window.matchMedia("(pointer: fine)").matches,
    () => false,
  );
}

/**
 * Pointer-interactive card: subtle 3D tilt plus a radial spotlight that
 * follows the cursor. Falls back to a plain wrapper under reduced motion or on
 * coarse-pointer (touch) devices.
 */
export function TiltCard({
  children,
  className = "",
  max = 7,
}: {
  children: ReactNode;
  className?: string;
  max?: number;
}) {
  const reduce = useReducedMotion();
  const pointerFine = usePointerFine();
  const enabled = pointerFine && !reduce;
  const [hovered, setHovered] = useState(false);

  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const sx = useSpring(rx, { stiffness: 150, damping: 18 });
  const sy = useSpring(ry, { stiffness: 150, damping: 18 });
  const mx = useMotionValue(50);
  const my = useMotionValue(50);
  const spotlight = useTransform(
    [mx, my],
    ([x, y]) =>
      `radial-gradient(220px circle at ${x}% ${y}%, color-mix(in srgb, var(--accent) 18%, transparent), transparent 70%)`,
  );

  if (!enabled) return <div className={className}>{children}</div>;

  function handleMove(e: React.PointerEvent<HTMLDivElement>) {
    const r = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    ry.set((px - 0.5) * max * 2);
    rx.set((0.5 - py) * max * 2);
    mx.set(px * 100);
    my.set(py * 100);
  }

  function reset() {
    setHovered(false);
    rx.set(0);
    ry.set(0);
  }

  return (
    <motion.div
      onPointerEnter={() => setHovered(true)}
      onPointerMove={handleMove}
      onPointerLeave={reset}
      className={`relative ${className}`}
      style={{ rotateX: sx, rotateY: sy, transformStyle: "preserve-3d", perspective: 800 }}
    >
      {children}
      <motion.span
        aria-hidden
        className="pointer-events-none absolute inset-0 z-20 rounded-sm"
        style={{ background: spotlight }}
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
}

/** A small node that continuously pulses with a soft gold halo. */
export function PulseDot({
  className = "",
  delay = 0,
}: {
  className?: string;
  delay?: number;
}) {
  const reduce = useReducedMotion();
  return (
    <span aria-hidden className={`relative block ${className}`}>
      {!reduce && (
        <motion.span
          className="absolute inset-0 rounded-full bg-accent"
          animate={{ scale: [1, 2.4, 1], opacity: [0.5, 0, 0.5] }}
          transition={{ duration: 2.4, delay, repeat: Infinity, ease: "easeOut" }}
        />
      )}
      <span className="absolute inset-0 rounded-full border border-accent bg-background" />
    </span>
  );
}

/** A gradient highlight that travels along a line (timeline spine / divider). */
export function FlowingLine({
  vertical = false,
  className = "",
}: {
  vertical?: boolean;
  className?: string;
}) {
  const reduce = useReducedMotion();
  const base = vertical
    ? "var(--accent) 0%, var(--accent) 35%, transparent 70%"
    : "transparent, var(--accent), transparent";
  const gradient = vertical
    ? `linear-gradient(180deg, ${base})`
    : `linear-gradient(90deg, ${base})`;

  if (reduce) {
    return (
      <span
        aria-hidden
        className={className}
        style={{ background: gradient, backgroundSize: vertical ? "100% 100%" : "100% 100%" }}
      />
    );
  }

  return (
    <motion.span
      aria-hidden
      className={className}
      style={{
        background: gradient,
        backgroundSize: vertical ? "100% 220%" : "220% 100%",
      }}
      animate={
        vertical
          ? { backgroundPosition: ["0% -120%", "0% 120%"] }
          : { backgroundPosition: ["150% 0%", "-50% 0%"] }
      }
      transition={{ duration: vertical ? 3.5 : 4, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}
