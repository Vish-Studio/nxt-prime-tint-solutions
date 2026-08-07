const steps = [
  {
    number: "01",
    title: "Shade match",
    text: "We recommend the right film and tint level for automotive glass or architectural windows, comfort, privacy, and local compliance.",
  },
  {
    number: "02",
    title: "Surface prep",
    text: "Glass is cleaned and measured carefully so the film bonds cleanly without dust, bubbles, or rough edges.",
  },
  {
    number: "03",
    title: "Precision install",
    text: "Film is applied with tight alignment, heat-formed where needed, then inspected before handoff.",
  },
];

export function ProcessSection() {
  return (
    <section id="process" className="bg-zinc-50 px-5 py-24 text-black sm:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p data-reveal className="text-sm font-bold uppercase tracking-[0.22em] text-saffron">Process</p>
          <h2 data-reveal className="mt-4 text-4xl font-black tracking-normal sm:text-5xl">
            A precise process for vehicles and architectural glass.
          </h2>
          <div data-reveal className="relative mt-10 aspect-[4/3] overflow-hidden rounded-lg bg-black">
            <Image
              src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=1200&auto=format&fit=crop"
              alt="Modern workspace with expansive glass and natural light"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/20" />
          </div>
        </div>
        <div className="grid gap-4">
          {steps.map((step) => (
            <article key={step.number} data-reveal className="glass-surface grid gap-5 p-6 sm:grid-cols-[5rem_1fr]">
              <p className="relative z-10 text-3xl font-black text-saffron">{step.number}</p>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold">{step.title}</h3>
                <p className="mt-3 leading-7 text-zinc-600">{step.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
import Image from "next/image";
