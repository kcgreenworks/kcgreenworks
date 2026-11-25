import { NextResponse } from "next/server";
import { get } from "@vercel/blob";
import { getDirectBook, sessionCoversBook } from "@/lib/books";
import { getStripe } from "@/lib/stripe";

// Entrega del archivo comprado: verifica contra Stripe que la sesión
// esté pagada y que corresponda al libro pedido, y solo entonces sirve
// el archivo desde el almacén privado de Vercel Blob (streaming por el
// servidor; el almacén es privado y no tiene URLs públicas).
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const sessionId = searchParams.get("session_id");
  const format = searchParams.get("format") === "pdf" ? "pdf" : "epub";
  const baseUrl = (
    process.env.NEXT_PUBLIC_BASE_URL || new URL(request.url).origin
  ).replace(/\/$/, "");

  if (!sessionId) {
    return NextResponse.redirect(`${baseUrl}/shop/books`, 303);
  }

  try {
    const stripe = getStripe();
    const session = await stripe.checkout.sessions.retrieve(sessionId);

    if (
      session.payment_status !== "paid" &&
      session.payment_status !== "no_payment_required"
    ) {
      return NextResponse.redirect(`${baseUrl}/shop/books`, 303);
    }

    // Sin slug pedido, se entrega el libro de la sesión; con slug, se
    // verifica que la compra lo cubra (compra individual o paquete).
    const requestedSlug = searchParams.get("slug") || session.metadata?.book;
    const book = getDirectBook(requestedSlug);
    if (!book || !sessionCoversBook(session.metadata?.book, book.slug)) {
      return NextResponse.redirect(`${baseUrl}/shop/books`, 303);
    }

    const pathname = format === "pdf" ? book.pdfPath : book.epubPath;
    const result = await get(pathname, { access: "private" });
    if (!result || result.statusCode !== 200 || !result.stream) {
      return NextResponse.redirect(`${baseUrl}/shop/books`, 303);
    }

    return new Response(result.stream, {
      headers: {
        "Content-Type":
          result.blob.contentType ||
          (format === "pdf" ? "application/pdf" : "application/epub+zip"),
        "Content-Disposition": `attachment; filename="${book.slug}.${format}"`,
      },
    });
  } catch (error) {
    console.error("Error entregando la descarga:", error);
    return NextResponse.redirect(`${baseUrl}/shop/books`, 303);
  }
}
