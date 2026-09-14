/**
 * Único archivo que hace falta tocar para actualizar el contenido del portfolio.
 * Cada texto visible tiene su versión en español e inglés.
 *
 * Single file to edit to update the portfolio content.
 * Every visible string has a Spanish and an English version.
 */

export type Locale = "es" | "en";

/** Un texto en los dos idiomas. */
export type Localized = string;

export type I18nText = Record<Locale, Localized>;
export type I18nList = Record<Locale, readonly string[]>;

/* -------------------------------------------------------------------------- */
/* Identidad y links                                                          */
/* -------------------------------------------------------------------------- */

export const identity = {
  name: "Mateo Lerda",
  /** Se usa en el "prompt" de la terminal del hero. */
  handle: "mateo",
  role: {
    es: "Backend Developer",
    en: "Backend Developer",
  } satisfies I18nText,
  company: "BZA Group / Megatone",
  location: {
    es: "Rafaela, Santa Fe, Argentina",
    en: "Rafaela, Santa Fe, Argentina",
  } satisfies I18nText,
  tagline: {
    es: "Construyo servicios backend en .NET y Go: integraciones con Mercado Libre, automatización de liquidaciones y microservicios que tienen que andar todos los días.",
    en: "I build backend services in .NET and Go: Mercado Libre integrations, settlement automation, and microservices that have to run every single day.",
  } satisfies I18nText,
  available: {
    es: "Abierto a proyectos y oportunidades",
    en: "Open to projects and opportunities",
  } satisfies I18nText,
} as const;

/** Para sacar un link de la lista, borrá el objeto entero. */
export const links = [
  {
    id: "github",
    label: "GitHub",
    handle: "@MateoLerda",
    href: "https://github.com/MateoLerda",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    handle: "mateo-lerda",
    href: "https://www.linkedin.com/in/mateo-lerda-8a48802a3",
  },
  {
    id: "instagram",
    label: "Instagram",
    handle: "@mateolerda2",
    href: "https://www.instagram.com/mateolerda2/",
  },
  {
    id: "email",
    label: "Email",
    handle: "mateolerda03@gmail.com",
    href: "mailto:mateolerda03@gmail.com",
  },
] as const;

/** Retrato. El archivo vive en `public/`. */
export const portrait = {
  src: "/mateo.jpg",
  width: 1086,
  height: 1391,
  alt: {
    es: "Mateo Lerda, retrato de frente sobre fondo gris claro",
    en: "Mateo Lerda, front-facing portrait on a light grey background",
  } satisfies I18nText,
  caption: {
    es: "Rafaela, Santa Fe",
    en: "Rafaela, Santa Fe",
  } satisfies I18nText,
} as const;

/* -------------------------------------------------------------------------- */
/* Sobre mí                                                                    */
/* -------------------------------------------------------------------------- */

export const about: I18nList = {
  es: [
    "Soy backend developer en BZA Group (Megatone), en Rafaela. Trabajo con microservicios en C#/.NET Core y SQL Server, y buena parte de mi día a día pasa por integraciones con la API de Mercado Libre: stock multi-origen, publicaciones, liquidaciones a vendedores.",
    "En paralelo estoy terminando Ingeniería en Computación en la UCSE y doy clases como ayudante en tres materias de programación. Explicar recursión veinte veces por semana te obliga a entender bien lo que hacés.",
    "Me interesa el diseño de sistemas antes que el código: escribir la especificación funcional, después la técnica, y recién ahí abrir el editor. Menos reescrituras, menos sorpresas en producción.",
  ],
  en: [
    "I'm a backend developer at BZA Group (Megatone), in Rafaela, Argentina. I work with C#/.NET Core microservices and SQL Server, and a good part of my day goes into Mercado Libre API integrations: multi-warehouse stock, listings, seller settlements.",
    "In parallel I'm finishing my Computer Engineering degree at UCSE and I teach as a TA in three programming courses. Explaining recursion twenty times a week forces you to actually understand what you're doing.",
    "I care about system design before code: write the functional spec, then the technical one, and only then open the editor. Fewer rewrites, fewer surprises in production.",
  ],
};

/* -------------------------------------------------------------------------- */
/* Stack                                                                       */
/* -------------------------------------------------------------------------- */

