import { Gauge, Gem, Moon, SunMedium } from "lucide-react";

const options = [
  {
    icon: SunMedium,
    title: "Ceramic film",
    text: "High heat rejection with a clear, premium look for automotive glass and architectural windows that need comfort without heavy darkness.",
  },
  {
    icon: Moon,
    title: "Carbon film",
    text: "A deep matte shade for automotive privacy, glare reduction, and a sharp blackout aesthetic.",
  },
  {
    icon: Gauge,
    title: "Shade matching",
    text: "Guidance on visible light levels so the final result suits your vehicle or architectural glazing and privacy goal.",
  },
  {
    icon: Gem,
    title: "Clean finish",
    text: "Measured, prepped, and installed for smooth glass, tight edges, and fewer distractions in the final look.",
  },
];

export function FilmOptionsSection() {
  return (
    <section className="bg-white px-5 py-24 text-black sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div data-reveal>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-saffron">Film options</p>
            <h2 className="mt-4 text-4xl font-black tracking-normal sm:text-5xl">
            Film selected for the way your glass is used.
            </h2>
          </div>
          <p data-reveal className="max-w-2xl text-lg leading-8 text-zinc-600 lg:justify-self-end">
            We match automotive and architectural films to heat rejection, privacy, reflectivity, and final appearance,
            so the result performs through the first drive and every afternoon of sun.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {options.map(({ icon: Icon, title, text }) => (
            <article key={title} data-reveal className="glass-surface p-6">
              <Icon aria-hidden="true" className="relative z-10 size-7 text-saffron" />
              <h3 className="relative z-10 mt-5 text-xl font-bold">{title}</h3>
              <p className="relative z-10 mt-3 leading-7 text-zinc-600">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
