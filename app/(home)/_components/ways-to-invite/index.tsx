import { Eyebrow, Section } from "../shared";
import { Reveal, Stagger, StaggerItem } from "../shared/motion";

const ENGAGEMENTS = [
  {
    title: "Keynote Addresses",
    body: "Headline talks on film, AI, and the future of media.",
  },
  {
    title: "Panels & Moderation",
    body: "Expert panelist or moderator who keeps the room engaged.",
  },
  {
    title: "Fireside Chats",
    body: "Intimate, candid conversations on craft and innovation.",
  },
  {
    title: "Guest of Honor",
    body: "A distinguished presence for openings, galas, and ceremonies.",
  },
  {
    title: "Festival & Award Juries",
    body: "Trusted judge for competitions and creative awards.",
  },
];

/** 05 — Ways to Invite Esha */
export default function WaysToInvite() {
  return (
    <Section>
      <Reveal>
        <Eyebrow>Ways to Invite Esha</Eyebrow>
        <h2 className="mt-6 text-4xl font-light sm:text-5xl">
          Engagements around the world
        </h2>
      </Reveal>
      <Stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {ENGAGEMENTS.map((item) => (
          <StaggerItem
            key={item.title}
            className="group border border-border bg-card/40 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:bg-card/70"
          >
            <span className="inline-block text-xl text-accent transition-transform duration-300 group-hover:scale-125">
              ✦
            </span>
            <h3 className="mt-5 text-xl font-normal">{item.title}</h3>
            <p className="mt-4 leading-relaxed text-muted">{item.body}</p>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
