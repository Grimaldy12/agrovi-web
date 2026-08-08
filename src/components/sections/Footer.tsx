import Image from "next/image";

const LINKS = [
  { href: "#inicio", label: "Inicio" },
  { href: "#quienes-somos", label: "Quiénes somos" },
  { href: "#mision-vision", label: "Misión y visión" },
  { href: "#productos", label: "Lo que exportamos" },
  { href: "#galeria", label: "Galería" },
  { href: "#contacto", label: "Contacto" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-6xl px-6 py-14 lg:px-8">
        <div className="flex flex-col gap-10 sm:flex-row sm:justify-between">
          <div className="max-w-xs">
            <div className="flex items-center gap-2.5">
              <Image
                src="/images/logo.jpg"
                alt="AgroVi S.A."
                width={36}
                height={36}
                className="h-9 w-9 rounded-full object-cover"
              />
              <span className="font-heading text-lg font-semibold text-primary">
                AgroVi <span className="text-accent">S.A.</span>
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-foreground/65">
              Empresa exportadora panameña. Cultivamos y exportamos frutas
              de la mejor calidad y trazabilidad en cada etapa.
            </p>
          </div>

          <nav className="grid grid-cols-2 gap-x-8 gap-y-2 sm:grid-cols-1 sm:text-right">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-foreground/70 transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-12 border-t border-border pt-6 text-center sm:text-left">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} AgroVi S.A. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
