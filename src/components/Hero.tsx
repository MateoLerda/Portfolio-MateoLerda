"use client";

import { identity, stack } from "@/data/profile";
import { useLocale } from "@/i18n/LocaleProvider";

const languages = stack.find((group) => group.id === "languages");

export function Hero() {
  const { pick, t, locale } = useLocale();

  return (
    <section className="hero" aria-labelledby="hero-name">
      <div className="shell hero-grid">
        <div>
          <p className="hero-status">
            <span className="hero-dot" aria-hidden="true" />
            {pick(identity.available)}
          </p>

          <h1 id="hero-name" className="hero-name">
            {identity.name}
          </h1>
          <p className="hero-role">{pick(identity.role)}</p>

          <ul className="hero-meta">
            <li>{identity.company}</li>
            <li>{pick(identity.location)}</li>
            <li>UCSE</li>
          </ul>

          <p className="hero-tagline">{pick(identity.tagline)}</p>

          <div className="hero-actions">
            <a className="button" data-variant="primary" href="#projects">
              {t.heroCta}
            </a>
            <a className="button" href="#contact">
              {t.heroCtaSecondary}
            </a>
          </div>
        </div>

        <div className="terminal" aria-hidden="true">
          <div className="terminal-bar">
            <span className="terminal-light" data-tone="a" />
            <span className="terminal-light" data-tone="b" />
            <span className="terminal-light" data-tone="c" />
            <span className="terminal-title">
              {identity.handle}@portfolio — zsh
            </span>
          </div>

          <div className="terminal-body">
            <p className="terminal-line">
              <span className="terminal-prompt">$</span>
              <span className="terminal-value">whoami --verbose</span>
            </p>
            <p className="terminal-line">
              <span className="terminal-key">role</span>
              <span className="terminal-comment">=</span>
              <span className="terminal-value">&quot;{pick(identity.role)}&quot;</span>
            </p>
            <p className="terminal-line">
              <span className="terminal-key">focus</span>
              <span className="terminal-comment">=</span>
              <span className="terminal-value">
                [{languages?.items.slice(0, 3).map((item) => `"${item}"`).join(", ")}]
              </span>
            </p>
            <p className="terminal-line">
              <span className="terminal-key">based_in</span>
              <span className="terminal-comment">=</span>
              <span className="terminal-value">&quot;Rafaela, AR&quot;</span>
            </p>
            <p className="terminal-line">
              <span className="terminal-key">status</span>
              <span className="terminal-comment">=</span>
              <span className="terminal-value">
                &quot;{locale === "es" ? "construyendo" : "building"}&quot;
              </span>
            </p>
            <p className="terminal-line">
              <span className="terminal-prompt">$</span>
              <span className="terminal-caret" />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
