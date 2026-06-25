"use client";

import { AnimatePresence, motion, type Variants } from "framer-motion";
import { useEffect, useState } from "react";

/** Cinematic ease — a soft, confident decelerating curve. */
const EASE = [0.22, 1, 0.36, 1] as const;

/** Number of vertical panels that slide up to reveal the page. */
const PANELS = 5;

/** How long the counter takes to reach 100% (ms). */
const COUNT_DURATION = 2200;

/** Letters of the wordmark, revealed one by one. */
const ESHA = "Esha".split("");
const BARGATE = "Bargate".split("");

/**
 * Floating gold motes. Fixed positions (no Math.random) so SSR and client
 * agree and the field stays visually balanced.
 */
const PARTICLES = [
  { x: "12%", y: "22%", size: 3, delay: 0, dur: 6 },
  { x: "82%", y: "18%", size: 2, delay: 1.2, dur: 7 },
  { x: "24%", y: "74%", size: 4, delay: 0.6, dur: 8 },
  { x: "68%", y: "68%", size: 2, delay: 2, dur: 6.5 },
  { x: "48%", y: "14%", size: 2, delay: 1.6, dur: 7.5 },
  { x: "90%", y: "52%", size: 3, delay: 0.3, dur: 6.8 },
  { x: "8%", y: "54%", size: 2, delay: 2.4, dur: 7.2 },
  { x: "58%", y: "84%", size: 3, delay: 1, dur: 8.5 },
  { x: "34%", y: "40%", size: 2, delay: 3, dur: 6.2 },
  { x: "76%", y: "36%", size: 2, delay: 0.9, dur: 7.8 },
];

const overlay: Variants = {
  visible: {},
  exit: {},
};

/** Each panel slides up; later panels lag slightly for a wave effect. */
const panel: Variants = {
  visible: { y: 0 },
  exit: (i: number) => ({
    y: "-100%",
    transition: { duration: 0.8, ease: EASE, delay: 0.35 + i * 0.08 },
  }),
};

const content: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.04, delayChildren: 0.15 } },
  // On exit, orchestrate a reverse cascade — children peel off one by one.
  exit: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
};

/** Each letter rises in on entry, then launches upward with a blur on exit. */
const letter: Variants = {
  hidden: { y: "70%", opacity: 0 },
  visible: {
    y: "0%",
    opacity: 1,
    transition: { duration: 0.8, ease: EASE },
  },
  exit: {
    y: "-130%",
    opacity: 0,
    filter: "blur(6px)",
    transition: { duration: 0.55, ease: EASE },
  },
};

/** Generic fade-up for the surrounding bits — lifts away on exit. */
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.4, ease: EASE } },
};

/** A gold light bloom that flashes the instant the curtain breaks. */
const bloom: Variants = {
  visible: { opacity: 0, scale: 0.6 },
  exit: {
    opacity: [0, 0.85, 0],
    scale: [0.6, 1.6, 2.1],
    transition: { duration: 0.7, ease: EASE, times: [0, 0.35, 1] },
  },
};

/**
 * Full-screen intro preloader. Counts to 100% behind a gold wordmark wrapped
 * in cinematic detail — a pulsing aura, drifting motes, rotating frame rings,
 * and a shimmering progress bar — then lifts a wave of panels to reveal the
 * page beneath. Runs once on first load.
 */
