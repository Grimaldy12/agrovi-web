import Image from "next/image";

export function QuienesSomos() {
  return (
    <section id="quienes-somos" className="mx-auto max-w-6xl px-6 py-24 lg:px-8">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div className="relative order-2 aspect-[4/5] overflow-hidden rounded-2xl lg:order-1">
          <Image
            src="/images/melon-brote.jpg"
            alt="Melón en sus primeras etapas de crecimiento en la planta"
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 40vw, 100vw"
          />
        </div>

        <div className="order-1 lg:order-2">
          <span className="text-sm font-semibold uppercase tracking-wide text-accent">
            Quiénes somos
          </span>
          <h2 className="mt-3 font-heading text-3xl font-semibold text-primary sm:text-4xl">
            Una empresa panameña con los pies en la tierra
          </h2>
          <div className="mt-6 space-y-5 text-base leading-relaxed text-foreground/80">
            <p>
              AgroVi S.A. es una empresa exportadora panameña dedicada al
              cultivo y procesamiento de frutas agropecuarias, con el melón
              dorado como nuestro producto principal. Trabajamos fincas
              propias,
              donde cada etapa del cultivo se sigue de cerca: desde la
              siembra hasta el empaque final.
            </p>
            <p>
              Cada temporada seleccionamos y clasificamos nuestra fruta a
              mano para que llegue en las mejores condiciones a su destino,
              sin importar qué tan lejos esté. Detrás de cada contenedor hay
              un equipo que conoce el campo y entiende lo que los mercados
              internacionales exigen en calidad, inocuidad y tiempos de
              entrega.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
