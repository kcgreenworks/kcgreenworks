import Link from "next/link";

export default function Acuaponia() {
  return (
    <main className="min-h-screen bg-[#f4f1e8] px-6 py-12 text-[#1f2a1f]">
      <section className="mx-auto max-w-4xl space-y-6">

        <Link
          href="/blog"
          className="text-sm font-semibold text-green-800 hover:underline"
        >
          ← Volver al blog
        </Link>

        <h1 className="text-4xl font-bold md:text-5xl">
          Acuaponía
        </h1>

        <p className="text-lg text-[#4b5a4b]">
          Guías sobre sistemas acuapónicos, cultivo sin suelo, integración de peces y plantas,
          y cómo crear sistemas productivos en casa.
        </p>

        <div className="mt-8 grid gap-5">

          {/* NUEVO ARTÍCULO */}
          <Link
            href="/blog/acuaponia/como-construir-acuaponico"
            className="rounded-2xl border border-[#dcd6c8] bg-white p-6 shadow-sm transition hover:shadow-md"
          >
            <h2 className="text-2xl font-bold text-[#2f3e2f]">
              Cómo construir un sistema acuapónico casero barato
            </h2>

            <p className="mt-2 text-[#5a6b5a]">
              Aprende paso a paso cómo crear un sistema acuapónico en casa con materiales simples,
              peces, plantas y una bomba de agua.
            </p>
          </Link>

          {/* GUÍA BÁSICA */}
          <Link
            href="/blog/acuaponia/guia-basica"
            className="rounded-2xl border border-[#dcd6c8] bg-white p-6 shadow-sm transition hover:shadow-md"
          >
            <h2 className="text-2xl font-bold text-[#2f3e2f]">
              Guía básica de acuaponía
            </h2>

            <p className="mt-2 text-[#5a6b5a]">
              Entiende cómo funciona la acuaponía, el ciclo del agua, bacterias
              y cómo iniciar tu primer sistema correctamente.
            </p>
          </Link>

          {/* HIERBAS */}
          <Link
            href="/blog/acuaponia/hierbas-aromaticas"
            className="rounded-2xl border border-[#dcd6c8] bg-white p-6 shadow-sm transition hover:shadow-md"
          >
            <h2 className="text-2xl font-bold text-[#2f3e2f]">
              Hierbas aromáticas en acuaponía
            </h2>

            <p className="mt-2 text-[#5a6b5a]">
              Qué plantas funcionan mejor en sistemas acuapónicos y cómo cultivarlas correctamente.
            </p>
          </Link>

        </div>
      </section>
    </main>
  );
}