export const stack = [
  {
    id: "languages",
    title: { es: "Lenguajes", en: "Languages" } satisfies I18nText,
    items: ["C#", "Go", "SQL", "TypeScript", "JavaScript", "Python"],
  },
  {
    id: "backend",
    title: { es: "Backend", en: "Backend" } satisfies I18nText,
    items: [".NET Core", "Entity Framework", "Gin", "REST APIs", "OAuth2 / Duende IdentityServer", "Microservicios"],
  },
  {
    id: "data",
    title: { es: "Datos", en: "Data" } satisfies I18nText,
    items: ["SQL Server", "PostgreSQL", "SQLite", "Modelado relacional", "ERD / Mermaid"],
  },
  {
    id: "frontend",
    title: { es: "Frontend", en: "Frontend" } satisfies I18nText,
    items: ["React", "Next.js", "CSS moderno", "HTML semántico"],
  },
  {
    id: "tooling",
    title: { es: "Herramientas", en: "Tooling" } satisfies I18nText,
    items: ["Git", "Postman", "Railway", "Vercel", "Claude Code", "Scrum"],
  },
] as const;

/* -------------------------------------------------------------------------- */
/* Proyectos                                                                   */
/* -------------------------------------------------------------------------- */

export type ProjectLink = { label: string; href: string };

export const projects = [
  {
    id: "aura",
    name: "AURA",
    year: "2026",
    featured: true,
    kind: { es: "Producto", en: "Product" } satisfies I18nText,
    tagline: {
      es: "Plataforma de experiencia del cliente y reputación para pymes B2C",
      en: "Customer experience and reputation platform for B2C small businesses",
    } satisfies I18nText,
    description: {
      es: "AURA interviene en la posventa por WhatsApp: clasifica la experiencia del cliente y, según el resultado, pide una reseña pública o abre un caso interno antes de que el problema llegue a Google. Multi-emprendimiento, con integraciones a WhatsApp Business Platform y Google Business Profile.",
      en: "AURA steps into post-purchase over WhatsApp: it classifies the customer experience and, depending on the outcome, asks for a public review or opens an internal case before the problem reaches Google. Multi-tenant, integrated with WhatsApp Business Platform and Google Business Profile.",
    } satisfies I18nText,
    highlights: {
      es: [
        "Spec funcional con 75 decisiones cerradas antes de escribir una línea de código",
        "20 ADRs y 21 decisiones técnicas documentadas en el spec técnico",
        "PostgreSQL elegido sobre MySQL por índices parciales y row-level security",
      ],
      en: [
        "Functional spec with 75 closed decisions before writing a single line of code",
        "20 ADRs and 21 technical decisions documented in the technical spec",
        "PostgreSQL chosen over MySQL for partial indexes and row-level security",
      ],
    } satisfies I18nList,
    stack: ["Go", "PostgreSQL 16", "Next.js", "Railway", "WhatsApp Business API"],
    links: [] as ProjectLink[],
  },
  {
    id: "bza",
    name: "Mercado Libre @ BZA Group",
    year: "2024 — hoy",
    featured: true,
    kind: { es: "Trabajo", en: "Work" } satisfies I18nText,
    tagline: {
      es: "Integraciones de marketplace y automatización de liquidaciones",
      en: "Marketplace integrations and settlement automation",
    } satisfies I18nText,
    description: {
      es: "Microservicios en .NET Core que sostienen la operación de venta en Mercado Libre: sincronización de stock multi-origen entre depósitos, publicaciones, y el sistema de liquidaciones que calcula y concilia lo que se le paga a cada vendedor.",
      en: ".NET Core microservices behind the Mercado Libre sales operation: multi-warehouse stock sync across depots, listings, and the settlement system that computes and reconciles what each seller gets paid.",
    } satisfies I18nText,
    highlights: {
      es: [
        "Documenté el comportamiento real de la API de ML con pruebas empíricas en Postman: semántica de upsert en stock, ciclos de conflicto por concurrencia, pausa y reactivación automática de publicaciones",
        "Diseñé el esquema de liquidaciones y su ERD, con autenticación OAuth2 contra Duende IdentityServer",
        "Consultas cross-database sobre SQL Server para conciliación y control de datos bancarios de vendedores",
      ],
      en: [
        "Documented the real behavior of the ML API through empirical Postman testing: stock upsert semantics, concurrency conflict cycles, automatic listing pause and reactivation",
        "Designed the settlements schema and its ERD, with OAuth2 auth against Duende IdentityServer",
        "Cross-database SQL Server queries for reconciliation and seller banking-data checks",
      ],
    } satisfies I18nList,
    stack: ["C#", ".NET Core", "SQL Server", "Entity Framework", "Postman", "Scrum"],
    links: [] as ProjectLink[],
  },
  {
    id: "finanzas",
    name: "Finanzas personales",
    year: "2025",
    featured: false,
    kind: { es: "Proyecto personal", en: "Side project" } satisfies I18nText,
    tagline: {
      es: "La planilla de Excel convertida en aplicación",
      en: "The Excel spreadsheet turned into an app",
    } satisfies I18nText,
    description: {
      es: "App web para llevar transacciones, presupuestos, metas de ahorro y deudas. Empezó como un frontend en React con persistencia local y la estoy reescribiendo con un backend propio en Go para tener datos reales y multi-dispositivo.",
      en: "Web app to track transactions, budgets, savings goals and debts. It started as a React frontend with local persistence and I'm rebuilding it with my own Go backend for real, multi-device data.",
    } satisfies I18nText,
    highlights: {
      es: [
        "Reemplazó un tracker en Excel que usaba todos los meses",
        "Rediseño del backend en Go + Gin + SQLite, especificado antes de implementar",
      ],
      en: [
        "Replaced an Excel tracker I was using every month",
        "Backend redesign in Go + Gin + SQLite, specified before implementing",
      ],
    } satisfies I18nList,
    stack: ["React", "Go", "Gin", "SQLite"],
    links: [] as ProjectLink[],
  },
  {
    id: "supercook",
    name: "SuperCook",
    year: "2024",
    featured: false,
    kind: { es: "Académico", en: "Academic" } satisfies I18nText,
    tagline: {
      es: "Trabajo final de Programación 2024, en Go",
      en: "Final project for Programming 2024, written in Go",
    } satisfies I18nText,
    description: {
      es: "Aplicación web construida con Go y Gin Gonic como trabajo final de la materia. Primer proyecto donde salí del stack de la facultad y armé todo desde cero: routing, handlers, templates y persistencia.",
      en: "Web application built with Go and Gin Gonic as the course's final project. First project where I stepped outside the university stack and built everything from scratch: routing, handlers, templates and persistence.",
    } satisfies I18nText,
    highlights: {
      es: ["Código abierto en GitHub"],
      en: ["Open source on GitHub"],
    } satisfies I18nList,
    stack: ["Go", "Gin Gonic", "HTML", "CSS"],
    links: [
      { label: "GitHub", href: "https://github.com/MateoLerda/TpFinalProgramacion2024" },
    ] as ProjectLink[],
  },
] as const;

