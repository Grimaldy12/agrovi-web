import { Compass, Target } from "lucide-react";

export function MisionVision() {
  return (
    <section id="mision-vision" className="bg-secondary/50 py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="max-w-xl">
          <span className="text-sm font-semibold uppercase tracking-wide text-accent">
            Lo que nos guía
          </span>
          <h2 className="mt-3 font-heading text-3xl font-semibold text-primary sm:text-4xl">
            Misión y visión
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-border bg-background p-8">
            <Target className="size-8 text-accent" strokeWidth={1.5} />
            <h3 className="mt-5 font-heading text-xl font-semibold text-primary">
              Misión
            </h3>
            <p className="mt-4 leading-relaxed text-foreground/80">
              En AgroVi S.A., cultivamos, procesamos y exportamos frutas de
              excelencia, aplicando prácticas agrícolas sostenibles y
              rigurosos estándares de calidad y trazabilidad en cada etapa de
              la cadena. Nuestro compromiso es llevar lo mejor del campo
              panameño a los mercados internacionales, asegurando inocuidad
              alimentaria y valor en cada entrega.
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-background p-8">
            <Compass className="size-8 text-accent" strokeWidth={1.5} />
            <h3 className="mt-5 font-heading text-xl font-semibold text-primary">
              Visión
            </h3>
            <p className="mt-4 leading-relaxed text-foreground/80">
              Aspiramos a consolidarnos como la empresa agroexportadora líder
              y de mayor prestigio en Panamá, siendo reconocidos mundialmente
              por la calidad de nuestros productos, la innovación en procesos
              post-cosecha y nuestra responsabilidad con el entorno social y
              ambiental, abriendo nuevos mercados con excelencia y confianza.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
