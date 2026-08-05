import { Star } from "lucide-react";

export function TestimonialSection() {
  return (
    <section className="bg-white px-5 py-20 text-black sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="glass-surface grid gap-8 p-6 sm:p-10 lg:grid-cols-[0.7fr_1.3fr]">
          <div className="relative z-10">
            <div className="flex gap-1 text-black" aria-label="Five star rating">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} aria-hidden="true" className="size-5 fill-black" />
              ))}
            </div>
            <p className="mt-5 text-sm font-bold uppercase tracking-[0.22em] text-zinc-500">
              Customer-ready finish
            </p>
          </div>
          <blockquote className="relative z-10 text-2xl font-semibold leading-10 text-zinc-900 sm:text-3xl">
            Nano Tint gave the car the exact shade I wanted and made the storefront cooler by the next afternoon.
          </blockquote>
        </div>
      </div>
    </section>
  );
}
