// Catálogo de libros en venta directa (Stripe).
// Los archivos de entrega viven en Vercel Blob (privado) bajo libros/<slug>.epub y libros/<slug>.pdf.
// El ID de precio de Stripe de cada libro se lee de su variable de entorno,
// así los IDs se configuran sin tocar código.

export type DirectBook = {
  slug: string;
  title: string;
  priceEnv: string;
  epubPath: string;
  pdfPath: string;
};

export const directBooks: DirectBook[] = [
  {
    slug: "yerba-buena",
    title: "El Arte de Cultivar Yerba Buena",
    priceEnv: "STRIPE_PRICE_YERBA_BUENA",
    epubPath: "libros/yerba-buena.epub",
    pdfPath: "libros/yerba-buena.pdf",
  },
  {
    slug: "cosecha-roja",
    title: "Cosecha Roja",
    priceEnv: "STRIPE_PRICE_COSECHA_ROJA",
    epubPath: "libros/cosecha-roja.epub",
    pdfPath: "libros/cosecha-roja.pdf",
  },
  {
    slug: "lombricultura-en-casa",
    title: "Lombricultura en Casa",
    priceEnv: "STRIPE_PRICE_LOMBRICULTURA",
    epubPath: "libros/lombricultura-en-casa.epub",
    pdfPath: "libros/lombricultura-en-casa.pdf",
  },
  {
    slug: "la-lombriz-al-descubierto",
    title: "La Lombriz al Descubierto",
    priceEnv: "STRIPE_PRICE_LOMBRIZ",
    epubPath: "libros/la-lombriz-al-descubierto.epub",
    pdfPath: "libros/la-lombriz-al-descubierto.pdf",
  },
  {
    slug: "acuaponia-guia-completa",
    title: "Acuaponía: La Guía Completa",
    priceEnv: "STRIPE_PRICE_ACUAPONIA",
    epubPath: "libros/acuaponia-guia-completa.epub",
    pdfPath: "libros/acuaponia-guia-completa.pdf",
  },
];

export function getDirectBook(slug: string | null | undefined) {
  if (!slug) return null;
  return directBooks.find((book) => book.slug === slug) ?? null;
}

export function getPriceId(book: DirectBook) {
  return process.env[book.priceEnv] || null;
}

// Paquete completo: un solo producto de Stripe que entrega los 5 libros.
export const BUNDLE_SLUG = "paquete-completo";
export const BUNDLE_TITLE = "Paquete Completo — los 5 libros";
export const BUNDLE_PRICE_ENV = "STRIPE_PRICE_PAQUETE";

export function isBundleSlug(slug: string | null | undefined) {
  return slug === BUNDLE_SLUG;
}

// Precio de Stripe para un slug comprable (libro individual o paquete).
export function getPriceIdForSlug(slug: string | null | undefined) {
  if (!slug) return null;
  if (isBundleSlug(slug)) return process.env[BUNDLE_PRICE_ENV] || null;
  const book = getDirectBook(slug);
  return book ? getPriceId(book) : null;
}

// ¿La compra de la sesión (metadata.book) autoriza descargar este libro?
export function sessionCoversBook(
  sessionBookSlug: string | null | undefined,
  requestedSlug: string,
) {
  if (sessionBookSlug === requestedSlug) return true;
  return isBundleSlug(sessionBookSlug) && getDirectBook(requestedSlug) !== null;
}
