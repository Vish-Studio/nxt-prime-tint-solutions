import { Sun, ThermometerSun } from "lucide-react";

export function TemperatureWidget() {
  return (
    <aside className="glass-dark w-full max-w-sm rounded-lg p-6 text-white">
      <div className="relative z-10 flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-saffron">Comfort check</p>
          <p className="mt-3 text-sm text-white/65">Example temperature reading</p>
        </div>
        <ThermometerSun aria-hidden="true" className="size-7 text-saffron" />
      </div>

      <div className="relative z-10 mt-8 flex items-end justify-between gap-6">
        <div>
          <p className="text-5xl font-black leading-none">76°</p>
          <p className="mt-2 text-xs font-semibold uppercase tracking-[0.16em] text-white/65">With film</p>
        </div>
        <div className="pb-1 text-right">
          <div className="flex items-center justify-end gap-2 text-white/65">
            <Sun aria-hidden="true" className="size-4 text-saffron" />
            <span className="text-xs font-semibold uppercase tracking-[0.16em]">Outside</span>
          </div>
          <p className="mt-2 text-2xl font-bold text-white/75">94°</p>
        </div>
      </div>

      <div className="relative z-10 mt-7 h-2 overflow-hidden rounded-full bg-white/15">
        <div className="h-full w-[62%] rounded-full bg-saffron" />
      </div>
      <p className="relative z-10 mt-4 text-sm leading-6 text-white/70">
        Ceramic film helps cut the heat without closing off the view.
      </p>
    </aside>
  );
}
