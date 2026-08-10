import Image from "next/image";

const work = [
  {
    category: "Automotive tint",
    title: "Dark, even shade",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1800&auto=format&fit=crop",
    alt: "Sports car with a clean dark window tint finish",
    className: "col-span-2 md:col-span-7 md:row-span-2",
  },
  {
    category: "Architectural film",
    title: "Light without the glare",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1400&auto=format&fit=crop",
    alt: "Office with expansive glass windows and natural light",
    className: "col-span-2 md:col-span-5",
  },
  {
    category: "Automotive tint",
    title: "A sharper road presence",
    image: "https://images.unsplash.com/photo-1493238792000-8113da705763?q=80&w=1400&auto=format&fit=crop",
    alt: "Premium car shown with a sleek automotive finish",
    className: "col-span-2 md:col-span-5",
  },
  {
    category: "Architectural film",
    title: "Glass made for daily comfort",
    image: "https://images.unsplash.com/photo-1531973367098-2ca34fa1c4d0?q=80&w=1800&auto=format&fit=crop",
    alt: "Modern building with large architectural glass panels",
    className: "col-span-2 md:col-span-12",
  },
];

export const GallerySection = () => {
  return (
    <section id="gallery" className="bg-white px-5 py-24 text-black sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div data-reveal className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-saffron">Selected work</p>
            <h2 className="mt-4 text-4xl font-black tracking-normal sm:text-5xl">A finish that speaks for itself.</h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-zinc-600 lg:justify-self-end">
            Every vehicle and pane of glass brings its own light, lines, and exposure. Our work is made to look considered
            in every setting.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 md:auto-rows-[13rem] md:grid-cols-12">
          {work.map((item) => (
            <figure
              key={item.title}
              data-reveal
              className={`group relative aspect-[4/3] overflow-hidden rounded-lg bg-black md:aspect-auto ${item.className}`}
            >
              <Image src={item.image} alt={item.alt} fill sizes="(min-width: 768px) 60vw, 100vw" className="object-cover" />
              <div className="absolute inset-0 bg-black/15 transition group-hover:bg-black/30" />
              <figcaption className="absolute inset-x-5 bottom-5 text-white">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-saffron">{item.category}</p>
                <p className="mt-2 text-lg font-bold">{item.title}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};
