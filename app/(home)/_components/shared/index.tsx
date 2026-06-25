import type { ReactNode } from "react";

/** Gold uppercase eyebrow label used above every section heading. */
export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
      {children}
    </p>
  );
}

/** Gold L-shaped corner brackets used on the cinematic full-bleed sections. */
export function CornerFrame() {
  const bar = "absolute h-10 w-10 border-accent/70";
  return (
    <>
      <span className={`${bar} left-8 top-8 border-l border-t`} />
      <span className={`${bar} right-8 top-8 border-r border-t`} />
      <span className={`${bar} bottom-8 left-8 border-b border-l`} />
      <span className={`${bar} bottom-8 right-8 border-b border-r`} />
    </>
  );
}

/** Standard padded content section with a centered max-width container. */
export function Section({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section
      id={id}
      className={`relative w-full scroll-mt-20 border-t border-border/40 px-6 py-24 sm:px-12 lg:px-20 ${className}`}
    >
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </section>
  );
}
