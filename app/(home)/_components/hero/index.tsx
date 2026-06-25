"use client";

import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  type Variants,
} from "framer-motion";
import { useEffect, useState } from "react";
import { CornerFrame } from "../shared";

/** Cinematic ease — a soft, confident decelerating curve. */
const EASE = [0.22, 1, 0.36, 1] as const;

/** Staggered curtain-up entrance for the hero copy. */
const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14, delayChildren: 0.2 } },
};

const rise: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: EASE } },
};

/** Credential chips that sit beneath the headline. */
const CREDENTIALS = [
  "2026 Telly Awards Judge",
  "SB100 Business Visionary",
  "6 Continents Connected",
  "AI Meets Cinema™",
];

/** Phrases that cycle in the tagline. */
const FRONTIERS = [
  "Silicon Valley",
  "emerging tech",
  "global stages",
  "the future",
];

/**
 * Floating gold motes. Fixed positions (no Math.random) so SSR and client
 * agree and the field stays balanced.
 */
const PARTICLES = [
  { x: "16%", y: "28%", size: 3, delay: 0, dur: 7 },
  { x: "80%", y: "22%", size: 2, delay: 1.4, dur: 8 },
  { x: "26%", y: "70%", size: 4, delay: 0.7, dur: 9 },
  { x: "72%", y: "66%", size: 2, delay: 2.1, dur: 7.5 },
  { x: "88%", y: "48%", size: 3, delay: 0.4, dur: 8.5 },
  { x: "10%", y: "52%", size: 2, delay: 2.6, dur: 7.8 },
  { x: "60%", y: "82%", size: 3, delay: 1.1, dur: 9.5 },
];

/** Subtle film-grain texture, encoded inline so there's no extra request. */
const GRAIN =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";

