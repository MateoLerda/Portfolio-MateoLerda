import type { Locale } from "@/data/profile";

/** Textos de la interfaz (no de contenido). El contenido vive en data/profile.ts */
export type Dictionary = {
  skipToContent: string;
  navLabel: string;
  nav: {
    about: string;
    stack: string;
    projects: string;
    experience: string;
    contact: string;
  };
  langSwitchLabel: string;
  heroCta: string;
  heroCtaSecondary: string;
  sections: {
    about: string;
    aboutIndex: string;
    stack: string;
    stackIndex: string;
    projects: string;
    projectsIndex: string;
    experience: string;
    experienceIndex: string;
    contact: string;
    contactIndex: string;
  };
  projectsIntro: string;
  contactIntro: string;
  highlightsLabel: string;
  stackLabel: string;
  viewProject: string;
  footerNote: string;
  backToTop: string;
};

export const ui: Record<Locale, Dictionary> = {
  es: {
    skipToContent: "Saltar al contenido",
    navLabel: "Navegación principal",
    nav: {
      about: "Sobre mí",
      stack: "Stack",
      projects: "Proyectos",
      experience: "Experiencia",
      contact: "Contacto",
    },
    langSwitchLabel: "Cambiar idioma",
    heroCta: "Ver proyectos",
    heroCtaSecondary: "Escribirme",
    sections: {
      about: "Sobre mí",
      aboutIndex: "01",
      stack: "Stack",
      stackIndex: "02",
      projects: "Proyectos",
      projectsIndex: "03",
      experience: "Experiencia y docencia",
      experienceIndex: "04",
      contact: "Contacto",
      contactIndex: "05",
    },
    projectsIntro:
      "Lo que estuve construyendo, entre el trabajo, la facultad y lo que hago por mi cuenta.",
    contactIntro:
      "Si te interesa algo de lo que hago, o tenés un proyecto en mente, escribime. Respondo.",
    highlightsLabel: "Destacados",
    stackLabel: "Stack",
    viewProject: "Ver",
    footerNote: "Hecho con Next.js. Código y contenido propios.",
    backToTop: "Volver arriba",
  },
  en: {
    skipToContent: "Skip to content",
    navLabel: "Main navigation",
    nav: {
      about: "About",
      stack: "Stack",
      projects: "Projects",
      experience: "Experience",
      contact: "Contact",
    },
    langSwitchLabel: "Change language",
    heroCta: "See projects",
    heroCtaSecondary: "Get in touch",
    sections: {
      about: "About",
      aboutIndex: "01",
      stack: "Stack",
      stackIndex: "02",
      projects: "Projects",
      projectsIndex: "03",
      experience: "Experience & teaching",
      experienceIndex: "04",
      contact: "Contact",
      contactIndex: "05",
    },
    projectsIntro:
      "What I've been building, between work, university and things I do on my own.",
    contactIntro:
      "If something here caught your attention, or you have a project in mind, write to me. I answer.",
    highlightsLabel: "Highlights",
    stackLabel: "Stack",
    viewProject: "View",
    footerNote: "Built with Next.js. Code and content are my own.",
    backToTop: "Back to top",
  },
};

export const locales: readonly Locale[] = ["es", "en"];

export const localeNames: Record<Locale, string> = {
  es: "ES",
  en: "EN",
};
