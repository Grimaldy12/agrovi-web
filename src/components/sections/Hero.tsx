import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/campo-vista.jpg"
          alt="Campo de melón de AgroVi en Panamá, listo para cosecha"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f2318] via-[#16301f]/85 to-[#16301f]/50" />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col px-6 py-28 lg:px-8 lg:py-40">
        <span className="w-fit rounded-full border border-gold/40 bg-white/5 px-4 py-1.5 text-xs font-semibold tracking-wide text-gold uppercase">
          Empresa exportadora · Panamá
        </span>

        <h1 className="mt-6 max-w-2xl font-heading text-4xl font-semibold leading-[1.1] text-white sm:text-5xl lg:text-6xl">
          Del campo panameño a los mercados del mundo.
        </h1>

        <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80">
          Cultivamos, procesamos y exportamos frutas con estándares
          rigurosos de calidad y trazabilidad. Cada caja que sale de
          nuestras fincas lleva el trabajo de un equipo que conoce el campo
          panameño.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="mailto:agrovisa2026@gmail.com"
            className={cn(
              buttonVariants({ size: "lg" }),
              "bg-accent text-white hover:bg-accent/90"
            )}
          >
            Escríbenos
            <ArrowRight className="size-4" />
          </a>
          <a
            href="#quienes-somos"
            className={cn(
              buttonVariants({ size: "lg", variant: "outline" }),
              "border-white/30 bg-white/5 text-white hover:bg-white/15 hover:text-white"
            )}
          >
            Quiénes somos
          </a>
        </div>
      </div>
    </section>
  );
}
