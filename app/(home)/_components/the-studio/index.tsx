import { Eyebrow, Section } from "../shared";
import { Reveal, Stagger, StaggerItem } from "../shared/motion";

const SIGNATURE_WORK = [
  {
    title: "“Sarhadein” — Co-Producer",
    body: "Co-produced an international short film and placed it on Apple TV and Google TV India.",
  },
  {
    title: "Global Distribution Expertise",
    body: "Proven command of platform requirements, content positioning, and worldwide distribution strategy.",
  },
  {
    title: "Pitched to Major U.S. Streamers",
    body: "Independently pitched original projects to streaming services including Amazon Studios.",
  },
];

/** 08 — The Studio */
export default function TheStudio() {
  return (
    <Section>
      <div className="grid gap-12 lg:grid-cols-2">
        <Reveal className="lg:border-r lg:border-border lg:pr-12">
          <Eyebrow>The Studio</Eyebrow>
          <h2 className="mt-6 text-4xl font-light leading-tight sm:text-5xl">
            Esha Bargate{" "}
            <span className="italic text-accent">Productions</span> LLC
          </h2>
          <p className="mt-8 text-lg leading-relaxed text-muted">
            An AI-driven boutique film studio and media strategy company — the
            creative engine behind Esha’s productions, partnerships, and original
            programming.
          </p>
          <p className="mt-8 italic text-accent/90">
            Founded & led by Esha Bargate
          </p>
        </Reveal>

        <div>
          <Reveal>
            <h3 className="text-2xl font-light">Signature Work</h3>
          </Reveal>
          <Stagger className="mt-8 space-y-8">
            {SIGNATURE_WORK.map((item) => (
              <StaggerItem
                key={item.title}
                className="border-l-2 border-accent pl-5 transition-colors duration-300 hover:border-accent-strong"
              >
                <h4 className="font-semibold text-accent">{item.title}</h4>
                <p className="mt-2 leading-relaxed text-muted">{item.body}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </Section>
  );
}
