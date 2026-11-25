import { NextResponse } from "next/server";
import { getPriceIdForSlug } from "@/lib/books";
import { getStripe } from "@/lib/stripe";

// Crea la sesión de Stripe Checkout (con Managed Payments: Stripe es el
// vendedor oficial y maneja impuestos, fraude y disputas) y redirige
// al comprador a la página de pago de Stripe.
export async function POST(request: Request) {
  const baseUrl = (
    process.env.NEXT_PUBLIC_BASE_URL || new URL(request.url).origin
  ).replace(/\/$/, "");

  try {
    const formData = await request.formData();
    const slug = String(formData.get("slug") || "");
    const priceId = getPriceIdForSlug(slug);

    if (!priceId) {
      return NextResponse.redirect(`${baseUrl}/shop/books?compra=error`, 303);
    }

    const stripe = getStripe();
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [{ price: priceId, quantity: 1 }],
      managed_payments: { enabled: true },
      allow_promotion_codes: true,
      metadata: { book: slug },
      success_url: `${baseUrl}/shop/gracias?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${baseUrl}/shop/books?compra=cancelada`,
    });

    if (!session.url) {
      return NextResponse.redirect(`${baseUrl}/shop/books?compra=error`, 303);
    }

    return NextResponse.redirect(session.url, 303);
  } catch (error) {
    console.error("Error creando la sesión de checkout:", error);
    return NextResponse.redirect(`${baseUrl}/shop/books?compra=error`, 303);
  }
}
