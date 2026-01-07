import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { legalServiceJsonLd } from "@/src/components/seo/legal-service-schema";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://indemnizacionesabogados.com"),
  title: {
    default: "Responsabilidad Civil y Seguros | Indeminzaciones Abogados",
    template: "%s | Indeminzaciones Abogados",
  },
  description:
    "Despacho boutique experto en responsabilidad civil, seguros y derecho médico. Acompañamos casos complejos con estrategia legal y trato humano.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_CO",
    siteName: "Indeminzaciones Abogados",
    url: "/",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Indeminzaciones Abogados · Responsabilidad civil y seguros",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@indeminzaciones",
    title: "Indeminzaciones Abogados",
    description: "Especialistas en responsabilidad civil, derecho médico y seguros en Colombia.",
    images: ["/twitter-image"],
  },
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.variable} bg-background text-foreground antialiased`}>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(legalServiceJsonLd) }}
        />
        <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}
