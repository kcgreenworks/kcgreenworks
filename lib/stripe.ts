import Stripe from "stripe";

// Cliente de Stripe creado bajo demanda: así el build no falla
// cuando STRIPE_SECRET_KEY todavía no está configurada.
let client: Stripe | null = null;

export function getStripe() {
  if (!client) {
    const key = process.env.STRIPE_SECRET_KEY;
    if (!key) {
      throw new Error("STRIPE_SECRET_KEY no está configurada.");
    }
    client = new Stripe(key);
  }
  return client;
}
