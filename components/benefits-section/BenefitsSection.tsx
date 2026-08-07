import { Building2, Car, EyeOff, ShieldCheck, SunMedium } from "lucide-react";
import { ServiceCard } from "@/components/service-card/ServiceCard";

const services = [
  {
    icon: Car,
    title: "Automotive Tint",
    description:
      "Clean, legal, precision-cut tint installation for sedans, SUVs, vans, and performance vehicles.",
    features: ["Glare reduction", "Cooler cabins", "Factory-sharp finish"],
  },
  {
    icon: Building2,
    title: "Architectural Window Film",
    description:
      "Residential, office, and storefront film that improves comfort, privacy, and solar control without closing off daylight.",
    features: ["Residential glazing", "Office and retail glass", "Lower solar heat"],
  },
];

const benefits = [
  { icon: SunMedium, text: "Blocks harsh glare while keeping the view clear." },
  { icon: ShieldCheck, text: "Helps protect interiors from UV fading and cracking." },
  { icon: EyeOff, text: "Adds privacy without making rooms or cabins feel closed in." },
];

export function BenefitsSection() {
  return (
    <section id="services" className="bg-white px-5 py-24 text-black sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div data-reveal className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-saffron">Services</p>
          <h2 className="mt-4 text-4xl font-black tracking-normal sm:text-5xl">
            Automotive tint and architectural window film, precisely fitted.
          </h2>
        </div>
        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
        <div id="benefits" className="mt-16 grid gap-8 md:grid-cols-3">
          {benefits.map(({ icon: Icon, text }) => (
            <div key={text} data-reveal className="flex gap-4">
              <Icon aria-hidden="true" className="mt-1 size-6 shrink-0 text-saffron" />
              <p className="max-w-sm text-lg font-medium leading-7 text-zinc-700">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
