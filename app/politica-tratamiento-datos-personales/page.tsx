import type { Metadata } from "next";
import { Footer } from "@/src/components/sections/footer";
import { SiteHeader } from "@/src/components/sections/header";
import { FloatingActions } from "@/src/components/ui/floating-actions";

const dataPurposes = [
  {
    title: "Atención de solicitudes",
    description:
      "Utilizamos los datos para comprender su caso y presentar propuestas de representación en responsabilidad civil, seguros y derecho médico.",
  },
  {
    title: "Relación con clientes",
    description:
      "La información de contacto permite agendar reuniones, compartir documentos y mantener informados a los titulares sobre el estado del trámite.",
  },
  {
    title: "Obligaciones legales",
    description:
      "Resguardamos la información exigida por la ley 1581 de 2012, la normatividad de habeas data y los deberes profesionales.",
  },
  {
    title: "Seguridad y fraude",
    description:
      "Contrastamos los datos con la documentación de soporte para garantizar que cada representación sea legítima y segura.",
  },
];

const holderRights = [
  {
    title: "Conocer y acceder",
    description: "Puede consultar gratuitamente sus datos al menos una vez al mes y cada vez que existan modificaciones sustanciales.",
  },
  {
    title: "Actualizar y rectificar",
    description:
      "Puede solicitar la corrección de datos parciales, inexactos, incompletos o fraccionados que induzcan a error.",
  },
  {
    title: "Revocar y suprimir",
    description:
      "Puede solicitar la supresión de datos cuando no se respeten los principios, derechos y garantías constitucionales y legales.",
  },
  {
    title: "Consultas y reclamos",
    description:
      "Garantizamos canales gratuitos y ágiles para la recepción y trámite de peticiones sobre su información personal.",
  },
];

const securityPractices = [
  "Clasificamos cada expediente según su sensibilidad y limitamos el acceso únicamente al equipo legal encargado.",
  "Aplicamos controles de autenticación en los sistemas digitales y realizamos respaldos cifrados.",
  "Celebramos acuerdos de confidencialidad con aliados y proveedores que tengan acceso a los datos personales.",
];

export const metadata: Metadata = {
  title: "Política de Tratamiento de Datos Personales | Indeminzaciones Abogados",
  description:
    "Conoce cómo Indeminzaciones Abogados recoge, protege y usa tus datos personales conforme a la Ley 1581 de 2012.",
};

export default function DataPolicyPage() {
  return (
    <>
      <SiteHeader hideNav />
      <main className="bg-background min-h-screen">
        {/* Header del Documento */}
        <section className="bg-muted/30 pt-24 pb-12 md:pt-32 md:pb-16 border-b border-border/50">
          <div className="container max-w-4xl text-center space-y-6">
            <p className="text-sm font-bold uppercase tracking-widest text-primary">Protección de información</p>
            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
              Política de Datos Personales
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Garantizamos el derecho constitucional que tienen todas las personas a conocer, actualizar y rectificar la información recogida sobre ellas.
            </p>
          </div>
        </section>

        {/* Contenido del Documento */}
        <section className="py-12 md:py-16">
          <div className="container max-w-3xl space-y-12">

            {/* Introducción Legal */}
            <div className="prose prose-slate max-w-none text-muted-foreground">
              <p className="text-lg">
                Organización Jurídica Indeminzaciones Abogados se compromete a tratar los datos de los titulares de forma
                absolutamente confidencial y a usarlos exclusivamente para las finalidades indicadas en esta política,
                respetando lo definido en la <strong>Ley 1581 de 2012</strong>.
              </p>
            </div>

            <hr className="border-border/60" />

            {/* Finalidades */}
            <article className="space-y-6">
              <h2 className="text-2xl font-bold text-foreground tracking-tight">
                1. Finalidades del tratamiento
              </h2>
              <p className="text-muted-foreground">
                Los datos personales solo serán utilizados para propósitos legítimos relacionados con los servicios jurídicos. Cada actividad cuenta con controles de confidencialidad.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                {dataPurposes.map((item) => (
                  <div key={item.title} className="rounded-xl border border-border bg-white p-5 shadow-sm hover:shadow-md transition-shadow">
                    <h3 className="text-base font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </article>

            {/* Derechos */}
            <article className="space-y-6">
              <h2 className="text-2xl font-bold text-foreground tracking-tight">
                2. Sus derechos como titular
              </h2>
              <div className="bg-muted/30 rounded-2xl p-6 border border-border/50">
                <ul className="space-y-4">
                  {holderRights.map((right) => (
                    <li key={right.title} className="flex flex-col gap-1">
                      <span className="font-semibold text-foreground text-sm flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                        {right.title}
                      </span>
                      <span className="text-sm text-muted-foreground pl-3.5">
                        {right.description}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>

            {/* Seguridad */}
            <article className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground tracking-tight">
                3. Medidas de seguridad
              </h2>
              <p className="text-muted-foreground">Custodiamos la información con criterios técnicos alineados con los estándares del sector legal:</p>
              <div className="space-y-3">
                {securityPractices.map((practice, idx) => (
                  <div key={idx} className="flex gap-3 text-muted-foreground text-sm">
                    <span className="flex-shrink-0 h-5 w-5 rounded-full bg-green-100 text-green-700 flex items-center justify-center text-xs font-bold">✓</span>
                    <span>{practice}</span>
                  </div>
                ))}
              </div>
            </article>

            <hr className="border-border/60" />

            {/* Procedimiento y Contacto */}
            <article className="space-y-6">
              <h2 className="text-xl font-bold text-foreground tracking-tight">
                Procedimiento para consultas y reclamos
              </h2>
              <p className="text-muted-foreground">
                Para ejercer sus derechos, puede contactarnos a través de nuestros canales oficiales. Atenderemos su solicitud en los plazos de ley (10 días hábiles para consultas, 15 para reclamos).
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                <a href="mailto:contacto@indemnizacionesabogados.com" className="flex flex-col items-center justify-center p-6 rounded-xl border border-border bg-white hover:border-primary/50 transition-colors group">
                  <span className="mb-2 text-2xl">✉️</span>
                  <span className="font-semibold text-foreground group-hover:text-primary">Correo Electrónico</span>
                  <span className="text-sm text-muted-foreground">contacto@indemnizacionesabogados.com</span>
                </a>
                <a href="https://wa.me/573052566811" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center p-6 rounded-xl border border-border bg-white hover:border-primary/50 transition-colors group">
                  <span className="mb-2 text-2xl">💬</span>
                  <span className="font-semibold text-foreground group-hover:text-primary">Línea WhatsApp</span>
                  <span className="text-sm text-muted-foreground">+57 305 256 6811</span>
                </a>
              </div>

              <div className="text-center text-xs text-muted-foreground mt-8">
                <p>Responsable del tratamiento: Organización Jurídica Indeminzaciones Abogados</p>
                <p>NIT XXXXXXXX-X · Medellín, Colombia</p>
              </div>
            </article>

          </div>
        </section>
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}
