import Link from "next/link";
import { directBooks, getDirectBook, isBundleSlug } from "@/lib/books";
import {
  deliveryEmailAlreadySent,
  sendDeliveryEmail,
} from "@/lib/delivery-email";
import { getStripe } from "@/lib/stripe";

export const dynamic = "force-dynamic";

export const metadata = {
  alternates: { canonical: "https://kcgreenworks.com/shop/gracias" },
};

export default async function GraciasPage({
  searchParams,
}: {
  searchParams: Promise<{ session_id?: string }>;
}) {
  const { session_id: sessionId } = await searchParams;

  let book = null;
  let bundle = false;
  let buyerEmail: string | null = null;
  if (sessionId) {
    try {
      const stripe = getStripe();
      const session = await stripe.checkout.sessions.retrieve(sessionId);
      if (
        session.payment_status === "paid" ||
        session.payment_status === "no_payment_required"
      ) {
        bundle = isBundleSlug(session.metadata?.book);
        book = getDirectBook(session.metadata?.book);
        buyerEmail =
          session.customer_details?.email || session.customer_email || null;

        // Entrega por email (decisión de Kike, 2026-11-25): esta página
        // solo da las gracias y avisa; los enlaces de descarga viajan en
        // el email. Se envía una sola vez por compra.
        if (buyerEmail && !(await deliveryEmailAlreadySent(sessionId))) {
          const baseUrl = (
            process.env.NEXT_PUBLIC_BASE_URL || "https://kcgreenworks.com"
          ).replace(/\/$/, "");
          await sendDeliveryEmail({
            to: buyerEmail,
            sessionId,
            sessionBookSlug: session.metadata?.book,
            baseUrl,
          });
        }
      }
    } catch {
      book = null;
      bundle = false;
    }
  }

  const purchased = bundle ? directBooks : book ? [book] : [];

  return (
    <main className="min-h-screen bg-[#f4f1e8] px-6 py-12 text-[#1f2a1f]">
      <section className="mx-auto max-w-3xl">
        {purchased.length > 0 ? (
          <div className="rounded-3xl border border-[#d8d2c3] bg-white p-10 shadow-sm">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-green-800">
              KC GREENWORKS
            </p>
            <h1 className="text-4xl font-bold leading-tight">
              ¡Gracias por tu compra!
            </h1>
            <p className="mt-5 text-lg leading-8 text-[#4b5a4b]">
              Tu pago se confirmó.
              {buyerEmail ? (
                <>
                  {" "}
                  Te enviamos los enlaces de descarga a{" "}
                  <strong>{buyerEmail}</strong>.
                </>
              ) : (
                <> Te enviamos los enlaces de descarga a tu email.</>
              )}
            </p>
            <div className="mt-8">
              <p className="text-sm font-semibold uppercase tracking-wide text-green-800">
                Tu compra
              </p>
              <ul className="mt-3 space-y-2">
                {purchased.map((b) => (
                  <li
                    key={b.slug}
                    className="border-b border-[#eee9db] pb-2 text-lg font-semibold"
                  >
                    {b.title}
                    <span className="ml-2 text-sm font-normal text-[#4b5a4b]">
                      EPUB + PDF
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <p className="mt-6 text-sm leading-6 text-[#4b5a4b]">
              Revisa tu bandeja de entrada y también la carpeta de spam. El
              asunto del email es: «Tus libros de KC Greenworks — enlaces de
              descarga». Si no te llega en unos minutos, escríbenos por la
              página de contacto y te lo resolvemos.
            </p>
            <Link
              href="/shop/books"
              className="mt-8 inline-flex rounded-2xl bg-green-800 px-6 py-3 font-semibold text-white transition hover:bg-green-900"
            >
              Volver a los libros
            </Link>
          </div>
        ) : (
          <div className="rounded-3xl border border-[#d8d2c3] bg-white p-10 shadow-sm">
            <h1 className="text-4xl font-bold leading-tight">
              No pudimos confirmar tu pago
            </h1>
            <p className="mt-5 text-lg leading-8 text-[#4b5a4b]">
              Si completaste una compra y ves este mensaje, espera un minuto y
              recarga la página. Si el problema sigue, escríbenos y lo
              revisamos contigo.
            </p>
            <Link
              href="/shop/books"
              className="mt-8 inline-flex rounded-2xl bg-green-800 px-6 py-3 font-semibold text-white transition hover:bg-green-900"
            >
              Volver a los libros
            </Link>
          </div>
        )}
      </section>
    </main>
  );
}
