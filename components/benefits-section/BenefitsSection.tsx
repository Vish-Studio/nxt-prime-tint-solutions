import { Car, EyeOff, Home, ShieldCheck, Sparkles, SunMedium } from "lucide-react";
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
    icon: Home,
    title: "Home Window Film",
    description:
      "Residential films that reduce heat gain, protect furniture, and improve privacy without heavy blinds.",
    features: ["Interior protection", "Daytime privacy", "Lower solar heat"],
  },
  {
    icon: Sparkles,
    title: "Commercial Tint",
    description:
      "Storefront and office tinting that creates a sleeker exterior and a more comfortable workspace.",
    features: ["Brand-ready frontage", "Employee comfort", "Reduced screen glare"],
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
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-saffron">Services</p>
          <h2 className="mt-4 text-4xl font-black tracking-normal sm:text-5xl">
            Tint shades for cars, homes, and business glass.
          </h2>
        </div>
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
        <div id="benefits" className="mt-16 grid gap-8 md:grid-cols-3">
          {benefits.map(({ icon: Icon, text }) => (
            <div key={text} className="flex gap-4">
              <Icon aria-hidden="true" className="mt-1 size-6 shrink-0 text-saffron" />
              <p className="max-w-sm text-lg font-medium leading-7 text-zinc-700">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
