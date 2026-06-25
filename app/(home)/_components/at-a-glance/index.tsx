import { Eyebrow, Section } from "../shared";
import {
  AmbientGlow,
  CountUp,
  Float,
  LightSweep,
  Reveal,
  ShimmerText,
  Stagger,
  StaggerItem,
  TiltCard,
} from "../shared/motion";

const iconClass = "h-5 w-5";

const STATS = [
  {
    stat: "6",
    value: 6,
    label: "Continents Connected",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={iconClass}
      >
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18" />
        <path d="M12 3a14 14 0 0 1 0 18 14 14 0 0 1 0-18Z" />
      </svg>
    ),
  },
  {
    stat: "2026",
    value: 2026,
    label: "Telly Awards Judge",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={iconClass}
      >
        <path d="M8 21h8" />
        <path d="M12 17v4" />
        <path d="M7 4h10v5a5 5 0 0 1-10 0V4Z" />
        <path d="M7 6H4v1a3 3 0 0 0 3 3" />
        <path d="M17 6h3v1a3 3 0 0 1-3 3" />
      </svg>
    ),
  },
  {
    stat: "SB100",
    value: null,
    label: "Business Visionary",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={iconClass}
      >
        <path d="m12 3 2.5 5.5L20 9l-4 4 1 6-5-3-5 3 1-6-4-4 5.5-.5L12 3Z" />
      </svg>
    ),
  },
  {
    stat: "2",
    value: 2,
    label: "Streaming Platforms",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={iconClass}
      >
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m10 9 5 3-5 3V9Z" />
      </svg>
    ),
  },
];

/** 03 — At a Glance */
export default function AtAGlance() {
  return (
    <Section className="overflow-hidden">
      <AmbientGlow className="h-112 w-2xl" />
      <LightSweep duration={8} />

      <Reveal className="text-center">
        <Eyebrow>At a Glance</Eyebrow>
        <h2 className="mt-6 text-4xl font-light sm:text-5xl">
          A career of <ShimmerText className="italic">firsts</ShimmerText>
        </h2>

        {/* Divider flourish */}
        <div className="mt-8 flex items-center justify-center gap-3 text-accent">
          <span
            aria-hidden
            className="h-px w-12 bg-linear-to-r from-transparent to-accent/60"
          />
          <span aria-hidden className="text-sm">
            ✦
          </span>
          <span
            aria-hidden
            className="h-px w-12 bg-linear-to-l from-transparent to-accent/60"
          />
        </div>
      </Reveal>

      <Stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {STATS.map((item, i) => (
          <StaggerItem key={item.label}>
            <TiltCard className="group h-full">
              <div className="relative h-full overflow-hidden rounded-sm border border-border bg-card/40 px-6 py-12 text-center transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/50 hover:bg-card/70 hover:shadow-2xl hover:shadow-accent/5">
                {/* Top accent line, revealed on hover */}
                <span
                  aria-hidden
                  className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-accent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />
                {/* Corner glow on hover */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-accent/15 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                />

                {/* Icon badge */}
                <Float
                  amplitude={6}
                  duration={5}
                  delay={i * 0.4}
                  className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-accent/30 text-accent transition-colors duration-300 group-hover:border-accent group-hover:bg-accent/10"
                >
                  {item.icon}
                </Float>

                {/* Stat */}
                <p
                  className="mt-6 bg-clip-text text-5xl font-light text-transparent"
                  style={{
                    backgroundImage:
                      "linear-gradient(160deg, var(--accent-strong), var(--accent) 60%, #b88a32)",
                  }}
                >
                  {item.value === null ? (
                    item.stat
                  ) : (
                    <CountUp value={item.value} />
                  )}
                </p>
                <p className="mt-4 text-xs uppercase tracking-[0.2em] text-muted">
                  {item.label}
                </p>
              </div>
            </TiltCard>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
