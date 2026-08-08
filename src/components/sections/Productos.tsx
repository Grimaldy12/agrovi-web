import { Sprout, PackageCheck, ShieldCheck, Ship } from "lucide-react";

const ITEMS = [
  {
    icon: Sprout,
    title: "Melón Dorado",
    description:
      "Nuestro producto principal. Cultivado en fincas propias y cosechado en el punto justo de madurez para exportación.",
  },
  {
    icon: PackageCheck,
    title: "Empaque y clasificación",
    description:
      "Cada fruta se selecciona y clasifica a mano según calibre y calidad antes de salir de la finca.",
  },
  {
    icon: ShieldCheck,
    title: "Calidad e inocuidad",
    description:
      "Seguimos prácticas agrícolas sostenibles con trazabilidad completa, desde la semilla hasta el contenedor.",
  },
  {
    icon: Ship,
    title: "Logística de exportación",
    description:
      "Coordinamos el transporte y los tiempos de entrega para que la fruta llegue fresca a cualquier puerto.",
  },
];

export function Productos() {
  return (
    <section id="productos" className="mx-auto max-w-6xl px-6 py-24 lg:px-8">
      <div className="max-w-xl">
        <span className="text-sm font-semibold uppercase tracking-wide text-accent">
          Lo que exportamos
        </span>
        <h2 className="mt-3 font-heading text-3xl font-semibold text-primary sm:text-4xl">
          Del productor al consumidor
        </h2>
        <p className="mt-4 leading-relaxed text-foreground/80">
          Cada proceso está pensado para que la fruta panameña llegue en las
          mejores condiciones, sin importar la distancia.
        </p>
      </div>

      <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
        {ITEMS.map((item) => (
          <div key={item.title} className="bg-background p-8">
            <item.icon className="size-7 text-primary" strokeWidth={1.5} />
            <h3 className="mt-5 font-heading text-lg font-semibold text-primary">
              {item.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-foreground/75">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
