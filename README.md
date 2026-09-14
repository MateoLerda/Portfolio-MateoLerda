# Portfolio — Mateo Lerda

Portfolio personal en Next.js (App Router) + TypeScript, con tema dark/terminal y
switch de idioma ES/EN. Sin dependencias de UI: todo el estilo es CSS propio.

## Correr en local

```bash
npm install
npm run dev        # http://localhost:3000
```

Otros scripts:

```bash
npm run build      # build de producción (incluye type-check)
npm start          # servir el build
npm run typecheck  # sólo TypeScript
```

## Deploy en Vercel

El proyecto es un Next.js estándar, así que Vercel lo detecta solo:

1. Subí el repo a GitHub.
2. En Vercel: **Add New → Project → Import** el repo.
3. Framework Preset: **Next.js**. No hace falta tocar build command ni output
   directory, ni configurar variables de entorno.
4. Deploy.

La página se prerenderiza como contenido estático, así que sirve desde el CDN.

## Qué tocar para actualizar el contenido

Casi todo vive en **`src/data/profile.ts`**. Cada texto visible tiene su versión
en español (`es`) y en inglés (`en`).

| Qué querés cambiar | Dónde |
| --- | --- |
| Nombre, rol, ubicación, tagline del hero | `identity` |
| Links de GitHub / Instagram / LinkedIn / email | `links` |
| Párrafos de "Sobre mí" | `about` |
| Categorías y tecnologías del stack | `stack` |
| Proyectos (nombre, descripción, destacados, links) | `projects` |
| Experiencia y docencia | `experience` |
| Foto: alt, epígrafe, dimensiones | `portrait` |

Los textos de la interfaz (nav, botones, títulos de sección) están en
**`src/i18n/dictionary.ts`**.

La foto está en `public/mateo.jpg` y se configura en `portrait`. Si la cambiás,
actualizá `width` y `height` con las medidas reales: así el navegador reserva el
espacio y no hay salto de layout al cargar.

### Agregar un proyecto

Copiá un objeto de `projects` y cambiá los campos. `featured: true` le da un
borde con el color de acento. `links` acepta cuantos quieras:

```ts
links: [{ label: "GitHub", href: "https://github.com/..." }],
```

## Decisiones técnicas

- **Sin framework de CSS.** `src/app/globals.css` usa cascade layers
  (`@layer reset, base, layout, components, utilities`), design tokens en
  `:root` y propiedades lógicas. No hay resets globales sobre `*`.
- **Animaciones de entrada nativas.** Las secciones aparecen con
  *scroll-driven animations* (`animation-timeline: view()`), que corren en el
  compositor. Firefox todavía no las soporta: ahí un script mínimo
  (`ScrollRevealInit`) replica el efecto con `IntersectionObserver`. Si el JS no
  corre, el contenido queda visible igual.
- **`prefers-reduced-motion`.** Toda animación se apaga para quien lo pida, sin
  el truco de `animation-duration: 0.01ms` global.
- **Idioma.** Contexto de React con persistencia en `localStorage` (envuelta en
  `try/catch` para modo privado). El servidor renderiza siempre en español para
  no romper la hidratación; al montar, el cliente respeta la elección guardada
  o el idioma del navegador y actualiza `<html lang>`.
- **Tipografías por `<link>`.** Inter y JetBrains Mono se piden a Google Fonts en
  runtime, no en build time, así el build nunca falla por red. Si preferís
  `next/font/google` (mejor CLS, self-hosting automático), reemplazá el `<head>`
  de `src/app/layout.tsx` y las variables `--font-sans` / `--font-mono`.
- **Accesibilidad.** Skip link, `:focus-visible` con outline visible, targets de
  al menos 24px (36px en pointer coarse), jerarquía de headings correcta y
  fallback para `forced-colors`.

## Estructura

```
src/
├── app/
│   ├── globals.css      # sistema de diseño completo
│   ├── layout.tsx       # metadata, fuentes, providers
│   └── page.tsx         # composición de la página
├── components/
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── LangSwitch.tsx
│   ├── ScrollRevealInit.tsx
│   ├── Section.tsx
│   └── Sections.tsx     # About, Stack, Projects, Experience, Contact, Footer
├── data/
│   └── profile.ts       # ← el contenido
└── i18n/
    ├── LocaleProvider.tsx
    └── dictionary.ts    # ← textos de UI
```
