const tintShades = [
  { value: "100%", shade: "bg-black" },
  { value: "80%", shade: "bg-zinc-900" },
  { value: "60%", shade: "bg-zinc-700" },
  { value: "40%", shade: "bg-zinc-500" },
  { value: "20%", shade: "bg-zinc-300" },
  { value: "0%", shade: "bg-white" },
];

export const TintShadeSelector = () => {
  return (
    <div className="mt-4">
      <div className="flex items-center justify-between gap-4">
        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500">Tint shade range</p>
        <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-zinc-400">Privacy to clear</p>
      </div>
      <div className="mt-3 grid grid-cols-6 gap-2">
        {tintShades.map(({ value, shade }) => (
          <div key={value} className="min-w-0">
            <div
              className={`h-6 rounded-sm ${shade} ${
                value === "0%" ? "shadow-[inset_0_0_0_1px_rgba(0,0,0,0.12)]" : ""
              }`}
            />
            <p className="mt-2 text-center text-[10px] font-bold tracking-[0.08em] text-zinc-600">{value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
