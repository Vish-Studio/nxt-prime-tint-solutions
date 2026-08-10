"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    quote: "The cabin feels noticeably cooler and the shade is exactly what I had in mind. It looks clean from every angle.",
    name: "Jordan M.",
    service: "Automotive tint",
  },
  {
    quote: "The afternoon glare in our living room was the issue. The film made the space more comfortable without closing off the view.",
    name: "Maya R.",
    service: "Residential window film",
  },
  {
    quote: "Prime Tint Solutions gave our storefront a sharper look and the team inside felt the difference by the next afternoon.",
    name: "Daniel K.",
    service: "Commercial window film",
  },
  {
    quote: "Clear guidance, tidy work, and no pressure around the shade choice. The finished car looks exactly right.",
    name: "Avery T.",
    service: "Automotive tint",
  },
  {
    quote: "We wanted daytime privacy without making the office feel dark. The result is subtle, professional, and practical.",
    name: "Morgan S.",
    service: "Office window film",
  },
  {
    quote: "The team took time to explain the options for our home and the install was clean, calm, and right on schedule.",
    name: "Chris L.",
    service: "Residential window film",
  },
  {
    quote: "The difference in glare on long drives is immediate. The finished tint has the polished look I was after.",
    name: "Riley P.",
    service: "Automotive tint",
  },
];

export function TestimonialSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const activeTestimonial = testimonials[activeIndex];

  useEffect(() => {
    if (isPaused) {
      return;
    }

    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 5000);

    return () => window.clearInterval(interval);
  }, [isPaused]);

  const showPrevious = () => {
    setActiveIndex((current) => (current - 1 + testimonials.length) % testimonials.length);
  };

  const showNext = () => {
    setActiveIndex((current) => (current + 1) % testimonials.length);
  };

  return (
    <section className="bg-white px-5 py-24 text-black sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div data-reveal className="grid gap-6 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-saffron">Customer results</p>
            <h2 className="mt-4 text-4xl font-black tracking-normal sm:text-5xl">Comfort you can feel.</h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-zinc-600 lg:justify-self-end">
            From cooler drives to calmer rooms, the right film changes how a space feels without changing what you love about it.
          </p>
        </div>

        <div
          data-reveal
          className="glass-surface mt-12 overflow-hidden p-6 sm:p-10"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocus={() => setIsPaused(true)}
          onBlur={() => setIsPaused(false)}
        >
          <div className="relative z-10 flex items-center justify-between gap-5">
            <div className="flex gap-1 text-black" aria-label="Five star rating">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} aria-hidden="true" className="size-5 fill-black" />
              ))}
            </div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-zinc-500">
              0{activeIndex + 1} / 0{testimonials.length}
            </p>
          </div>

          <div key={activeTestimonial.name} className="testimonial-slide relative z-10 mt-12 max-w-4xl">
            <blockquote className="text-3xl font-semibold leading-[1.2] text-zinc-900 sm:text-5xl">
              &ldquo;{activeTestimonial.quote}&rdquo;
            </blockquote>
            <div className="mt-8">
              <p className="font-bold text-black">{activeTestimonial.name}</p>
              <p className="mt-1 text-sm font-semibold uppercase tracking-[0.18em] text-saffron">
                {activeTestimonial.service}
              </p>
            </div>
          </div>

          <div className="relative z-10 mt-12 flex flex-wrap items-center justify-between gap-5">
            <div className="flex gap-2" aria-label="Testimonial navigation">
              {testimonials.map((testimonial, index) => (
                <button
                  key={testimonial.name}
                  type="button"
                  aria-label={`Show testimonial ${index + 1}`}
                  aria-current={index === activeIndex ? "true" : undefined}
                  onClick={() => setActiveIndex(index)}
                  className={`h-2.5 w-2.5 rounded-full transition ${
                    index === activeIndex ? "bg-saffron" : "bg-zinc-300 hover:bg-zinc-500"
                  }`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                aria-label="Show previous testimonial"
                onClick={showPrevious}
                className="flex size-11 items-center justify-center rounded-full bg-black text-white transition hover:bg-zinc-700"
              >
                <ChevronLeft aria-hidden="true" className="size-5" />
              </button>
              <button
                type="button"
                aria-label="Show next testimonial"
                onClick={showNext}
                className="flex size-11 items-center justify-center rounded-full bg-saffron text-black transition hover:brightness-95"
              >
                <ChevronRight aria-hidden="true" className="size-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
