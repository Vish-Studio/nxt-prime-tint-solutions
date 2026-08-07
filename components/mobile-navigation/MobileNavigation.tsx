"use client";

import { useEffect, useState } from "react";
import { Building2, Car, Mail, Menu, Phone, X } from "lucide-react";
import { Button } from "@/components/button/Button";

const navItems = ["Services", "Benefits", "Process", "Quote"];

const solutionItems = [
  { icon: Car, label: "Automotive tint" },
  { icon: Building2, label: "Architectural film" },
];

type MobileNavigationProps = {
  isScrolled: boolean;
};

export function MobileNavigation({ isScrolled }: MobileNavigationProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-label="Open navigation"
        aria-expanded={isOpen}
        onClick={() => setIsOpen(true)}
        className={`flex size-10 items-center justify-center transition ${isScrolled ? "text-white" : "text-black"}`}
      >
        <Menu aria-hidden="true" className="size-5" />
      </button>

      <div className={`fixed inset-0 z-50 ${isOpen ? "pointer-events-auto" : "pointer-events-none"}`}>
        <button
          type="button"
          aria-label="Close navigation"
          onClick={() => setIsOpen(false)}
          className={`absolute inset-0 bg-black/35 transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0"}`}
        />
        <aside
          aria-label="Mobile navigation"
          className={`relative flex h-full w-[min(88vw,24rem)] flex-col overflow-y-auto bg-white px-6 py-7 text-black shadow-2xl transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"
            }`}
        >
          <div className="flex items-center justify-between">
            <p className="font-logo text-sm font-black tracking-[0.12em]">PRIME TINT</p>
            <button
              type="button"
              aria-label="Close navigation"
              onClick={() => setIsOpen(false)}
              className="flex size-10 items-center justify-center text-black"
            >
              <X aria-hidden="true" className="size-5" />
            </button>
          </div>

          <nav aria-label="Mobile menu" className="mt-10 grid gap-7">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="text-3xl font-bold leading-none text-zinc-800 transition hover:text-saffron"
              >
                {item}
              </a>
            ))}
          </nav>

          <section className="mt-12" aria-labelledby="mobile-solutions">
            <p id="mobile-solutions" className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500">
              Choose a solution
            </p>
            <div className="mt-4 grid grid-cols-2 gap-3">
              {solutionItems.map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#services"
                  onClick={() => setIsOpen(false)}
                  className="group rounded-lg bg-zinc-50 p-4 transition hover:bg-zinc-100"
                >
                  <span className="flex size-9 items-center justify-center rounded-full bg-saffron text-black">
                    <Icon aria-hidden="true" className="size-5" />
                  </span>
                  <span className="mt-4 block text-sm font-bold leading-5 group-hover:text-saffron">{label}</span>
                </a>
              ))}
            </div>
          </section>

          <div className="mt-auto pt-10">
            <div className="flex flex-col justify-start items-start gap-3 text-sm text-left font-semibold text-zinc-700">
              <a href="tel:+10000000000" className="flex min-h-10 items-center justify-center gap-2 transition hover:text-saffron">
                <Phone aria-hidden="true" className="size-4 text-saffron" />
                Call
              </a>
              <a
                href="mailto:quotes@primetintsolutions.com"
                className="flex min-h-10 items-center justify-center gap-2 transition hover:text-saffron"
              >
                <Mail aria-hidden="true" className="size-4 text-saffron" />
                Email
              </a>
            </div>
            <Button href="#quote" icon="phone" onClick={() => setIsOpen(false)} className="mt-5 w-full">
              Get a Free Quote
            </Button>
          </div>
        </aside>
      </div>
    </div>
  );
}
