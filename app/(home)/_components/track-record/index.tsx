import { Eyebrow, Section } from "../shared";
import { AmbientGlow, Reveal, Stagger, StaggerItem } from "../shared/motion";

const MILESTONES = [
  {
    meta: "Film",
    title: "Co-Producer · International Cinema",
    body: "“Sarhadein” placed on Apple TV & Google TV India; pitched to U.S. streamers including Amazon Studios.",
  },
  {
    meta: "2026",
    title: "Executive Judging Council",
    body: "Telly Awards judge evaluating global submissions across storytelling, editing, and innovation.",
  },
  {
    meta: "Series",
    title: "Creator & Showrunner",
    body: "Created AI Meets Cinema™, the original series spotlighting media's innovators.",
  },
  {
    meta: "2025",
    title: "Best of Small Business Awards",
    body: "Named a Business Visionary — honored with the distinguished SB100 Award.",
  },
  {
    meta: "Nonprofit",
    title: "Founder & President",
    body: "Built the AI/VR Motion Picture Guild™, a 501(c)(6) association, from the ground up.",
  },
  {
    meta: "Impact",
    title: "United Nations Contributor",
    body: "Edited human-rights training content for UN OHCHR; three official appreciation letters.",
  },
];

/** 06 — Track Record */
export default function TrackRecord() {
  return (
    <Section className="overflow-hidden">
      <AmbientGlow className="h-112 w-2xl" />

      <Reveal className="text-center">
        <Eyebrow>Track Record</Eyebrow>
        <h2 className="mt-6 text-4xl font-light sm:text-5xl">
          Leadership and{" "}
          <span
            className="bg-clip-text italic text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(110deg, var(--accent), #fff5dc 50%, var(--accent-strong))",
            }}
          >
            Achievement
          </span>
        </h2>
      </Reveal>

      <div className="relative mx-auto mt-16 max-w-3xl">
        {/* Gradient timeline spine */}
        <span
          aria-hidden
          className="absolute bottom-2 left-1.75 top-2 w-px bg-linear-to-b from-accent via-accent/40 to-transparent"
        />
        <Stagger className="space-y-10">
          {MILESTONES.map((item) => (
            <StaggerItem key={item.title} className="group relative pl-12">
              {/* Glowing node */}
              <span
                aria-hidden
                className="absolute left-0 top-1.5 h-3.5 w-3.5 rounded-full border border-accent bg-background transition-all duration-300 group-hover:bg-accent group-hover:shadow-[0_0_12px_2px_var(--accent)]"
              />
              <div className="flex items-center gap-3">
                <span className="rounded-full border border-border px-3 py-1 text-[0.65rem] uppercase tracking-[0.15em] text-muted transition-colors duration-300 group-hover:border-accent/50 group-hover:text-accent">
                  {item.meta}
                </span>
              </div>
              <h3 className="mt-3 text-lg font-semibold text-foreground transition-colors duration-300 group-hover:text-accent">
                {item.title}
              </h3>
              <p className="mt-2 max-w-2xl leading-relaxed text-muted">
                {item.body}
              </p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </Section>
  );
}
