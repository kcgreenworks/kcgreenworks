import Link from "next/link";
import Image from "next/image";

const books = [
  {
    title: "LOMBRICULTURA EN CASA",
    description: "Sistema de vermicompostaje desde cero.",
    image: "/images/shop/book1.jpg",
    link: "https://www.amazon.com/dp/B0H24D725B",
  },
  {
    title: "ACUAPONÍA",
    description: "Desde cero hasta tu primera cosecha.",
    image: "/images/shop/book2.jpg",
    link: "https://a.co/d/0gRcplww",
  },
  {
    title: "LA LOMBRIZ AL DESCUBIERTO",
    description: "Biología, alimentación y lombricultura práctica.",
    image: "/images/shop/book3.jpg",
    link: "https://a.co/d/04YEWNq2",
  },
  {
    title: "ACUAPONÍA EN CASA",
    description:
      "La guía completa para construir tu sistema y producir alimentos en casa.",
    image: "/images/shop/book4.jpg",
    link: "https://a.co/d/00LlFNKN",
  },
  {
    title: "PECES PARA ACUAPONÍA",
    description:
      "Cría, reproducción, alimentación y selección de peces para sistemas acuapónicos.",
    image: "/images/shop/book6.jpg",
    link: "https://a.co/d/0dbs9z5j",
  },
];

const products = [
  {
    title: "AeroGarden",
    description: "Jardín hidropónico interior con luz LED.",
    image: "/images/shop/aerogarden1.jpg",
    link: "https://amzn.to/4e842me",
  },
  {
    title: "Back to the Roots Indoor Aquaponic Garden",
    description:
      "Sistema acuapónico interior de 3 galones con pecera y jardinera.",
    image: "/images/shop/backtotheroots1.jpg",
    link: "https://amzn.to/3RrNBIL",
  },
  {
    title: "Hydroponics Grow System",
    description: "Sistema hidropónico DWC con kit de goteo.",
    image: "/images/shop/hydrogrowsystem5gallon1.jpg",
    link: "https://amzn.to/3Px1q8a",
  },
  {
    title: "Electric Composter",
    description: "Compostera eléctrica de cocina de 4L.",
    image: "/images/shop/eleccompost1.jpg",
    link: "https://amzn.to/4dQU8UC",
  },
  {
    title: "Outdoor Tumbling Composter",
    description: "Compostera giratoria exterior de 43 galones.",
    image: "/images/shop/rotcompost1.jpg",
    link: "https://amzn.to/3Q3rd85",
  },
  {
    title: "Red Wiggler Composting Worms",
    description: "Lombrices rojas para compostaje y suelo vivo.",
    image: "/images/shop/uncleredworms1.jpg",
    link: "https://amzn.to/4fHlK16",
  },
  {
    title: "Rolling Elevated Raised Garden Bed",
    description: "Cama elevada con ruedas para vegetales y hierbas.",
    image: "/images/shop/elevatedraise1.jpg",
    link: "https://amzn.to/4v9WVPN",
  },
  {
    title: "Backpack Sprayer",
    description: "Aspersor de mochila para patio, jardín y control de plagas.",
    image: "/images/shop/backpacksprayer1.jpg",
    link: "https://amzn.to/3PQ8OLU",
  },
  {
    title: "Auto Drip Irrigation System",
    description: "Sistema automático de riego por goteo.",
    image: "/images/shop/bucketdrain1.jpg",
    link: "https://amzn.to/4wQuwzX",
  },
  {
    title: "Outdoor Greenhouse",
    description: "Invernadero portátil para plantas y cultivo exterior.",
    image: "/images/shop/greenhouse1.jpg",
    link: "https://amzn.to/4nVJrET",
  },
  {
    title: "Indoor Hydroponics Growing System",
    description: "Sistema hidropónico interior de 10 pods con luz LED.",
    image: "/images/shop/indoorgarden1.jpg",
    link: "https://amzn.to/3S5XiN0",
  },
];

