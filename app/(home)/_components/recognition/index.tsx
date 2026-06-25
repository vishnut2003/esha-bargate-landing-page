import { Eyebrow, Section } from "../shared";
import { AmbientGlow, Reveal, Stagger, StaggerItem } from "../shared/motion";

const svgProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.4,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  className: "h-5 w-5",
};

const ITEMS = [
  {
    tag: "Press Feature",
    title: "Featured in Deadline",
    body: "Work and leadership covered by a top entertainment trade publication.",
    icon: (
      <svg {...svgProps}>
        <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" />
        <path d="M18 14h-8M15 18h-5M10 6h8v4h-8V6Z" />
      </svg>
    ),
  },
  {
    tag: "Industry Honor",
    title: "Telly Awards Judge",
    body: "Selected to the 2026 Executive Judging Council — a seat for trusted authorities.",
    icon: (
      <svg {...svgProps}>
        <path d="M8 21h8M12 17v4M7 4h10v5a5 5 0 0 1-10 0V4Z" />
        <path d="M7 6H4v1a3 3 0 0 0 3 3M17 6h3v1a3 3 0 0 1-3 3" />
      </svg>
    ),
  },
  {
    tag: "Recognition",
    title: "Business Visionary",
    body: "Distinguished SB100 Award in the 2025 Best of Small Business Awards.",
    icon: (
      <svg {...svgProps}>
        <circle cx="12" cy="8" r="6" />
        <path d="M8.5 13.5 7 22l5-3 5 3-1.5-8.5" />
      </svg>
    ),
  },
];

/** 09 — Recognition */
export default function Recognition() {
  return (
    <Section className="overflow-hidden">
      <AmbientGlow className="h-112 w-2xl" />

      <Reveal className="text-center">
        <Eyebrow>Recognition</Eyebrow>
        <h2 className="mt-6 text-4xl font-light sm:text-5xl">
          Featured &{" "}
          <span
            className="bg-clip-text italic text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(110deg, var(--accent), #fff5dc 50%, var(--accent-strong))",
            }}
          >
            awarded
          </span>
        </h2>
      </Reveal>

      <Stagger className="mt-14 grid gap-6 lg:grid-cols-3">
        {ITEMS.map((item) => (
          <StaggerItem key={item.title} className="h-full">
            <article className="group relative flex h-full flex-col overflow-hidden rounded-sm border border-border bg-card/40 p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/50 hover:bg-card/70 hover:shadow-2xl hover:shadow-accent/5">
              {/* Corner glow + top accent on hover */}
              <span
                aria-hidden
                className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-accent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />
              <span
                aria-hidden
                className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-accent/15 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
              />

              <div className="relative flex items-center justify-between">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                  {item.tag}
                </p>
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-accent/30 text-accent transition-colors duration-300 group-hover:border-accent group-hover:bg-accent/10">
                  {item.icon}
                </span>
              </div>

              <h3 className="relative mt-6 text-2xl font-normal transition-colors duration-300 group-hover:text-accent">
                {item.title}
              </h3>
              <p className="relative mt-4 leading-relaxed text-muted">
                {item.body}
              </p>
            </article>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
