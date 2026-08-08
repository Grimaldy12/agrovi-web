"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";

const NAV_LINKS = [
  { href: "#inicio", label: "Inicio" },
  { href: "#quienes-somos", label: "Quiénes somos" },
  { href: "#mision-vision", label: "Misión y visión" },
  { href: "#productos", label: "Lo que exportamos" },
  { href: "#empaque", label: "Empaque" },
  { href: "#galeria", label: "Galería" },
  { href: "#contacto", label: "Contacto" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3 lg:px-8">
        <Link href="#inicio" className="flex items-center gap-2.5">
          <Image
            src="/images/logo.jpg"
            alt="AgroVi S.A."
            width={40}
            height={40}
            className="h-10 w-10 rounded-full object-cover"
            priority
          />
          <span className="font-heading text-lg font-semibold tracking-tight text-primary">
            AgroVi <span className="text-accent">S.A.</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground/75 transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="mailto:agrovisa2026@gmail.com"
          className={cn(
            buttonVariants(),
            "hidden bg-primary text-primary-foreground hover:bg-primary/90 lg:inline-flex"
          )}
        >
          Escríbenos
        </a>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            className="lg:hidden"
            render={
              <Button
                variant="ghost"
                size="icon"
                aria-label="Abrir menú de navegación"
              />
            }
          >
            <Menu className="size-6" />
          </SheetTrigger>
          <SheetContent side="right" className="w-72">
            <SheetTitle className="px-4 pt-4 font-heading text-primary">
              AgroVi S.A.
            </SheetTitle>
            <nav className="mt-4 flex flex-col gap-1 px-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-2 py-3 text-base font-medium text-foreground/80 transition-colors hover:bg-secondary hover:text-primary"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="mailto:agrovisa2026@gmail.com"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-md bg-primary px-2 py-3 text-center text-base font-semibold text-primary-foreground"
              >
                Escríbenos
              </a>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
