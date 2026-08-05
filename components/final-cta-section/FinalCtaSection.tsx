import { Button } from "@/components/button/Button";

export function FinalCtaSection() {
  return (
    <section id="quote" className="bg-white px-5 py-24 text-black sm:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-saffron">Free estimate</p>
          <h2 className="mt-4 max-w-3xl text-4xl font-black tracking-normal sm:text-5xl">
            Ready for darker shade, lower heat, and cleaner glass?
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-600">
            Tell us what you need tinted and we will recommend the right film, shade, and installation window.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
          <Button href="tel:+10000000000" icon="phone">
            Call Nano Tint
          </Button>
          <Button href="mailto:quotes@nanotint.com" variant="secondary">
            Email for Quote
          </Button>
        </div>
      </div>
    </section>
  );
}
