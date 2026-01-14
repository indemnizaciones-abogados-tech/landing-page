import type { Metadata } from "next";
import { AboutSection } from "@/src/components/sections/about";
import { CaseStudiesSection } from "@/src/components/sections/case-studies";
import { ContactSection } from "@/src/components/sections/contact";
import { Footer } from "@/src/components/sections/footer";
import { HeroSection } from "@/src/components/sections/hero";
import { MethodSection } from "@/src/components/sections/method";
import { PracticeAreasSection } from "@/src/components/sections/practice-areas";
import { SiteHeader } from "@/src/components/sections/header";
import { FloatingActions } from "@/src/components/ui/floating-actions";

export const metadata: Metadata = {
  title: "Abogados de Responsabilidad Civil y Seguros | Indeminzaciones",
  description:
    "Expertos en indemnización por accidente de tránsito, indemnización laboral y casos de responsabilidad médica. Protegemos tus derechos con estrategia legal efectiva.",
  keywords: [
    // Core Services
    "abogados responsabilidad civil colombia",
    "indemnizaciones accidentes de tránsito",
    "reclamaciones seguros",
    "derecho médico y sanitario",
    "abogados accidentes laborales",

    // Long-tail & Specifics
    "indemnización por muerte accidente de tránsito",
    "demanda reparación directa estado",
    "reclamación pago siniestro aseguradora",
    "indemnización culpa patronal",
    "negligencia médica",
    "reclamación ante la arl",
    "perjuicios morales y materiales",
    "falla en el servicio medico",
    "despido con fuero de salud",

    // Partner Names (SEO discovery)
    "Juan Carlos Benitez Mosquera",
    "Juan Carlos Benitez abogado",
    "Carlos Andrés Lopez Soto",
    "Carlos Andrés Lopez abogado",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Firma experta en indemnizaciones y responsabilidad civil",
    description:
      "Especialistas boutique en responsabilidad civil, derecho médico y seguros con cobertura nacional en Colombia.",
    url: "/",
    type: "website",
    siteName: "Indeminzaciones Abogados",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Equipo legal de Indeminzaciones Abogados preparado para casos de responsabilidad civil",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abogados de responsabilidad civil y seguros",
    description: "Litigio estratégico en responsabilidad civil, derecho médico y seguros.",
    images: ["/twitter-image"],
  },
};

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <AboutSection />
        <PracticeAreasSection />
        <CaseStudiesSection />
        <MethodSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}
