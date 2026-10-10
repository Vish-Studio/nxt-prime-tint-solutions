"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/analytics";
import type { AnalyticsEventName, AnalyticsParams } from "@/lib/analytics";

// Elements opt in with data-track="event_name" and optional data-track-<param>="value" attributes.
const readParams = (element: HTMLElement): AnalyticsParams => {
  const params: AnalyticsParams = {};

  Object.entries(element.dataset).forEach(([key, value]) => {
    if (key.startsWith("track") && key !== "track" && value !== undefined) {
      const name = key.slice("track".length);

      params[name.charAt(0).toLowerCase() + name.slice(1)] = value;
    }
  });

  return params;
};

export const AnalyticsEvents = () => {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (!(event.target instanceof Element)) {
        return;
      }

      const element = event.target.closest<HTMLElement>("[data-track]");

      if (element?.dataset.track) {
        trackEvent(element.dataset.track as AnalyticsEventName, readParams(element));
      }
    };

    document.addEventListener("click", handleClick);

    return () => document.removeEventListener("click", handleClick);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>("[data-section]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            trackEvent("section_view", { section: (entry.target as HTMLElement).dataset.section ?? "" });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return null;
};
