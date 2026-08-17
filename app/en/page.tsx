import Image from "next/image";
import Script from "next/script";
import Link from "next/link"; // Importamos Link para la navegación rápida de Next.js

interface HomeENProps {
  searchParams: Promise<{ guide?: string }>;
}

export default async function HomeEN({ searchParams }: HomeENProps) {
  const { guide } = await searchParams;

  return (
    <main className="min-h-screen bg-[#f4f1e8] text-[#1f2a1f] px-6 py-12">
      <section className="mx-auto max-w-6xl">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-green-800">
              KCGREENWORKS
            </p>

            <h1 className="max-w-3xl text-4xl font-bold leading-tight md:text-6xl">
              Learn how to grow food at home, even with limited space.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#4b5a4b]">
              Practical guides for people who want to get started with home
              gardening, composting, vermicomposting, aquaponics, hydroponics,
              and sustainable food production without unnecessary complexity.
            </p>

            {/* Botones actualizados con el calendario en inglés */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/en/siembra"
                className="rounded-xl bg-green-800 px-6 py-3 text-center font-semibold text-white transition hover:bg-green-900 shadow-md whitespace-nowrap"
              >
                📅 Planting Calendar
              </Link>

              <a
                href="/en/blog"
                className="rounded-xl border border-green-800 px-6 py-3 text-center font-semibold text-green-900 transition hover:bg-green-800 hover:text-white"
              >
                View Guides
              </a>

              <a
                href="/en/shop"
                className="rounded-xl bg-green-800 px-6 py-3 text-center font-semibold text-white transition hover:bg-green-900"
              >
                Shop
              </a>
            </div>
          </div>

          <div className="relative">
            <Image
              src="/images/blog/acuaponia/como-construir-acuaponico/kcgreenworks.png"
              alt="Aquaponics, vermicomposting and sustainable gardening"
              width={1400}
              height={1000}
              priority
              className="rounded-3xl border border-[#d8d2c3] object-cover shadow-2xl"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto mt-24 max-w-6xl overflow-hidden rounded-[2rem] bg-[#17301f] shadow-2xl">
        <div className="grid items-center gap-8 p-8 md:grid-cols-[1.1fr_0.9fr] md:p-12">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-[#c7e86b]">
              KCGreenWorks Community
            </p>

            <h2 className="mt-3 text-3xl font-bold leading-tight text-white md:text-4xl">
              Learn from my real-world experience with gardening,
              vermicomposting, and aquaponics.
            </h2>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-green-100">
              Get practical tips, lessons learned, mistakes to avoid, and
              step-by-step guides delivered directly to your inbox.
            </p>
          </div>

          <form
            action="/api/send-guide"
            method="POST"
            className="rounded-3xl bg-white p-6 shadow-lg"
          >
            <input type="hidden" name="locale" value="en" />

            {guide === "invalid" && (
              <p role="alert" className="mb-4 rounded-xl bg-amber-50 p-3 text-sm text-amber-900">
                Enter a valid email address and agree to receive the guide.
              </p>
            )}
            {guide === "error" && (
              <p role="alert" className="mb-4 rounded-xl bg-red-50 p-3 text-sm text-red-800">
                We could not process your request. Please try again later.
              </p>
            )}

            <label htmlFor="guide-email-en" className="block text-sm font-semibold text-green-950">
              Your email address
            </label>

            <input
              id="guide-email-en"
              type="email"
              name="email"
              required
              placeholder="your@email.com"
              className="mt-3 w-full rounded-xl border border-gray-300 px-4 py-3 text-black outline-none focus:border-green-700"
            />

            <label className="mt-4 flex items-start gap-3 text-left text-xs leading-5 text-gray-600">
              <input type="checkbox" name="consent" value="yes" required className="mt-1 size-4 accent-green-800" />
              <span>I agree to receive the guide and useful KCGreenWorks content by email.</span>
            </label>

            <button
              type="submit"
              className="mt-4 w-full rounded-xl bg-[#c7e86b] px-6 py-3 font-bold text-[#17301f] transition hover:bg-[#b5d957]"
            >
              Get the Free PDF Guide
            </button>

            <p className="mt-3 text-center text-xs text-gray-500">
              You can unsubscribe from our emails at any time.
            </p>
          </form>
        </div>
      </section>

      <section className="mx-auto mt-24 max-w-6xl text-center">
        <h2 className="text-3xl font-bold text-[#1f2a1f] md:text-4xl">
          Latest Posts
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-[#4b5a4b]">
          Follow us on Instagram for more content about gardening,
          vermicomposting, and aquaponics.
        </p>

        <div className="mt-10">
          <div
            className="elfsight-app-9c15b5ae-f9cc-4986-acd6-adcf543d3653"
            data-elfsight-app-lazy=""
          ></div>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            href="https://www.instagram.com/kcgreenworks"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-xl border border-green-800 px-6 py-3 font-semibold text-green-900 transition hover:bg-green-800 hover:text-white"
          >
            View Instagram posts
          </a>
          <a
            href="https://www.tiktok.com/@kcgreenworks"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-xl bg-green-800 px-6 py-3 font-semibold text-white transition hover:bg-green-900"
          >
            View TikTok
          </a>
        </div>

        <Script
          src="https://elfsightcdn.com/platform.js"
          strategy="lazyOnload"
        />
      </section>
    </main>
  );
}
