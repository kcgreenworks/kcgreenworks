import Link from "next/link";
import Image from "next/image";

const books = [
  {
    title: "HUERTO EN CASA: GUÍA PRÁCTICA PARA PRINCIPIANTES",
    description:
      "A clear guide to starting from zero, making use of any space, and learning to plant, care for, and harvest your own food at home.",
    image: "/images/shop/book7-huerto-en-casa.jpg",
    link: "https://www.amazon.com/dp/B0H8TFTNLG",
  },
  {
    title: "Cosecha Roja: Cómo Sembrar, Cuidar y Cosechar Tomates",
    description:
      "Grow tomatoes in soil, hydroponic, or aquaponic systems, from sowing through a healthy harvest.",
    image: "/images/shop/book8-cosecha-roja.jpg",
    link: "https://www.amazon.com/dp/B0HFKZ4P8L",
  },
  {
    title: "El Arte de Cultivar Yerba Buena: De la Planta a la Mesa",
    description:
      "A practical guide to growing yerba buena in soil, hydroponics, and aquaponics and enjoying it every day.",
    image: "/images/shop/book9-yerba-buena.png",
    link: "https://www.amazon.com/dp/B0HDV98V67",
  },
  {
    title: "WORM FARMING AT HOME: HOW I BUILT MY OWN VERMICOMPOST SYSTEM FROM SCRATCH",
    description:
      "Learn step by step how to build and maintain a home worm farming system, produce high-quality worm castings, and transform organic waste into natural fertilizer.",
    image: "/images/shop/book1.jpg",
    link: "https://www.amazon.com/dp/B0H24D725B",
  },
  {
    title: "Aquaponics: The Complete Guide — From Zero to Your First Harvest",
    description:
      "A practical guide based on real experience to help you build functional aquaponic systems, understand the nitrogen cycle, and grow food at home.",
    image: "/images/shop/book2.jpg",
    link: "https://a.co/d/0gRcplww",
  },
  {
    title: "The Worm Revealed: Everything You Need to Know About Vermiculture",
    description:
      "An in-depth and practical guide about worm biology, feeding, reproduction, and the proper management of Eisenia fetida for producing high-quality vermicompost.",
    image: "/images/shop/book3.jpg",
    link: "https://a.co/d/04YEWNq2",
  },
  {
    title: "Fish for Aquaponics",
    description:
      "The definitive guide to breeding, feeding, water quality management and selecting the best fish for aquaponic systems.",
    image: "/images/shop/book4.jpg",
    link: "https://a.co/d/0dbs9z5j",
  },
  {
    title: "Aquaponics for Beginners",
    description:
      "A practical beginner-friendly guide to building and maintaining your first aquaponic system.",
    image: "/images/shop/book5.jpg",
    link: "#",
  },
  {
    title: "Aquaponics at Home",
    description:
      "The complete guide to building your own aquaponic system, raising fish and growing vegetables with up to 90% less water.",
    image: "/images/shop/book6.jpg",
    link: "https://a.co/d/00LlFNKN",
  },
];

export default function ShopBooksPageEN() {
  return (
    <main className="min-h-screen bg-[#f4f1e8] px-6 py-12 text-[#1f2a1f]">
      <section className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-wrap gap-4">
          <Link
            href="/en/shop"
            className="text-sm font-semibold text-green-800 hover:underline"
          >
            ← Back to Shop
          </Link>

          <Link
            href="/en"
            className="text-sm font-semibold text-green-800 hover:underline"
          >
            Back to Home
          </Link>
        </div>

        <header className="mb-12">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-green-800">
            KCGREENWORKS SHOP
          </p>

          <h1 className="text-5xl font-bold leading-tight">
            Recommended Books
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-[#4b5a4b]">
            Practical guides for learning aquaponics, worm farming, and
            sustainable food production at home.
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
                  View on Amazon
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
