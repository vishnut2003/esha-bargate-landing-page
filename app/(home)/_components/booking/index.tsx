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
      <div className="mt-10 flex flex-col items-center gap-4 text-lg tracking-wide">
        <p>
          <span className="text-muted">Contact Esha Bargate for AIVR MPG at</span>
          <span className="mx-3 text-muted">·</span>
          <a
            href="mailto:hello@aivrmotionpicture.org"
            className="text-accent transition-opacity hover:opacity-80"
          >
            hello@aivrmotionpicture.org
          </a>
        </p>
        <p>
          <span className="text-muted">For Esha Bargate Productions LLC at</span>
          <span className="mx-3 text-muted">·</span>
          <a
            href="mailto:contact@eshabargateproductions.com"
            className="text-accent transition-opacity hover:opacity-80"
          >
            contact@eshabargateproductions.com
          </a>
        </p>
        <p>
          <span className="text-muted">WhatsApp</span>
          <span className="mx-3 text-muted">·</span>
          <a
            href="https://wa.me/15109532966"
            className="text-accent transition-opacity hover:opacity-80"
          >
            +1 510-953-2966
          </a>
        </p>
      </div>
    </section>
  );
}
