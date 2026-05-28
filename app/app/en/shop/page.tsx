import Link from "next/link";
import Image from "next/image";

const featuredBook = {
  title: "WORM FARMING AT HOME: HOW I BUILT MY OWN VERMICOMPOST SYSTEM FROM SCRATCH",
  description:
    "Learn step by step how to build and maintain a home worm farming system, produce high-quality worm castings, and transform organic waste into natural fertilizer.",
  image: "/images/shop/book1.jpg",
  link: "https://www.amazon.com/dp/B0H24D725B",
};

const featuredProduct = {
  title: "AeroGarden",
  description:
    "Soil-Free Indoor Hydroponic Garden with LED Grow Light for year-round gardening of up to 6 herbs and vegetables.",
  image: "/images/shop/aerogarden1.jpg",
  link: "https://amzn.to/4e842me",
};

export default function ShopPageEN() {
  return (
    <main className="min-h-screen bg-[#f4f1e8] px-6 py-12 text-[#1f2a1f]">
      <section className="mx-auto max-w-7xl">
        <Link href="/en" className="mb-8 inline-block text-sm font-semibold text-green-800 hover:underline">
          ← Back to Home
        </Link>

        <header className="mb-12">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-green-800">
            KCGREENWORKS SHOP
          </p>
          <h1 className="max-w-4xl text-5xl font-bold leading-tight">
            Recommended books and products
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-[#4b5a4b]">
            Selected resources to learn, grow, compost, and produce food at home.
            Start with the books or explore the recommended products for your setup.
          </p>
          <p className="mt-4 max-w-3xl text-sm leading-6 text-[#6b786b]">
            As an Amazon Associate, I may earn from qualifying purchases made through these links at no extra cost to you.
          </p>
        </header>

        <div className="grid gap-8 lg:grid-cols-2">
          <article className="overflow-hidden rounded-3xl border border-[#d8d2c3] bg-white shadow-sm">
            <div className="grid gap-6 p-6 md:grid-cols-[220px_1fr] md:items-center">
              <div className="relative flex h-[320px] items-center justify-center rounded-2xl bg-[#eef2e8] p-4">
                <Image src={featuredBook.image} alt={featuredBook.title} fill className="object-contain p-3" priority />
              </div>
              <div>
                <p className="mb-3 text-sm font-bold uppercase tracking-wide text-green-800">Featured Book</p>
                <h2 className="text-3xl font-bold leading-tight">{featuredBook.title}</h2>
                <p className="mt-5 text-[17px] leading-8 text-[#4b5a4b]">{featuredBook.description}</p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <a href={featuredBook.link} target="_blank" rel="noopener noreferrer sponsored" className="rounded-2xl bg-green-800 px-6 py-3 font-semibold text-white transition hover:bg-green-900">
                    View Book
                  </a>
                  <Link href="/en/shop/books" className="rounded-2xl border border-green-800 px-6 py-3 font-semibold text-green-900 transition hover:bg-green-800 hover:text-white">
                    View All Books
                  </Link>
                </div>
              </div>
            </div>
          </article>

          <article className="overflow-hidden rounded-3xl border border-[#d8d2c3] bg-white shadow-sm">
            <div className="grid gap-6 p-6 md:grid-cols-[220px_1fr] md:items-center">
              <div className="relative flex h-[320px] items-center justify-center rounded-2xl bg-[#eef2e8] p-4">
                <Image src={featuredProduct.image} alt={featuredProduct.title} fill className="object-contain p-3" priority />
              </div>
              <div>
                <p className="mb-3 text-sm font-bold uppercase tracking-wide text-green-800">Featured Product</p>
                <h2 className="text-3xl font-bold leading-tight">{featuredProduct.title}</h2>
                <p className="mt-5 text-[17px] leading-8 text-[#4b5a4b]">{featuredProduct.description}</p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <a href={featuredProduct.link} target="_blank" rel="noopener noreferrer sponsored" className="rounded-2xl bg-green-800 px-6 py-3 font-semibold text-white transition hover:bg-green-900">
                    View on Amazon
                  </a>
                  <Link href="/en/shop/products" className="rounded-2xl border border-green-800 px-6 py-3 font-semibold text-green-900 transition hover:bg-green-800 hover:text-white">
                    View All Products
                  </Link>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
