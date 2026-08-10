"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "@/components/button/button";
import { HeroServiceList } from "@/components/hero-service-list/hero-service-list";
import { TemperatureWidget } from "@/components/temperature-widget/temperature-widget";
import { TintShadeSelector } from "@/components/tint-shade-selector/tint-shade-selector";

const heroSlides = [
  {
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2340&auto=format&fit=crop",
    alt: "Sports car with dark automotive window tint",
    label: "Automotive Tint",
  },
  {
    image:
      "https://images.unsplash.com/photo-1493238792000-8113da705763?q=80&w=2340&auto=format&fit=crop",
    alt: "Premium car with automotive window tint",
    label: "Automotive Tint",
  },
  {
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2340&auto=format&fit=crop",
    alt: "Office interior with expansive architectural glass",
    label: "Architectural Window Film",
  },
  {
    image:
      "https://images.unsplash.com/photo-1531973367098-2ca34fa1c4d0?q=80&w=2248&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Modern building with expansive windows",
    label: "Architectural Window Film",
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

const panelTransitionMs = 120;

export const HeroSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isBlackout, setIsBlackout] = useState(true);
  const [isHeroContentVisible, setIsHeroContentVisible] = useState(false);
  const [isInitialImageLoaded, setIsInitialImageLoaded] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsHeroContentVisible(true), 120);

    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isInitialImageLoaded) {
      return;
    }

    const timers: number[] = [];

    const transitionSlide = () => {
      timers.push(window.setTimeout(() => setIsBlackout(true), 4500));
      timers.push(
        window.setTimeout(() => {
          setActiveSlide((current) => (current + 1) % heroSlides.length);
        }, 6200),
      );
      timers.push(window.setTimeout(() => setIsBlackout(false), 6400));
    };

    transitionSlide();
    const interval = window.setInterval(transitionSlide, 6500);

    return () => {
      window.clearInterval(interval);
      timers.forEach((timer) => window.clearTimeout(timer));
    };
  }, [isInitialImageLoaded]);

  const revealClass = () =>
    `transition-[opacity,transform] duration-700 ease-in-out motion-reduce:transform-none motion-reduce:transition-none ${
      isHeroContentVisible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
    }`;

  return (
    <section className="bg-white text-black">
      <div className="mx-auto grid min-h-[920px] w-full max-w-7xl gap-10 px-5 pb-16 pt-32 sm:px-8 lg:min-h-screen lg:grid-cols-[0.78fr_1.22fr] lg:items-end lg:gap-16 lg:py-28">
        <div className="max-w-xl">
          <p
            className={`${revealClass()} text-xs font-bold uppercase tracking-[0.22em] text-saffron`}
            style={{ transitionDelay: "0ms" }}
          >
            Automotive + architectural tint
          </p>
          <h1
            className={`${revealClass()} mt-5 text-5xl font-black leading-[0.94] sm:text-6xl lg:text-7xl`}
            style={{ transitionDelay: "100ms" }}
          >
            Tint solutions built around your glass.
          </h1>
          <p
            className={`${revealClass()} mt-6 max-w-md text-lg leading-8 text-zinc-600 sm:text-xl`}
            style={{ transitionDelay: "200ms" }}
          >
            Precision automotive tint and architectural window film for cooler cabins, protected interiors, and spaces
            that still feel open.
          </p>
          <div className={`${revealClass()} mt-8 flex flex-col gap-3 sm:flex-row`} style={{ transitionDelay: "300ms" }}>
            <Button href="#quote" icon="phone">
              Get a Free Quote
            </Button>
            <Button href="#services" variant="secondary">
              Explore Services
            </Button>
          </div>
          <div className={revealClass()} style={{ transitionDelay: "400ms" }}>
            <HeroServiceList />
          </div>
          <div className={revealClass()} style={{ transitionDelay: "500ms" }}>
            <TintShadeSelector />
          </div>
        </div>

        <div>
          <div className="relative min-h-[30rem] overflow-hidden rounded-lg bg-zinc-900 sm:min-h-[36rem] lg:min-h-[44rem]">
            {heroSlides.map((slide, index) => (
            <Image
              key={slide.image}
              src={slide.image}
              alt={slide.alt}
              fill
              priority={index === 0}
              onLoad={() => {
                if (index === 0 && !isInitialImageLoaded) {
                  window.setTimeout(() => {
                    setIsInitialImageLoaded(true);
                    setIsBlackout(false);
                  }, 180);
                }
              }}
              sizes="(min-width: 1024px) 60vw, 100vw"
              className={`object-cover object-center transition-opacity duration-700 ${
                index === activeSlide ? "opacity-100" : "opacity-0"
              }`}
            />
            ))}
            <div className="absolute inset-0 bg-black/20" />
            <div className="absolute inset-0 z-[1] grid grid-cols-8">
              {tintSpectrum.map(({ shade }, index) => (
                <div
                  key={shade}
                  className={`shadow-[inset_1px_0_0_rgba(255,255,255,0.16)] transition-colors duration-1000 ease-in-out ${
                    isBlackout ? "bg-black" : shade
                  }`}
                  style={{
                    transitionDelay: `${
                      (isBlackout ? index : tintSpectrum.length - index - 1) * panelTransitionMs
                    }ms`,
                  }}
                />
              ))}
            </div>
            <div className="absolute inset-x-5 top-5 z-10 flex items-center justify-between text-xs font-bold uppercase tracking-[0.18em] text-white sm:inset-x-6 sm:top-6">
              <span>{heroSlides[activeSlide].label}</span>
              <span>
                0{activeSlide + 1} / 0{heroSlides.length}
              </span>
            </div>
            <div className="absolute bottom-5 left-5 z-10 sm:bottom-6 sm:left-6">
              <TemperatureWidget />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
