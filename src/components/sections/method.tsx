const steps = [
  {
    title: "Diagnóstico acelerado",
    description:
      "Entrevista inicial y recopilación de expedientes en menos de 48 horas.",
    deliverable: "Informe de riesgos y estimación preliminar de indemnización",
  },
  {
    title: "Estrategia y evidencia",
    description:
      "Coordinamos peritajes, línea probatoria y cronograma procesal para negociar o presentar demanda.",
    deliverable: "Carpeta probatoria digital y plan de acción por actores clave",
  },
  {
    title: "Negociación directa",
    description:
      "Participamos en mesas con aseguradoras y contrapartes. Documentamos cada ofrecimiento.",
    deliverable: "Bitácora de avances compartida y escenarios de cierre",
  },
  {
    title: "Litigio especializado",
    description:
      "Seguimiento de audiencias, recursos procesales y cumplimiento de sentencias.",
    deliverable: "Reportes de estados y modelo financiero para ejecución",
  },
  {
    title: "Representación integral",
    description:
      "Representación en juzgados civiles, laborales, contenciosos, administrativos y penales.",
    deliverable: "Cierre formal de caso y entrega de expediente final",
  },
];

export function MethodSection() {
  return (
    <section id="metodo" className="py-16" aria-labelledby="method-heading">
      <div className="container grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">Nuestro método</p>
          <h2 id="method-heading" className="text-2xl font-semibold md:text-4xl">
            Protocolos claros, comunicación permanente y responsables por caso
          </h2>
          <p className="text-base text-muted-foreground md:text-lg">
            Cada cliente cuenta con un abogado líder disponible por WhatsApp y correo para resolver dudas en cualquier momento.
          </p>
          <div className="rounded-2xl border border-primary/40 bg-primary/5 p-6 text-sm text-primary">
            <p className="font-semibold">Supervisión directa de los socios</p>
            <p className="mt-2 text-primary/90">
              Compartimos minutas posteriores a cada audiencia, además de reportes privados con fechas clave y próximos entregables.
            </p>
          </div>
        </div>
        <ol className="space-y-2">
          {steps.map((step, index) => (
            <li key={step.title} className="card-surface relative rounded-xl border border-border p-3 shadow-sm">
              <span className="absolute -left-4 top-5 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground shadow-md">
                {index + 1}
              </span>
              <h3 className="text-lg font-semibold leading-tight">{step.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              <p className="mt-3 text-sm font-semibold text-primary">{step.deliverable}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
