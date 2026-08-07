"use client";

import { useEffect, useState } from "react";
import { Sun, ThermometerSun } from "lucide-react";

const comfortReadings = [76, 75, 77];

export function TemperatureWidget() {
  const [readingIndex, setReadingIndex] = useState(0);
  const temperature = comfortReadings[readingIndex];

  useEffect(() => {
    const interval = window.setInterval(() => {
      setReadingIndex((current) => (current + 1) % comfortReadings.length);
    }, 2800);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <aside className="glass-dark w-[17rem] rounded-lg p-4 text-white">
      <div className="relative z-10 flex items-center justify-between gap-4">
        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-saffron">Comfort monitor</p>
        <span className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/65">
          <span className="size-1.5 rounded-full bg-saffron animate-pulse" />
          Film active
        </span>
      </div>

      <div className="relative z-10 mt-5 flex items-end justify-between gap-5">
        <div>
          <div className="flex items-start gap-1">
            <p className="text-4xl font-black leading-none">{temperature}°</p>
            <ThermometerSun aria-hidden="true" className="mt-1 size-4 text-saffron" />
          </div>
          <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/65">With film</p>
        </div>
        <div className="pb-0.5 text-right">
          <div className="flex items-center justify-end gap-1.5 text-white/60">
            <Sun aria-hidden="true" className="size-3.5 text-saffron" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.16em]">Outside</span>
          </div>
          <p className="mt-1 text-lg font-bold text-white/80">94°</p>
        </div>
      </div>

      <div className="relative z-10 mt-5 h-1.5 overflow-hidden rounded-full bg-white/15">
        <div
          className="temperature-bar h-full rounded-full bg-saffron transition-[width] duration-700"
          style={{ width: `${temperature - 15}%` }}
        />
      </div>
    </aside>
  );
}
