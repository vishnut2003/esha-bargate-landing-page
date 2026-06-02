import { CornerFrame, Eyebrow } from "../shared";

/** 10 — Original Programming */
export default function OriginalProgramming() {
  return (
    <section className="relative flex w-full flex-col items-center justify-center px-6 py-36 text-center">
      <CornerFrame />
      <Eyebrow>Original Programming</Eyebrow>
      <h2 className="mt-10 text-4xl font-light sm:text-6xl">
        Creator of <span className="italic text-accent">AI Meets Cinema™</span>
      </h2>
      <p className="mt-10 max-w-2xl text-lg leading-relaxed text-muted">
        Esha conceived and produces the original series where the architects of
        the next media era speak candidly about craft, tools, and the road ahead
        — a creator’s eye and an insider’s access.
      </p>
      <p className="mt-8 text-lg italic text-accent/90">
        An ideal voice for keynotes, panels, and fireside chats.
      </p>
    </section>
  );
}