/* -------------------------------------------------------------------------- */
/* Experiencia                                                                 */
/* -------------------------------------------------------------------------- */

export const experience = [
  {
    id: "bza-group",
    org: "BZA Group / Megatone",
    period: { es: "Actualidad", en: "Present" } satisfies I18nText,
    role: { es: "Backend Developer", en: "Backend Developer" } satisfies I18nText,
    detail: {
      es: "Microservicios en C#/.NET Core y SQL Server para la operación de marketplaces. Integraciones con Mercado Libre, automatización de liquidaciones a vendedores y soporte a procesos de facturación. Metodología Scrum.",
      en: "C#/.NET Core microservices and SQL Server for marketplace operations. Mercado Libre integrations, seller settlement automation and support for invoicing processes. Scrum methodology.",
    } satisfies I18nText,
  },
  {
    id: "ucse-ayudante",
    org: "UCSE — Departamento Académico Rafaela",
    period: { es: "Actualidad", en: "Present" } satisfies I18nText,
    role: {
      es: "Ayudante de cátedra",
      en: "Teaching Assistant",
    } satisfies I18nText,
    detail: {
      es: "Ayudante en Algoritmos y Programación, Programación I y Programación II. Acompaño a estudiantes de primeros años en fundamentos, estructuras de datos y resolución de problemas.",
      en: "TA for Algorithms & Programming, Programming I and Programming II. I support first-year students with fundamentals, data structures and problem solving.",
    } satisfies I18nText,
  },
  {
    id: "ucse-estudiante",
    org: "UCSE — Departamento Académico Rafaela",
    period: { es: "5.º año", en: "5th year" } satisfies I18nText,
    role: {
      es: "Ingeniería en Computación",
      en: "Computer Engineering",
    } satisfies I18nText,
    detail: {
      es: "Carrera de grado en curso, con Práctica Profesional Supervisada realizada en la industria.",
      en: "Undergraduate degree in progress, including a Supervised Professional Practice done in industry.",
    } satisfies I18nText,
  },
] as const;
