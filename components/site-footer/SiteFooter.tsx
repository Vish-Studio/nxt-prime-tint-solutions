import { Clock, Mail, MapPin, Phone, ShieldCheck } from "lucide-react";
import { Button } from "@/components/button/Button";

const footerLinks = [
  { label: "Automotive Tint", href: "#services" },
  { label: "Home Window Film", href: "#services" },
  { label: "Commercial Tint", href: "#services" },
  { label: "Installation Process", href: "#process" },
];

const contactItems = [
  { icon: Phone, label: "Call", value: "+1 000 000 0000", href: "tel:+10000000000" },
  { icon: Mail, label: "Email", value: "quotes@nanotint.com", href: "mailto:quotes@nanotint.com" },
  { icon: MapPin, label: "Service area", value: "Mobile and in-shop tinting", href: "#quote" },
];

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black px-5 text-white sm:px-8">
      <div className="mx-auto max-w-7xl py-14">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.7fr_0.8fr]">
          <div>
            <a href="#" className="font-logo text-xl font-black tracking-[0.18em] text-white">
              NANO TINT
            </a>
            <h2 className="mt-6 max-w-xl text-3xl font-black tracking-normal sm:text-4xl">
              Book a cleaner, cooler tint install before your glass takes another season of heat.
            </h2>
            <p className="mt-4 max-w-xl leading-7 text-zinc-400">
              Fast shade guidance, precise film installation, and a finish made for cars, homes, and storefronts.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Button href="#quote" variant="secondary" icon="phone">
                Get Free Estimate
              </Button>
              <Button href="mailto:quotes@nanotint.com" className="border border-white bg-black text-white hover:bg-zinc-900">
                Send Photos
              </Button>
            </div>
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-zinc-500">Quick links</p>
            <nav aria-label="Footer navigation" className="mt-5 grid gap-3">
              {footerLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="font-medium text-zinc-300 transition hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-zinc-500">Contact</p>
            <div className="mt-5 grid gap-4">
              {contactItems.map(({ icon: Icon, label, value, href }) => (
                <a key={label} href={href} className="glass-dark group flex gap-3 p-3">
                  <span className="relative z-10 flex size-10 shrink-0 items-center justify-center rounded-full bg-white text-black transition group-hover:bg-zinc-200">
                    <Icon aria-hidden="true" className="size-5" />
                  </span>
                  <span className="relative z-10">
                    <span className="block text-xs font-bold uppercase tracking-[0.18em] text-zinc-500">
                      {label}
                    </span>
                    <span className="mt-1 block font-semibold text-zinc-100">{value}</span>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-4 py-5 text-sm text-zinc-400 md:grid-cols-3">
          <p className="flex items-center gap-2">
            <ShieldCheck aria-hidden="true" className="size-4 text-white" />
            Ceramic and carbon film options
          </p>
          <p className="flex items-center gap-2">
            <Clock aria-hidden="true" className="size-4 text-white" />
            Fast quote response
          </p>
          <p className="flex items-center gap-2">
            <ShieldCheck aria-hidden="true" className="size-4 text-white" />
            Clean edge installation
          </p>
        </div>

        <div className="flex flex-col gap-3 pt-6 text-sm text-zinc-500 md:flex-row md:items-center md:justify-between">
          <p>Copyright {year} Nano Tint. All rights reserved.</p>
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