export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const duration = reduce ? 0 : COUNT_DURATION;

    document.body.style.overflow = "hidden";

    let raf = 0;
    let timeout = 0;
    let start = 0;
    const tick = (now: number) => {
      if (!start) start = now;
      const progress = duration === 0 ? 1 : Math.min((now - start) / duration, 1);
      // ease-out so it decelerates toward 100
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * 100));
      if (progress < 1) {
        raf = window.requestAnimationFrame(tick);
      } else {
        timeout = window.setTimeout(() => setLoading(false), reduce ? 200 : 550);
      }
    };
    raf = window.requestAnimationFrame(tick);

    return () => {
      window.cancelAnimationFrame(raf);
      window.clearTimeout(timeout);
      document.body.style.overflow = "";
    };
  }, []);

  // Failsafe: always restore scrolling once the intro is gone.
  useEffect(() => {
    if (!loading) document.body.style.overflow = "";
  }, [loading]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-100 flex items-center justify-center overflow-hidden"
          variants={overlay}
          initial="visible"
          animate="visible"
          exit="exit"
        >
          {/* Gold light bloom — only flashes during the closing exit */}
          <motion.div
            className="pointer-events-none absolute left-1/2 top-1/2 z-20 h-[60vmin] w-[60vmin] -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={{
              background:
                "radial-gradient(circle, color-mix(in srgb, var(--accent-strong) 60%, transparent) 0%, color-mix(in srgb, var(--accent) 20%, transparent) 40%, transparent 70%)",
            }}
            aria-hidden
            variants={bloom}
          />

          {/* Sliding panels (the "curtain") */}
          <div className="absolute inset-0 flex" aria-hidden>
            {Array.from({ length: PANELS }).map((_, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={panel}
                className="h-full flex-1 bg-background"
              />
            ))}
          </div>

          {/* Atmospheric layers behind the wordmark */}
          <motion.div
            className="absolute inset-0 z-5 overflow-hidden"
            aria-hidden
            exit={{ opacity: 0, transition: { duration: 0.4, ease: EASE } }}
          >
            {/* Pulsing radial aura */}
            <motion.div
              className="absolute left-1/2 top-1/2 h-[70vmin] w-[70vmin] -translate-x-1/2 -translate-y-1/2 rounded-full"
              style={{
                background:
                  "radial-gradient(circle, color-mix(in srgb, var(--accent) 22%, transparent) 0%, transparent 65%)",
              }}
              animate={{ opacity: [0.4, 0.85, 0.4], scale: [0.9, 1.08, 0.9] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Drifting gold motes */}
            {PARTICLES.map((p, i) => (
              <motion.span
                key={i}
                className="absolute rounded-full bg-accent-strong"
                style={{
                  left: p.x,
                  top: p.y,
                  width: p.size,
                  height: p.size,
                  filter: "blur(0.3px)",
                }}
                animate={{
                  y: [0, -22, 0],
                  opacity: [0, 0.9, 0],
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

            {/* Slow sweeping light bar */}
            <motion.div
              className="absolute inset-y-0 w-1/3"
              style={{
                background:
                  "linear-gradient(90deg, transparent, color-mix(in srgb, var(--accent) 8%, transparent), transparent)",
              }}
              animate={{ x: ["-40%", "340%"] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                repeatDelay: 0.5,
              }}
            />
          </motion.div>

          {/* Rotating concentric frame rings — a subtle "lens / reel" motif */}
          <motion.div
            className="absolute left-1/2 top-1/2 z-6 -translate-x-1/2 -translate-y-1/2"
            aria-hidden
            exit={{
              opacity: 0,
              scale: 1.1,
              transition: { duration: 0.4, ease: EASE },
            }}
          >
            <motion.div
              className="h-[42vmin] w-[42vmin] rounded-full border border-border/60"
              style={{ borderTopColor: "var(--accent)" }}
              animate={{ rotate: 360 }}
              transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute inset-0 m-auto h-[30vmin] w-[30vmin] rounded-full border border-dashed border-border/40"
              style={{ borderBottomColor: "var(--accent-strong)" }}
              animate={{ rotate: -360 }}
              transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
            />
          </motion.div>

          {/* Centered wordmark + counter */}
          <motion.div
            variants={content}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="relative z-10 flex flex-col items-center px-6 text-center"
          >
            <motion.p
              variants={fadeUp}
              className="text-xs font-semibold uppercase tracking-[0.3em] text-accent"
            >
              <motion.span
                className="inline-block"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                Now Loading
              </motion.span>
            </motion.p>

            <h1 className="mt-6 flex flex-wrap items-baseline justify-center gap-x-3 text-5xl font-light tracking-tight sm:text-7xl">
              {/* "Esha" — letter by letter */}
              <span className="inline-flex py-[0.12em]">
                {ESHA.map((char, i) => (
                  <motion.span
                    key={i}
                    variants={letter}
                    className="inline-block"
                  >
                    {char}
                  </motion.span>
                ))}
              </span>

              {/* "Bargate" — letter by letter, with a gold highlight that
                  sweeps across the real glyphs (no duplicated text). */}
              <span className="inline-flex py-[0.12em] italic">
                {BARGATE.map((char, i) => (
                  <motion.span
                    key={i}
                    variants={letter}
                    className="inline-block bg-clip-text pb-[0.3em] text-transparent"
                    style={{
                      backgroundImage:
                        "linear-gradient(110deg, var(--accent) 0%, var(--accent) 42%, #fff5dc 50%, var(--accent) 58%, var(--accent) 100%)",
                      backgroundSize: "260% 130%",
                      animation: "wordmark-shimmer 2.8s linear infinite",
                      animationDelay: `${i * 0.09}s`,
                    }}
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
            </h1>

            <motion.p
              variants={fadeUp}
              className="mt-4 text-[0.65rem] font-light uppercase tracking-[0.4em] text-muted"
            >
              Crafting Stories
            </motion.p>

            {/* Progress line with a glowing leading edge */}
            <motion.div
              variants={fadeUp}
              className="mt-10 h-px w-56 overflow-hidden bg-border sm:w-72"
            >
              <motion.div
                className="relative h-full origin-left bg-accent"
                style={{ scaleX: count / 100 }}
              >
                <span className="absolute right-0 top-1/2 h-2 w-2 -translate-y-1/2 translate-x-1/2 rounded-full bg-accent-strong shadow-[0_0_10px_2px_var(--accent)]" />
              </motion.div>
            </motion.div>

            <motion.p
              variants={fadeUp}
              className="mt-5 font-light tabular-nums text-muted"
            >
              {String(count).padStart(3, "0")}
              <span className="text-accent">%</span>
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
