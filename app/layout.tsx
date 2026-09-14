import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GL Ultra Clean — Limpeza Profissional em Brasília",
  description:
    "Serviços de limpeza profissional residencial e comercial em Brasília e região. Qualidade, pontualidade e resultado impecável. Solicite um orçamento pelo WhatsApp.",
  keywords: "limpeza profissional, limpeza residencial, limpeza comercial, limpeza de vidros, limpeza de estofados, Brasília, DF",
  openGraph: {
    title: "GL Ultra Clean — Limpeza Profissional",
    description: "Resultado impecável em cada limpeza. Solicite seu orçamento pelo WhatsApp.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
