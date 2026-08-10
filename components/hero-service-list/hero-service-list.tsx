const services = ["Automotive tint", "Architectural window film"];

export const HeroServiceList = () => {
  return (
    <div className="mt-9">
      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500">Our services</p>
      <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2">
        {services.map((service) => (
          <p key={service} className="flex items-center gap-2 text-sm font-semibold text-zinc-800">
            <span className="size-1.5 rounded-full bg-saffron" />
            {service}
          </p>
        ))}
      </div>
    </div>
  );
};
