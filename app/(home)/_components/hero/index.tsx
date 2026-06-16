"use client";

import { motion, type Variants } from "framer-motion";
import { CornerFrame } from "../shared";

/** Cinematic ease — a soft, confident decelerating curve. */
const EASE = [0.22, 1, 0.36, 1] as const;

/** Staggered curtain-up entrance for the hero copy. */
const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.16, delayChildren: 0.2 } },
};

const rise: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: EASE } },
};

/** 01 — Hero */
export default function Hero() {
  return (
    <section className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden px-6 py-32 text-center">
      {/* Ambient gold glow, slowly breathing behind the title */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[40rem] w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-[140px]"
        animate={{ opacity: [0.35, 0.7, 0.35], scale: [0.95, 1.08, 0.95] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Drifting secondary glow for depth */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute left-1/3 top-1/4 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-accent-strong/10 blur-[120px]"
        animate={{ x: [0, 40, 0], y: [0, -30, 0], opacity: [0.2, 0.45, 0.2] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
      />

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
          className="text-xs font-semibold uppercase tracking-[0.3em] text-accent"
        >
          Global Keynote Speaker · Panelist · Guest of Honor
        </motion.p>

        <motion.h1
          variants={rise}
          className="mt-10 text-6xl font-light tracking-tight sm:text-7xl lg:text-8xl"
        >
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
        </motion.h1>

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

        <motion.p
          variants={rise}
          className="mt-8 max-w-xl text-lg italic text-accent/90"
        >
          A speaker bridging Hollywood storytelling with Silicon Valley
          innovation.
        </motion.p>
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
