import Link from "next/link";

export default function Vegetales() {
  return (
    <main className="min-h-screen bg-[#f4f1e8] px-6 py-12 text-[#1f2a1f]">
      <section className="mx-auto max-w-4xl space-y-6">
        <Link
          href="/blog"
          className="text-sm font-semibold text-green-800 hover:underline"
        >
          ← Volver al blog
        </Link>

        <h1 className="text-4xl font-bold md:text-5xl">Vegetales</h1>

        <p className="text-lg text-[#4b5a4b]">
          Guías organizadas sobre vegetales para sembrar en casa, desde cultivos
          fáciles en tiestos hasta plantas más exigentes.
        </p>

        <div className="mt-8 grid gap-5">
          <Link href="/blog/vegetales/tomate-black-cherry">
            <div className="cursor-pointer rounded-xl border border-[#1f2a1f] p-4 transition hover:shadow-md">
              <h2 className="text-xl font-semibold">Tomate Black Cherry</h2>
              <p className="text-gray-600">
                Guía completa desde semilla hasta cosecha
              </p>
            </div>
          </Link>

          <Link href="/blog/vegetales/zucchini">
            <div className="cursor-pointer rounded-xl border border-[#1f2a1f] p-4 transition hover:shadow-md">
              <h2 className="text-xl font-semibold">Zucchini (calabacín)</h2>
              <p className="text-gray-600">
                Guía completa desde semilla hasta cosecha
              </p>
            </div>
          </Link>

          <Link href="/blog/vegetales/pimientos-verdes">
            <div className="cursor-pointer rounded-xl border border-[#1f2a1f] p-4 transition hover:shadow-md">
              <h2 className="text-xl font-semibold">Pimientos Verdes</h2>
              <p className="text-gray-600">
                Guía completa desde semilla hasta cosecha
              </p>
            </div>
          </Link>

          <Link href="/blog/vegetales/hierba-buena-menta">
            <div className="cursor-pointer rounded-xl border border-[#1f2a1f] p-4 transition hover:shadow-md">
              <h2 className="text-xl font-semibold">Hierba Buena (Menta)</h2>
              <p className="text-gray-600">
                Cómo sembrar hierba buena en casa paso a paso
              </p>
            </div>
          </Link>

          <Link href="/blog/vegetales/sembrar-lechuga-todo-el-ano">
            <div className="cursor-pointer rounded-xl border border-[#1f2a1f] p-4 transition hover:shadow-md">
              <h2 className="text-xl font-semibold">
                Lechuga todo el año
              </h2>
              <p className="text-gray-600">
                Cómo sembrar lechuga en casa incluso cuando hace calor fuerte
              </p>
            </div>
          </Link>
        </div>
      </section>
    </main>
  );
}