import Image from "next/image";
import { Building2, Car, Home, ShieldCheck } from "lucide-react";

const workTypes = [
  {
    icon: Car,
    title: "Car tint shades",
    text: "Automotive film for cooler cabins, less glare, stronger privacy, and a clean factory-style finish.",
  },
  {
    icon: Home,
    title: "Residential windows",
    text: "Home window film that helps reduce heat, soften harsh sunlight, and protect furniture from UV exposure.",
  },
  {
    icon: Building2,
    title: "Commercial glass",
    text: "Storefront and office tinting for improved privacy, lower screen glare, and sharper curb appeal.",
  },
];

export function AboutSection() {
  return (
    <section className="bg-zinc-50 px-5 py-24 text-black sm:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-saffron">What we do</p>
          <h2 className="mt-4 text-4xl font-black tracking-normal sm:text-5xl">
            Nano Tint upgrades glass with privacy, heat control, and protection.
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-8 text-zinc-600">
            We install tint shades and window films for vehicles, homes, offices, and storefronts. Every job starts with
            the right shade recommendation, careful prep, and film fitted for a crisp edge-to-edge result.
          </p>
          <div className="mt-8 flex items-center gap-3">
            <ShieldCheck aria-hidden="true" className="size-6 shrink-0 text-saffron" />
            <p className="font-semibold text-zinc-900">
              Built for daily comfort, stronger privacy, and a polished black-and-white finish.
            </p>
          </div>
        </div>

        <div className="grid gap-6">
          <div className="relative aspect-[16/9] overflow-hidden bg-black">
            <Image
              src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1600&auto=format&fit=crop"
              alt="Sunlit office with large glass windows"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/25" />
            <p className="absolute bottom-5 left-5 max-w-xs text-lg font-semibold leading-6 text-white">
              Made for the glass that shapes your day.
            </p>
          </div>
          {workTypes.map(({ icon: Icon, title, text }) => (
            <article key={title} className="grid gap-4 sm:grid-cols-[3rem_1fr]">
              <div className="flex size-12 items-center justify-center rounded-full bg-saffron text-black">
                <Icon aria-hidden="true" className="size-6" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">{title}</h3>
                <p className="mt-2 leading-7 text-zinc-600">{text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
