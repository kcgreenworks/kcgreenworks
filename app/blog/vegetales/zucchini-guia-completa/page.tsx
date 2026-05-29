import Link from "next/link";

export default function ZucchiniGuia() {
  return (
    <main className="min-h-screen bg-[#f4f1e8] px-6 py-12 text-[#1f2a1f]">
      <article className="mx-auto max-w-4xl space-y-10">

        <Link href="/blog/vegetales" className="text-sm font-semibold text-green-800 hover:underline">
          ← Volver a vegetales
        </Link>

        <section className="space-y-8">

          <div className="space-y-4">
            <h1 className="text-4xl font-bold md:text-5xl leading-tight">
              Zucchini (calabacín): todo lo que aprendí desde la semilla hasta la cosecha
            </h1>

            <p className="text-lg text-[#4b5a4b]">
              Hay cultivos que uno siembra una vez por curiosidad y termina sembrando todos los años. Así me pasó a mí con el zucchini. La primera vez que lo cultivé no esperaba gran cosa, pero bastaron unas semanas para darme cuenta de que estaba frente a una de las plantas más productivas que he trabajado. Según mi experiencia, pocas especies crecen tan rápido, producen tanto y responden tan bien cuando tienen agua, nutrientes y espacio suficiente.
            </p>

            <img
              src="/zucchini1.png"
              alt="Planta de zucchini creciendo"
              className="mx-auto w-full max-w-3xl rounded-xl shadow-md"
            />
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Cómo empiezo mis plantas desde semilla</h2>

            <p>
              Cuando yo hago una siembra de zucchini, casi siempre comienzo desde semilla. Una de las cosas que más me gusta de esta planta es la velocidad con la que germina cuando las condiciones son adecuadas.
            </p>

            <ul className="list-disc pl-6 space-y-2">
              <li>Temperatura ideal: entre 20°C y 30°C</li>
              <li>Germinación normal: 3 a 7 días</li>
              <li>Profundidad de siembra: 1 a 2 cm</li>
              <li>Necesita buena luz tan pronto emerge</li>
            </ul>

            <p className="font-semibold">
              Uno de los errores más comunes que he visto es regar demasiado. Así me pasó a mí al principio y terminé perdiendo semillas por pudrición.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold">El crecimiento sorprendente del zucchini</h2>

            <p>
              Si nunca has cultivado zucchini, prepárate porque crece con una velocidad impresionante. Según mi experiencia, después de establecerse puede duplicar su tamaño en muy poco tiempo.
            </p>

            <ul className="list-disc pl-6 space-y-2">
              <li>Necesita bastante espacio para raíces y hojas</li>
              <li>Tiene alta demanda de nutrientes</li>
              <li>Prefiere humedad constante sin encharcamientos</li>
              <li>Produce mejor con al menos 6 horas de sol directo</li>
            </ul>

            <img
              src="/zucchini2.png"
              alt="Flor de zucchini"
              className="mx-auto w-full max-w-3xl rounded-xl shadow-md"
            />
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold">La floración y la polinización</h2>

            <p>
              Una de las lecciones más importantes que aprendí fue que no basta con que la planta florezca. El zucchini produce flores masculinas y femeninas por separado y necesita polinización para desarrollar frutos correctamente.
            </p>

            <ul className="list-disc pl-6 space-y-2">
              <li>Las flores masculinas producen polen</li>
              <li>Las flores femeninas tienen un pequeño fruto detrás de la flor</li>
              <li>La polinización suele realizarse mediante insectos</li>
            </ul>

            <p className="font-semibold">
              Cuando la polinización falla, el fruto comienza a desarrollarse pero termina pudriéndose antes de crecer.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Los nutrientes que realmente necesita</h2>

            <p>
              Según mi experiencia, el zucchini es generoso produciendo, pero también exige bastante. Mientras mejor alimentada esté la planta, mejor será la cosecha.
            </p>

            <ul className="list-disc pl-6 space-y-2">
              <li>Nitrógeno para desarrollar hojas vigorosas</li>
              <li>Fósforo para raíces y floración</li>
              <li>Potasio para la formación y calidad de los frutos</li>
            </ul>

            <p className="font-semibold">
              En sistemas acuapónicos me ha funcionado mejor cuando el sistema ya está maduro y cuenta con suficiente carga nutricional.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold">La cosecha: cuándo recogerlos</h2>

            <p>
              Uno de los errores que cometí al principio fue esperar demasiado para cosechar. El zucchini suele tener mejor textura y sabor cuando se recoge joven.
            </p>

            <p>
              La mayoría de los productores recomiendan cosechar entre 15 y 20 centímetros de longitud. Después de ese tamaño sigue siendo comestible, pero la textura cambia y las semillas se desarrollan más.
            </p>

            <p>
              Según mi experiencia, mientras más frecuente coseches, más incentivas a la planta a seguir produciendo flores y frutos nuevos.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Lo que haría diferente si comenzara hoy</h2>

            <p>
              Si tuviera que empezar desde cero, dedicaría más tiempo a preparar el suelo, mejoraría la polinización desde el principio y dejaría más espacio entre plantas.
            </p>

            <p>
              Después de cultivar esta especie muchas veces, sigo pensando lo mismo: el zucchini es una de las mejores opciones para quien quiere resultados rápidos, cosechas abundantes y una planta que recompensa el esfuerzo con generosidad.
            </p>
          </div>

        </section>
      </article>
    </main>
  );
}
