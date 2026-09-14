"use client";

import Image from "next/image";
import {
  about,
  experience,
  links,
  portrait,
  projects,
  stack,
} from "@/data/profile";
import { useLocale } from "@/i18n/LocaleProvider";
import { Section } from "./Section";

export function About() {
  const { t, pick, pickList } = useLocale();

  return (
    <Section id="about" index={t.sections.aboutIndex} title={t.sections.about}>
      <div className="about-grid">
        <figure className="portrait">
          <Image
            src={portrait.src}
            width={portrait.width}
            height={portrait.height}
            alt={pick(portrait.alt)}
            sizes="(min-width: 62rem) 20rem, (min-width: 40rem) 16rem, 100vw"
            priority={false}
          />
          <figcaption>
            <span className="portrait-sigil" aria-hidden="true">
              ./
            </span>
            {pick(portrait.caption)}
          </figcaption>
        </figure>

        <div className="prose">
          {pickList(about).map((paragraph) => (
            <p key={paragraph.slice(0, 32)}>{paragraph}</p>
          ))}
        </div>
      </div>
    </Section>
  );
}

export function Stack() {
  const { t, pick } = useLocale();

  return (
    <Section id="stack" index={t.sections.stackIndex} title={t.sections.stack}>
      <ul className="stack-grid">
        {stack.map((group) => (
          <li key={group.id} className="stack-card">
            <h3>{pick(group.title)}</h3>
            <ul className="chips">
              {group.items.map((item) => (
                <li key={item} className="chip">
                  {item}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </Section>
  );
}

export function Projects() {
  const { t, pick, pickList } = useLocale();

  return (
    <Section
      id="projects"
      index={t.sections.projectsIndex}
      title={t.sections.projects}
    >
      <p className="lede">{t.projectsIntro}</p>

      <ul className="project-list">
        {projects.map((project) => (
          <li
            key={project.id}
            className="project"
            data-featured={project.featured}
          >
            <div className="project-head">
              <h3 className="project-name">{project.name}</h3>
              <span className="project-kind">{pick(project.kind)}</span>
              <span className="project-year">{project.year}</span>
            </div>

            <p className="project-tagline">{pick(project.tagline)}</p>
            <p className="project-description">{pick(project.description)}</p>

            {pickList(project.highlights).length > 0 && (
              <>
                <h4 className="visually-hidden">{t.highlightsLabel}</h4>
                <ul className="project-highlights">
                  {pickList(project.highlights).map((highlight) => (
                    <li key={highlight.slice(0, 32)}>{highlight}</li>
                  ))}
                </ul>
              </>
            )}

            <div className="project-footer">
              <ul className="chips">
                {project.stack.map((tech) => (
                  <li key={tech} className="chip">
                    {tech}
                  </li>
                ))}
              </ul>

              {project.links.length > 0 && (
                <ul className="project-links">
                  {project.links.map((link) => (
                    <li key={link.href}>
                      <a
                        className="project-link"
                        href={link.href}
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        {link.label}
                        <span className="visually-hidden">
                          {` — ${project.name}`}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}

export function Experience() {
  const { t, pick } = useLocale();

  return (
    <Section
      id="experience"
      index={t.sections.experienceIndex}
      title={t.sections.experience}
    >
      <ol className="timeline">
        {experience.map((entry) => (
          <li key={entry.id} className="timeline-item">
            <p className="timeline-period">{pick(entry.period)}</p>
            <h3 className="timeline-role">{pick(entry.role)}</h3>
            <p className="timeline-org">{entry.org}</p>
            <p className="timeline-detail">{pick(entry.detail)}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}

export function Contact() {
  const { t } = useLocale();

  return (
    <Section
      id="contact"
      index={t.sections.contactIndex}
      title={t.sections.contact}
    >
      <p className="lede">{t.contactIntro}</p>

      <ul className="link-grid">
        {links.map((link) => (
          <li key={link.id}>
            <a
              className="link-card"
              href={link.href}
              {...(link.id === "email"
                ? {}
                : { target: "_blank", rel: "me noreferrer noopener" })}
            >
              <span className="link-card-label">{link.label}</span>
              <span className="link-card-handle">{link.handle}</span>
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}

export function Footer() {
  const { t } = useLocale();
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="shell">
        <p>
          © {year} Mateo Lerda · {t.footerNote}
        </p>
        <a className="footer-top" href="#top">
          ↑ {t.backToTop}
        </a>
      </div>
    </footer>
  );
}
