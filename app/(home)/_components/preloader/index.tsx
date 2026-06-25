"use client";

import { AnimatePresence, motion, type Variants } from "framer-motion";
import { useEffect, useState } from "react";

/** Cinematic ease — a soft, confident decelerating curve. */
const EASE = [0.22, 1, 0.36, 1] as const;

/** Number of vertical panels that slide up to reveal the page. */
const PANELS = 5;

/** How long the counter takes to reach 100% (ms). */
const COUNT_DURATION = 1700;

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
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -24, transition: { duration: 0.4, ease: EASE } },
};

/**
 * Full-screen intro preloader. Counts to 100% behind a gold wordmark, then
 * lifts a wave of panels to reveal the page beneath. Runs once on first load.
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
        timeout = window.setTimeout(() => setLoading(false), reduce ? 200 : 450);
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

          {/* Centered wordmark + counter */}
          <motion.div
            variants={content}
            className="relative z-10 flex flex-col items-center px-6 text-center"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
              Now Loading
            </p>

            <h1 className="mt-6 text-5xl font-light tracking-tight sm:text-7xl">
              Esha{" "}
              <motion.span
                className="bg-clip-text italic text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(110deg, var(--accent) 25%, var(--accent-strong) 45%, #fff5dc 50%, var(--accent-strong) 55%, var(--accent) 75%)",
                  backgroundSize: "200% 100%",
                }}
                animate={{ backgroundPosition: ["150% 0%", "-50% 0%"] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
              >
                Bargate
              </motion.span>
            </h1>

            {/* Progress line */}
            <div className="mt-10 h-px w-56 overflow-hidden bg-border sm:w-72">
              <motion.div
                className="h-full origin-left bg-accent"
                style={{ scaleX: count / 100 }}
              />
            </div>

            <p className="mt-5 font-light tabular-nums text-muted">
              {String(count).padStart(3, "0")}
              <span className="text-accent">%</span>
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
