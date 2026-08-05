"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "@/components/button/Button";
import { TemperatureWidget } from "@/components/temperature-widget/TemperatureWidget";

const heroSlides = [
  {
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=85&w=2400&auto=format&fit=crop",
    alt: "Premium sports car with dark glass and a clean exterior finish",
    label: "Automotive Film",
  },
  {
    image:
      "https://images.unsplash.com/photo-1568115286680-d203e08a8be6?q=85&w=2400&auto=format&fit=crop",
    alt: "Modern interior with expansive sunlit glass overlooking the city",
    label: "Residential Film",
  },
  {
    image:
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=85&w=2400&auto=format&fit=crop",
    alt: "Modern commercial building with expansive glass panels",
    label: "Commercial Film",
  },
];

const tintSpectrum = [
  { shade: "bg-black" },
  { shade: "bg-black/90" },
  { shade: "bg-black/78" },
  { shade: "bg-black/64" },
  { shade: "bg-black/50" },
  { shade: "bg-black/36" },
  { shade: "bg-black/20" },
  { shade: "bg-black/5" },
];

const panelTransitionMs = 75;

const tintLabels = [
  "Private",
  "Shield",
  "Comfort",
  "Clear",
  "Open",
];

export function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isBlackout, setIsBlackout] = useState(false);

  useEffect(() => {
    const timers: number[] = [];

    const transitionSlide = () => {
      timers.push(window.setTimeout(() => setIsBlackout(true), 3100));
      timers.push(
        window.setTimeout(() => {
          setActiveSlide((current) => (current + 1) % heroSlides.length);
        }, 4000),
      );
      timers.push(window.setTimeout(() => setIsBlackout(false), 4150));
    };

    transitionSlide();
    const interval = window.setInterval(transitionSlide, 4000);

    return () => {
      window.clearInterval(interval);
      timers.forEach((timer) => window.clearTimeout(timer));
    };
  }, []);

  return (
    <section className="relative min-h-[860px] overflow-hidden bg-black text-white lg:h-screen lg:min-h-0">
      {heroSlides.map((slide, index) => (
        <Image
          key={slide.image}
          src={slide.image}
          alt={slide.alt}
          fill
          priority={index === 0}
          sizes="100vw"
          className={`object-cover object-center transition-opacity duration-500 ${index === activeSlide ? "opacity-100" : "opacity-0"
            }`}
        />
      ))}

      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.8),rgba(0,0,0,0.52)_31%,rgba(0,0,0,0.12)_64%,rgba(0,0,0,0.22))]" />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black/65 to-transparent" />

      <div className="absolute inset-0 z-[1] grid grid-cols-8">
        {tintSpectrum.map(({ shade }, index) => (
          <div
            key={shade}
            className={`shadow-[inset_1px_0_0_rgba(255,255,255,0.16)] transition-colors duration-300 ${isBlackout ? "bg-black" : shade
              }`}
            style={{
              transitionDelay: `${(isBlackout ? index : tintSpectrum.length - index - 1) * panelTransitionMs
                }ms`,
            }}
          />
        ))}
      </div>

      <div className="absolute inset-x-5 bottom-5 z-10 hidden lg:block lg:inset-x-8">
        <div className="mx-auto flex max-w-7xl items-end justify-between gap-8">
          <p className="max-w-[18rem] text-xs font-medium uppercase leading-5 tracking-[0.17em] text-white/70">
            A film for every view. A shade for every life.
          </p>
          <div className="grid w-full max-w-3xl grid-cols-5">
            {tintLabels.map((label) => (
              <div key={label} className="py-3 text-center text-[10px] font-bold uppercase tracking-[0.2em] text-white">
                {label}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative z-10 mx-auto flex min-h-[860px] w-full max-w-7xl items-end px-5 pb-28 pt-36 sm:px-8 lg:h-screen lg:min-h-0 lg:pb-32 lg:pt-24">
        <div className="grid w-full gap-10 lg:grid-cols-[minmax(0,1fr)_21rem] lg:items-end lg:gap-16">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-saffron">
              Nano Tint / {heroSlides[activeSlide].label}
            </p>
            <h1 className="mt-5 text-5xl font-black leading-[0.94] sm:text-6xl lg:text-7xl">
              Comfort starts at the glass.
            </h1>
            <p className="mt-6 max-w-md text-lg leading-8 text-white/82 sm:text-xl">
              Precision film for cars, homes, and business glass. Less glare, less heat, and the same clear view.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
              <Button href="#quote" variant="secondary" icon="phone">
                Get a Free Quote
              </Button>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/70">
                Heat control · UV protection · Privacy
              </p>
            </div>
          </div>
          <div className="w-full lg:w-auto"><TemperatureWidget /></div>
        </div>
      </div>
    </section>
  );
}
