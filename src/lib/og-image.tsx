import { ImageResponse } from "next/og";

type Size = {
  width: number;
  height: number;
};

const highlights = [
  "Responsabilidad civil y del Estado",
  "Derecho médico y seguros",
  "Accidentes laborales e indemnizaciones",
];

const metrics = [
  { label: "Casos liderados", value: "+480" },
  { label: "Cobertura", value: "Colombia" },
  { label: "Respuesta inicial", value: "< 2h" },
];

export function generateOgImage(size: Size) {
  const { width, height } = size;
  return new ImageResponse(
    (
      <div
        style={{
          width: `${width}px`,
          height: `${height}px`,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "stretch",
          padding: "72px",
          background: "linear-gradient(135deg,#030f21 0%,#0b1c35 60%,#152f54 100%)",
          color: "#f5f7fb",
          fontFamily: "Inter, 'Segoe UI', system-ui, -apple-system, sans-serif",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: "0px",
            backgroundImage:
              "radial-gradient(circle at 20% 20%, rgba(200,160,51,0.18), transparent 45%), radial-gradient(circle at 80% 0%, rgba(20,120,255,0.15), transparent 35%)",
            opacity: 0.9,
          }}
        />
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            gap: "24px",
            flexBasis: "60%",
            zIndex: 1,
          }}
        >
          <div
            style={{
              textTransform: "uppercase",
              letterSpacing: "0.4em",
              fontSize: "18px",
              color: "rgba(245,247,251,0.75)",
            }}
          >
            Indeminzaciones Abogados
          </div>
          <h1
            style={{
              fontSize: "64px",
              lineHeight: 1.05,
              fontWeight: 700,
              margin: 0,
            }}
          >
            Protegemos cada caso crítico de responsabilidad civil y seguros.
          </h1>
          <p
            style={{
              fontSize: "26px",
              lineHeight: 1.4,
              color: "rgba(245,247,251,0.9)",
              margin: 0,
            }}
          >
            Firma boutique colombiana experta en responsabilidad civil, derecho médico y negociación con aseguradoras.
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              fontSize: "22px",
            }}
          >
            {highlights.map((item) => (
              <div key={item} style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <div
                  style={{
                    width: "10px",
                    height: "10px",
                    borderRadius: "999px",
                    backgroundColor: "#c8a033",
                  }}
                />
                <span>{item}</span>
              </div>
            ))}
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              borderRadius: "999px",
              padding: "12px 28px",
              background:
                "linear-gradient(135deg,rgba(200,160,51,0.95) 0%, rgba(249,212,35,0.9) 100%)",
              color: "#0f172a",
              fontWeight: 600,
              fontSize: "22px",
              marginTop: "12px",
            }}
          >
            Agenda una evaluación confidencial · +57 305 256 6811
          </div>
        </div>
        <div
          style={{
            position: "relative",
            flexBasis: "34%",
            display: "flex",
            flexDirection: "column",
            gap: "18px",
            padding: "32px",
            borderRadius: "32px",
            border: "1px solid rgba(255,255,255,0.2)",
            background: "rgba(3,12,28,0.6)",
            zIndex: 1,
          }}
        >
          <h2
            style={{
              textTransform: "uppercase",
              fontSize: "18px",
              letterSpacing: "0.3em",
              color: "rgba(245,247,251,0.75)",
              margin: 0,
            }}
          >
            Métricas clave
          </h2>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "12px",
            }}
          >
            {metrics.map((metric) => (
              <div
                key={metric.label}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  borderBottom: "1px solid rgba(255,255,255,0.15)",
                  paddingBottom: "8px",
                  fontSize: "22px",
                }}
              >
                <span style={{ color: "rgba(245,247,251,0.7)" }}>{metric.label}</span>
                <strong style={{ fontWeight: 700, color: "#f5f7fb" }}>{metric.value}</strong>
              </div>
            ))}
          </div>
          <div
            style={{
              marginTop: "24px",
              fontSize: "20px",
              lineHeight: 1.4,
              color: "rgba(245,247,251,0.85)",
            }}
          >
            Defensa estratégica con peritajes médicos, negociación directa con aseguradoras y presencia en juzgados.
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "8px",
              marginTop: "auto",
            }}
          >
            <span style={{ fontSize: "18px", color: "rgba(245,247,251,0.7)" }}>Contacto inmediato</span>
            <strong style={{ fontSize: "26px" }}>contacto@indeminzaciones.com</strong>
            <strong style={{ fontSize: "26px" }}>+57 305 256 6811</strong>
          </div>
        </div>
      </div>
    ),
    {
      width,
      height,
    }
  );
}
