'use client';

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/src/components/ui/button";
import { toast } from "sonner";
import { CheckCircle2, Loader2, AlertCircle } from "lucide-react";
import { CASE_TYPES } from "@/src/lib/constants";

const whatsappLink =
  "https://wa.me/573052566811?text=Hola,%20necesito%20asesor%C3%ADa%20legal%20sobre%20indemnizaciones";

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      nombre: formData.get("nombre"),
      telefono: formData.get("telefono"),
      ciudad: formData.get("ciudad"),
      email: formData.get("email"),
      tipoCaso: formData.get("tipo-caso"),
      mensaje: formData.get("descripcion"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Error al enviar el formulario");
      }

      toast.success("Solicitud enviada correctamente", {
        description: "Revisa tu correo, te hemos enviado una confirmación.",
        icon: <CheckCircle2 className="h-5 w-5 text-green-600" />,
        duration: 5000,
      });

      (e.target as HTMLFormElement).reset();
    } catch (_) {
      toast.error("Ocurrió un error al enviar", {
        description: "Por favor intenta de nuevo o escríbenos por WhatsApp.",
        icon: <AlertCircle className="h-5 w-5 text-red-600" />,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handlePhoneInput = (e: React.FormEvent<HTMLInputElement>) => {
    // Elimina cualquier caracter que no sea número
    e.currentTarget.value = e.currentTarget.value.replace(/[^0-9]/g, '');
  };

  return (
    <section id="contacto" className="bg-muted/40 py-16" aria-labelledby="contact-heading">
      <div className="container rounded-section border border-border/80 bg-white/90 p-6 shadow-sheet md:p-12">
        <div className="grid gap-8 lg:grid-cols-[0.55fr_0.45fr]">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#06142e] via-[#0b1c38] to-[#0d1d3b] p-6 text-white md:p-10">
            <Image
              src="/logos/Indeminzaciones-abogados_logo_arbol_dorad0.png"
              alt="Símbolo del despacho"
              fill
              className="object-contain opacity-20"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="relative space-y-6">
              <div className="space-y-3">
                <p className="text-sm font-semibold uppercase tracking-section text-white/70">Información de contacto</p>
                <h2 id="contact-heading" className="text-2xl font-semibold md:text-4xl">
                  Cuéntanos tu caso y recibe una ruta clara para defender lo que te corresponde
                </h2>
                <p className="text-sm text-white/80 md:text-base">
                  Cobertura nacional en todo el territorio colombiano. Atendemos presencial, virtual o vía escrita. Respondemos
                  en menos de un día hábil con pasos concretos, tiempos estimados y escenarios de negociación.
                </p>
              </div>
              <div className="grid gap-4 rounded-2xl bg-white/10 p-5 text-sm">
                <div>
                  <p className="text-white/70">Correo</p>
                  <a className="font-semibold text-accent" href="mailto:contacto@indemnizacionesabogados.com">
                    contacto@indemnizacionesabogados.com
                  </a>
                </div>
                <div>
                  <p className="text-white/70">WhatsApp</p>
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-accent underline-offset-4 hover:underline"
                  >
                    ¡Escríbenos ahora mismo!
                  </a>
                </div>
                <div>
                  <p className="text-white/70">Disponibilidad</p>
                  <p className="font-semibold text-white">Lunes a sábado · 7:00 a. m. - 7:00 p. m.</p>
                </div>
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="space-y-5 rounded-3xl border border-border/60 bg-muted/80 p-6 shadow-inner md:p-8">
            <div>
              <label className="text-sm font-semibold" htmlFor="nombre">
                Nombre completo
              </label>
              <input
                id="nombre"
                name="nombre"
                type="text"
                placeholder="Tu nombre y apellido"
                required
                className="mt-2 w-full rounded-2xl border border-border bg-white/80 px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label className="text-sm font-semibold" htmlFor="telefono">
                Teléfono / WhatsApp
              </label>
              <input
                id="telefono"
                name="telefono"
                type="tel"
                placeholder="+57 300 000 0000"
                required
                onInput={handlePhoneInput}
                className="mt-2 w-full rounded-2xl border border-border bg-white/80 px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label className="text-sm font-semibold" htmlFor="ciudad">
                Ciudad / País
              </label>
              <input
                id="ciudad"
                name="ciudad"
                type="text"
                placeholder="Bogotá / Colombia"
                required
                className="mt-2 w-full rounded-2xl border border-border bg-white/80 px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label className="text-sm font-semibold" htmlFor="email">
                Correo electrónico
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="correo@dominio.com"
                required
                className="mt-2 w-full rounded-2xl border border-border bg-white/80 px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label className="text-sm font-semibold" htmlFor="tipo-caso">
                Tipo de caso
              </label>
              <select
                id="tipo-caso"
                name="tipo-caso"
                className="mt-2 w-full rounded-2xl border border-border bg-white/80 px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-primary"
                defaultValue={CASE_TYPES[0].value}
              >
                {CASE_TYPES.map((type) => (
                  <option key={type.value} value={type.value}>
                    {type.label}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="text-sm font-semibold" htmlFor="descripcion">
                Describe brevemente qué ocurrió o qué necesitas saber
              </label>
              <textarea
                id="descripcion"
                name="descripcion"
                rows={4}
                required
                className="mt-2 w-full rounded-2xl border border-border bg-white/80 px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div className="flex items-start gap-2 text-xs text-muted-foreground">
              <input
                id="aviso"
                name="aviso"
                type="checkbox"
                required
                className="mt-1 h-4 w-4 rounded border-border text-primary focus:ring-2 focus:ring-primary"
              />
              <label htmlFor="aviso">
                Acepto el aviso de privacidad y autorizo el tratamiento confidencial de mis datos para recibir asesoría legal.
              </label>
            </div>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-2xl bg-[linear-gradient(135deg,#c8a033,#f9d423)] text-foreground shadow-cta-primary disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Enviando...
                </>
              ) : (
                "Enviar y recibir asesoría"
              )}
            </Button>
            <p className="text-xs text-muted-foreground">
              Al enviar el formulario aceptas nuestra Política de Tratamiento de Datos Personales y el uso de tu información
              para brindarte asesoramiento.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
