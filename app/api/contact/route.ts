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
        <h2>Nuevo contacto desde la web</h2>
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Teléfono:</strong> ${telefono}</p>
        <p><strong>Ciudad:</strong> ${ciudad || 'No especificada'}</p>
        <p><strong>Tipo de Caso:</strong> ${tipoCasoLabel}</p>
        <p><strong>Mensaje:</strong></p>
        <blockquote style="background: #f9f9f9; padding: 10px; border-left: 4px solid #ccc;">
          ${mensaje}
        </blockquote>
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
