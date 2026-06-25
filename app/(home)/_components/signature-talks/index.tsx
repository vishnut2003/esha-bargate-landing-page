import { Eyebrow, Section } from "../shared";
import {
  AmbientGlow,
  Float,
  LightSweep,
  Reveal,
  ShimmerText,
  Stagger,
  StaggerItem,
  TiltCard,
} from "../shared/motion";

const TALKS = [
  {
    n: "01",
    tag: "AI & Technology",
    title: "The AI-Driven Production Pipeline",
    body: "How AI is reshaping pre-production, post, and distribution — and what it means for creators and studios.",
  },
  {
    n: "02",
    tag: "Entrepreneurship",
    title: "Building a Global Media Venture",
    body: "A Business Visionary's blueprint for building creative ventures — from a studio to a guild across six continents.",
  },
  {
    n: "03",
    tag: "Global Markets",
    title: "Global Creative Ecosystems",
    body: "Connecting talent across North America, Europe, the Middle East, Africa, Latin America, and South Asia.",
  },
  {
    n: "04",
    tag: "Distribution",
    title: "From Short Film to Streaming",
    body: "A producer's playbook on global distribution, platform requirements, and content positioning.",
  },
];

/** 04 — Signature Talks */
export default function SignatureTalks() {
  return (
    <Section className="overflow-hidden">
      <AmbientGlow className="h-112 w-2xl" />
      <LightSweep duration={9} delay={1} />

      <Reveal className="text-center">
        <Eyebrow>Signature Talks</Eyebrow>
        <h2 className="mt-6 text-4xl font-light sm:text-5xl">
          What Esha <ShimmerText className="italic">speaks about</ShimmerText>
        </h2>
        <p className="mx-auto mt-6 max-w-xl leading-relaxed text-muted">
          Keynotes and fireside conversations shaped for festivals, summits, and
          boardrooms — tailored to your audience.
        </p>
      </Reveal>

      <Stagger className="mt-14 grid gap-6 lg:grid-cols-2">
        {TALKS.map((talk, i) => (
          <StaggerItem key={talk.n} className="h-full">
            <TiltCard className="group h-full" max={5}>
              <article className="relative flex h-full flex-col overflow-hidden rounded-sm border border-border bg-card/40 p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/50 hover:bg-card/70 hover:shadow-2xl hover:shadow-accent/5">
                {/* Giant watermark index — gently drifts */}
                <Float
                  amplitude={5}
                  duration={6}
                  delay={i * 0.5}
                  className="pointer-events-none absolute -top-8 right-1 select-none text-[7rem] font-light leading-none text-accent/6 transition-colors duration-300 group-hover:text-accent/10"
                >
                  {talk.n}
                </Float>
                {/* Corner glow on hover */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-accent/15 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                />

                {/* Index + category */}
                <div className="relative flex items-center gap-3">
                  <span className="text-sm font-semibold tracking-[0.2em] text-accent">
                    {talk.n}
                  </span>
                  <span aria-hidden className="h-px w-8 bg-accent/40" />
                  <span className="rounded-full border border-border px-3 py-1 text-[0.65rem] uppercase tracking-[0.15em] text-muted transition-colors duration-300 group-hover:border-accent/50 group-hover:text-accent">
                    {talk.tag}
                  </span>
                </div>

                <h3 className="relative mt-5 text-2xl font-normal transition-colors duration-300 group-hover:text-accent">
                  {talk.title}
                </h3>
                <p className="relative mt-4 leading-relaxed text-muted">
                  {talk.body}
                </p>

                {/* Animated underline */}
                <span
                  aria-hidden
                  className="absolute bottom-0 left-0 h-0.5 w-0 bg-linear-to-r from-accent to-transparent transition-all duration-500 group-hover:w-full"
                />
              </article>
            </TiltCard>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
