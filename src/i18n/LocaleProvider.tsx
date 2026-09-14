"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { I18nList, I18nText, Locale } from "@/data/profile";
import { ui, type Dictionary } from "./dictionary";

const STORAGE_KEY = "portfolio:locale";
const DEFAULT_LOCALE: Locale = "es";

type LocaleContextValue = {
  locale: Locale;
  setLocale: (next: Locale) => void;
  toggleLocale: () => void;
  /** Diccionario de la interfaz en el idioma activo. */
  t: Dictionary;
  /** Resuelve un texto bilingüe del contenido. */
  pick: (value: I18nText) => string;
  /** Resuelve una lista bilingüe del contenido. */
  pickList: (value: I18nList) => readonly string[];
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

function isLocale(value: unknown): value is Locale {
  return value === "es" || value === "en";
}

function readStoredLocale(): Locale | null {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return isLocale(stored) ? stored : null;
  } catch {
    // localStorage puede fallar en modo privado o con cookies bloqueadas.
    return null;
  }
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  // El servidor siempre renderiza el idioma por defecto para evitar
  // un mismatch de hidratación; ajustamos apenas monta el cliente.
  const [locale, setLocaleState] = useState<Locale>(DEFAULT_LOCALE);

  useEffect(() => {
    const stored = readStoredLocale();
    if (stored) {
      setLocaleState(stored);
      return;
    }
    const preferred = navigator.languages ?? [navigator.language];
    if (preferred.some((tag) => tag.toLowerCase().startsWith("en"))) {
      setLocaleState("en");
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Sin persistencia, pero la sesión actual sigue funcionando.
    }
  }, []);

  const value = useMemo<LocaleContextValue>(
    () => ({
      locale,
      setLocale,
      toggleLocale: () => setLocale(locale === "es" ? "en" : "es"),
      t: ui[locale],
      pick: (text: I18nText) => text[locale],
      pickList: (list: I18nList) => list[locale],
    }),
    [locale, setLocale],
  );

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale(): LocaleContextValue {
  const ctx = useContext(LocaleContext);
  if (!ctx) {
    throw new Error("useLocale debe usarse dentro de <LocaleProvider>");
  }
  return ctx;
}
