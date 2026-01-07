import Link from "next/link";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background py-12 text-sm text-muted-foreground" aria-label="Pie de página">
      <div className="container flex flex-col gap-10">
        {/* Top Section: Branding & Legal */}
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-start">
          {/* Left: Branding */}
          <div className="flex flex-col space-y-1 text-center md:text-left">
            <p className="text-lg font-bold tracking-widest text-foreground uppercase">Organización jurídica</p>
            <p className="text-lg font-bold tracking-widest text-primary uppercase">Indemnizaciones Abogados</p>
          </div>

          {/* Right: Legal Links */}
          <div className="flex flex-col space-y-2 text-center md:text-right">
            <Link href="/politica-tratamiento-datos-personales" className="hover:text-foreground transition-colors">
              Política de tratamiento de datos personales
            </Link>
            <Link href="/terminos-y-condiciones" className="hover:text-foreground transition-colors">
              Términos y condiciones
            </Link>
          </div>
        </div>

        {/* Middle Section: Social Media */}
        <div className="flex justify-center gap-6">
          <Link
            href="https://www.instagram.com/indemnizaciones.abogados/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Instagram className="h-6 w-6" />
          </Link>
          <Link
            href="https://www.linkedin.com/company/indemnizaciones-abogados"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Linkedin className="h-6 w-6" />
          </Link>
          <Link
            href="https://www.facebook.com/indemnizaciones.abogados"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Facebook className="h-6 w-6" />
          </Link>
          <Link
            href="https://www.youtube.com/@indemnizacionesabogados"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Youtube className="h-6 w-6" />
          </Link>
        </div>

        {/* Bottom Section: Copyright & Credits */}
        <div className="flex flex-col items-center gap-2 border-t border-border/40 pt-8 text-center text-xs text-muted-foreground">
          <p>© {currentYear} Todos los derechos reservados.</p>
          <p>
            Desarrollado por{" "}
            <Link
              href="https://www.jalmtech.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-primary hover:underline uppercase"
            >
              JALM TECH
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
