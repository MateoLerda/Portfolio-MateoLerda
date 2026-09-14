"use client";

import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import {
  About,
  Contact,
  Experience,
  Footer,
  Projects,
  Stack,
} from "@/components/Sections";
import { useLocale } from "@/i18n/LocaleProvider";

export default function HomePage() {
  const { t } = useLocale();

  return (
    <>
      <a className="skip-link" href="#main">
        {t.skipToContent}
      </a>

      <span id="top" />
      <Header />

      <main id="main">
        <Hero />
        <div className="shell">
          <About />
          <Stack />
          <Projects />
          <Experience />
          <Contact />
        </div>
      </main>

      <Footer />
    </>
  );
}
