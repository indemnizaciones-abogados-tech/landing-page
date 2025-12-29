import Image from "next/image";
import Link from "next/link";
import { Check, MessageCircle } from "lucide-react";

const practiceHighlights = [
  {
    id: "highlight-01",
    cases: [
      "Trámite contravencional y audiencias prejudiciales",
      "Reclamaciones ante compañías aseguradoras",
      "Mal estado de vías y señalización deficiente",
      "Falla en la prestación del servicio de salud",
      "Auditoría de pólizas y exclusiones",
      "Defensa y reclamación ante aseguradoras",
      "Revisión de tratamientos y protocolos autorizados",
      "Culpa patronal y fallas en el sistema de gestión de seguridad",
      "Reclamaciones de indemnización ante la ARL",
      "Procesos por enfermedad laboral",
    ],
  },
];

const whatsappLink =
  "https://wa.me/573052566811?text=Hola,%20necesito%20asesor%C3%ADa%20legal%20sobre%20indemnizaciones";

export function HeroSection() {
  return (
    <section id="inicio" className="py-12 md:py-16" aria-labelledby="hero-heading">
      <div className="container">
        <div className="relative overflow-hidden rounded-section border border-primary/40 bg-[#030f21] shadow-hero">
          <Image
            src="/hero-justice.svg"
            alt=""
            fill
            priority
            quality={90}
            sizes="(max-width: 1024px) 100vw, 80vw"
            className="object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#030f21]/95 via-[#030f21]/80 to-[#0f172a]/70" />
          <div className="relative grid gap-6 p-6 sm:p-8 md:p-12 lg:grid-cols-[1.1fr_0.9fr]">
            <article className="relative overflow-hidden rounded-featured border border-border bg-white p-6 text-foreground shadow-card-strong sm:p-8 md:p-10">
              <Image
                src="/logos/Indeminzaciones-abogados_logo_arbol_ocre.png"
                alt=""
                fill
                sizes="(max-width: 1024px) 100vw, 80vw"
                className="object-contain opacity-15"
              />
              <div className="relative flex flex-col gap-6">
                <h1
                  id="hero-heading"
                  className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl text-center"
                >
                  Nos enfocamos en ofrecer soluciones jurídicas efectivas y personalizadas, respaldadas por un profundo conocimiento y compromiso con nuestros clientes.
                </h1>
                <div className="flex flex-col gap-2 text-base sm:flex-row sm:gap-3 sm:text-sm text-center">
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-full bg-[linear-gradient(135deg,#25d366,#1ebe57)] px-8 py-3 text-base font-semibold text-white shadow-cta-accent transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
                  >
                    <MessageCircle className="mr-2 h-5 w-5" aria-hidden="true" />
                    Agenda por WhatsApp
                  </a>
                  <Link
                    href="#contacto"
                    className="inline-flex items-center justify-center rounded-full border border-transparent bg-[linear-gradient(135deg,#c8a033,#f9d423)] px-8 py-3 text-base font-semibold text-foreground shadow-cta-primary transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
                  >
                    Solicitar evaluación de caso.
                  </Link>
                </div>
                <div className="rounded-2xl bg-muted/60 p-4 text-sm text-muted-foreground">
                  Compartimos tableros de seguimiento, minutas y responsables por cada etapa. Respuesta inicial menor a 2 horas hábiles.
                </div>
              </div>
            </article>
            <article className="flex flex-col rounded-featured border border-white/15 bg-white/5 p-6 text-white backdrop-blur sm:p-8 md:p-10">
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-white">
                  Casos frecuentes que atendemos a diario
                </h2>
              </div>
              <div className="mt-6 space-y-4">
                {practiceHighlights.map((practice) => (
                  <ul key={practice.id} className="mt-3 space-y-2 text-xs text-white/80">
                    {practice.cases.map((item, index) => (
                      <li key={`${practice.id}-${index}`} className="flex items-start gap-2">
                        <span className="rounded-full bg-white/10 p-1" aria-hidden="true">
                          <Check className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
                        </span>
                        <span className="leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                ))}
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