function CarouselCard({
  item,
  buttonText,
}: {
  item: { title: string; description: string; image: string; link: string };
  buttonText: string;
}) {
  return (
    <div className="w-[210px] shrink-0 overflow-hidden rounded-2xl border border-[#d8d2c3] bg-white shadow-sm md:w-[240px]">
      <div className="relative h-[170px] bg-[#eef2e8]">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-contain p-4"
        />
      </div>

      <div className="p-5">
        <h3 className="min-h-[40px] text-base font-bold leading-snug">
          {item.title}
        </h3>

        <p className="mt-2 min-h-[48px] text-sm leading-6 text-[#4b5a4b]">
          {item.description}
        </p>

        <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="mt-5 inline-flex rounded-xl bg-green-800 px-5 py-3 text-sm font-semibold text-white transition hover:bg-green-900"
        >
          {buttonText}
        </a>
      </div>
    </div>
  );
}

function ProductCarousel({
  items,
  buttonText,
}: {
  items: { title: string; description: string; image: string; link: string }[];
  buttonText: string;
}) {
  return (
    <div className="overflow-x-auto py-2 pb-5 [scrollbar-color:#166534_#e8e4d8]">
      <div className="flex w-max snap-x snap-mandatory gap-5">
        {items.map((item) => (
          <div key={item.title} className="snap-start">
          <CarouselCard
            item={item}
            buttonText={buttonText}
          />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ShopPage() {
  return (
    <main className="min-h-screen bg-[#f4f1e8] px-6 py-10 text-[#1f2a1f]">
      <section className="mx-auto max-w-7xl">
        <Link
          href="/"
          className="mb-8 inline-block text-sm font-semibold text-green-800 hover:underline"
        >
          ← Volver al inicio
        </Link>

        <header className="mb-10">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-green-800">
            KCGREENWORKS SHOP
          </p>

          <h1 className="text-4xl font-bold leading-tight md:text-5xl">
            Libros y productos recomendados
          </h1>

          <p className="mt-4 max-w-3xl text-lg leading-8 text-[#4b5a4b]">
            Recursos seleccionados para aprender, sembrar, compostar y producir
            alimentos en casa.
          </p>

          <p className="mt-3 max-w-3xl text-sm leading-6 text-[#6b786b]">
            Como Asociado de Amazon, puedo ganar una comisión por compras
            calificadas realizadas a través de estos enlaces, sin costo adicional
            para ti.
          </p>
        </header>

        <section className="mb-14 rounded-3xl border border-[#d8d2c3] bg-[#fbfaf5] p-6 shadow-sm">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
            <div>
              <h2 className="text-3xl font-bold">Libros destacados</h2>
              <p className="mt-2 text-sm text-[#4b5a4b]">
                Libros escritos y recomendados por KCGreenWorks.
              </p>
              <p className="mt-1 text-xs text-[#6b786b]">Desliza horizontalmente para ver más.</p>
            </div>

            <Link
              href="/shop/books"
              className="rounded-xl border border-green-800 px-5 py-2 text-sm font-semibold text-green-900 transition hover:bg-green-800 hover:text-white"
            >
              Ver todos los libros
            </Link>
          </div>

          <ProductCarousel items={books} buttonText="Ver libro" />
        </section>

        <section className="rounded-3xl border border-[#d8d2c3] bg-[#fbfaf5] p-6 shadow-sm">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
            <div>
              <h2 className="text-3xl font-bold">Productos recomendados</h2>
              <p className="mt-2 text-sm text-[#4b5a4b]">
                Productos para acuaponía, hidroponía, compostaje, siembra y
                jardín.
              </p>
              <p className="mt-1 text-xs text-[#6b786b]">Desliza horizontalmente para ver más.</p>
            </div>

            <Link
              href="/shop/products"
              className="rounded-xl border border-green-800 px-5 py-2 text-sm font-semibold text-green-900 transition hover:bg-green-800 hover:text-white"
            >
              Ver todos los productos
            </Link>
          </div>

          <ProductCarousel items={products} buttonText="Ver en Amazon" />
        </section>
      </section>
    </main>
  );
}
