import { CornerFrame, Eyebrow } from "../shared";
import { AmbientGlow, Reveal, Stagger, StaggerItem } from "../shared/motion";

const CONTACTS = [
  {
    label: "Esha Bargate for AIVR MPG",
    value: "hello@aivrmotionpicture.org",
    href: "mailto:hello@aivrmotionpicture.org",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5"
      >
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </svg>
    ),
  },
  {
    label: "Esha Bargate Productions LLC",
    value: "contact@eshabargateproductions.com",
    href: "mailto:contact@eshabargateproductions.com",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5"
      >
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    value: "+1 510-953-2966",
    href: "https://wa.me/15109532966",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5"
      >
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      </svg>
    ),
  },
];

/** 11 — Booking Inquiry */
export default function Booking() {
  return (
    <section className="relative flex w-full flex-col items-center justify-center overflow-hidden border-t border-border/40 px-6 py-36 text-center">
      <CornerFrame />

      {/* Cinematic gold glow backdrop */}
      <AmbientGlow className="h-168 w-2xl" />

      <Reveal>
        <Eyebrow>Booking Inquiry</Eyebrow>
        <h2 className="mt-10 text-5xl font-light sm:text-7xl">
          Bring Esha to your
          <br />
          <span className="italic text-accent">stage, anywhere.</span>
        </h2>
      </Reveal>

      {/* Gold divider flourish */}
      <Reveal
        delay={0.15}
        className="mt-10 flex items-center justify-center gap-3 text-accent"
      >
        <span aria-hidden className="h-px w-12 bg-linear-to-r from-transparent to-accent/60" />
        <span aria-hidden className="text-sm">✦</span>
        <span aria-hidden className="h-px w-12 bg-linear-to-l from-transparent to-accent/60" />
      </Reveal>

      <Reveal delay={0.2}>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted">
          Available for keynotes, panels, fireside chats, juries, and guest
          appearances — worldwide, in person or virtual.
        </p>
      </Reveal>

      <Stagger className="mt-14 grid w-full max-w-5xl gap-5 sm:grid-cols-3">
        {CONTACTS.map((c) => (
          <StaggerItem key={c.value}>
            <a
              href={c.href}
              className="group relative flex h-full flex-col items-center gap-3 rounded-sm border border-border bg-card/40 p-7 text-center transition-all duration-300 hover:-translate-y-1 hover:border-accent/60 hover:bg-card/70"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-accent/40 text-accent transition-colors duration-300 group-hover:border-accent group-hover:bg-accent/10">
                {c.icon}
              </span>
              <span className="text-xs uppercase tracking-[0.2em] text-muted">
                {c.label}
              </span>
              <span className="wrap-anywhere text-[0.8125rem] text-accent transition-opacity group-hover:opacity-90">
                {c.value}
              </span>
            </a>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}
