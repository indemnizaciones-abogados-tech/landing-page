import Image from "next/image";

type Partner = {
  name: string;
  role: string;
  description: string;
  image: string;
};

const partners: Partner[] = [
  {
    name: "Juan Carlos Benitez Mosquera",
    role: "Socio fundador · Abogado",
    description:
      "Amplia experiencia en litigios y asesoría jurídica. Ha representado a compañías como Chubb, Allianz, Berkley, Suramericana y AXA en procesos de responsabilidad civil y seguros, además de personas naturales y jurídicas en instancias prejudiciales y judiciales.",
    image: "/team/juan-carlos-benitez.jpg",
  },
  {
    name: "Carlos Andrés Lopez Soto",
    role: "Socio fundador · Abogado",
    description:
      "Especialista en responsabilidad civil, seguros y derecho laboral. Ha representado a personas naturales y empresas en litigios estratégicos y realizó su judicatura en la Rama Judicial, aportando visión procesal integral.",
    image: "/team/carlos-andres-lopez.jpg",
  },
];

const credentials = [
  "Especialistas en Derecho Procesal Civil. Universidad Externado de Colombia.",
  "Especialistas en Responsabilidad Civil y Seguros. UNAULA.",
  "Especialistas en Derecho Laboral y la Seguridad Social. Universidad Cooperativa de Colombia.",
  "Especialistas en Derecho Médico.",
];

export function AboutSection() {

  return (
    <section id="confianza" className="bg-muted/30 py-16" aria-labelledby="about-heading">
      <div className="container space-y-10">
        <div className="space-y-8">
          <div className="max-w-4xl space-y-4 lg:max-w-5xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">Quienes somos</p>
            <h2 id="about-heading" className="text-2xl font-semibold md:text-4xl">
              Socios que lideran cada caso con presencia directa en juzgados y mesas de negociación
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            <p className="text-base text-muted-foreground md:text-lg">
              Juan Carlos Benitez Mosquera y Carlos Andrés Lopez Soto fundaron la firma tras años de representar a instituciones
              aseguradoras y clientes particulares. Su enfoque combina litigio estratégico con acompañamiento humano permanente.
            </p>
            <ul className="grid content-start gap-2 pt-1">
              {credentials.map((credential) => (
                <li key={credential} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  <span>{credential}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {partners.map((partner) => (
            <article key={partner.name} className="card-surface rounded-3xl border border-border p-6 shadow-lg">
              <div className="relative mb-4 aspect-[4/3] overflow-hidden rounded-2xl">
                <Image
                  src={partner.image}
                  alt={`Retrato de ${partner.name}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw"
                  className="object-cover"
                />
              </div>
              <div className="space-y-2">
                <p className="text-xl font-semibold text-foreground">{partner.name}</p>
                <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">{partner.role}</p>
                <p className="text-sm leading-relaxed text-muted-foreground">{partner.description}</p>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
