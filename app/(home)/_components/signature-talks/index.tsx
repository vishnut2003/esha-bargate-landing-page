import { Eyebrow, Section } from "../shared";
import { Reveal, Stagger, StaggerItem } from "../shared/motion";

const TALKS = [
  {
    n: "01",
    title: "The AI-Driven Production Pipeline",
    body: "How AI is reshaping pre-production, post, and distribution — and what it means for creators and studios.",
  },
  {
    n: "02",
    title: "Building a Global Media Venture",
    body: "A Business Visionary's blueprint for building creative ventures — from a studio to a guild across six continents.",
  },
  {
    n: "03",
    title: "Global Creative Ecosystems",
    body: "Connecting talent across North America, Europe, the Middle East, Africa, Latin America, and South Asia.",
  },
  {
    n: "04",
    title: "From Short Film to Streaming",
    body: "A producer's playbook on global distribution, platform requirements, and content positioning.",
  },
];

/** 04 — Signature Talks */
export default function SignatureTalks() {
  return (
    <Section>
      <Reveal>
        <Eyebrow>Signature Talks</Eyebrow>
        <h2 className="mt-6 text-4xl font-light sm:text-5xl">
          What Esha speaks about
        </h2>
      </Reveal>
      <Stagger className="mt-14 grid gap-6 lg:grid-cols-2">
        {TALKS.map((talk) => (
          <StaggerItem
            key={talk.n}
            className="border border-border border-l-2 border-l-accent bg-card/40 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-l-accent-strong hover:bg-card/70"
          >
            <p className="text-sm font-semibold tracking-[0.2em] text-accent">
              {talk.n}
            </p>
            <h3 className="mt-4 text-2xl font-normal">{talk.title}</h3>
            <p className="mt-4 leading-relaxed text-muted">{talk.body}</p>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
