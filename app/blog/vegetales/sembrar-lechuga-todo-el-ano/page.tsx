import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Cómo sembrar lechuga todo el año incluso en clima caliente",
  description:
    "Guía completa para sembrar lechuga en casa durante todo el año, incluso en temporadas de calor fuerte. Aprende variedades, sustrato, riego, sombra, cosecha, nutrientes y errores comunes.",
};

export default function SembrarLechugaTodoElAnoPage() {
  return (
    <main className="min-h-screen bg-[#f4f1e8] px-6 py-12 text-[#1f2a1f]">
      <article className="mx-auto max-w-4xl space-y-10">

        <Link
          href="/blog/vegetales"
          className="text-sm font-semibold text-green-800 hover:underline"
        >
          ← Volver a Vegetales
        </Link>

        <header className="space-y-5">
          <p className="text-sm font-semibold uppercase tracking-wide text-green-800">
            Guía de cultivo en casa
          </p>

          <h1 className="text-4xl font-bold leading-tight md:text-5xl">
            Cómo sembrar lechuga todo el año, incluso cuando hace calor fuerte
          </h1>

          <p className="text-lg leading-8 text-[#405040]">
            La lechuga es uno de los vegetales más útiles para sembrar en casa,
            pero también es uno de los que más sufre cuando sube la temperatura.
            En esta guía vas a aprender cómo sembrarla, cuidarla, protegerla del
            calor, cosecharla correctamente y mantener producción durante todo el
            año.
          </p>
        </header>

        <div className="overflow-hidden rounded-2xl bg-white shadow-sm">
          <Image
            src="/images/lechuga-todo-el-ano-hero.png"
            alt="Lechugas verdes creciendo en un huerto casero con buena luz"
            width={1200}
            height={800}
            className="mx-auto h-[450px] w-auto rounded-2xl object-cover shadow-md"
            priority
          />
        </div>

        <section className="space-y-5 text-lg leading-8">
          <h2 className="text-3xl font-bold">
            Primero: la lechuga sí se puede sembrar todo el año
          </h2>

          <p>
            La lechuga prefiere clima fresco. Eso es verdad. Pero eso no
            significa que solo se pueda sembrar en meses frescos. Lo que cambia
            en época de calor es la estrategia: hay que escoger mejor la variedad,
            controlar la exposición al sol, cuidar más el riego y cosechar antes
            de que la planta se estrese.
          </p>

          <p>
            Cuando la lechuga pasa demasiado calor, intenta florecer rápido. A
            eso se le llama <strong>espigarse</strong>. La planta forma un tallo
            alto, las hojas se ponen más amargas y la calidad baja. El objetivo
            del cultivo en calor es retrasar ese proceso lo más posible.
          </p>
        </section>

        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-3xl font-bold">
            ¿Para qué sirve sembrar lechuga en casa?
          </h2>

          <p className="mt-4 text-lg leading-8">
            Sembrar lechuga en casa te da hojas frescas para ensaladas,
            sándwiches, wraps, bowls y comidas rápidas. También es un cultivo
            excelente para aprender porque crece rápido, no necesita raíces
            profundas y se adapta bien a macetas, cajones, camas elevadas,
            hidroponía sencilla y huertos pequeños.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-xl border border-green-100 bg-[#f4f1e8] p-4">
              <h3 className="font-bold">Cosecha rápida</h3>
              <p className="mt-2 leading-7">
                Muchas variedades permiten cortar hojas jóvenes en 25 a 35 días.
              </p>
            </div>

            <div className="rounded-xl border border-green-100 bg-[#f4f1e8] p-4">
              <h3 className="font-bold">Poco espacio</h3>
              <p className="mt-2 leading-7">
                Crece bien en macetas, jardineras, mesas de cultivo y espacios
                reducidos.
              </p>
            </div>

            <div className="rounded-xl border border-green-100 bg-[#f4f1e8] p-4">
              <h3 className="font-bold">Cultivo educativo</h3>
              <p className="mt-2 leading-7">
                Es ideal para principiantes porque responde rápido al riego, la
                luz y el manejo.
              </p>
            </div>

            <div className="rounded-xl border border-green-100 bg-[#f4f1e8] p-4">
              <h3 className="font-bold">Producción continua</h3>
              <p className="mt-2 leading-7">
                Si siembras poco cada semana, puedes tener hojas frescas casi
                siempre.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-5 text-lg leading-8">
          <h2 className="text-3xl font-bold">
            Qué necesita la lechuga para crecer bien
          </h2>

          <p>
            La lechuga no es complicada, pero sí es sensible al estrés. Crece
            mejor cuando tiene humedad constante, buena luz sin exceso de calor,
            suelo suelto y nutrientes disponibles.
          </p>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <h3 className="text-xl font-bold">Luz</h3>
              <p className="mt-2 leading-7">
                En clima suave puede recibir varias horas de sol. En calor
                fuerte, es mejor sol de mañana y sombra parcial por la tarde.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <h3 className="text-xl font-bold">Agua</h3>
              <p className="mt-2 leading-7">
                Necesita humedad constante. La tierra debe mantenerse fresca,
                pero nunca encharcada.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <h3 className="text-xl font-bold">Sustrato</h3>
              <p className="mt-2 leading-7">
                Usa mezcla suelta, rica en materia orgánica, con buen drenaje y
                buena retención de humedad.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <h3 className="text-xl font-bold">Temperatura</h3>
              <p className="mt-2 leading-7">
                El calor acelera la floración. Por eso hay que usar sombra,
                riego correcto y variedades más resistentes.
              </p>
            </div>
          </div>
        </section>

        <div className="overflow-hidden rounded-2xl bg-white shadow-sm">
          <Image
            src="/images/lechuga-sombra-calor.png"
            alt="Lechugas creciendo bajo sombra parcial para protegerlas del calor"
            width={1200}
            height={800}
            className="mx-auto h-[450px] w-auto rounded-2xl object-cover shadow-md"
          />
        </div>

        <section className="space-y-5 text-lg leading-8">
          <h2 className="text-3xl font-bold">
            Mejores tipos de lechuga para clima caliente
          </h2>

          <p>
            No todas las lechugas toleran el calor igual. Para sembrar durante
            todo el año, conviene usar variedades de hoja suelta, romanas
            resistentes y tipos conocidos por aguantar mejor antes de espigarse.
          </p>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <div className="grid gap-4 md:grid-cols-2">
              <p>
                <strong>Lechuga romana:</strong> buena estructura, hojas firmes
                y mejor tolerancia que muchas lechugas de cabeza.
              </p>

              <p>
                <strong>Lechuga de hoja suelta:</strong> crece rápido y permite
                cosechar hojas poco a poco.
              </p>

              <p>
                <strong>Batavia:</strong> suele tolerar mejor cambios de clima y
                mantiene buena textura.
              </p>

              <p>
                <strong>Variedades slow bolt:</strong> tardan más en florecer.
              </p>
            </div>
          </div>
        </section>

      </article>
    </main>
  );
}