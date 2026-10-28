"use client";

import { useEffect } from "react";

// Fades sections in as they scroll into view. Content stays visible without
// JavaScript or when the visitor prefers reduced motion.
export default function Reveal() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!("IntersectionObserver" in window)) return;

    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px" },
    );

    document.documentElement.classList.add("reveal-on");
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return null;
}
