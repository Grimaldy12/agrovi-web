import type { Metadata } from "next";
import { Fraunces, Work_Sans } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://agrovi.vercel.app"),
  title: "AgroVi S.A. | Empresa Exportadora de Panamá",
  description:
    "AgroVi S.A. cultiva, procesa y exporta frutas agropecuarias de Panamá con estándares de calidad, trazabilidad e inocuidad alimentaria.",
  keywords: [
    "AgroVi",
    "exportación de frutas Panamá",
    "melón panameño",
    "empresa agroexportadora",
    "agroexportadora Panamá",
  ],
  openGraph: {
    title: "AgroVi S.A. | Empresa Exportadora de Panamá",
    description:
      "Cultivamos y exportamos frutas agropecuarias de Panamá al mundo, con calidad y trazabilidad en cada etapa.",
    url: "https://agrovi.vercel.app",
    siteName: "AgroVi S.A.",
    locale: "es_PA",
    type: "website",
    images: [{ url: "/images/cosecha-melon.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AgroVi S.A. | Empresa Exportadora de Panamá",
    description:
      "Cultivamos y exportamos frutas agropecuarias de Panamá al mundo, con calidad y trazabilidad en cada etapa.",
    images: ["/images/cosecha-melon.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${fraunces.variable} ${workSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
