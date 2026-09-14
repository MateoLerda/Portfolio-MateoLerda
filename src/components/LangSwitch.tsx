"use client";

import { useLocale } from "@/i18n/LocaleProvider";
import { localeNames, locales } from "@/i18n/dictionary";

export function LangSwitch() {
  const { locale, setLocale, t } = useLocale();

  return (
    <div className="lang-switch" role="group" aria-label={t.langSwitchLabel}>
      {locales.map((code) => (
        <button
          key={code}
          type="button"
          className="lang-option"
          aria-pressed={locale === code}
          onClick={() => setLocale(code)}
        >
          {localeNames[code]}
          <span className="visually-hidden">
            {code === "es" ? " — Español" : " — English"}
          </span>
        </button>
      ))}
    </div>
  );
}
