import Link from "next/link";

export default function Lombricultura() {
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
          Lombricultura
        </h1>

        <p className="text-lg text-[#4b5a4b]">
          Guías organizadas sobre compostaje con lombrices, producción de humus,
          manejo de residuos orgánicos y fertilidad natural para huertos caseros.
        </p>

        <div className="mt-8 grid gap-5">

          {/* NUEVO ARTÍCULO FUNDAMENTAL */}
          <Link
            href="/blog/lombricultura/como-lombrices-mejoran-suelo"
            className="rounded-2xl border border-[#dcd6c8] bg-white p-6 shadow-sm transition hover:shadow-md"
          >
            <h2 className="text-2xl font-bold text-[#2f3e2f]">
              Cómo las lombrices mejoran el suelo
            </h2>

            <p className="mt-2 text-[#5a6b5a]">
              Explicación real y clara de cómo las lombrices transforman materia
              orgánica en humus, mejoran la estructura del suelo y activan la vida microbiana.
            </p>
          </Link>

          {/* LIXIVIADO */}
          <Link
            href="/blog/lombricultura/lixiviado-lombriz"
            className="rounded-2xl border border-[#dcd6c8] bg-white p-6 shadow-sm transition hover:shadow-md"
          >
            <h2 className="text-2xl font-bold text-[#2f3e2f]">
              Lixiviado de lombriz: qué es y cómo usarlo
            </h2>

            <p className="mt-2 text-[#5a6b5a]">
              Aprende qué es realmente el lixiviado de lombriz, cómo se produce,
              qué contiene y cómo aplicarlo correctamente sin dañar tus plantas.
            </p>
          </Link>

          {/* VERMICOMPOSTERA */}
          <Link
            href="/blog/lombricultura/vermicompostera"
            className="rounded-2xl border border-[#dcd6c8] bg-white p-6 shadow-sm transition hover:shadow-md"
          >
            <h2 className="text-2xl font-bold text-[#2f3e2f]">
              Cómo hacer una vermicompostera casera
            </h2>

            <p className="mt-2 text-[#5a6b5a]">
              Aprende paso a paso cómo crear tu propia vermicompostera casera,
              qué materiales usar, cómo alimentarla y cómo producir humus de alta calidad.
            </p>
          </Link>

          {/* GUÍA BÁSICA */}
          <Link
            href="/blog/lombricultura/guia-basica"
            className="rounded-2xl border border-[#dcd6c8] bg-white p-6 shadow-sm transition hover:shadow-md"
          >
            <h2 className="text-2xl font-bold text-[#2f3e2f]">
              Guía básica de lombricultura
            </h2>

            <p className="mt-2 text-[#5a6b5a]">
              Aprende cómo funciona una lombricera, qué lombriz usar, cómo producir humus y cómo mantener el sistema estable.
            </p>
          </Link>

          {/* ALIMENTACIÓN */}
          <Link
            href="/blog/lombricultura/que-pueden-consumir-las-lombrices"
            className="rounded-2xl border border-[#dcd6c8] bg-white p-6 shadow-sm transition hover:shadow-md"
          >
            <h2 className="text-2xl font-bold text-[#2f3e2f]">
              Qué pueden comer las lombrices
            </h2>

            <p className="mt-2 text-[#5a6b5a]">
              Lista completa de residuos que las lombrices pueden transformar en composta y qué aporta cada material.
            </p>
          </Link>

        </div>
      </section>
    </main>
  );
}