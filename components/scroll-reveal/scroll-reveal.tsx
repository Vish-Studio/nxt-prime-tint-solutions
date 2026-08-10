"use client";

import { useEffect, useRef } from "react";
import type { ReactNode } from "react";

type ScrollRevealProps = {
  children: ReactNode;
};

export const ScrollReveal = ({ children }: ScrollRevealProps) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;

    if (!element) {
      return;
    }

    const targets = Array.from(element.querySelectorAll<HTMLElement>("[data-reveal]"));

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      targets.forEach((target) => target.classList.add("is-revealed"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8%", threshold: 0.08 },
    );

    targets.forEach((target, index) => {
      target.style.setProperty("--reveal-delay", `${Math.min(index * 90, 360)}ms`);
      observer.observe(target);
    });

    return () => observer.disconnect();
  }, []);

  return <div ref={elementRef} className="contents">{children}</div>;
};
