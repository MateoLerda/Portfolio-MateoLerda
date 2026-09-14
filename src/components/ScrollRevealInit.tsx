import Script from "next/script";

/**
 * Las animaciones de entrada usan scroll-driven animations nativas cuando el
 * navegador las soporta (Chrome/Edge 115+, Safari 26+). Firefox todavía no,
 * así que ahí replicamos el efecto con IntersectionObserver.
 *
 * El script corre antes de pintar y marca <html> sólo cuando hace falta el
 * fallback: si el JS no corre, el contenido queda visible igual.
 */
const script = `
(function () {
  try {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (CSS.supports('(animation-timeline: view()) and (animation-range: entry)')) return;

    document.documentElement.classList.add('reveal-fallback');

    var start = function () {
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      }, { rootMargin: '0px 0px -12% 0px', threshold: 0.08 });

      document.querySelectorAll('.reveal').forEach(function (el) {
        observer.observe(el);
      });
    };

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', start, { once: true });
    } else {
      start();
    }
  } catch (error) {
    document.documentElement.classList.remove('reveal-fallback');
  }
})();
`;

export function ScrollRevealInit() {
  return (
    <Script
      id="scroll-reveal-fallback"
      strategy="beforeInteractive"
      dangerouslySetInnerHTML={{ __html: script }}
    />
  );
}
