"use client";

import { useLocale } from "@/i18n/LocaleProvider";
import { identity } from "@/data/profile";
import { LangSwitch } from "./LangSwitch";

const sections = [
  { id: "about", key: "about" },
  { id: "stack", key: "stack" },
  { id: "projects", key: "projects" },
  { id: "experience", key: "experience" },
  { id: "contact", key: "contact" },
] as const;

export function Header() {
  const { t } = useLocale();

  return (
    <header className="site-header">
      <div className="shell">
        <a className="brand" href="#top">
          <span className="brand-sigil" aria-hidden="true">
            ~/
          </span>
          {identity.name.toLowerCase().replace(" ", "-")}
        </a>

        <nav aria-label={t.navLabel}>
          <ul className="nav-list">
            {sections.map((section) => (
              <li key={section.id}>
                <a className="nav-link" href={`#${section.id}`}>
                  {t.nav[section.key]}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <LangSwitch />
      </div>
    </header>
  );
}
