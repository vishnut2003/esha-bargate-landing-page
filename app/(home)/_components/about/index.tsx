import Image from "next/image";
import { Eyebrow, Section } from "../shared";
import portrait from "./assets/esha-portrait.jpeg";

/** 02 — About Esha */
export default function About() {
  return (
    <Section>
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div className="relative mx-auto aspect-4/5 w-full max-w-sm">
          <span className="absolute -left-3 -top-3 z-10 h-10 w-10 border-l border-t border-accent/70" />
          <span className="absolute -bottom-3 -right-3 z-10 h-10 w-10 border-b border-r border-accent/70" />
          <Image
            src={portrait}
            alt="Portrait of Esha Bargate"
            placeholder="blur"
            sizes="(min-width: 1024px) 24rem, 100vw"
            className="h-full w-full object-cover"
            priority
          />
        </div>

        <div>
          <Eyebrow>About Esha</Eyebrow>
          <h2 className="mt-6 text-4xl font-light leading-tight sm:text-5xl">
            One storyteller,
            <br />
            <span className="italic text-accent">many frontiers.</span>
          </h2>
          <div className="mt-8 space-y-5 text-lg leading-relaxed text-muted">
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
        </div>
      </div>
    </Section>
  );
}
