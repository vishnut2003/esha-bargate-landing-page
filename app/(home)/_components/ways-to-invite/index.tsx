import { Eyebrow, Section } from "../shared";
import {
  AmbientGlow,
  Float,
  FloatingMotes,
  Reveal,
  ShimmerText,
  Stagger,
  StaggerItem,
  TiltCard,
} from "../shared/motion";

const iconClass = "h-5 w-5";
const svgProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.4,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  className: iconClass,
};

const ENGAGEMENTS = [
  {
    title: "Keynote Addresses",
    body: "Headline talks on film, AI, and the future of media.",
    icon: (
      <svg {...svgProps}>
        <path d="M12 2a3 3 0 0 0-3 3v6a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
        <path d="M5 10a7 7 0 0 0 14 0" />
        <path d="M12 17v4" />
        <path d="M8 21h8" />
      </svg>
    ),
  },
  {
    title: "Panels & Moderation",
    body: "Expert panelist or moderator who keeps the room engaged.",
    icon: (
      <svg {...svgProps}>
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: "Fireside Chats",
    body: "Intimate, candid conversations on craft and innovation.",
    icon: (
      <svg {...svgProps}>
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  {
    title: "Guest of Honor",
    body: "A distinguished presence for openings, galas, and ceremonies.",
    icon: (
      <svg {...svgProps}>
        <circle cx="12" cy="8" r="6" />
        <path d="M8.5 13.5 7 22l5-3 5 3-1.5-8.5" />
      </svg>
    ),
  },
  {
    title: "Festival & Award Juries",
    body: "Trusted judge for competitions and creative awards.",
    icon: (
      <svg {...svgProps}>
        <path d="m14 13-7.8 7.8a2 2 0 0 1-2.8-2.8L11 10" />
        <path d="m18 8 3-3" />
        <path d="m9 7 8 8" />
        <path d="m13 3 8 8" />
      </svg>
    ),
  },
];

/** 05 — Ways to Invite Esha */
export default function WaysToInvite() {
  return (
    <Section className="overflow-hidden">
      <AmbientGlow className="h-112 w-2xl" />
      <FloatingMotes count={7} />

      <Reveal className="text-center">
        <Eyebrow>Ways to Invite Esha</Eyebrow>
        <h2 className="mt-6 text-4xl font-light sm:text-5xl">
          Engagements{" "}
          <ShimmerText className="italic">around the world</ShimmerText>
        </h2>
      </Reveal>

      <Stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {ENGAGEMENTS.map((item, i) => (
          <StaggerItem key={item.title} className="h-full">
            <TiltCard className="group h-full" max={6}>
              <article className="relative flex h-full flex-col overflow-hidden rounded-sm border border-border bg-card/40 p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/50 hover:bg-card/70 hover:shadow-2xl hover:shadow-accent/5">
                {/* Top accent line + corner glow on hover */}
                <span
                  aria-hidden
                  className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-accent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />
                <span
                  aria-hidden
                  className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-accent/15 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                />

                <Float
                  amplitude={6}
                  duration={5}
                  delay={i * 0.35}
                  className="relative flex h-12 w-12 items-center justify-center rounded-full border border-accent/30 text-accent transition-all duration-300 group-hover:border-accent group-hover:bg-accent/10"
                >
                  {item.icon}
                </Float>
                <h3 className="relative mt-6 text-xl font-normal transition-colors duration-300 group-hover:text-accent">
                  {item.title}
                </h3>
                <p className="relative mt-4 leading-relaxed text-muted">
                  {item.body}
                </p>
              </article>
            </TiltCard>
          </StaggerItem>
        ))}

        {/* Tailored-format CTA fills the grid */}
        <StaggerItem className="h-full">
          <TiltCard className="group h-full" max={6}>
            <a
              href="#booking"
              className="relative flex h-full flex-col justify-center overflow-hidden rounded-sm border border-dashed border-accent/40 bg-accent/3 p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-accent hover:bg-accent/10"
            >
              <h3 className="text-xl font-normal text-accent">
                Something else in mind?
              </h3>
              <p className="mt-4 leading-relaxed text-muted">
                Tell us about your event and we&rsquo;ll tailor the format to fit.
              </p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.15em] text-accent">
                Start a conversation
                <Float as="span" axis="x" amplitude={5} duration={1.6} className="inline-block">
                  →
                </Float>
              </span>
            </a>
          </TiltCard>
        </StaggerItem>
      </Stagger>
    </Section>
  );
}
