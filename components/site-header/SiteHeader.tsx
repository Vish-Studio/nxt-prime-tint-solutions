"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/button/Button";

const navItems = ["Services", "Benefits", "Process", "Quote"];

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const updateScrollState = () => setIsScrolled(window.scrollY > 12);

    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });

    return () => window.removeEventListener("scroll", updateScrollState);
  }, []);

  return (
    <header
      className={`sticky top-0 z-30 -mb-[88px] h-[88px] transition-all duration-300 ${
        isScrolled ? "bg-black/35 shadow-[0_12px_36px_rgba(0,0,0,0.12)] backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-full w-full max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="#" className="font-logo text-lg font-black tracking-[0.18em] text-white">
          NANO TINT
        </a>
        <nav aria-label="Main navigation" className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-white/70 transition hover:text-white"
            >
              {item}
            </a>
          ))}
        </nav>
        <Button href="#quote" variant="secondary" icon="phone" className="hidden md:inline-flex">
          Free Estimate
        </Button>
      </div>
    </header>
  );
}
