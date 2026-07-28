import Image from "next/image";

const PHOTOS = [
  {
    src: "/images/cosecha-melon.jpg",
    alt: "Melones recién cosechados en hileras listos para empaque",
    className: "sm:col-span-2 sm:row-span-2",
  },
  {
    src: "/images/campo-melon-1.jpg",
    alt: "Cultivo de melón con mulch plástico en finca de AgroVi",
    className: "",
  },
  {
    src: "/images/campo-melon-2.jpg",
    alt: "Vista amplia del campo de melón en producción",
    className: "",
  },
  {
    src: "/images/campo-operaciones.jpg",
    alt: "Camioneta de supervisión recorriendo los surcos de cultivo",
    className: "",
  },
  {
    src: "/images/flor-melon.jpg",
    alt: "Flor de melón en plena floración durante el cultivo",
    className: "",
  },
  {
    src: "/images/melon-brote.jpg",
    alt: "Melón en sus primeras etapas de crecimiento en la planta",
    className: "",
  },
  {
    src: "/images/campo-surcos.jpg",
    alt: "Surcos de cultivo de melón vistos de cerca",
    className: "",
  },
];

export function Galeria() {
  return (
    <section id="galeria" className="bg-secondary/50 py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="max-w-xl">
          <span className="text-sm font-semibold uppercase tracking-wide text-accent">
            Directo del campo
          </span>
          <h2 className="mt-3 font-heading text-3xl font-semibold text-primary sm:text-4xl">
            Galería
          </h2>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {PHOTOS.map((photo) => (
            <div
              key={photo.src}
              className={`relative aspect-[4/3] overflow-hidden rounded-xl ${photo.className}`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
                sizes="(min-width: 640px) 33vw, 100vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
