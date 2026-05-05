import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#f4f1e8] px-6 py-16 text-[#1f2a1f]">
      <section className="mx-auto max-w-3xl rounded-3xl border border-[#d7cfbf] bg-white p-8 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-wide text-green-800">404</p>
        <h1 className="mt-3 text-4xl font-bold">Página no encontrada</h1>
        <p className="mt-4 text-[#4b5a4b]">
          Esta ruta no existe o el enlace fue escrito diferente. Usa el blog para entrar a las guías correctas.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/blog" className="rounded-xl bg-green-800 px-5 py-3 font-semibold text-white">
            Ver guías en español
          </Link>
          <Link href="/en/blog" className="rounded-xl border border-green-800 px-5 py-3 font-semibold text-green-900">
            View guides in English
          </Link>
        </div>
      </section>
    </main>
  );
}
