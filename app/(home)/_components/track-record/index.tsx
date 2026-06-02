import { Eyebrow, Section } from "../shared";

const MILESTONES = [
  {
    title: "Co-Producer · International Cinema",
    body: "“Sarhadein” placed on Apple TV & Google TV India; pitched to U.S. streamers including Amazon Studios.",
  },
  {
    title: "2026 · Executive Judging Council",
    body: "Telly Awards judge evaluating global submissions across storytelling, editing, and innovation.",
  },
  {
    title: "Creator & Showrunner",
    body: "Created AI Meets Cinema™, the original series spotlighting media's innovators.",
  },
  {
    title: "2025 · Best of Small Business Awards",
    body: "Named a Business Visionary — honored with the distinguished SB100 Award.",
  },
  {
    title: "Founder & President",
    body: "Built the AI/VR Motion Picture Guild™, a 501(c)(6) association, from the ground up.",
  },
  {
    title: "United Nations Contributor",
    body: "Edited human-rights training content for UN OHCHR; three official appreciation letters.",
  },
];

/** 06 — Track Record */
export default function TrackRecord() {
  return (
    <Section>
      <Eyebrow>Track Record</Eyebrow>
      <h2 className="mt-6 text-4xl font-light sm:text-5xl">
        Leadership & achievements
      </h2>
      <div className="mt-14 border-l border-border pl-8">
        {MILESTONES.map((item) => (
          <div key={item.title} className="relative pb-12 last:pb-0">
            <span className="absolute -left-[41px] top-1.5 h-3.5 w-3.5 rounded-full border border-accent bg-background" />
            <h3 className="text-lg font-semibold text-accent">{item.title}</h3>
            <p className="mt-2 max-w-2xl leading-relaxed text-muted">
              {item.body}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
