import Image from "next/image";
import type { LucideIcon } from "lucide-react";

type ServiceCardProps = {
  image: string;
  imageAlt: string;
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
};

export const ServiceCard = ({
  image,
  imageAlt,
  icon: Icon,
  title,
  description,
  features,
}: ServiceCardProps) => {
  return (
    <article data-reveal className="glass-surface p-6">
      <div className="relative z-10 aspect-[16/8] overflow-hidden rounded-lg bg-black">
        <Image src={image} alt={imageAlt} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
        <div className="absolute inset-0 bg-black/15" />
      </div>
      <div className="relative z-10 mt-6 flex size-12 items-center justify-center rounded-full bg-saffron text-black">
        <Icon aria-hidden="true" className="content-icon size-6" />
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
};
