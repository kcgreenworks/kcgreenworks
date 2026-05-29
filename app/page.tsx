import Image from "next/image";

export default function Home() {
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

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="/blog"
                className="rounded-xl border border-green-800 px-6 py-3 text-center font-semibold text-green-900 transition hover:bg-green-800 hover:text-white"
              >
                Ver guías
              </a>

              <a
                href="/shop"
                className="rounded-xl bg-green-800 px-6 py-3 text-center font-semibold text-white transition hover:bg-green-900"
              >
                Shop
              </a>
            </div>
          </div>

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
            action="/api/newsletter"
            method="POST"
            className="rounded-3xl bg-white p-6 shadow-lg"
          >
            <label className="block text-sm font-semibold text-green-950">
              Tu correo electrónico
            </label>

            <input
              type="email"
              name="email"
              required
              placeholder="ejemplo@email.com"
              className="mt-3 w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-green-700"
            />

            <button
              type="submit"
              className="mt-4 w-full rounded-xl bg-[#c7e86b] px-6 py-3 font-bold text-[#17301f] transition hover:bg-[#b5d957]"
            >
              Unirme gratis
            </button>

            <p className="mt-3 text-center text-xs text-gray-500">
              Sin spam. Solo contenido útil para cultivar mejor.
            </p>
          </form>
        </div>
      </section>
    </main>
  );
}