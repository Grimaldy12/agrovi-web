import { Mail, MapPin } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Contacto() {
  return (
    <section id="contacto" className="mx-auto max-w-6xl px-6 py-24 lg:px-8">
      <div className="overflow-hidden rounded-2xl bg-primary px-8 py-16 text-center sm:px-16">
        <span className="text-sm font-semibold uppercase tracking-wide text-gold">
          Hablemos
        </span>
        <h2 className="mt-3 font-heading text-3xl font-semibold text-white sm:text-4xl">
          ¿Buscas fruta panameña de exportación?
        </h2>
        <p className="mx-auto mt-4 max-w-lg leading-relaxed text-white/75">
          Escríbenos y cuéntanos qué necesitas. Respondemos directamente,
          sin intermediarios.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="mailto:agrovisa2026@gmail.com"
            className={cn(
              buttonVariants({ size: "lg" }),
              "bg-accent text-white hover:bg-accent/90"
            )}
          >
            <Mail className="size-4" />
            agrovisa2026@gmail.com
          </a>
          <div className="flex items-center gap-2 text-sm text-white/70">
            <MapPin className="size-4" />
            Panamá
          </div>
        </div>
      </div>
    </section>
  );
}
