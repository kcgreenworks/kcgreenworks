import Image from "next/image";
import Script from "next/script";
import Link from "next/link";

interface HomeProps {
  searchParams: Promise<{ guide?: string }>;
}

export default async function Home({ searchParams }: HomeProps) {
  const { guide } = await searchParams;

  return (
    <main className="min-h-screen bg-[#f4f1e8] px-6 py-12 text-[#1f2a1f]">
      <section className="mx-auto max-w-6xl">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-green-800">
              KCGREENWORKS
            </p>

            <h1 className="max-w-3xl text-4xl font-bold leading-tight md:text-6xl">
              Aprende a sembrar en casa, aunque tengas poco espacio.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#4b5a4b]">
              Guías prácticas para personas que quieren empezar con huertos,
              compost, lombrices, acuaponía y agricultura en casa sin complicarse.
            </p>

            {/* Todos tus botones integrados */}
            <div className="mt-8 flex flex-wrap gap-3 sm:flex-row">
              <Link
                href="/siembra"
                className="rounded-xl bg-green-800 px-5 py-3 text-center font-semibold text-white transition hover:bg-green-900 shadow-md whitespace-nowrap"
              >
                🌿 Calendario de Siembra
              </Link>

              <a
                href="/blog"
                className="rounded-xl border border-green-800 px-5 py-3 text-center font-semibold text-green-900 transition hover:bg-green-800 hover:text-white whitespace-nowrap"
              >
                Ver guías
              </a>

              <a
                href="/shop"
                className="rounded-xl bg-green-800 px-5 py-3 text-center font-semibold text-white transition hover:bg-green-900 whitespace-nowrap"
              >
                Shop
              </a>
            </div>
          </div>

          {/* Tu imagen original restaurada */}
          <div className="relative">
            <Image
              src="/images/blog/acuaponia/como-construir-acuaponico/kcgreenworks.png"
              alt="Acuaponía, lombricultura y siembra sostenible"
              width={1400}
              height={1000}
              priority
              className="rounded-3xl border border-[#d8d2c3] object-cover shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Sección del newsletter / Captura de correos */}
      <section className="mx-auto mt-24 max-w-6xl overflow-hidden rounded-[2rem] bg-[#17301f] shadow-2xl">
        <div className="grid items-center gap-8 p-8 md:grid-cols-[1.1fr_0.9fr] md:p-12">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-[#c7e86b]">
              Comunidad KCGreenWorks
            </p>

            <h2 className="mt-3 text-3xl font-bold leading-tight text-white md:text-4xl">
              Aprende conmigo lo que voy probando en el huerto, las lombrices y la acuaponía.
            </h2>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-green-100">
              Te envío consejos prácticos, errores que he cometido y guías reales
              para cultivar mejor sin complicarte.
            </p>
          </div>

          <form
            action="/api/send-guide"
            method="POST"
            className="rounded-3xl bg-white p-6 shadow-lg"
          >
            <input type="hidden" name="locale" value="es" />

            {guide === "invalid" && (
              <p role="alert" className="mb-4 rounded-xl bg-amber-50 p-3 text-sm text-amber-900">
                Escribe un correo válido y acepta recibir la guía.
              </p>
            )}
            {guide === "error" && (
              <p role="alert" className="mb-4 rounded-xl bg-red-50 p-3 text-sm text-red-800">
                No pudimos procesar tu solicitud. Inténtalo nuevamente más tarde.
              </p>
            )}

            <label htmlFor="guide-email-es" className="block text-sm font-semibold text-green-950">
              Tu correo electrónico
            </label>

            <input
              id="guide-email-es"
              type="email"
              name="email"
              required
              placeholder="ejemplo@email.com"
              className="mt-3 w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-green-700 text-black"
            />

            <label className="mt-4 flex items-start gap-3 text-left text-xs leading-5 text-gray-600">
              <input type="checkbox" name="consent" value="yes" required className="mt-1 size-4 accent-green-800" />
              <span>Acepto recibir la guía y contenido útil de KCGreenWorks por correo electrónico.</span>
            </label>

            <button
              type="submit"
              className="mt-4 w-full rounded-xl bg-[#c7e86b] px-6 py-3 font-bold text-[#17301f] transition hover:bg-[#b5d957]"
            >
              Recibir Guía Gratis en PDF 🎁
            </button>

            <p className="mt-3 text-center text-xs text-gray-500">
              Puedes dejar de recibir nuestros correos cuando quieras.
            </p>
          </form>
        </div>
      </section>

      {/* Sección de últimas publicaciones de Instagram */}
      <section className="mx-auto mt-24 max-w-6xl text-center">
        <h2 className="text-3xl font-bold text-[#1f2a1f] md:text-4xl">
          Últimas publicaciones
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-[#4b5a4b]">
          Síguenos en Instagram para más contenido sobre huertos, vermicompostaje y acuaponía.
        </p>

        <div className="mt-10">
          <div
            className="elfsight-app-9c15b5ae-f9cc-4986-acd6-adcf543d3653"
            data-elfsight-app-lazy
          ></div>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            href="https://www.instagram.com/kcgreenworks"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-xl border border-green-800 px-6 py-3 font-semibold text-green-900 transition hover:bg-green-800 hover:text-white"
          >
            Ver publicaciones en Instagram
          </a>
          <a
            href="https://www.tiktok.com/@kcgreenworks"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-xl bg-green-800 px-6 py-3 font-semibold text-white transition hover:bg-green-900"
          >
            Ver TikTok
          </a>
        </div>

        <Script
          src="https://elfsightcdn.com/platform.js"
          strategy="afterInteractive"
        />
      </section>
    </main>
  );
}
