import { CornerFrame, Eyebrow } from "../shared";

/** 11 — Booking Inquiry */
export default function Booking() {
  return (
    <section className="relative flex w-full flex-col items-center justify-center border-t border-border/40 px-6 py-36 text-center">
      <CornerFrame />
      <Eyebrow>Booking Inquiry</Eyebrow>
      <h2 className="mt-10 text-5xl font-light sm:text-7xl">
        Bring Esha to your
        <br />
        <span className="italic text-accent">stage, anywhere.</span>
      </h2>
      <p className="mt-10 max-w-2xl text-lg leading-relaxed text-muted">
        Available for keynotes, panels, fireside chats, juries, and guest
        appearances — worldwide, in person or virtual.
      </p>
      <p className="mt-10 text-lg tracking-wide">
        <a
          href="mailto:hello@eshabargate.com"
          className="text-accent transition-opacity hover:opacity-80"
        >
          hello@eshabargate.com
        </a>
        <span className="mx-3 text-muted">·</span>
        <span className="text-muted">Esha Bargate Productions LLC</span>
      </p>
    </section>
  );
}
