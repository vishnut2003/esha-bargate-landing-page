import { Eyebrow, Section } from "../shared";
import { Reveal, Stagger, StaggerItem } from "../shared/motion";

const STATS = [
  { stat: "6", label: "Continents Connected" },
  { stat: "2026", label: "Telly Awards Judge" },
  { stat: "SB100", label: "Business Visionary" },
  { stat: "2", label: "Streaming Platforms" },
];

/** 03 — At a Glance */
export default function AtAGlance() {
  return (
    <Section>
      <Reveal>
        <Eyebrow>At a Glance</Eyebrow>
        <h2 className="mt-6 text-4xl font-light sm:text-5xl">
          A career of firsts
        </h2>
      </Reveal>
      <Stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {STATS.map((item) => (
          <StaggerItem
            key={item.label}
            className="border border-border bg-card/40 px-6 py-12 text-center transition-colors duration-300 hover:border-accent/50 hover:bg-card/70"
          >
            <p className="text-5xl font-light text-accent">{item.stat}</p>
            <p className="mt-6 text-xs uppercase tracking-[0.2em] text-muted">
              {item.label}
            </p>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
