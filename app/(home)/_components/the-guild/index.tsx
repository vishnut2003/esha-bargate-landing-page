import { Eyebrow, Section } from "../shared";
import {
  AmbientGlow,
  Float,
  FloatingMotes,
  Reveal,
  ShimmerText,
  Stagger,
  StaggerItem,
  TiltCard,
} from "../shared/motion";

const MILESTONES = [
  {
    title: "Global AI Filmmaking & Creative Ecosystem™",
    body: "Launched a collaboration network spanning North America, Europe, the Middle East, Africa, Latin America, and South Asia.",
  },
  {
    title: "Ethical Standards Council™",
    body: "Established to provide professional guidance on responsible AI use in storytelling and media production.",
  },
  {
    title: "SB100 · Business Visionary Recognition",
    body: "AIVR MPG Honored in the 2025 Best SB 100 Awards by Small Business",
  },
  {
    title: "USA × Africa Partnership",
    body: "Allied with the Association of Movie Producers Nigeria and EPIC ACG, USA, connecting filmmakers across continents.",
  },
];

/** 08 — The Guild */
export default function TheGuild() {
  return (
    <Section className="overflow-hidden">
      <AmbientGlow className="h-112 w-2xl" />
      <FloatingMotes count={6} />

      <div className="grid gap-12 lg:grid-cols-2">
        <Reveal className="lg:border-r lg:border-border lg:pr-12">
          <Eyebrow>The Guild</Eyebrow>
          <h2 className="mt-6 text-4xl font-light leading-tight sm:text-5xl">
            AI/VR Motion{" "}
            <ShimmerText className="italic">Picture Guild</ShimmerText>
            <span className="text-accent">™</span>
          </h2>

          {/* Status chips */}
          <div className="mt-8 flex flex-wrap gap-3">
            {["501(c)(6) Nonprofit", "Six Continents", "Est. by Esha Bargate"].map(
              (chip) => (
                <span
                  key={chip}
                  className="rounded-full border border-border bg-card/40 px-4 py-1.5 text-xs tracking-wide text-muted"
                >
                  {chip}
                </span>
              ),
            )}
          </div>

          <p className="mt-8 text-lg leading-relaxed text-muted">
            A 501(c)(6) nonprofit professional association advancing storytelling,
            emerging media technologies, and ethical standards in filmmaking.
          </p>
          <p className="mt-8 flex items-center gap-3 italic text-accent/90">
            <span aria-hidden className="h-px w-8 bg-accent/50" />
            Founded & led by Esha Bargate · President & Director
          </p>
        </Reveal>

        <div>
          <Reveal>
            <h3 className="text-2xl font-light">Milestones</h3>
          </Reveal>
          <Stagger className="mt-8 space-y-5">
            {MILESTONES.map((item, i) => (
              <StaggerItem key={item.title}>
                <TiltCard className="group" max={5}>
                  <div className="relative overflow-hidden rounded-sm border border-border bg-card/30 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:bg-card/60 hover:shadow-xl hover:shadow-accent/5">
                    <span
                      aria-hidden
                      className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-accent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    />
                    <div className="flex items-start gap-4">
                      <Float
                        amplitude={5}
                        duration={5}
                        delay={i * 0.4}
                        className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-accent/40 text-xs font-semibold text-accent transition-colors duration-300 group-hover:border-accent group-hover:bg-accent/10"
                      >
                        {String(i + 1).padStart(2, "0")}
                      </Float>
                      <div>
                        <h4 className="font-semibold text-accent">
                          {item.title}
                        </h4>
                        <p className="mt-2 leading-relaxed text-muted">
                          {item.body}
                        </p>
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </Section>
  );
}
