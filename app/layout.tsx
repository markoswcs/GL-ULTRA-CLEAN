import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GL ULTRA CLEAN | Higienização e Impermeabilização de Estofados",
  description:
    "Especialistas em higienização e impermeabilização de sofás, colchões, bancos automotivos e cadeiras em Brasília-DF e Entorno-GO (Valparaíso). Saúde e conforto para sua família. Orçamento rápido pelo WhatsApp.",
  keywords: "higienização de estofados, limpeza de sofá, impermeabilização de sofá, higienização de colchão, bancos automotivos, Valparaíso GO, Brasília DF, entorno GO",
  openGraph: {
    title: "GL ULTRA CLEAN | Higienização e Impermeabilização de Estofados",
    description: "Saúde e conforto para sua família. Solicite seu orçamento pelo WhatsApp.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
