import { CornerFrame, Eyebrow } from "../shared";

/** 01 — Hero */
export default function Hero() {
  return (
    <section className="relative flex min-h-screen w-full flex-col items-center justify-center px-6 py-32 text-center">
      <CornerFrame />
      <Eyebrow>Global Keynote Speaker · Panelist · Guest of Honor</Eyebrow>
      <h1 className="mt-10 text-6xl font-light tracking-tight sm:text-7xl lg:text-8xl">
        Esha <span className="italic text-accent">Bargate</span>
      </h1>
      <p className="mt-8 text-lg tracking-wide text-muted sm:text-xl">
        Media Entrepreneur · Co-Producer · Telly Awards Judge · Founder
      </p>
      <span className="mt-8 block h-px w-24 bg-accent/60" />
      <p className="mt-8 max-w-xl text-lg italic text-accent/90">
        A speaker bridging Hollywood storytelling with Silicon Valley innovation.
      </p>
    </section>
  );
}
