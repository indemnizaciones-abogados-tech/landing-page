'use client';

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import Link from "next/link";
import { cn } from "@/src/lib/utils";

type Testimonial = {
  name: string;
  case: string;
  quote: string;
  href: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Yerson Orejuela",
    case: "Demanda en contra del Ministerio de Defensa - Ejército Nacional",
    quote:
      "“Recibí mi indemnización gracias al acompañamiento de Organización Jurídica Indemnizaciones Abogados. Estuvieron presentes en todo el proceso.”",
    href: "https://www.instagram.com/indemnizaciones.abogados/",
  },
  {
    name: "Juan José",
    case: "Reclamación ante Seguros Generales Suramericana S.A.",
    quote:
      "“La firma me acompañó durante todo el proceso tras mi accidente de tránsito. Logré cubrir todos los perjuicios económicos y físicos. Los recomiendo.”",
    href: "https://www.instagram.com/indemnizaciones.abogados/",
  },
  {
    name: "Gilberto Ocampo",
    case: "Reclamación contra Axa Colpatria Seguros S.A.",
    quote:
      "“Aunque estuve incapacitado casi cuatro meses, recibí acompañamiento de principio a fin. Gracias al equipo obtuve mi indemnización y confío plenamente en ellos.”",
    href: "https://www.instagram.com/indemnizaciones.abogados/",
  },
];

const AUTO_PLAY_INTERVAL = 5000;

export function CaseStudiesSection() {
  const [index, setIndex] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  const maxIndex = Math.max(testimonials.length - slidesPerView, 0);
  const slideWidth = 100 / slidesPerView;

  useEffect(() => {
    const handleResize = () => {
      if (typeof window === "undefined") {
        return;
      }
      if (window.innerWidth >= 1024) {
        setSlidesPerView(3);
        return;
      }
      if (window.innerWidth >= 768) {
        setSlidesPerView(2);
        return;
      }
      setSlidesPerView(1);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") {
      return undefined;
    }
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);
    const handleMediaChange = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
    };
    if (typeof mediaQuery.addEventListener === "function") {
      mediaQuery.addEventListener("change", handleMediaChange);
      return () => mediaQuery.removeEventListener("change", handleMediaChange);
    }
    mediaQuery.addListener(handleMediaChange);
    return () => mediaQuery.removeListener(handleMediaChange);
  }, []);

  useEffect(() => {
    setIndex((prev) => Math.min(prev, maxIndex));
  }, [maxIndex]);

  useEffect(() => {
    if (prefersReducedMotion || isPaused || maxIndex === 0) {
      return undefined;
    }
    const intervalId = setInterval(() => {
      setIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
    }, AUTO_PLAY_INTERVAL);
    return () => clearInterval(intervalId);
  }, [prefersReducedMotion, isPaused, maxIndex]);

  const pauseAutoPlay = () => {
    setIsPaused(true);
  };

  const resumeAutoPlay = () => {
    if (!prefersReducedMotion) {
      setIsPaused(false);
    }
  };

  const handleManualNav = (direction: "next" | "prev") => {
    if (maxIndex === 0) {
      return;
    }
    pauseAutoPlay();
    setIndex((prev) => {
      if (direction === "next") {
        return prev === maxIndex ? 0 : prev + 1;
      }
      return prev === 0 ? maxIndex : prev - 1;
    });
  };

  const handleIndicatorClick = (indicatorIndex: number) => {
    pauseAutoPlay();
    setIndex(indicatorIndex);
  };

  return (
    <section id="historias" className="py-16" aria-labelledby="case-heading">
      <div className="container space-y-10">
        <div className="max-w-4xl space-y-2 lg:max-w-5xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">Casos de éxito</p>
          <h2 id="case-heading" className="text-2xl font-semibold md:text-4xl">
            Testimonios que respaldan indemnizaciones reales
          </h2>
          <p className="text-base text-muted-foreground md:text-lg">
            Cada historia es pública en Instagram. Haz clic para conocer el contexto completo y validar cómo operamos cada
            reclamación.
          </p>
        </div>
        <div
          className="relative"
          role="region"
          aria-roledescription="Carrusel de testimonios"
          aria-live={isPaused || prefersReducedMotion ? "polite" : "off"}
          aria-label="Testimonios reales de clientes"
          onMouseEnter={pauseAutoPlay}
          onMouseLeave={resumeAutoPlay}
          onFocus={pauseAutoPlay}
          onBlur={resumeAutoPlay}
        >
          <button
            type="button"
            onClick={() => handleManualNav("prev")}
            className="absolute left-0 top-1/2 z-10 hidden -translate-y-1/2 rounded-full border border-border bg-white/80 p-3 text-foreground shadow-md transition hover:border-primary md:flex"
            aria-label="Ver testimonio anterior"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => handleManualNav("next")}
            className="absolute right-0 top-1/2 z-10 hidden -translate-y-1/2 rounded-full border border-border bg-white/80 p-3 text-foreground shadow-md transition hover:border-primary md:flex"
            aria-label="Ver siguiente testimonio"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
          <div className="overflow-hidden">
            <div
              className="flex -mx-2 sm:-mx-3 lg:-mx-4 transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${index * slideWidth}%)` }}
            >
              {testimonials.map((testimonial) => (
                <Link
                  key={testimonial.name}
                  href={testimonial.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Abrir testimonio de ${testimonial.name} en Instagram`}
                  style={{ flexBasis: `${slideWidth}%` }}
                  className="flex h-full flex-shrink-0 px-2 sm:px-3 lg:px-4"
                >
                  <article className="card-surface flex w-full flex-col justify-between rounded-3xl border border-border p-6 text-left shadow-card-strong transition hover:-translate-y-1">
                    <div>
                      <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Quote className="h-6 w-6" />
                      </span>
                      <p className="mt-4 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                        {testimonial.case}
                      </p>
                      <p className="mt-4 text-base text-foreground md:text-lg">{testimonial.quote}</p>
                    </div>
                    <div className="mt-6">
                      <p className="text-base font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">Consulta verificada en Instagram</p>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
          <div className="mt-6 flex justify-center gap-2">
            {Array.from({ length: maxIndex + 1 }).map((_, indicatorIndex) => (
              <button
                key={`indicator-${indicatorIndex}`}
                type="button"
                onClick={() => handleIndicatorClick(indicatorIndex)}
                aria-label={`Ir al caso ${indicatorIndex + 1}`}
                className={cn(
                  "h-2 w-8 rounded-full transition",
                  index === indicatorIndex ? "bg-primary" : "bg-border"
                )}
                aria-current={index === indicatorIndex}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
