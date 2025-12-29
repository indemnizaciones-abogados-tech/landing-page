'use client';

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/src/lib/utils";

type PracticeArea = {
  id: string;
  title: string;
  description: string;
  detail?: string;
  supportTitle: string;
  supportItems: string[];
  casesTitle?: string;
  cases?: string[];
  image: string;
};

const areas: PracticeArea[] = [
  {
    id: "accidentes",
    title: "Accidentes de tránsito",
    description:
      "Brindamos acompañamiento personalizado desde el día del siniestro hasta la efectiva reparación integral por los diferentes perjuicios causados.",
    detail:
      "Coordinamos abogados, investigadores, matemáticos, físicos, médicos y psicólogos para reconstruir los hechos y cuantificar los daños con precisión.",
    supportTitle: "¿En qué te acompañamos?",
    supportItems: [
      "Proceso penal por lesiones personales u homicidio culposo",
      "Trámite contravencional (según la jurisdicción) y audiencias prejudiciales",
      "Reclamaciones ante compañías aseguradoras",
      "Demanda de responsabilidad civil contractual y/o extracontractual",
      "Asistencia integral mientras dura la recuperación del afectado",
    ],
    casesTitle: "Equipo interdisciplinario",
    cases: [
      "Abogados litigantes especializados en tránsito",
      "Investigadores, matemáticos y físicos que reconstruyen el accidente",
      "Médicos y psicólogos forenses que acreditan secuelas y daño moral",
    ],
    image: "/practice/accidentes-transito.svg",
  },
  {
    id: "estado",
    title: "Responsabilidad civil y del Estado",
    description:
      "Determinamos las acciones u omisiones del Estado para reclamar daños en vías, salud, orden público o actuaciones militares.",
    detail:
      "Ejecutamos investigaciones exhaustivas con equipos técnicos antes de presentar reclamaciones prejudiciales o demandas de reparación.",
    supportTitle: "Casos frecuentes",
    supportItems: [
      "Mal estado de vías y señalización deficiente",
      "Falla en la prestación del servicio de salud",
      "Privación injusta de la libertad y falsos positivos",
      "Muerte o accidentes de servidores públicos",
      "Deslizamientos o eventos por mala gestión del riesgo",
      "Accidentes laborales causados por omisiones del Estado",
    ],
    casesTitle: "¿Qué hacemos?",
    cases: [
      "Estudios probatorios multidisciplinares",
      "Acompañamiento en reclamaciones y demandas",
      "Negociación directa con entidades estatales",
    ],
    image: "/practice/responsabilidad-estado.svg",
  },
  {
    id: "seguros",
    title: "Derecho de seguros",
    description:
      "Acompañamiento integral en seguros de responsabilidad civil, cumplimiento, IRF, D&O, todo riesgo, vida y más.",
    detail:
      "Revisamos condiciones generales y particulares para respaldar reclamaciones o defensas, asegurando el cumplimiento del contrato.",
    supportTitle: "¿Qué hacemos?",
    supportItems: [
      "Auditoría de pólizas y exclusiones",
      "Defensa y reclamación ante compañías aseguradoras",
      "Estrategia frente a prescripción y cláusulas claims made",
    ],
    casesTitle: "Casos frecuentes",
    cases: [
      "Desconocimiento de coberturas contratadas",
      "Interpretaciones erróneas en exclusiones",
      "Negativa de pago por incumplimiento contractual",
    ],
    image: "/practice/seguros.svg",
  },
  {
    id: "derecho-medico",
    title: "Derecho médico",
    description:
      "Acompañamiento minucioso tanto en la defensa como en el accionar por fallas en la prestación del servicio médico.",
    detail:
      "Analizamos historias clínicas, tratamientos, autorizaciones y protocolos para consolidar estrategias de responsabilidad civil médica.",
    supportTitle: "¿Cómo intervenimos?",
    supportItems: [
      "Análisis técnico de expedientes y comités de bioética",
      "Revisión de tratamientos, medicamentos autorizados y procedimientos",
      "Peritajes multidisciplinarios para probar fallas o defender actos médicos",
    ],
    image: "/practice/derecho-medico.svg",
  },
  {
    id: "laborales",
    title: "Accidentes laborales",
    description:
      "Eventos repentinos o violentos causados por el trabajo que generan lesiones físicas o psíquicas, invalidez o incluso la muerte del trabajador.",
    detail:
      "Gestionamos indemnizaciones frente a culpa patronal, falencias en sistemas de gestión y reclamaciones ante la ARL, así como procesos por enfermedad laboral.",
    supportTitle: "Te acompañamos en",
    supportItems: [
      "Culpa patronal y fallas en el sistema de gestión de seguridad",
      "Despidos teniendo fuero de discapacidad o enfermedad laboral",
      "Reclamaciones de indemnización y seguimiento frente a la ARL",
      "Procesos por enfermedad laboral y rehabilitación supervisada",
    ],
    casesTitle: "Resultados clave",
    cases: [
      "Recuperación de ingresos por invalidez",
      "Restitución de derechos laborales vulnerados",
      "Planes de rehabilitación supervisados por especialistas",
    ],
    image: "/practice/accidentes-laborales.svg",
  },
];

