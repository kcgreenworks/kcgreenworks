export default function StartHere() {
  return (
    <main className="min-h-screen bg-[#f4f1e8] px-6 py-12 text-[#1f2a1f]">
      <section className="mx-auto max-w-3xl">
        <a href="/" className="text-sm font-semibold text-green-800">
          ← Inicio
        </a>

        <h1 className="mt-8 text-4xl font-bold md:text-5xl">
          Empieza aquí
        </h1>

        <p className="mt-5 text-lg text-[#4b5a4b]">
          Si quieres aprender a sembrar en casa, empieza simple. No necesitas una finca, ni equipo caro, ni saberlo todo desde el primer día.
        </p>

        <div className="mt-8 grid gap-4">
          <a href="/blog" className="rounded-2xl border border-[#dcd6c8] bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-bold">Ver guías por categoría</h2>
            <p className="mt-2 text-[#5a6b5a]">
              Tomates, vegetales, acuaponía y lombricultura.
            </p>
          </a>
        </div>
      </section>
    </main>
  );
}