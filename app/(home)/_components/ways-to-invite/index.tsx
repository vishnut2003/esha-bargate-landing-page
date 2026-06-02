import { Eyebrow, Section } from "../shared";

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
      <Eyebrow>Ways to Invite Esha</Eyebrow>
      <h2 className="mt-6 text-4xl font-light sm:text-5xl">
        Engagements around the world
      </h2>
      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {ENGAGEMENTS.map((item) => (
          <div key={item.title} className="border border-border bg-card/40 p-8">
            <span className="text-xl text-accent">✦</span>
            <h3 className="mt-5 text-xl font-normal">{item.title}</h3>
            <p className="mt-4 leading-relaxed text-muted">{item.body}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
