export default function Blog() {
  return (
    <main className="min-h-screen bg-[#f4f1e8] px-6 py-12 text-[#1f2a1f]">
      <section className="mx-auto max-w-5xl">
        <a href="/" className="text-sm font-semibold text-green-800">
          ← Inicio
        </a>

        <div className="mt-8 mb-10">
          <p className="text-sm font-semibold uppercase tracking-wide text-green-800">
            KCGreenWorks Learning Hub
          </p>

          <h1 className="mt-3 text-4xl font-bold md:text-5xl">
            Aprende por categoría
          </h1>

          <p className="mt-4 max-w-2xl text-lg text-[#4b5a4b]">
            Guías prácticas sobre huertos caseros, acuaponía, lombricultura y cultivos para espacios pequeños.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          
          <a href="/blog/acuaponia" className="rounded-2xl border border-[#dcd6c8] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <h2 className="text-2xl font-bold text-[#2f3e2f]">🐟 Acuaponía</h2>
            <p className="mt-2 text-[#5a6b5a]">Sistemas caseros con peces, agua y plantas.</p>
          </a>

          <a href="/blog/lombricultura" className="rounded-2xl border border-[#dcd6c8] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <h2 className="text-2xl font-bold text-[#2f3e2f]">🪱 Lombricultura</h2>
            <p className="mt-2 text-[#5a6b5a]">Convierte residuos de cocina en abono orgánico.</p>
          </a>

          <a href="/blog/vegetales" className="rounded-2xl border border-[#dcd6c8] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <h2 className="text-2xl font-bold text-[#2f3e2f]">🥬 Vegetales</h2>
            <p className="mt-2 text-[#5a6b5a]">Cultivos fáciles para patio, balcón o tiestos.</p>
          </a>
        </div>
      </section>
    </main>
  );
}