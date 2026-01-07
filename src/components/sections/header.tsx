'use client';

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, PhoneCall, X } from "lucide-react";
import { cn } from "@/src/lib/utils";

const navItems = [
  { label: "Quienes somos", href: "#confianza" },
  { label: "Áreas de práctica", href: "#servicios" },
  { label: "Historias reales", href: "#historias" },
  { label: "Contáctanos", href: "#contacto" },
];

interface SiteHeaderProps {
  hideNav?: boolean;
}

export function SiteHeader({ hideNav = false }: SiteHeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/50 bg-background/90 backdrop-blur-xl">
      <div className="container flex items-center justify-between gap-3 py-3 md:py-4">
        <Link href="/" className="flex flex-1 items-center gap-3" onClick={closeMenu}>
          <Image
            src="/logos/Indeminzaciones-abogados_logo_arbol_ocre_texto.png"
            alt="Organización Jurídica Indemnizaciones Abogados"
            width={130}
            height={40}
            priority
            className="h-10 w-auto"
          />
          <div className="text-left leading-tight">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-muted-foreground">
              Organización jurídica
            </p>
            <p className="text-lg font-semibold tracking-wide text-foreground">
              Indemnizaciones Abogados
            </p>
          </div>
        </Link>

        {!hideNav && (
          <div className="hidden items-center rounded-full border border-border/70 bg-surface px-6 py-2 text-sm font-semibold text-muted-foreground shadow-card-soft lg:flex">
            <nav aria-label="Menú principal" className="flex items-center gap-5">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="transition hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-2"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        )}

        {!hideNav && (
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border text-foreground transition hover:border-primary hover:text-primary lg:hidden"
              onClick={toggleMenu}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        )}
      </div>

      {!hideNav && (
        <div
          id="mobile-menu"
          aria-hidden={!isMenuOpen}
          className={cn(
            "lg:hidden overflow-hidden transition-[max-height,opacity] duration-200",
            isMenuOpen ? "max-h-mobile-menu opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <div className="border-t border-border/50 bg-background px-5 pb-6 pt-4 shadow-lg">
            <nav className="flex flex-col gap-4 text-base font-semibold text-foreground" aria-label="Menú móvil">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className="rounded-2xl border border-transparent px-4 py-2 transition hover:border-primary/40 hover:bg-muted"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <Link
              href="#contacto"
              onClick={closeMenu}
              className="mt-4 flex items-center justify-center rounded-full bg-[linear-gradient(135deg,#c8a033,#f9d423)] px-4 py-3 text-base font-semibold text-foreground shadow-cta-primary transition hover:brightness-110"
            >
              <PhoneCall className="mr-2 h-5 w-5" aria-hidden="true" />
              Hablemos ahora
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
