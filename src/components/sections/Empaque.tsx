import Image from "next/image";

export function Empaque() {
  return (
    <section id="empaque" className="bg-secondary py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image
              src="/images/empaque-caja.jpg"
              alt="Caja de empaque de melón dorado AgroVi S.A. lista para exportación"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 40vw, 100vw"
            />
          </div>

          <div>
            <span className="text-sm font-semibold uppercase tracking-wide text-accent">
              Empaque
            </span>
            <h2 className="mt-3 font-heading text-3xl font-semibold text-primary sm:text-4xl">
              Empaque diseñado para exportación
            </h2>
            <p className="mt-6 text-base leading-relaxed text-foreground/80">
              Nuestras cajas están diseñadas para proteger el producto
              durante el transporte internacional, garantizando que llegue
              fresco y en óptimas condiciones. Exportando melones de calidad
              desde Panamá hacia el mundo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
