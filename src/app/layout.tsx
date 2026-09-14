import type { Metadata, Viewport } from "next";
import { LocaleProvider } from "@/i18n/LocaleProvider";
import { ScrollRevealInit } from "@/components/ScrollRevealInit";
import { identity } from "@/data/profile";
import "./globals.css";

/**
 * Las tipografías se cargan por <link> (no por next/font) para que el build
 * no dependa de alcanzar Google Fonts. Si el pedido falla, el stack de
 * fallback definido en globals.css se encarga y la página se ve igual de bien.
 */
const FONTS_HREF =
  "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap";

const description =
  "Backend developer en Rafaela, Argentina. Microservicios .NET Core y Go, integraciones con Mercado Libre y automatización de procesos. | Backend developer building .NET Core and Go microservices, Mercado Libre integrations and process automation.";

/**
 * Base para resolver las URLs absolutas de las imágenes de Open Graph.
 * Vercel expone el dominio de producción en esta variable; si algún día tenés
 * dominio propio, poné `NEXT_PUBLIC_SITE_URL` en las env vars del proyecto.
 */
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${identity.name} — Backend Developer`,
    template: `%s — ${identity.name}`,
  },
  description,
  keywords: [
    "backend developer",
    "C#",
    ".NET Core",
    "Go",
    "Mercado Libre API",
    "SQL Server",
    "Rafaela",
    "Argentina",
  ],
  authors: [{ name: identity.name, url: "https://github.com/MateoLerda" }],
  creator: identity.name,
  openGraph: {
    type: "website",
    title: `${identity.name} — Backend Developer`,
    description,
    locale: "es_AR",
    alternateLocale: ["en_US"],
    images: [{ url: "/mateo.jpg", width: 1086, height: 1391, alt: identity.name }],
  },
  twitter: {
    card: "summary",
    title: `${identity.name} — Backend Developer`,
    description,
    images: ["/mateo.jpg"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#0a0d12",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="stylesheet" href={FONTS_HREF} />
      </head>
      <body>
        <ScrollRevealInit />
        <LocaleProvider>{children}</LocaleProvider>
      </body>
    </html>
  );
}
