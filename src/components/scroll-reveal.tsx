"use client";
import { useEffect } from "react";

// Elementos que entram sozinhos; os que chegam juntos à tela entram em sequência.
const SINGLES = [
  ".section .eyebrow",
  ".section h2",
  ".section .prose > p",
  ".section .prose > ul",
  ".section .prose > .button",
  ".section .photo",
  ".section .text-link",
  ".treatment-list > article",
  ".process-steps > li",
  ".faq-list > details",
  ".solutions-cta > p",
  ".carousel-controls",
  ".photo-footnote",
  ".map",
  ".final-monogram",
  ".audience-marquee",
  ".clinic-location svg",
  ".footer-wordmark",
  ".footer-bottom",
].join(",");
// Grupos cujos filhos entram em cascata quando o grupo aparece.
const CASCADES = [
  ".review-track",
  ".about-questions",
  ".clinic-gallery",
  ".clinic-values",
  ".footer-grid",
].join(",");
const STEP = 90;

export function ScrollReveal() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const inView = (element: Element) => {
      const rect = element.getBoundingClientRect();
      return rect.top < window.innerHeight && rect.bottom > 0;
    };
    const marked = new Set<Element>();
    const groups = new Map<Element, Element[]>();
    document.querySelectorAll(CASCADES).forEach((group) => {
      if (inView(group)) return;
      const children = Array.from(group.children);
      children.forEach((child, i) => {
        marked.add(child);
        (child as HTMLElement).style.setProperty(
          "--reveal-delay",
          `${Math.min(i, 6) * STEP}ms`,
        );
      });
      groups.set(group, children);
    });
    const singles = Array.from(document.querySelectorAll(SINGLES)).filter(
      (element) => !marked.has(element) && !inView(element),
    );
    singles.forEach((element) => marked.add(element));
    // Um elemento dentro de outro que já anima não anima de novo.
    marked.forEach((element) => {
      let parent = element.parentElement;
      while (parent) {
        if (marked.has(parent)) {
          marked.delete(element);
          return;
        }
        parent = parent.parentElement;
      }
    });
    marked.forEach((element) => element.setAttribute("data-reveal", ""));
    document.documentElement.setAttribute("data-reveal-ready", "");

    const reveal = (element: Element) =>
      element.setAttribute("data-revealed", "");
    const observer = new IntersectionObserver(
      (entries) => {
        let order = 0;
        entries
          .filter((entry) => entry.isIntersecting)
          .forEach(({ target }) => {
            observer.unobserve(target);
            const group = groups.get(target);
            if (group) {
              group.filter((child) => marked.has(child)).forEach(reveal);
              return;
            }
            (target as HTMLElement).style.setProperty(
              "--reveal-delay",
              `${Math.min(order++, 5) * STEP}ms`,
            );
            reveal(target);
          });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
    );
    groups.forEach((_, group) => observer.observe(group));
    singles
      .filter((element) => marked.has(element))
      .forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);
  return null;
}
