import type { LucideIcon } from "lucide-react";

type ServiceCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
};

export function ServiceCard({
  icon: Icon,
  title,
  description,
  features,
}: ServiceCardProps) {
  return (
    <article className="glass-surface p-6 transition hover:-translate-y-1">
      <div className="relative z-10 flex size-12 items-center justify-center rounded-full bg-saffron text-black">
        <Icon aria-hidden="true" className="size-6" />
      </div>
      <h3 className="relative z-10 mt-6 text-2xl font-bold text-black">{title}</h3>
      <p className="relative z-10 mt-3 leading-7 text-zinc-600">{description}</p>
      <ul className="relative z-10 mt-6 space-y-3 text-sm font-medium text-zinc-800">
        {features.map((feature) => (
          <li key={feature} className="flex items-center gap-3">
            <span className="size-1.5 rounded-full bg-saffron" />
            {feature}
          </li>
        ))}
      </ul>
    </article>
  );
}
