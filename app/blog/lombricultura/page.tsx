import Link from "next/link";

export default function Vegetales() {
  return (
    <main className="min-h-screen bg-[#f4f1e8] px-6 py-12 text-[#1f2a1f]">
      <section className="mx-auto max-w-4xl space-y-6">

        <Link
          href="/blog"
          className="text-sm font-semibold text-green-800"
        >
          ← Volver al blog
        </Link>

        <h1 className="text-4xl font-bold md:text-5xl">
          Vegetales
        </h1>

        <p className="text-lg text-[#4b5a4b]">
          Guías organizadas sobre vegetales para sembrar en casa, desde cultivos fáciles en tiestos hasta plantas más exigentes.
        </p>

        <div className="mt-8 grid gap-5">

          <Link href="/blog/vegetales/tomate-black-cherry">
            <div className="p-4 rounded-xl border hover:shadow-md transition cursor-pointer">
              <h2 className="font-semibold text-xl">
                Tomate Black Cherry
              </h2>
              <p className="text-gray-600">
                Guía completa desde semilla hasta cosecha
              </p>
            </div>
          </Link>

        </div>

      </section>
    </main>
  );
}