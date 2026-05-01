import Link from "next/link";

export default function GuiaLombricultura() {
  return (
    <main className="min-h-screen bg-[#f4f1e8] px-6 py-12 text-[#1f2a1f]">
      <section className="mx-auto max-w-4xl space-y-10">

        {/* VOLVER */}
        <Link
          href="/blog/lombricultura"
          className="text-sm font-semibold text-green-800"
        >
          ← Volver a Lombricultura
        </Link>

        {/* TITULO */}
        <h1 className="text-4xl md:text-5xl font-bold">
          Lombricultura: guía completa desde cero (bien hecha)
        </h1>

        {/* INTRO */}
        <p className="text-lg text-[#4b5a4b]">
          La lombricultura es un sistema biológico donde las lombrices transforman residuos orgánicos en humus, uno de los fertilizantes más completos que existen. No es simplemente compostar: es un proceso controlado que depende del equilibrio entre materia orgánica, humedad, oxígeno y actividad microbiana.
        </p>

        <p>
          Cuando se maneja correctamente, reduce desperdicios, mejora el suelo y produce fertilizante de alta calidad en espacios pequeños.
        </p>

        {/* IMÁGENES */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 mt-8">

          <div className="text-center">
            <img
              src="/lombricultura2es.png"
              alt="Proceso de lombricultura"
              className="rounded-xl shadow-md w-full max-w-[400px]"
            />
            <p className="text-sm text-[#4b5a4b] mt-2">
              Proceso completo: residuos → humus
            </p>
          </div>

          <div className="text-center">
            <img
              src="/lombricultura1es.png"
              alt="Sistema digestivo de la lombriz"
              className="rounded-xl shadow-md w-full max-w-[400px]"
            />
            <p className="text-sm text-[#4b5a4b] mt-2">
              Sistema digestivo: cómo transforma materia en nutrientes
            </p>
          </div>

        </div>

        {/* QUE ES */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">¿Qué es la lombricultura realmente?</h2>

          <p>
            Es un sistema donde lombrices y microorganismos trabajan juntos para descomponer materia orgánica. La lombriz no “come basura”, procesa materia en descomposición y la convierte en nutrientes disponibles.
          </p>

          <p>
            El resultado es humus: un material oscuro, estable, sin olor y altamente nutritivo para las plantas.
          </p>
        </section>

        {/* TIPOS */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Tipos de lombrices (clave)</h2>

          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Eisenia fetida:</strong> la más eficiente</li>
            <li><strong>Eisenia andrei:</strong> similar comportamiento</li>
            <li><strong>Africana:</strong> más grande, más delicada</li>
          </ul>

          <p className="font-semibold">
            Las lombrices de tierra normales NO sirven.
          </p>
        </section>

        {/* BENEFICIOS */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Beneficios reales</h2>

          <ul className="list-disc pl-6 space-y-2">
            <li>Reduce residuos del hogar</li>
            <li>Produce fertilizante natural</li>
            <li>Mejora estructura del suelo</li>
            <li>Aumenta microbiología</li>
            <li>No quema plantas</li>
          </ul>
        </section>

        {/* SISTEMA */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Cómo hacerlo en casa</h2>

          <ul className="list-disc pl-6 space-y-2">
            <li>Contenedor (plástico o madera)</li>
            <li>Material seco (cartón, hojas)</li>
            <li>Lombrices</li>
            <li>Residuos orgánicos</li>
            <li>Ventilación</li>
          </ul>

          <p>
            Puedes hacerlo en balcón, patio o interior.
          </p>
        </section>

        {/* ALIMENTACION */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Alimentación</h2>

          <ul className="list-disc pl-6 space-y-2">
            <li>Frutas</li>
            <li>Vegetales</li>
            <li>Café</li>
            <li>Cartón</li>
          </ul>

          <p className="font-semibold">Evita:</p>

          <ul className="list-disc pl-6 space-y-2">
            <li>Carne</li>
            <li>Lácteos</li>
            <li>Grasas</li>
          </ul>
        </section>

        {/* CONDICIONES */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Condiciones ideales</h2>

          <ul className="list-disc pl-6 space-y-2">
            <li>Humedad: tipo esponja</li>
            <li>Temperatura: 13–25°C</li>
            <li>Oxígeno: constante</li>
            <li>pH neutro</li>
          </ul>
        </section>

        {/* ERRORES */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Errores comunes</h2>

          <ul className="list-disc pl-6 space-y-2">
            <li>Sobrealimentar</li>
            <li>Exceso de agua</li>
            <li>Falta de aire</li>
            <li>Mal balance seco/húmedo</li>
          </ul>
        </section>

        {/* CIERRE */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Conclusión</h2>

          <p>
            La lombricultura es una de las formas más eficientes de convertir residuos en fertilidad real. Es simple en concepto, pero requiere control para que funcione correctamente.
          </p>

          <p className="font-semibold">
            No es basura. Es recurso mal manejado.
          </p>
        </section>

      </section>
    </main>
  );
}