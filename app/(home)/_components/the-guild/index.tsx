import { Eyebrow, Section } from "../shared";

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
    body: "Honored in the 2025 Best of Small Business Awards by Small Business Expo.",
  },
  {
    title: "USA × Africa Partnership",
    body: "Allied with the Association of Movie Producers Nigeria and EPIC ACG, USA, connecting filmmakers across continents.",
  },
];

/** 07 — The Guild */
export default function TheGuild() {
  return (
    <Section>
      <div className="grid gap-12 lg:grid-cols-2">
        <div className="lg:border-r lg:border-border lg:pr-12">
          <Eyebrow>The Guild</Eyebrow>
          <h2 className="mt-6 text-4xl font-light leading-tight sm:text-5xl">
            AI/VR Motion{" "}
            <span className="italic text-accent">Picture Guild</span>
            <span className="text-accent">™</span>
          </h2>
          <p className="mt-8 text-lg leading-relaxed text-muted">
            A 501(c)(6) nonprofit professional association advancing storytelling,
            emerging media technologies, and ethical standards in filmmaking.
          </p>
          <p className="mt-8 italic text-accent/90">
            Founded & led by Esha Bargate · President & Director
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-light">Milestones</h3>
          <div className="mt-8 space-y-8">
            {MILESTONES.map((item) => (
              <div key={item.title} className="border-l-2 border-accent pl-5">
                <h4 className="font-semibold text-accent">{item.title}</h4>
                <p className="mt-2 leading-relaxed text-muted">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
