import Image from "next/image";
import { Building2, Car, Home, ShieldCheck } from "lucide-react";

const applications = [
  {
    icon: Car,
    title: "Automotive",
    text: "Comfort, privacy, and a clean finish for the way you drive.",
  },
  {
    icon: Home,
    title: "Residential",
    text: "Softer light and lower solar heat for the rooms you use most.",
  },
  {
    icon: Building2,
    title: "Commercial",
    text: "More comfortable glass for offices, retail spaces, and storefronts.",
  },
];

export function AboutSection() {
  return (
    <section className="bg-zinc-50 px-5 py-24 text-black sm:px-8">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
        <div>
          <p data-reveal className="text-sm font-bold uppercase tracking-[0.22em] text-saffron">What we do</p>
          <h2 data-reveal className="mt-4 max-w-xl text-4xl font-black tracking-normal sm:text-5xl">
            Film that fits the place, not just the pane.
          </h2>
          <p data-reveal className="mt-5 max-w-xl text-lg leading-8 text-zinc-600">
            Prime Tint Solutions works across the road, home, and workplace. We match film to the glass, exposure, and
            privacy you need, then install it with a precise edge-to-edge finish.
          </p>

          <div className="mt-10 grid gap-7">
            {applications.map(({ icon: Icon, text, title }) => (
              <article key={title} data-reveal className="grid gap-4 sm:grid-cols-[3rem_1fr]">
                <div className="flex size-12 items-center justify-center rounded-full bg-saffron text-black">
                  <Icon aria-hidden="true" className="content-icon size-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">{title}</h3>
                  <p className="mt-1 leading-7 text-zinc-600">{text}</p>
                </div>
              </article>
            ))}
          </div>

          <p data-reveal className="mt-10 flex items-center gap-3 font-semibold text-zinc-900">
            <ShieldCheck aria-hidden="true" className="content-icon size-6 shrink-0 text-saffron" />
            Measured, prepared, and finished for the way your glass performs every day.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-[1fr_0.78fr]">
          <figure data-reveal className="relative aspect-[4/5] overflow-hidden rounded-lg bg-black">
            <Image
              src="https://images.unsplash.com/photo-1504215680853-026ed2a45def?q=80&w=1600&auto=format&fit=crop"
              alt="Car with a sleek automotive finish"
              fill
              sizes="(min-width: 1024px) 32vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/25" />
            <figcaption className="absolute bottom-5 left-5 text-sm font-bold uppercase tracking-[0.2em] text-white">
              On the road
            </figcaption>
          </figure>

          <div className="grid gap-4 sm:grid-rows-[1fr_auto]">
            <figure data-reveal className="relative min-h-64 overflow-hidden rounded-lg bg-black">
              <Image
                src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1600&auto=format&fit=crop"
                alt="Office with expansive glass windows"
                fill
                sizes="(min-width: 1024px) 26vw, (min-width: 640px) 40vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/25" />
              <figcaption className="absolute bottom-5 left-5 text-sm font-bold uppercase tracking-[0.2em] text-white">
                At work
              </figcaption>
            </figure>
            <div data-reveal className="rounded-lg bg-black p-6 text-white sm:p-8">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-saffron">The Prime approach</p>
              <p className="mt-4 text-2xl font-bold leading-8">Better shade starts with understanding the space around it.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
