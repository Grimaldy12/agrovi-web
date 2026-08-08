import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { QuienesSomos } from "@/components/sections/QuienesSomos";
import { MisionVision } from "@/components/sections/MisionVision";
import { Productos } from "@/components/sections/Productos";
import { Empaque } from "@/components/sections/Empaque";
import { Galeria } from "@/components/sections/Galeria";
import { Contacto } from "@/components/sections/Contacto";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <QuienesSomos />
        <MisionVision />
        <Productos />
        <Empaque />
        <Galeria />
        <Contacto />
      </main>
      <Footer />
    </>
  );
}
