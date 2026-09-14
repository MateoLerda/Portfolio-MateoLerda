import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  index: string;
  title: string;
  children: ReactNode;
};

export function Section({ id, index, title, children }: SectionProps) {
  const headingId = `${id}-title`;

  return (
    <section id={id} className="section reveal" aria-labelledby={headingId}>
      <div className="section-head">
        <span className="section-index" aria-hidden="true">
          {index}
        </span>
        <h2 id={headingId} className="section-title">
          {title}
        </h2>
        <span className="section-rule" aria-hidden="true" />
      </div>
      {children}
    </section>
  );
}
