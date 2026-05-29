export default function GraciasPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[#f4f1e8] px-6">
      <div className="max-w-2xl rounded-3xl bg-white p-10 shadow-xl text-center">
        <h1 className="text-4xl font-bold text-green-900">
          ¡Bienvenido a la comunidad KCGreenWorks!
        </h1>

        <p className="mt-6 text-lg text-gray-700">
          Revisa tu correo. Pronto recibirás guías prácticas sobre acuaponía,
          lombricultura y cultivo sostenible.
        </p>

        <a
          href="/"
          className="inline-block mt-8 rounded-xl bg-green-800 px-6 py-3 font-semibold text-white"
        >
          Volver al inicio
        </a>
      </div>
    </main>
  );
}