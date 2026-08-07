import { ArrowUpRight, Mail, MapPin, Phone, ShieldCheck } from "lucide-react";
import { Button } from "@/components/button/Button";

const solutions = [
  {
    title: "Automotive tint",
    text: "Precision film for cooler cabins, sharper privacy, and a finish that feels factory fitted.",
    href: "#services",
  },
  {
    title: "Architectural window film",
    text: "Solar control and privacy for homes, offices, retail spaces, and the glass that faces the sun.",
    href: "#services",
  },
];

const footerLinks = [
  { label: "Explore services", href: "#services" },
  { label: "How we install", href: "#process" },
  { label: "Request an estimate", href: "#quote" },
];

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black px-5 text-white sm:px-8">
      <div className="mx-auto max-w-7xl py-20 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
          <div data-reveal>
            <a href="#" className="font-logo text-xl font-black tracking-[0.18em] text-white">
              PRIME TINT SOLUTIONS
            </a>
            <p className="mt-10 text-sm font-bold uppercase tracking-[0.22em] text-saffron">A clearer next step</p>
            <h2 className="mt-4 max-w-3xl text-4xl font-black leading-[0.98] tracking-normal sm:text-6xl">
              Turn down the heat. Keep the view.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-400">
              Tell us about your vehicle or windows. We will recommend the right tint solution before you book.
            </p>
          </div>
          <div data-reveal className="flex flex-col gap-4 sm:flex-row lg:flex-col lg:justify-self-end">
            <Button href="#quote" icon="phone">
              Get Free Estimate
            </Button>
            <Button href="mailto:quotes@primetintsolutions.com" variant="secondary">
              Send Project Details
            </Button>
          </div>
        </div>

        <div className="mt-20 grid gap-6 md:grid-cols-2">
          {solutions.map((solution) => (
            <a key={solution.title} href={solution.href} data-reveal className="glass-dark group block min-h-64 p-8 sm:p-10">
              <div className="relative z-10 flex items-start justify-between gap-6">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.2em] text-saffron">Solution</p>
                  <h3 className="mt-4 text-2xl font-bold text-white sm:text-3xl">{solution.title}</h3>
                  <p className="mt-5 max-w-md leading-7 text-zinc-300">{solution.text}</p>
                </div>
                <ArrowUpRight
                  aria-hidden="true"
                  className="mt-1 size-6 shrink-0 text-saffron transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </div>
            </a>
          ))}
        </div>

        <div className="mt-20 grid gap-14 sm:grid-cols-2 lg:grid-cols-[1.1fr_0.75fr_0.9fr]">
          <div data-reveal>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-zinc-500">Prime Tint Solutions</p>
            <p className="mt-5 max-w-sm leading-7 text-zinc-400">
              Automotive tint and architectural window film installed with care, clear guidance, and clean edges.
            </p>
            <p className="mt-5 flex items-center gap-2 text-sm font-semibold text-zinc-200">
              <ShieldCheck aria-hidden="true" className="size-4 text-saffron" />
              Ceramic and carbon film options
            </p>
            <div className="mt-8 flex flex-wrap gap-x-5 gap-y-3 text-sm font-semibold text-zinc-300">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-saffron"
              >
                Instagram
              </a>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-saffron"
              >
                Facebook
              </a>
              <a
                href="https://www.tiktok.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-saffron"
              >
                TikTok
              </a>
            </div>
          </div>

          <div data-reveal>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-zinc-500">Explore</p>
            <nav aria-label="Footer navigation" className="mt-6 grid gap-4">
              {footerLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="group flex items-center gap-2 font-medium text-zinc-300 transition hover:text-white"
                >
                  {link.label}
                  <ArrowUpRight
                    aria-hidden="true"
                    className="size-4 text-saffron opacity-0 transition group-hover:opacity-100"
                  />
                </a>
              ))}
            </nav>
          </div>

          <div data-reveal>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-zinc-500">Contact</p>
            <div className="mt-6 grid gap-5">
              <a href="tel:+10000000000" className="flex items-center gap-3 font-semibold text-white transition hover:text-saffron">
                <Phone aria-hidden="true" className="size-5 text-saffron" />
                +1 000 000 0000
              </a>
              <a href="mailto:quotes@primetintsolutions.com" className="flex items-center gap-3 font-semibold text-white transition hover:text-saffron">
                <Mail aria-hidden="true" className="size-5 text-saffron" />
                quotes@primetintsolutions.com
              </a>
              <a href="#quote" className="flex items-start gap-3 leading-6 text-zinc-300 transition hover:text-white">
                <MapPin aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-saffron" />
                Mobile and in-shop tinting
              </a>
            </div>
          </div>
        </div>

        <div data-reveal className="flex flex-col gap-3 pt-16 text-sm text-zinc-500 md:flex-row md:items-center md:justify-between">
          <p>Copyright {year} Prime Tint Solutions. All rights reserved.</p>
          <p>
            Website designed by:{" "}
            <a
              href="https://www.vish.studio"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-white underline decoration-zinc-600 underline-offset-4 transition hover:decoration-white"
            >
              VISH studio
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
