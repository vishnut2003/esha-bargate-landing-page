import { Eyebrow, Section } from "../shared";

const ITEMS = [
  {
    tag: "Press Feature",
    title: "Featured in Deadline",
    body: "Work and leadership covered by a top entertainment trade publication.",
  },
  {
    tag: "Industry Honor",
    title: "Telly Awards Judge",
    body: "Selected to the 2026 Executive Judging Council — a seat for trusted authorities.",
  },
  {
    tag: "Recognition",
    title: "Business Visionary",
    body: "Distinguished SB100 Award in the 2025 Best of Small Business Awards.",
  },
];

/** 09 — Recognition */
export default function Recognition() {
  return (
    <Section>
      <Eyebrow>Recognition</Eyebrow>
      <h2 className="mt-6 text-4xl font-light sm:text-5xl">Featured & awarded</h2>
      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        {ITEMS.map((item) => (
          <div key={item.title} className="border border-border bg-card/40 p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              {item.tag}
            </p>
            <h3 className="mt-5 text-2xl font-normal">{item.title}</h3>
            <p className="mt-4 leading-relaxed text-muted">{item.body}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
