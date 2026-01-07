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
        <Link href="/" className="flex items-center gap-3" onClick={closeMenu}>
          <Image
            src="/logos/Indeminzaciones-abogados_logo_arbol_ocre.png"
            alt="Organización Jurídica Indemnizaciones Abogados"
            width={48}
            height={48}
            priority
            className="h-12 w-auto"
          />
        </Link>

        {!hideNav && (
          <div className="flex items-center gap-6">
            <div className="hidden items-center text-sm font-medium text-muted-foreground lg:flex">
              <nav aria-label="Menú principal" className="flex items-center gap-8">
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

            <Link
              href="#contacto"
              className="hidden items-center justify-center rounded-full bg-[linear-gradient(135deg,#c8a033,#f9d423)] px-6 py-2.5 text-sm font-semibold text-foreground shadow-cta-primary transition hover:brightness-110 lg:inline-flex"
            >
              Solicitar Consulta
            </Link>

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
              Solicitar Consulta
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
