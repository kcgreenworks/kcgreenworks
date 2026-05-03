import Link from "next/link";

export default function ZucchiniGuia() {
  return (
    <main className="min-h-screen bg-[#f4f1e8] px-6 py-12 text-[#1f2a1f]">
      <article className="mx-auto max-w-4xl space-y-10">

        <Link href="/blog/vegetales" className="text-sm font-semibold text-green-800 hover:underline">
          ← Volver a vegetales
        </Link>

        <section className="space-y-8">

          {/* TITULO */}
          <div className="space-y-4">
            <h1 className="text-4xl font-bold md:text-5xl leading-tight">
              Zucchini (calabacín): guía completa desde semilla hasta cosecha
            </h1>

            <p className="text-lg text-[#4b5a4b]">
              El zucchini es una de las plantas más productivas que puedes sembrar en casa. Crece rápido, produce mucho y responde bien tanto en suelo como en sistemas acuapónicos si está bien alimentado.
            </p>

            <img
              src="/zucchini1.png"
              alt="Planta de zucchini creciendo"
              className="mx-auto w-full max-w-3xl rounded-xl shadow-md"
            />
          </div>

          {/* SEMILLA */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Desde semilla</h2>

            <p>
              El zucchini germina rápido si las condiciones son correctas.
            </p>

            <ul className="list-disc pl-6 space-y-2">
              <li>Temperatura ideal: 20–30°C</li>
              <li>Germinación: 3–7 días</li>
              <li>Profundidad: 1–2 cm</li>
              <li>Luz: necesaria desde que brota</li>
            </ul>

            <p className="font-semibold">
              Error común: exceso de agua → pudre la semilla.
            </p>
          </div>

          {/* CRECIMIENTO */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Crecimiento de la planta</h2>

            <p>
              Es una planta de crecimiento agresivo. En pocas semanas puede duplicar su tamaño.
            </p>

            <ul className="list-disc pl-6 space-y-2">
              <li>Necesita espacio (raíces y hojas grandes)</li>
              <li>Alta demanda de nutrientes</li>
              <li>Riego constante pero sin encharcar</li>
              <li>Sol directo mínimo 6 horas</li>
            </ul>

            <img
              src="/zucchini2.png"
              alt="Flor de zucchini"
              className="mx-auto w-full max-w-3xl rounded-xl shadow-md"
            />
          </div>

          {/* FLORACION */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Floración y polinización</h2>

            <p>
              El zucchini produce flores masculinas y femeninas separadas.
            </p>

            <ul className="list-disc pl-6 space-y-2">
              <li>Flor macho: solo produce polen</li>
              <li>Flor hembra: tiene el fruto detrás</li>
              <li>Necesita polinización para producir</li>
            </ul>

            <p className="font-semibold">
              Sin polinización → el fruto se pudre antes de crecer.
            </p>
          </div>

          {/* NUTRIENTES */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Necesidades de nutrientes</h2>

            <p>
              Es una planta exigente. Si no tiene nutrientes, no produce bien.
            </p>

            <ul className="list-disc pl-6 space-y-2">
              <li>Nitrógeno → crecimiento de hojas</li>
              <li>Fósforo → desarrollo de raíces y flores</li>
              <li>Potasio → producción de frutos</li>
            </ul>

            <p className="font-semibold">
              En acuaponía, solo funciona bien en sistemas ya maduros.
            </p>
          </div>

          {/* COSECHA */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Cosecha</h2>

            <p>
              El zucchini se cosecha joven para mejor sabor y producción continua.
            </p>

            <ul className="list-disc pl-6 space-y-2">
              <li>Tiempo: 40–60 días desde siembra</li>
              <li>Tamaño ideal: 6–8 pulgadas</li>
              <li>Cosecha frecuente = más producción</li>
            </ul>

            <img
              src="/zucchini3.png"
              alt="Zucchini listo para cosecha"
              className="mx-auto w-full max-w-3xl rounded-xl shadow-md"
            />
          </div>

          {/* SEMILLAS */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Cómo sacar semillas</h2>

            <p>
              Para obtener semillas debes dejar que el fruto madure completamente.
            </p>

            <ul className="list-disc pl-6 space-y-2">
              <li>Dejar crecer hasta que esté grande y duro</li>
              <li>Abrir y extraer semillas</li>
              <li>Lavar y secar completamente</li>
              <li>Guardar en lugar seco</li>
            </ul>

            <p className="font-semibold">
              No uses semillas de frutas inmaduras.
            </p>
          </div>

          {/* CONCLUSION */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Conclusión</h2>

            <p>
              El zucchini es una de las mejores plantas para producción casera, pero requiere nutrientes, espacio y manejo correcto.
            </p>

            <p className="font-semibold">
              Bien manejado = producción constante. Mal manejado = planta grande sin frutos.
            </p>
          </div>

        </section>
      </article>
    </main>
  );
}