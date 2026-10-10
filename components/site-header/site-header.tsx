"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/button/button";
import { MobileNavigation } from "@/components/mobile-navigation/mobile-navigation";

const navItems = [
  { label: "Services", id: "services" },
  { label: "Solutions", id: "solutions" },
  { label: "Gallery", id: "gallery" },
  { label: "Process", id: "process" },
];

export const SiteHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState("");

  useEffect(() => {
    const updateScrollState = () => {
      const hasLeftHero = window.scrollY > 12;

      setIsScrolled(hasLeftHero);

      if (!hasLeftHero) {
        setActiveItem("");
      }
    };

    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });

    return () => window.removeEventListener("scroll", updateScrollState);
  }, []);

  useEffect(() => {
    const sectionElements = navItems
      .map(({ id }) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const activeSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((first, second) => first.boundingClientRect.top - second.boundingClientRect.top)[0];

        if (activeSection) {
          setActiveItem(activeSection.target.id);
        }
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: 0 },
    );

    sectionElements.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`sticky top-0 z-30 -mb-[88px] h-[88px] transition-all duration-300 ${isScrolled ? "bg-black/35 shadow-[0_12px_36px_rgba(0,0,0,0.12)] backdrop-blur-xl" : "bg-transparent"
        }`}
    >
      <div className="mx-auto flex h-full w-full max-w-7xl items-center justify-between px-5 sm:px-8">
        <div className="flex items-center gap-1">
          <MobileNavigation isScrolled={isScrolled} />
          <a
            href="#"
            className={`font-logo text-sm font-black tracking-[0.08em] transition-colors sm:text-base sm:tracking-[0.12em] ${isScrolled ? "text-white" : "text-black"
              }`}
          >
            PRIME TINT
          </a>
        </div>
        <nav aria-label="Main navigation" className="hidden items-center gap-8 md:flex">
          {navItems.map(({ label, id }) => (
            <a
              key={id}
              href={`#${id}`}
              data-track="nav_click"
              data-track-section={id}
              className={`text-sm font-medium transition ${isScrolled && activeItem === id
                ? "font-bold text-white"
                : isScrolled
                  ? "text-white/70 hover:text-white"
                  : "text-zinc-600 hover:text-black"
                }`}
            >
              {label}
            </a>
          ))}
        </nav>
        <Button href="#quote" variant="primary" icon="phone" data-track="quote_cta_click" data-track-location="header" className="hidden md:inline-flex">
          Free Estimate
        </Button>
      </div>
    </header>
  );
};
