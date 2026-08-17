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

type Session = {
  n: string;
  meta: { label: string; value: string }[];
  locale: string;
  event: string;
  series: string;
  title: string;
  body: string;
  panel?: { name: string; org: string }[];
};

const SESSIONS: Session[] = [
  {
    n: "01",
    meta: [
      { label: "Session", value: "3:00–3:50 PM ET" },
      { label: "Runtime", value: "50 min" },
      { label: "Format", value: "Panel" },
      { label: "Role", value: "Panelist" },
    ],
    locale: "Session I",
    event: "Digital Hollywood",
    series: "Cinematic AI: The 21st Century Artist",
    title:
      "The Creativity Pipeline: AI Ideation · Visualization · Storyboards · Plot Structure, Part II",
    body: "Where generative tools actually land inside a working creative pipeline — from first ideation and visual development through storyboards and plot structure. The panel traded practical craft notes on what AI accelerates, what it still cannot judge, and where the artist's hand remains decisive.",
    panel: [
      { name: "Stacey Kelly", org: "WatchLab" },
      { name: "Evette Vargas", org: "Indigo Reign Films" },
      { name: "Griff Furst", org: "humAIn" },
      { name: "Dan Kovacs", org: "Voia" },
      { name: "Shaun Foster", org: "RIT School of Design" },
    ],
  },
  {
    n: "02",
    meta: [
      { label: "Date", value: "Oct 25, 2025" },
      { label: "Runtime", value: "90 min" },
      { label: "Format", value: "Panel" },
      { label: "Role", value: "Panelist" },
    ],
    locale: "Mountain View, CA",
    event: "Epic ACG Fest 2025",
    series: "ACG Creators & AIGC Meet Up",
    title: "Animation · Comic · Game: Global Creators Panel",
    body: "How AI and globalization are opening international collaboration across art forms — and how generative tools work alongside animators, comic artists, and game designers rather than around them. The festival's 2025 edition drew 70+ selected projects from more than 20 countries.",
  },
];

/** 06 — Recent Sessions */
export default function RecentSessions() {
  return (
    <Section className="overflow-hidden">
      <AmbientGlow className="h-112 w-2xl" />
      <LightSweep duration={9} delay={1.5} />

      <Reveal className="text-center">
        <Eyebrow>Recent Sessions</Eyebrow>
        <h2 className="mt-6 text-4xl font-light sm:text-5xl">
          Recently <ShimmerText className="italic">on stage</ShimmerText>
        </h2>
        <p className="mx-auto mt-6 max-w-xl leading-relaxed text-muted">
          A look at the most recent festival and summit panels — the rooms,
          the formats, and the people Esha shared the stage with.
        </p>
      </Reveal>

      <Stagger className="mt-14 grid gap-6 lg:grid-cols-2">
        {SESSIONS.map((session, i) => (
          <StaggerItem key={session.event} className="h-full">
            <TiltCard className="group h-full" max={5}>
              <article className="relative flex h-full flex-col overflow-hidden rounded-sm border border-border bg-card/40 p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/50 hover:bg-card/70 hover:shadow-2xl hover:shadow-accent/5">
                {/* Top hairline on hover */}
                <span
                  aria-hidden
                  className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-accent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />
                {/* Corner glow on hover */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-accent/15 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                />
                {/* Giant watermark index — gently drifts */}
                <Float
                  amplitude={5}
                  duration={6}
                  delay={i * 0.5}
                  className="pointer-events-none absolute -top-8 right-1 select-none text-[7rem] font-light leading-none text-accent/6 transition-colors duration-300 group-hover:text-accent/10"
                >
                  {session.n}
                </Float>

                {/* Meta strip */}
                <div className="relative border-b border-border/60 pb-5">
                  <dl className="flex flex-wrap gap-x-8 gap-y-3">
                    {session.meta.map((field) => (
                      <div key={field.label}>
                        <dt className="text-[0.6rem] uppercase tracking-[0.25em] text-accent/70">
                          {field.label}
                        </dt>
                        <dd className="mt-1 text-sm text-foreground">
                          {field.value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                  <p className="mt-4 flex items-center gap-3 text-[0.65rem] uppercase tracking-[0.25em] text-accent">
                    <span aria-hidden className="h-px w-6 bg-accent/50" />
                    {session.locale}
                  </p>
                </div>

                {/* Session detail */}
                <div className="relative mt-6 flex flex-1 flex-col">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
                    {session.event}
                  </p>
                  <p className="mt-1 italic text-muted">{session.series}</p>

                  <h3 className="mt-4 text-2xl font-normal transition-colors duration-300 group-hover:text-accent">
                    {session.title}
                  </h3>
                  <p className="mt-4 leading-relaxed text-muted">
                    {session.body}
                  </p>

                  {session.panel && (
                    <div className="mt-auto pt-8">
                      <p className="text-[0.6rem] uppercase tracking-[0.25em] text-accent/70">
                        On the panel
                      </p>
                      <ul className="mt-3 flex flex-wrap gap-2">
                        {session.panel.map((person) => (
                          <li
                            key={person.name}
                            className="rounded-full border border-border bg-card/40 px-4 py-1.5 text-xs tracking-wide text-foreground transition-colors duration-300 group-hover:border-accent/40"
                          >
                            {person.name}
                            <span className="text-muted"> · {person.org}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

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
