export default function Acuaponia() {
  return (
    <main className="min-h-screen bg-[#f4f1e8] px-6 py-12 text-[#1f2a1f]">
      <section className="mx-auto max-w-4xl space-y-6">
        <a href="/blog" className="text-sm font-semibold text-green-800">
          ← Volver al blog
        </a>

        <h1 className="text-4xl font-bold md:text-5xl">
          Acuaponía
        </h1>

        <p className="text-lg text-[#4b5a4b]">
          Guías organizadas sobre acuaponía casera, sistemas básicos, peces, plantas, agua, filtración y mantenimiento.
        </p>

        <div className="mt-8 grid gap-5">
          <a
            href="/blog/acuaponia/guia-basica"
            className="rounded-2xl border border-[#dcd6c8] bg-white p-6 shadow-sm transition hover:shadow-md"
          >
            <h2 className="text-2xl font-bold text-[#2f3e2f]">
              Acuaponía básica: guía general desde 0
            </h2>

            <p className="mt-2 text-[#5a6b5a]">
              Una guía completa para entender cómo funciona un sistema acuapónico y cómo empezar correctamente.
            </p>
          </a>
        </div>
      </section>
    </main>
  );
}