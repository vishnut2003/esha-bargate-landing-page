import { CornerFrame, Eyebrow } from "../shared";
import {
  AmbientGlow,
  Float,
  FloatingMotes,
  LightSweep,
  Reveal,
  ShimmerText,
} from "../shared/motion";

const TOPICS = ["Craft", "Tools", "The Road Ahead"];

/** 11 — Original Programming */
export default function OriginalProgramming() {
  return (
    <section className="relative flex w-full flex-col items-center justify-center overflow-hidden px-6 py-36 text-center">
      <CornerFrame />
      <AmbientGlow className="h-112 w-md" />
      <FloatingMotes count={8} />
      <LightSweep duration={9} />

      <Reveal>
        <Eyebrow>Original Programming</Eyebrow>
      </Reveal>

      {/* Play-button motif */}
      <Reveal delay={0.05}>
        <Float
          amplitude={6}
          duration={4.5}
          className="relative mt-10 flex items-center justify-center"
        >
          <span
            aria-hidden
            className="absolute h-28 w-28 animate-[spin_18s_linear_infinite] rounded-full border border-dashed border-accent/30"
          />
          <span
            aria-hidden
            className="absolute h-20 w-20 animate-ping rounded-full border border-accent/30 [animation-duration:2.5s]"
          />
          <span className="relative flex h-20 w-20 items-center justify-center rounded-full border border-accent/50 bg-accent/5 text-accent">
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="ml-1 h-7 w-7"
              aria-hidden
            >
              <path d="M8 5v14l11-7L8 5Z" />
            </svg>
          </span>
        </Float>
      </Reveal>

      <Reveal delay={0.1}>
        <h2 className="mt-10 text-4xl font-light sm:text-6xl">
          Creator of{" "}
          <ShimmerText className="italic">AI Meets Cinema™</ShimmerText>
        </h2>
      </Reveal>

      {/* Topic chips */}
      <Reveal delay={0.18}>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {TOPICS.map((t) => (
            <span
              key={t}
              className="rounded-full border border-border bg-card/40 px-4 py-1.5 text-xs uppercase tracking-[0.15em] text-muted"
            >
              {t}
            </span>
          ))}
        </div>
      </Reveal>

      <Reveal delay={0.25}>
        <p className="mt-10 max-w-2xl text-lg leading-relaxed text-muted">
          Esha conceived and produces the original series where the architects
          of the next media era speak candidly about craft, tools, and the road
          ahead — a creator’s eye and an insider’s access.
        </p>
      </Reveal>

      <Reveal delay={0.3}>
        <p className="mt-8 flex items-center justify-center gap-3 text-lg italic text-accent/90">
          <span aria-hidden className="h-px w-8 bg-accent/40" />
          An ideal voice for keynotes, panels, and fireside chats.
          <span aria-hidden className="h-px w-8 bg-accent/40" />
        </p>
      </Reveal>
    </section>
  );
}
