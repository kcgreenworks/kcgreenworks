import { list, put } from "@vercel/blob";
import {
  directBooks,
  getDirectBook,
  isBundleSlug,
  type DirectBook,
} from "@/lib/books";

// Email de entrega: tras el pago, el comprador recibe por correo los
// enlaces de descarga de lo que compró (decisión de Kike, 2026-11-25:
// la página de gracias solo avisa; los enlaces viven en el email).
// Se envía una sola vez por sesión de checkout: una marca privada en
// Vercel Blob registra las sesiones ya atendidas.

export const DELIVERY_EMAIL_SUBJECT =
  "Tus libros de KC Greenworks — enlaces de descarga";

function downloadUrl(
  baseUrl: string,
  sessionId: string,
  slug: string,
  format: "epub" | "pdf",
) {
  return `${baseUrl}/api/download?session_id=${encodeURIComponent(sessionId)}&slug=${slug}&format=${format}`;
}

export async function deliveryEmailAlreadySent(sessionId: string) {
  try {
    const { blobs } = await list({ prefix: `emailed/${sessionId}` });
    return blobs.length > 0;
  } catch {
    return false;
  }
}

async function markDeliveryEmailSent(sessionId: string) {
  await put(`emailed/${sessionId}.txt`, new Date().toISOString(), {
    access: "private",
    addRandomSuffix: false,
    allowOverwrite: true,
  });
}

function booksForSession(sessionBookSlug: string | null | undefined) {
  if (isBundleSlug(sessionBookSlug)) return directBooks;
  const book = getDirectBook(sessionBookSlug);
  return book ? [book] : [];
}

function buildHtml(
  books: DirectBook[],
  sessionId: string,
  baseUrl: string,
  bundle: boolean,
) {
  const rows = books
    .map(
      (book) => `
      <div style="border-bottom:1px solid #eee9db;padding:16px 0;">
        <p style="margin:0 0 10px;font-size:17px;font-weight:bold;color:#19331f;">${book.title}</p>
        <a href="${downloadUrl(baseUrl, sessionId, book.slug, "epub")}" style="display:inline-block;background:#166534;color:#ffffff;text-decoration:none;font-weight:bold;padding:10px 22px;border-radius:12px;margin-right:8px;">EPUB</a>
        <a href="${downloadUrl(baseUrl, sessionId, book.slug, "pdf")}" style="display:inline-block;border:2px solid #166534;color:#166534;text-decoration:none;font-weight:bold;padding:8px 22px;border-radius:12px;">PDF</a>
      </div>`,
    )
    .join("");

  return `
  <div style="background:#f4f1e8;padding:24px;font-family:Arial,Helvetica,sans-serif;">
    <div style="max-width:560px;margin:0 auto;background:#ffffff;border:1px solid #d8d2c3;border-radius:16px;padding:32px;">
      <p style="margin:0;font-size:12px;font-weight:bold;letter-spacing:2px;color:#166534;">KC GREENWORKS</p>
      <h1 style="margin:10px 0 0;font-size:26px;color:#19331f;">¡Gracias por tu compra!</h1>
      <p style="font-size:15px;line-height:1.6;color:#4b5a4b;">
        Tu pago se confirmó. Aquí tienes ${
          bundle
            ? "tu <strong>Paquete Completo</strong>: los 5 libros en EPUB y PDF"
            : "tu libro en los dos formatos: EPUB para tu app de lectura y PDF para leer o imprimir donde quieras"
        }.
      </p>
      ${rows}
      <p style="font-size:13px;line-height:1.6;color:#4b5a4b;margin-top:18px;">
        Guarda este email: desde aquí puedes volver a descargar tus libros
        cuando los necesites. Si algo no descarga bien, escríbenos por la
        página de contacto de kcgreenworks.com y te lo resolvemos.
      </p>
    </div>
  </div>`;
}

export async function sendDeliveryEmail(params: {
  to: string | null | undefined;
  sessionId: string;
  sessionBookSlug: string | null | undefined;
  baseUrl: string;
}): Promise<boolean> {
  const apiKey = process.env.BREVO_API_KEY;
  const senderEmail = process.env.SENDER_EMAIL;
  const { to, sessionId, sessionBookSlug, baseUrl } = params;
  if (!apiKey || !senderEmail || !to) return false;

  const books = booksForSession(sessionBookSlug);
  if (books.length === 0) return false;

  try {
    const response = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "api-key": apiKey,
        "content-type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({
        sender: { name: "KC Greenworks", email: senderEmail },
        to: [{ email: to }],
        subject: DELIVERY_EMAIL_SUBJECT,
        htmlContent: buildHtml(
          books,
          sessionId,
          baseUrl,
          isBundleSlug(sessionBookSlug),
        ),
      }),
    });

    if (!response.ok) {
      console.error(
        "Brevo rechazó el email de entrega:",
        response.status,
        await response.text(),
      );
      return false;
    }

    await markDeliveryEmailSent(sessionId);
    return true;
  } catch (error) {
    console.error("Error enviando el email de entrega:", error);
    return false;
  }
}
