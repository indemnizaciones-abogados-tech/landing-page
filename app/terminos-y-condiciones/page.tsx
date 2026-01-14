import type { Metadata } from "next";
import { Footer } from "@/src/components/sections/footer";
import { SiteHeader } from "@/src/components/sections/header";
import { FloatingActions } from "@/src/components/ui/floating-actions";

const guarantees = [
  {
    title: "Veracidad de los datos",
    description: "Toda información que registre y anexe en la página web será verdadera, exacta, actual y completa.",
  },
  {
    title: "Capacidad legal",
    description: "Tiene capacidad legal y acepta cumplir los términos y condiciones de la página web.",
  },
  {
    title: "Uso legítimo del sitio",
    description: "No utilizará la página web para ningún fin ilegal o no autorizado.",
  },
  {
    title: "Cumplimiento normativo",
    description: "Su uso de la página web no infringe ninguna ley o normativa aplicable.",
  },
];

const prohibitedActivities = [
  "Hacer cualquier uso no autorizado de la página web, tal como utilizar nombres falsos, correos electrónicos falsos y crear cuentas falsas.",
  "Utilizar la página web para ofrecer la venta de bienes y servicios.",
  "Engañarnos por medio de la página web, con la finalidad de obtener información de la página o de la empresa.",
  "Hacer un uso indebido de nuestros servicios para realizar conductas indebidas.",
  "Suplantar a empresas o personas, con finalidad de obtener información.",
  "Utilizar nuestros servicios para acoso, extorsión o cualquier conducta ilícita.",
];

export const metadata: Metadata = {
  title: "Términos y Condiciones | Indeminzaciones Abogados",
  description:
    "Revisa los términos de uso, garantías del usuario y actividades prohibidas al interactuar con Indeminzaciones Abogados.",
  alternates: {
    canonical: "/terminos-y-condiciones",
  },
};

export default function TermsAndConditionsPage() {
  return (
    <>
      <SiteHeader hideNav />
      <main className="bg-background min-h-screen">
        {/* Header del Documento */}
        <section className="bg-muted/30 pt-24 pb-12 md:pt-32 md:pb-16 border-b border-border/50">
          <div className="container max-w-4xl text-center space-y-6">
            <p className="text-sm font-bold uppercase tracking-widest text-primary">Marco legal del sitio</p>
            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
              Términos y Condiciones
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Los presentes términos constituyen un acuerdo vinculante que regula el acceso y uso de nuestros servicios digitales y canales de comunicación.
            </p>
          </div>
        </section>

        {/* Contenido del Documento */}
        <section className="py-12 md:py-16">
          <div className="container max-w-3xl space-y-12">

            {/* Introducción */}
            <div className="prose prose-slate max-w-none text-muted-foreground">
              <p className="text-lg">
                Usted acepta nuestros términos y condiciones al acceder a la página web y anexar sus datos personales para
                realizar contacto con nosotros sobre su asesoría o trámite jurídico.
              </p>
            </div>

            <hr className="border-border/60" />

            {/* Alcance */}
            <article className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground tracking-tight">
                1. Alcance, aceptación y responsabilidad
              </h2>
              <div className="space-y-4 text-base text-muted-foreground leading-relaxed">
                <p>
                  La información proporcionada en la página web no está destinada a ser distribuida o utilizada por ninguna persona
                  o entidad en ninguna jurisdicción donde su uso sea contrario a la normativa que nos somete.
                </p>
                <p>
                  En consecuencia, las personas que decidan acceder y anexar sus datos personales lo hacen por iniciativa propia y
                  son las únicas responsables del cumplimiento de las leyes locales. Si su información es falsa, inexacta o incompleta,
                  tenemos el derecho de suspender su atención.
                </p>
              </div>

              <div className="mt-6 rounded-2xl border border-primary/20 bg-primary/5 p-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">Manejo de medios de contacto</h3>
                <p className="text-sm text-muted-foreground">
                  Toda interacción digital, telefónica o presencial quedará sujeta a estos términos. Al remitirnos documentos,
                  fotografías o comunicaciones, certifica que cuenta con la autorización necesaria para compartirlos.
                </p>
              </div>
            </article>

            {/* Garantías */}
            <article className="space-y-6">
              <h2 className="text-2xl font-bold text-foreground tracking-tight">
                2. Garantías del usuario
              </h2>
              <p className="text-muted-foreground">
                Para mantener un servicio íntegro y seguro, cada visitante declara lo siguiente al contactarnos:
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                {guarantees.map((item) => (
                  <div key={item.title} className="rounded-xl border border-border bg-white p-5 shadow-sm hover:shadow-md transition-shadow">
                    <h3 className="text-base font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </article>

            {/* Actividades Prohibidas */}
            <article className="space-y-6">
              <h2 className="text-2xl font-bold text-foreground tracking-tight">
                3. Actividades prohibidas
              </h2>
              <p className="text-muted-foreground">
                Queda estrictamente prohibido incurrir en las siguientes conductas que afectan la seguridad y el funcionamiento del despacho:
              </p>
              <ul className="space-y-3">
                {prohibitedActivities.map((activity, index) => (
                  <li key={index} className="flex gap-3 text-muted-foreground">
                    <span className="flex-shrink-0 h-6 w-6 rounded-full bg-red-100 text-red-600 flex items-center justify-center text-xs font-bold">✕</span>
                    <span>{activity}</span>
                  </li>
                ))}
              </ul>
            </article>

            <hr className="border-border/60" />

            {/* Actualizaciones */}
            <article className="space-y-4">
              <h2 className="text-xl font-bold text-foreground tracking-tight">
                Actualizaciones y modificaciones
              </h2>
              <p className="text-muted-foreground">
                Nos reservamos el derecho de modificar estos términos en cualquier momento. El uso continuo de la página web después de la publicación de cambios constituye la aceptación expresa de los nuevos términos.
              </p>
            </article>

            {/* Contacto Legal */}
            <div className="rounded-2xl bg-muted p-8 text-center space-y-4">
              <p className="text-sm font-medium text-foreground">
                ¿Dudas sobre nuestros términos legales?
              </p>
              <p className="text-muted-foreground">
                Escribe a <a href="mailto:indemnizacionesabogados1@gmail.com" className="font-semibold text-primary hover:underline">indemnizacionesabogados1@gmail.com</a>
                <br />o contáctanos vía WhatsApp al <strong>+57 305 256 6811</strong>.
              </p>
            </div>

          </div>
        </section>
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}
