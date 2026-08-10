import { ArrowUpRight, Sparkles } from "lucide-react";

const messages = {
  craft: {
    eyebrow: "Built with intent",
    title: "A sharp digital presence is part of the service.",
    text: "This site was designed by VISH studio to make Prime Tint Solutions easier to understand, trust, and contact from the first scroll.",
  },
  growth: {
    eyebrow: "Designed to perform",
    title: "Your expertise deserves a clearer first impression.",
    text: "VISH studio creates focused digital experiences that turn specialist services into confident customer decisions.",
  },
};

type StudioCreditSectionProps = {
  variant: keyof typeof messages;
};

export const StudioCreditSection = ({ variant }: StudioCreditSectionProps) => {
  const message = messages[variant];

  return (
    <section className="bg-saffron px-5 py-16 text-black sm:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
        <div data-reveal>
          <div className="flex items-center gap-3">
            <Sparkles aria-hidden="true" className="content-icon size-5" />
            <p className="text-sm font-bold uppercase tracking-[0.22em]">{message.eyebrow}</p>
          </div>
          <h2 className="mt-5 max-w-xl text-3xl font-black leading-[1.05] tracking-normal sm:text-4xl">{message.title}</h2>
        </div>
        <div data-reveal className="lg:justify-self-end">
          <p className="max-w-2xl text-lg leading-8 text-black/70">{message.text}</p>
          <a
            href="https://www.vish.studio"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 text-sm font-bold transition hover:opacity-70"
          >
            Built by VISH studio
            <ArrowUpRight aria-hidden="true" className="size-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
