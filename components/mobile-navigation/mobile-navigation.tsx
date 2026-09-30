"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import { Building2, Car, Mail, Menu, Phone, X } from "lucide-react";
import { Button } from "@/components/button/button";

const navItems = [
  { label: "Services", id: "services" },
  { label: "Solutions", id: "solutions" },
  { label: "Gallery", id: "gallery" },
  { label: "Process", id: "process" },
];

const solutionItems = [
  { icon: Car, label: "Automotive tint" },
  { icon: Building2, label: "Architectural film" },
];

type MobileNavigationProps = {
  isScrolled: boolean;
};

export const MobileNavigation = ({ isScrolled }: MobileNavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const isMounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousBodyOverflow = document.body.style.overflow;
    const previousDocumentOverflow = document.documentElement.style.overflow;

    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousBodyOverflow;
      document.documentElement.style.overflow = previousDocumentOverflow;
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

      {isMounted && createPortal(
        <div className={`fixed inset-0 z-50 ${isOpen ? "pointer-events-auto" : "pointer-events-none"}`}>
        <button
          type="button"
          aria-label="Close navigation"
          onClick={() => setIsOpen(false)}
          className={`absolute inset-0 bg-black/35 transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0"}`}
        />
        <aside
          aria-label="Mobile navigation"
          className={`fixed inset-y-0 left-0 flex h-dvh w-[min(88vw,24rem)] touch-none flex-col overflow-hidden bg-white px-6 py-7 text-black shadow-2xl transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"
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
            {navItems.map(({ label, id }) => (
              <a
                key={id}
                href={`#${id}`}
                data-track="nav_click"
                data-track-section={id}
                onClick={() => setIsOpen(false)}
                className="text-3xl font-bold leading-none text-zinc-800 transition hover:text-saffron"
              >
                {label}
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
                  data-track="solution_card_click"
                  data-track-solution={label}
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
            <div className="flex flex-col items-start gap-3 text-left text-sm font-semibold text-zinc-700">
              <a href="tel:+10000000000" data-track="phone_click" data-track-location="mobile-menu" className="flex min-h-10 items-center justify-start gap-2 transition hover:text-saffron">
                <Phone aria-hidden="true" className="size-4 text-saffron" />
                +1 000 000 0000
              </a>
              <a
                href="mailto:quotes@primetintsolutions.com"
                data-track="email_click"
                data-track-location="mobile-menu"
                className="flex min-h-10 items-center justify-start gap-2 transition hover:text-saffron"
              >
                <Mail aria-hidden="true" className="size-4 text-saffron" />
                quotes@primetintsolutions.com
              </a>
            </div>
            <Button href="#quote" icon="phone" data-track="quote_cta_click" data-track-location="mobile-menu" onClick={() => setIsOpen(false)} className="mt-5 w-full">
              Get a Free Quote
            </Button>
          </div>
        </aside>
        </div>,
        document.body,
      )}
    </div>
  );
};
