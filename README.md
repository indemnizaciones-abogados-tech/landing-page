# Organización Jurídica Indemnizaciones Abogados

Sitio web oficial para **Indemnizaciones Abogados**, una firma especializada en accidentes de tránsito, responsabilidad civil e indemnizaciones.

Este proyecto es una landing page moderna, rápida y optimizada para SEO, diseñada para convertir visitantes en clientes potenciales a través de una experiencia de usuario clara y profesional.

## 🚀 Tecnologías

Este proyecto está construido con un stack tecnológico moderno enfocado en rendimiento y mantenibilidad:

- **[Next.js 14](https://nextjs.org/)**: Framework de React para producción (App Router).
- **[TypeScript](https://www.typescriptlang.org/)**: Tipado estático para un código más robusto.
- **[Tailwind CSS](https://tailwindcss.com/)**: Framework de utilidades para un diseño rápido y responsivo.
- **[Lucide React](https://lucide.dev/)**: Iconos ligeros y consistentes.
- **[pnpm](https://pnpm.io/)**: Gestor de paquetes eficiente.

## 🛠️ Requisitos Previos

Asegúrate de tener instalado:

- [Node.js](https://nodejs.org/) (versión 18 o superior recomendada)
- [pnpm](https://pnpm.io/installation) (versión 8+)

## 💻 Instalación y Desarrollo

1.  **Clona el repositorio:**

    ```bash
    git clone <url-del-repositorio>
    cd indemnizaciones-abogados
    ```

2.  **Instala las dependencias:**

    ```bash
    pnpm install
    ```

3.  **Configura las variables de entorno:**

    Copia el archivo de ejemplo y configura tus propias variables (si es necesario).
    
    ```bash
    cp .env.example .env
    ```

4.  **Inicia el servidor de desarrollo:**

    ```bash
    pnpm dev
    ```

    Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver la aplicación.

## 🏗️ Comandos Disponibles

- `pnpm dev`: Inicia el servidor de desarrollo.
- `pnpm build`: Crea la versión optimizada para producción.
- `pnpm start`: Inicia la aplicación en modo producción (requiere `build` previo).
- `pnpm lint`: Ejecuta el linter para mantener la calidad del código.

## 📁 Estructura del Proyecto

A continuación se detalla la organización de los directorios clave, siguiendo las mejores prácticas de Next.js App Router:

```
.
├── app/                        # Rutas y páginas de la aplicación
│   ├── layout.tsx              # Layout raíz (fuentes, metadatos globales)
│   ├── page.tsx                # Página de inicio
│   └── [ruta]/                 # Páginas legales (términos, política)
├── src/
│   ├── components/
│   │   ├── sections/           # Secciones completas (Hero, Footer, Contacto)
│   │   └── ui/                 # Componentes atómicos reutilizables (Botones, Inputs)
│   ├── lib/                    # Utilidades y funciones auxiliares (cn, validaciones)
│   └── types/                  # Definiciones de tipos TypeScript (si aplica)
├── public/                     # Archivos estáticos
│   └── logos/                  # Assets de marca
└── tailwind.config.ts          # Configuración del sistema de diseño
```

## 📄 Créditos

**Desarrollado por [JALM Tech](https://jalmtech.com)**.

Este software es propiedad de **Organización Jurídica Indemnizaciones Abogados**. Todos los derechos reservados.
