import Image from "next/image";
import { Eyebrow, Section } from "../shared";
import { AmbientGlow, Reveal } from "../shared/motion";
import portrait from "./assets/esha-portrait.jpeg";

/** Focus areas highlighted beneath the bio. */
const FOCUS = [
  { title: "Film Production", detail: "Globally distributed features" },
  { title: "Media Innovation", detail: "AI Meets Cinema™" },
  { title: "Global Partnerships", detail: "Across six continents" },
];

/** 02 — About Esha */
export default function About() {
  return (
    <Section id="about" className="overflow-hidden">
      <AmbientGlow className="h-120 w-120" />

      <div className="grid items-center gap-16 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)]">
        {/* Portrait — layered gallery frame */}
        <Reveal className="relative mx-auto w-full max-w-sm">
          <div className="group relative aspect-4/5 w-full">
            {/* Soft glow halo behind the frame */}
            <div
              aria-hidden
              className="absolute -inset-6 -z-20 rounded-full bg-accent/10 blur-3xl"
            />
            {/* Offset outline for a framed-print depth */}
            <span
              aria-hidden
              className="absolute inset-0 -z-10 translate-x-4 translate-y-4 rounded-sm border border-accent/25"
            />

            {/* Gradient-bordered image */}
            <div className="relative h-full w-full rounded-sm bg-linear-to-br from-accent/60 via-border to-accent-strong/40 p-px">
              <div className="relative h-full w-full overflow-hidden rounded-sm">
                <Image
                  src={portrait}
                  alt="Portrait of Esha Bargate"
                  placeholder="blur"
                  sizes="(min-width: 1024px) 24rem, 100vw"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  priority
                />
                {/* Cinematic bottom fade */}
                <div
                  aria-hidden
                  className="absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-background/80 to-transparent"
                />
              </div>
            </div>

            {/* Gold corner brackets */}
            <span
              aria-hidden
              className="absolute -left-3 -top-3 z-10 h-10 w-10 border-l border-t border-accent/70"
            />
            <span
              aria-hidden
              className="absolute -bottom-3 -right-3 z-10 h-10 w-10 border-b border-r border-accent/70"
            />

            {/* Floating credential card */}
            <div className="absolute -bottom-6 left-4 z-20 flex items-center gap-3 rounded-sm border border-border bg-card/90 px-5 py-3 shadow-xl shadow-black/40 backdrop-blur-sm sm:-left-6">
              <p className="text-3xl font-light text-accent">2026</p>
              <p className="max-w-28 text-xs uppercase leading-snug tracking-[0.15em] text-muted">
                Telly Awards Judging Council
              </p>
            </div>
          </div>
        </Reveal>

        {/* Copy */}
        <div>
          <Reveal delay={0.15}>
            <Eyebrow>About Esha</Eyebrow>
            <h2 className="mt-6 text-4xl font-light leading-tight sm:text-5xl">
              One storyteller,
              <br />
              <span
                className="bg-clip-text italic text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(110deg, var(--accent), #fff5dc 50%, var(--accent-strong))",
                }}
              >
                many frontiers.
              </span>
            </h2>
          </Reveal>

          <Reveal delay={0.25}>
            {/* Gold quote-style accent rule */}
            <div className="mt-8 space-y-5 border-l border-accent/30 pl-6 text-lg leading-relaxed text-muted">
              <p>
                Esha Bargate is a Media and Creative entrepreneur building bridges
                between cinema, technology, and global storytelling. From producing
                internationally distributed films to launching industry initiatives
                such as AI Meets Cinema™, her work explores how emerging technologies
                can expand creative opportunities for filmmakers worldwide.
              </p>
              <p>
                Recognized as a Business Visionary (SB100) and serving on the
                2026 Telly Awards Executive Judging Council, Esha&rsquo;s career
                spans film production, media innovation, international partnerships,
                and creative leadership—shaping conversations where storytelling meets
                the future.
              </p>
            </div>
          </Reveal>

          {/* Focus areas */}
          <Reveal delay={0.35}>
            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              {FOCUS.map((f) => (
                <div
                  key={f.title}
                  className="border-t border-border pt-4 transition-colors duration-300 hover:border-accent/60"
                >
                  <p className="text-sm font-medium text-foreground">
                    {f.title}
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-muted">
                    {f.detail}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Signature */}
          <Reveal delay={0.45}>
            <div className="mt-10 flex items-center gap-4">
              <span
                aria-hidden
                className="h-px w-10 bg-linear-to-r from-accent/60 to-transparent"
              />
              <p className="text-2xl italic text-accent/90">Esha Bargate</p>
              <span className="text-xs uppercase tracking-[0.2em] text-muted">
                Founder &amp; Producer
              </span>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
