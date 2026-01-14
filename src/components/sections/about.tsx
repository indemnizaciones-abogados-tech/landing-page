import Image from "next/image";

type Partner = {
  name: string;
  role: string;
  description: string;
  image: string;
  linkedin: string;
};

const partners: Partner[] = [
  {
    name: "Juan Carlos Benitez Mosquera",
    role: "Director · Socio fundador · Abogado",
    description:
      "Amplia experiencia en litigios y asesoría jurídica. Ha representado a compañías como Chubb, Allianz, Berkley, Suramericana y AXA en procesos de responsabilidad civil y seguros, además de personas naturales y jurídicas en instancias prejudiciales y judiciales.",
    image: "/team/juan-carlos-benitez.jpg",
    linkedin: "https://www.linkedin.com/in/juan-carlos-benitez-mosquera/",
  },
  {
    name: "Carlos Andrés Lopez Soto",
    role: "Socio fundador · Abogado",
    description:
      "Abogado especialista en responsabilidad civil, seguros y derecho laboral. Ha representado a personas naturales y empresas en litigios estratégicos y realizó su judicatura en la Rama Judicial, aportando visión procesal integral.",
    image: "/team/carlos-andres-lopez.jpg",
    linkedin: "https://www.linkedin.com/in/carlos-andrés-lopez-soto/",
  },
];

const credentials = [
  { title: "Especialistas en Derecho Procesal Civil.", institution: "Universidad Externado de Colombia." },
  { title: "Especialistas en Responsabilidad Civil y Seguros.", institution: "UNAULA." },
  { title: "Especialistas en Derecho Laboral y la Seguridad Social.", institution: "Universidad Cooperativa de Colombia." },
  { title: "Especialistas en Derecho Médico.", institution: "" },
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
            <ul className="grid content-start gap-1 pt-1">
              {credentials.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  <div className="flex flex-col">
                    <span className="leading-tight">{item.title}</span>
                    {item.institution && (
                      <span className="font-bold text-foreground leading-tight">{item.institution}</span>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
          {partners.map((partner) => (
            <a
              key={partner.name}
              href={partner.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <article className="card-surface h-full rounded-3xl border border-border p-5 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-xl">
                <div className="relative mx-auto mb-4 aspect-square w-64 overflow-hidden rounded-2xl transition-transform duration-300 group-hover:scale-[1.02] md:w-96">
                  <Image
                    src={partner.image}
                    alt={`Retrato de ${partner.name}`}
                    fill
                    sizes="(max-width: 768px) 256px, 384px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-primary/10 opacity-0 transition-opacity group-hover:opacity-100" />
                </div>
                <div className="space-y-1 text-center">
                  <div className="flex items-center justify-center gap-2">
                    <p className="text-lg font-semibold text-foreground">{partner.name}</p>
                    <svg
                      className="h-4 w-4 text-primary"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    {partner.role}
                  </p>
                  <p className="text-sm leading-relaxed text-muted-foreground text-justify">
                    {partner.description}
                  </p>
                </div>
              </article>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
