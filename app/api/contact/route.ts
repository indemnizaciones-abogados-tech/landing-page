import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { CASE_TYPES } from '@/src/lib/constants';

const resend = new Resend(process.env.API_RESEND);

export async function POST(request: Request) {
  try {
    const { nombre, email, telefono, ciudad, tipoCaso, mensaje } = await request.json();

    // Validación básica
    if (!nombre || !email || !telefono || !mensaje) {
      return NextResponse.json(
        { error: 'Faltan campos obligatorios' },
        { status: 400 }
      );
    }

    const tipoCasoMap = CASE_TYPES.reduce((acc, curr) => {
      acc[curr.value] = curr.label;
      return acc;
    }, {} as Record<string, string>);

    const tipoCasoLabel = tipoCasoMap[tipoCaso] || tipoCaso;

    const adminEmail = process.env.CONTACT_RECIPIENT;

    // 1. Correo al Administrador
    await resend.emails.send({
      from: 'Contacto Web <no-reply@indemnizacionesabogados.com>',
      to: adminEmail as string, // Asegurar que no sea undefined
      subject: `Nueva solicitud de contacto: ${nombre} - ${tipoCasoLabel}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: 'Arial', sans-serif; background-color: #f4f4f5; padding: 20px; }
              .card { background: #ffffff; max-width: 600px; margin: 0 auto; border-radius: 8px; border: 1px solid #e2e8f0; overflow: hidden; }
              .header { background: #0f172a; padding: 15px 20px; color: #fff; font-size: 16px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; }
              .content { padding: 25px; }
              .field { margin-bottom: 20px; }
              .label { font-size: 12px; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px; font-weight: 600; margin-bottom: 5px; }
              .value { font-size: 16px; color: #0f172a; font-weight: 500; }
              .message-box { background: #f8fafc; padding: 15px; border-radius: 6px; border-left: 4px solid #c8a033; margin-top: 10px; font-size: 15px; line-height: 1.6; color: #334155; }
              .footer { border-top: 1px solid #e2e8f0; padding: 15px; background: #f8fafc; text-align: center; color: #94a3b8; font-size: 12px; }
            </style>
          </head>
          <body>
            <div class="card">
              <div class="header">Nueva solicitud de contacto desde laß Web</div>
              <div class="content">
                <div class="field">
                  <div class="label">Nombre del solicitante</div>
                  <div class="value">${nombre}</div>
                </div>
                
                <table style="width: 100%; border-collapse: collapse;">
                  <tr>
                    <td style="padding-right: 10px; vertical-align: top; width: 50%;">
                      <div class="field">
                        <div class="label">Teléfono</div>
                        <div class="value">${telefono}</div>
                      </div>
                    </td>
                    <td style="padding-left: 10px; vertical-align: top; width: 50%;">
                      <div class="field">
                        <div class="label">Ciudad</div>
                        <div class="value">${ciudad || 'No especificada'}</div>
                      </div>
                    </td>
                  </tr>
                </table>

                <div class="field">
                  <div class="label">Correo Electrónico</div>
                  <div class="value"><a href="mailto:${email}" style="color: #0f172a; text-decoration: none;">${email}</a></div>
                </div>

                <div class="field">
                  <div class="label">Tipo de Caso</div>
                  <div class="value" style="color: #c8a033; font-weight: 700;">${tipoCasoLabel}</div>
                </div>

                <div class="field">
                  <div class="label">Mensaje del usuario</div>
                  <div class="message-box">${mensaje}</div>
                </div>
              </div>
              <div class="footer">
                Recibido el ${new Date().toLocaleDateString('es-CO', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' })}
              </div>
            </div>
          </body>
        </html>
      `,
    });

    // 2. Correo de Confirmación al Usuario (Diseño Premium)
    await resend.emails.send({
      from: 'Indemnizaciones Abogados <no-reply@indemnizacionesabogados.com>',
      to: email,
      subject: 'Confirmación de solicitud - Organización Jurídica Indemnizaciones Abogados',
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: 'Arial', sans-serif; background-color: #f4f4f5; margin: 0; padding: 0; }
              .container { max-width: 600px; margin: 40px auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
              .header { background-color: #0f172a; padding: 40px 20px; text-align: center; }
              .logo-text { color: #ffffff; font-size: 24px; font-weight: bold; text-transform: uppercase; letter-spacing: 2px; }
              .content { padding: 40px 30px; color: #334155; line-height: 1.6; }
              .h1 { color: #0f172a; font-size: 22px; margin-bottom: 20px; font-weight: 700; }
              .highlight { color: #c8a033; font-weight: 600; }
              .footer { background-color: #f8fafc; padding: 20px; text-align: center; font-size: 12px; color: #94a3b8; border-top: 1px solid #e2e8f0; }
              .button { display: inline-block; background-color: #c8a033; color: #0f172a; padding: 12px 24px; border-radius: 6px; text-decoration: none; font-weight: 700; margin-top: 20px; }
              .details-box { background-color: #f1f5f9; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #c8a033; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <div class="logo-text">Indemnizaciones Abogados</div>
              </div>
              <div class="content">
                <div class="h1">¡Hola, ${nombre.split(' ')[0]}!</div>
                <p>Hemos recibido tu solicitud correctamente. Nuestro equipo de abogados especialistas ya está procesando tu información.</p>
                
                <div class="details-box">
                  <p style="margin: 0; font-weight: bold; color: #475569;">Referencia de tu caso:</p>
                  <p style="margin: 5px 0 0 0; color: #0f172a;">${tipoCasoLabel}</p>
                </div>

                <p>Nos pondremos en contacto contigo a la brevedad posible a través del número <strong>${telefono}</strong> o este correo electrónico para coordinar una valoración detallada.</p>
                
                <p>Si tienes información adicional urgente, puedes escribirnos directamente por WhatsApp:</p>
                
                <center>
                  <a href="https://wa.me/573052566811" class="button" style="color: #0f172a !important;">Contactar por WhatsApp</a>
                </center>
              </div>
              <div class="footer">
                <p>© ${new Date().getFullYear()} Organización Jurídica Indemnizaciones Abogados.</p>
                <p>Medellín, Colombia · Todos los derechos reservados.</p>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error enviando correo:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor al enviar el correo' },
      { status: 500 }
    );
  }
}