/** A word that swaps itself out on a loop with a soft vertical blur-slide. */
function RotatingWord() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduce) return;
    const id = window.setInterval(
      () => setI((v) => (v + 1) % FRONTIERS.length),
      2600,
    );
    return () => window.clearInterval(id);
  }, []);

  return (
    <span className="relative inline-flex justify-center overflow-hidden py-[0.1em]">
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={i}
          className="italic text-accent"
          initial={{ y: "0.7em", opacity: 0, filter: "blur(5px)" }}
          animate={{ y: "0em", opacity: 1, filter: "blur(0px)" }}
          exit={{ y: "-0.7em", opacity: 0, filter: "blur(5px)" }}
          transition={{ duration: 0.5, ease: EASE }}
        >
          {FRONTIERS[i]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

/** 01 — Hero */
export default function Hero() {
  // Pointer-driven parallax: normalized cursor position, smoothed by a spring.
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const sx = useSpring(px, { stiffness: 60, damping: 18, mass: 0.4 });
  const sy = useSpring(py, { stiffness: 60, damping: 18, mass: 0.4 });

  // Three depth planes — nearer layers shift more than far ones.
  const farX = useTransform(sx, [-0.5, 0.5], [10, -10]);
  const farY = useTransform(sy, [-0.5, 0.5], [10, -10]);
  const midX = useTransform(sx, [-0.5, 0.5], [22, -22]);
  const midY = useTransform(sy, [-0.5, 0.5], [22, -22]);
  const nearX = useTransform(sx, [-0.5, 0.5], [40, -40]);
  const nearY = useTransform(sy, [-0.5, 0.5], [40, -40]);

  function handlePointer(e: React.PointerEvent<HTMLElement>) {
    px.set(e.clientX / window.innerWidth - 0.5);
    py.set(e.clientY / window.innerHeight - 0.5);
  }

  return (
    <section
      onPointerMove={handlePointer}
      className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden px-6 py-32 text-center"
    >
      {/* Deep cinematic gradient base */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-30"
        style={{
          background:
            "radial-gradient(ellipse 90% 60% at 50% -10%, color-mix(in srgb, var(--accent) 12%, transparent), transparent 55%), radial-gradient(ellipse 70% 50% at 50% 110%, color-mix(in srgb, var(--accent-strong) 8%, transparent), transparent 55%), linear-gradient(180deg, #100c07 0%, #0d0b08 45%, #080604 100%)",
        }}
      />

      {/* Slowly drifting aurora gradient for subtle living colour */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-30 opacity-60 mix-blend-soft-light"
        style={{
          background:
            "conic-gradient(from 180deg at 50% 50%, transparent 0deg, color-mix(in srgb, var(--accent) 18%, transparent) 90deg, transparent 180deg, color-mix(in srgb, var(--accent-strong) 14%, transparent) 270deg, transparent 360deg)",
        }}
        animate={{ rotate: 360, scale: [1.1, 1.25, 1.1] }}
        transition={{
          rotate: { duration: 40, repeat: Infinity, ease: "linear" },
          scale: { duration: 14, repeat: Infinity, ease: "easeInOut" },
        }}
      />

      {/* FAR plane — grid + monogram watermark */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-20"
        style={{ x: farX, y: farY }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            maskImage:
              "radial-gradient(ellipse 60% 55% at 50% 45%, #000 30%, transparent 75%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 60% 55% at 50% 45%, #000 30%, transparent 75%)",
            opacity: 0.25,
          }}
        />
        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none text-[26rem] font-light italic leading-none tracking-tighter text-accent/[0.035] sm:text-[34rem]">
          EB
        </span>
      </motion.div>

      {/* MID plane — glows + rotating ring */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{ x: midX, y: midY }}
      >
        <motion.div
          className="absolute left-1/2 top-1/2 h-160 w-160 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-[140px]"
          animate={{ opacity: [0.35, 0.7, 0.35], scale: [0.95, 1.08, 0.95] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute left-1/3 top-1/4 h-72 w-72 -translate-x-1/2 rounded-full bg-accent-strong/10 blur-[120px]"
          animate={{ x: [0, 40, 0], y: [0, -30, 0], opacity: [0.2, 0.45, 0.2] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute left-1/2 top-1/2 hidden h-[80vmin] w-[80vmin] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-border/40 lg:block"
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        />
      </motion.div>

      {/* NEAR plane — drifting gold motes */}
      <motion.div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{ x: nearX, y: nearY }}
        aria-hidden
      >
        {PARTICLES.map((p, i) => (
          <motion.span
            key={i}
            className="absolute rounded-full bg-accent-strong"
            style={{ left: p.x, top: p.y, width: p.size, height: p.size }}
            animate={{ y: [0, -26, 0], opacity: [0, 0.8, 0], scale: [0.6, 1, 0.6] }}
            transition={{
              duration: p.dur,
              delay: p.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </motion.div>

      {/* Periodic diagonal light sweep across the whole hero */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 -z-10 w-1/2 -skew-x-12"
        style={{
          background:
            "linear-gradient(90deg, transparent, color-mix(in srgb, var(--accent) 7%, transparent), transparent)",
        }}
        animate={{ x: ["-60%", "260%"] }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          repeatDelay: 4,
        }}
      />

      {/* Film-grain overlay */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.04] mix-blend-screen"
        style={{ backgroundImage: GRAIN }}
      />

      {/* Vertical framing rails with rotated labels (desktop only) */}
      <motion.span
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4, delay: 0.8, ease: EASE }}
        className="absolute left-12 top-1/2 hidden -translate-y-1/2 -rotate-90 text-[0.625rem] uppercase tracking-[0.4em] text-muted/60 lg:block"
      >
        Film · Media · Innovation
      </motion.span>
      <motion.span
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4, delay: 0.8, ease: EASE }}
        className="absolute right-12 top-1/2 hidden -translate-y-1/2 rotate-90 text-[0.625rem] uppercase tracking-[0.4em] text-muted/60 lg:block"
      >
        Cinematic Storytelling
      </motion.span>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4, ease: EASE }}
      >
        <CornerFrame />
      </motion.div>

      <motion.div
        className="flex flex-col items-center"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.p
          variants={rise}
          className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-accent"
        >
          <span aria-hidden className="h-px w-6 bg-accent/50" />
          Global Keynote Speaker · Panelist · Guest of Honor
          <span aria-hidden className="h-px w-6 bg-accent/50" />
        </motion.p>

        {/* Headline floats gently, on a loop, after it reveals */}
        <motion.div
          variants={rise}
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <h1 className="mt-10 text-6xl font-light tracking-tight sm:text-7xl lg:text-8xl">
            Esha{" "}
            <motion.span
              className="bg-clip-text italic text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(110deg, var(--accent) 25%, var(--accent-strong) 45%, #fff5dc 50%, var(--accent-strong) 55%, var(--accent) 75%)",
                backgroundSize: "200% 100%",
              }}
              animate={{ backgroundPosition: ["150% 0%", "-50% 0%"] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatDelay: 2.5,
                ease: "easeInOut",
              }}
            >
              Bargate
            </motion.span>
          </h1>
        </motion.div>

        <motion.p
          variants={rise}
          className="mt-8 text-lg tracking-wide text-muted sm:text-xl"
        >
          Media Entrepreneur · Co-Producer · Telly Awards Judge · Founder
        </motion.p>

        <motion.span
          aria-hidden
          variants={rise}
          className="mt-8 block h-px w-24 origin-center bg-accent/60"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 1, ease: EASE }}
        />

        {/* Tagline with a cycling phrase */}
        <motion.p
          variants={rise}
          className="mt-8 flex flex-wrap items-baseline justify-center gap-x-2 text-lg text-muted"
        >
          Where Hollywood storytelling meets <RotatingWord />
        </motion.p>

        {/* Primary calls to action */}
        <motion.div
          variants={rise}
          className="mt-12 flex flex-col items-center gap-4 sm:flex-row"
        >
          <a
            href="#booking"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-sm bg-accent px-8 py-3.5 text-sm font-semibold uppercase tracking-[0.15em] text-background transition-transform duration-300 hover:-translate-y-0.5"
          >
            <span
              aria-hidden
              className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-full"
            />
            Book a Keynote
            <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
          <a
            href="#about"
            className="inline-flex items-center gap-2 rounded-sm border border-accent/40 px-8 py-3.5 text-sm font-semibold uppercase tracking-[0.15em] text-accent transition-colors duration-300 hover:border-accent hover:bg-accent/10"
          >
            Discover More
          </a>
        </motion.div>

        {/* Credential chips */}
        <motion.ul
          variants={rise}
          className="mt-12 flex max-w-2xl flex-wrap items-center justify-center gap-x-3 gap-y-3"
        >
          {CREDENTIALS.map((c) => (
            <li
              key={c}
              className="rounded-full border border-border bg-card/40 px-4 py-1.5 text-xs tracking-wide text-muted transition-colors duration-300 hover:border-accent/50 hover:text-accent"
            >
              {c}
            </li>
          ))}
        </motion.ul>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        aria-hidden
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <motion.div
          className="flex h-9 w-5 items-start justify-center rounded-full border border-accent/40 p-1"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="h-1.5 w-1 rounded-full bg-accent/80" />
        </motion.div>
      </motion.div>
    </section>
  );
}
