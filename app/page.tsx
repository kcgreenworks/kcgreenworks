import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f4f1e8] text-[#1f2a1f] px-6 py-12">
      <section className="mx-auto max-w-6xl">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          
          {/* LEFT SIDE */}
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-green-800">
              KCGREENWORKS
            </p>

            <h1 className="max-w-3xl text-4xl font-bold leading-tight md:text-6xl">
              Aprende a sembrar en casa, aunque tengas poco espacio.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#4b5a4b]">
              Guías prácticas para personas que quieren empezar con huertos,
              compost, lombrices, acuaponía y agricultura en casa sin
              complicarse.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="/blog"
                className="rounded-xl border border-green-800 px-6 py-3 text-center font-semibold text-green-900 transition hover:bg-green-800 hover:text-white"
              >
                Ver guías
              </a>
            </div>
          </div>

          {/* RIGHT SIDE IMAGE */}
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
    </main>
  );
}