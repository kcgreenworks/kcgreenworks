import Link from "next/link";

export default function QuePuedenConsumirLasLombrices() {
  return (
    <main className="min-h-screen bg-[#f4f1e8] px-6 py-12 text-[#1f2a1f]">
      <article className="mx-auto max-w-4xl space-y-10">

        <Link
          href="/blog/lombricultura"
          className="text-sm font-semibold text-green-800 hover:underline"
        >
          ← Volver a Lombricultura
        </Link>

        <section className="space-y-8">

          {/* TITULO */}
          <div className="space-y-4">
            <h1 className="text-4xl font-bold md:text-5xl leading-tight">
              Qué pueden comer las lombrices y cómo lo convierten en composta
            </h1>

            <p className="text-lg text-[#4b5a4b]">
              Las lombrices no convierten “basura” en abono por arte de magia. Trabajan junto a bacterias, hongos y microorganismos para transformar residuos orgánicos en humus estable, oscuro y lleno de vida, con olor a tierra limpia y altamente nutritivo para las plantas.
            </p>

            <img
              src="/lombricultura2es.png"
              alt="Sistema de lombricultura paso a paso"
              className="mx-auto w-full max-w-3xl rounded-xl shadow-md"
            />
          </div>

          {/* COMO FUNCIONA */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">
              Cómo la lombriz transforma los residuos
            </h2>

            <p>
              La lombriz roja californiana ingiere materia orgánica en descomposición junto con microorganismos. Dentro de su sistema digestivo ocurre un proceso clave:
            </p>

            <ul className="list-disc pl-6 space-y-2">
              <li>Reduce el tamaño del material (lo fragmenta)</li>
              <li>Activa bacterias beneficiosas</li>
              <li>Estabiliza nutrientes</li>
              <li>Convierte residuos en humus altamente fértil</li>
            </ul>

            <p className="font-semibold">
              El resultado final no es tierra común: es un fertilizante biológicamente activo.
            </p>

            <img
              src="/lombricultura1es.png"
              alt="Sistema digestivo de la lombriz"
              className="mx-auto w-full max-w-3xl rounded-xl shadow-md"
            />
          </div>

          {/* LISTA */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">
              Qué pueden comer las lombrices
            </h2>

            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Frutas y vegetales</h3>
              <p>
                Cáscaras, restos de cocina, pulpa y hojas. Son ricos en agua y azúcares naturales.
              </p>
              <p className="font-semibold">
                Se descomponen rápido y aceleran el proceso de producción de humus.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Borra de café</h3>
              <p>
                Excelente fuente de nitrógeno. Mejora la actividad microbiana y la estructura del compost.
              </p>
              <p className="font-semibold">
                Las lombrices lo convierten en un material más estable y equilibrado.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Hojas secas</h3>
              <p>
                Aportan carbono, regulan la humedad y evitan malos olores.
              </p>
              <p className="font-semibold">
                Son clave para mantener el balance del sistema.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Cartón y papel</h3>
              <p>
                Sin tinta pesada. Aportan estructura y aireación.
              </p>
              <p className="font-semibold">
                Evitan compactación y mejoran el flujo de oxígeno.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Cáscaras de huevo</h3>
              <p>
                Fuente natural de calcio. Ayudan a regular el pH.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Residuos de jardín</h3>
              <p>
                Césped seco, hojas y restos de poda.
              </p>
              <p className="font-semibold">
                Aumentan la diversidad biológica del humus.
              </p>
            </div>
          </div>

          {/* LO QUE NO */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">
              Qué NO debes poner
            </h2>

            <ul className="list-disc pl-6 space-y-2">
              <li>Carne o pescado</li>
              <li>Lácteos</li>
              <li>Comida grasosa o procesada</li>
              <li>Exceso de cítricos</li>
              <li>Químicos o pesticidas</li>
            </ul>

            <p>
              Estos materiales generan malos olores, atraen plagas y rompen el equilibrio del sistema.
            </p>
          </div>

          {/* CIERRE */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">
              Conclusión
            </h2>

            <p>
              La lombriz no solo descompone: mejora. Convierte residuos en un abono vivo, rico en microorganismos y listo para nutrir plantas de forma natural.
            </p>

            <p className="font-semibold">
              Mientras mejor alimentes a tus lombrices, mejor será el resultado que obtendrás.
            </p>
          </div>

        </section>
      </article>
    </main>
  );
}