export function PracticeAreasSection() {
  const [openId, setOpenId] = useState<string | null>(areas[0].id);

  return (
    <section id="servicios" className="bg-muted/40 py-16" aria-labelledby="areas-heading">
      <div className="container space-y-10">
        <div className="max-w-4xl space-y-4 lg:max-w-5xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">Áreas de práctica</p>
          <h2 id="areas-heading" className="text-2xl font-semibold md:text-4xl">
            Conoce cada frente legal antes de iniciar tu estrategia
          </h2>
          <p className="text-base text-muted-foreground md:text-lg">
            Despliega cada especialidad para ver el acompañamiento, los pasos clave y los escenarios habituales que atendemos.
          </p>
        </div>
        <div className="space-y-4">
          {areas.map((area) => {
            const isOpen = openId === area.id;
            return (
              <article key={area.id} className="rounded-3xl border border-border bg-white shadow-card-soft">
                <button
                  type="button"
                  onClick={() => setOpenId(isOpen ? null : area.id)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 rounded-3xl px-6 py-4 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2"
                >
                  <div className="flex items-center gap-4">
                    <div className="relative h-16 w-16 overflow-hidden rounded-2xl bg-muted">
                      <Image src={area.image} alt="" fill className="object-cover" sizes="64px" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">Área prioritaria</p>
                      <h3 className="text-xl font-semibold">{area.title}</h3>
                    </div>
                  </div>
                  <span
                    className={cn(
                      "h-10 w-10 rounded-full border text-xl font-bold",
                      isOpen ? "border-primary text-primary" : "border-border text-primary"
                    )}
                  >
                    <span className="inline-flex h-full w-full items-center justify-center">{isOpen ? "−" : "+"}</span>
                  </span>
                </button>
                {isOpen && (
                  <div className="space-y-6 border-t border-border/60 p-6 text-sm text-muted-foreground">
                    <p className="text-base text-foreground">{area.description}</p>
                    {area.detail && <p>{area.detail}</p>}
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                        {area.supportTitle}
                      </p>
                      <ul className="mt-2 space-y-2 text-foreground">
                        {area.supportItems.map((item) => (
                          <li key={item} className="flex gap-2">
                            <span className="mt-1 h-2 w-2 rounded-full bg-primary" aria-hidden="true" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    {area.cases && area.cases.length > 0 && (
                      <div className="rounded-2xl bg-muted/70 p-4">
                        <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                          {area.casesTitle}
                        </p>
                        <ul className="mt-2 space-y-1 text-foreground">
                          {area.cases.map((item) => (
                            <li key={item} className="flex gap-2">
                              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" aria-hidden="true" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
