import Image from "next/image";
import { Building2, Car, EyeOff, ShieldCheck, SunMedium } from "lucide-react";
import { Button } from "@/components/button/button";

const solutions = [
  {
    icon: Car,
    eyebrow: "Automotive tint",
    title: "A cooler, clearer drive.",
    text: "Film selected for the way you drive, then precision-fitted for a clean finish across sedans, SUVs, vans, and performance vehicles.",
    image:
      "https://images.unsplash.com/photo-1504215680853-026ed2a45def?q=80&w=1800&auto=format&fit=crop",
    alt: "Car shown in a premium automotive setting",
    features: [
      { icon: SunMedium, text: "Reduce harsh heat and glare on the road." },
      { icon: ShieldCheck, text: "Help protect interiors from UV exposure and fading." },
      { icon: EyeOff, text: "Choose a privacy level that still keeps the view clear." },
    ],
  },
  {
    icon: Building2,
    eyebrow: "Architectural window film",
    title: "Comfort that holds up all day.",
    text: "Purpose-fit window film for homes, offices, retail spaces, and storefronts where sunlight, privacy, and energy use all need attention.",
    image:
      "https://images.unsplash.com/photo-1531973367098-2ca34fa1c4d0?q=80&w=1800&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Modern building with expansive architectural glass",
    features: [
      { icon: SunMedium, text: "Reduce solar heat and uncomfortable glare indoors." },
      { icon: ShieldCheck, text: "Help preserve furnishings and finishes from UV fading." },
      { icon: EyeOff, text: "Add privacy while retaining natural light and outward views." },
    ],
  },
];

export const SolutionDetailSection = () => {
  return (
    <section id="solutions" className="bg-black px-5 py-24 text-white sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div data-reveal className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-saffron">Two ways to tint better</p>
          <h2 className="mt-4 text-4xl font-black tracking-normal sm:text-5xl">
            Different glass. Different demands. One precise standard.
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-400">
            Prime Tint Solutions pairs the right film with how your vehicle or space is actually used, so every install
            improves comfort without losing the view.
          </p>
        </div>

        <div className="mt-16 grid gap-20 lg:gap-28">
          {solutions.map(({ alt, eyebrow, features, icon: Icon, image, text, title }, index) => (
            <article
              key={eyebrow}
              data-reveal
              className={`grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-16 ${index === 1 ? "lg:[&>div:first-child]:order-2" : ""}`}
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-zinc-900">
                <Image src={image} alt={alt} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
                <div className="absolute inset-0 bg-black/20" />
              </div>
              <div>
                <div className="flex items-center gap-3 text-saffron">
                  <Icon aria-hidden="true" className="content-icon size-5" />
                  <p className="text-sm font-bold uppercase tracking-[0.22em]">{eyebrow}</p>
                </div>
                <h3 className="mt-5 text-3xl font-black tracking-normal sm:text-4xl">{title}</h3>
                <p className="mt-5 max-w-xl text-lg leading-8 text-zinc-400">{text}</p>
                <ul className="mt-8 grid gap-4">
                  {features.map(({ icon: FeatureIcon, text: featureText }) => (
                    <li key={featureText} className="flex gap-3 text-zinc-200">
                      <FeatureIcon aria-hidden="true" className="content-icon mt-0.5 size-5 shrink-0 text-saffron" />
                      <span className="leading-7">{featureText}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <div data-reveal className="mt-16">
          <Button href="#quote">Get a Solution Quote</Button>
        </div>
      </div>
    </section>
  );
};
