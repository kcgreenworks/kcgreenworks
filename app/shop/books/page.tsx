import Link from "next/link";
import Image from "next/image";

const books = [
  {
    title:
      "LOMBRICULTURA EN CASA: COMO CONSTRUI MI PROPIO SISTEMA DE VERMICOMPOSTAJE DESDE CERO",
    description:
      "Convierte tus desperdicios de cocina en fertilizante natural. Aprende cómo construir, mantener y aprovechar un sistema de lombricultura casera desde cero, aunque nunca hayas hecho compost antes.",
    image: "/images/shop/book1.jpg",
    link: "https://www.amazon.com/dp/B0H24D725B",
  },
  {
    title:
      "Acuaponía: La Guía Completa — Desde Cero hasta Tu Primera Cosecha",
    description:
      "Una guía práctica basada en experiencia real para construir sistemas acuapónicos, entender peces, bacterias, plantas, agua y ciclo del nitrógeno hasta lograr tu primera cosecha.",
    image: "/images/shop/book2.jpg",
    link: "https://a.co/d/0gRcplww",
  },
  {
    title:
      "La Lombriz al Descubierto: Todo lo que necesitas saber sobre lombricultura",
    description:
      "Guía completa sobre lombricultura práctica: biología, alimentación, reproducción, errores comunes y cómo montar tu primer lombricario en 7 pasos.",
    image: "/images/shop/book3.jpg",
    link: "https://a.co/d/04YEWNq2",
  },
  {
    title:
      "Acuaponía en Casa: La Guía Completa para Construir tu Sistema",
    description:
      "Aprende paso a paso cómo construir un sistema acuapónico funcional en casa. Incluye materiales, diagramas, peces, plantas, ciclo del nitrógeno y ejemplos reales basados en experiencia práctica.",
    image: "/images/shop/book4.jpg",
    link: "https://a.co/d/00LlFNKN",
  },
  {
    title:
      "Peces para Acuaponía: Cómo Elegir, Alimentar y Mantener las Mejores Especies",
    description:
      "Descubre cuáles son los mejores peces para acuaponía, cómo alimentarlos, reproducirlos y mantener un sistema saludable para maximizar la producción de alimentos.",
    image: "/images/shop/book6.jpg",
    link: "https://a.co/d/0dbs9z5j",
  },
];

export default function ShopBooksPage() {
  return (
    <main className="min-h-screen bg-[#f4f1e8] px-6 py-12 text-[#1f2a1f]">
      <section className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-wrap gap-4">
          <Link
            href="/shop"
            className="text-sm font-semibold text-green-800 hover:underline"
          >
            ← Volver al shop
          </Link>
          <Link
            href="/"
            className="text-sm font-semibold text-green-800 hover:underline"
          >
            Volver al inicio
          </Link>
        </div>

        <header className="mb-12">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-green-800">
            KCGREENWORKS SHOP
          </p>
          <h1 className="text-5xl font-bold leading-tight">
            Libros recomendados
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-[#4b5a4b]">
            Guías prácticas para aprender acuaponía, lombricultura y producción
            sostenible desde casa.
          </p>
        </header>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {books.map((book) => (
            <article
              key={book.title}
              className="overflow-hidden rounded-3xl border border-[#d8d2c3] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative flex h-[520px] w-full items-center justify-center bg-[#eef2e8] p-6">
                <Image
                  src={book.image}
                  alt={book.title}
                  fill
                  className="object-contain p-4"
                />
              </div>

              <div className="p-8">
                <h2 className="text-2xl font-bold leading-tight">
                  {book.title}
                </h2>
                <p className="mt-5 text-[17px] leading-8 text-[#4b5a4b]">
                  {book.description}
                </p>
                <a
                  href={book.link}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="mt-8 inline-flex rounded-2xl bg-green-800 px-6 py-3 font-semibold text-white transition hover:bg-green-900"
                >
                  Ver en Amazon
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}