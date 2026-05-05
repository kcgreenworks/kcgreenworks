import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Cómo sembrar hierba buena o menta en casa paso a paso",
  description:
    "Guía práctica para sembrar hierba buena o menta en casa desde esqueje, semilla o planta. Aprende sustrato, riego, sol, poda, errores comunes y cosecha.",
};

export default function HierbaBuenaMentaPage() {
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
            Cómo sembrar hierba buena o menta en casa paso a paso
          </h1>

          <p className="text-lg leading-8 text-[#405040]">
            Aprende cómo sembrar hierba buena en casa de una forma simple,
            práctica y realista. Esta planta es perfecta para empezar porque
            crece rápido, huele brutal, sirve para cocinar, para bebidas, para
            remedios caseros y no necesita un terreno grande.
          </p>
        </header>

        <div className="overflow-hidden rounded-2xl bg-white shadow-sm">
          <Image
            src="/hierbabuena1.JPEG"
            alt="Planta de hierba buena o menta creciendo en una maceta"
            width={1200}
            height={800}
            className="h-auto w-full object-cover"
            priority
          />
        </div>

        <section className="space-y-5 text-lg leading-8">
          <p>
            La hierba buena, también conocida como menta, es una de esas plantas
            que vale la pena tener en casa. No ocupa mucho espacio, se adapta
            bien a macetas y puede producir hojas frescas durante casi todo el
            año si la cuidas correctamente.
          </p>

          <p>
            Lo importante es entender algo desde el principio: la menta es fácil,
            pero también es bien invasiva. Si la siembras directo en el patio,
            puede regarse por todos lados. Por eso, para la mayoría de las
            personas, lo más inteligente es sembrarla en maceta.
          </p>
        </section>

        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-3xl font-bold">
            La mejor forma de sembrarla
          </h2>

          <p className="text-lg leading-8">
            La forma más rápida y segura de sembrar hierba buena es usando un
            esqueje. Un esqueje es un pedazo de tallo de una planta saludable.
            Lo pones en agua o directamente en tierra húmeda, y en pocos días
            empieza a sacar raíces.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="rounded-xl border border-green-100 bg-[#f4f1e8] p-4">
              <h3 className="font-bold">Desde esqueje</h3>
              <p className="mt-2 text-sm leading-6">
                Es la mejor opción. Crece rápido, es fácil y casi siempre
                funciona.
              </p>
            </div>

            <div className="rounded-xl border border-green-100 bg-[#f4f1e8] p-4">
              <h3 className="font-bold">Desde planta comprada</h3>
              <p className="mt-2 text-sm leading-6">
                Ideal si quieres resultados inmediatos y menos complicación.
              </p>
            </div>

            <div className="rounded-xl border border-green-100 bg-[#f4f1e8] p-4">
              <h3 className="font-bold">Desde semilla</h3>
              <p className="mt-2 text-sm leading-6">
                Se puede, pero tarda más y necesita más paciencia.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-3xl font-bold">
            Materiales que necesitas
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <h3 className="text-xl font-bold">Maceta</h3>
              <p className="mt-2 leading-7">
                Usa una maceta de mínimo 8 a 10 pulgadas. Tiene que tener
                drenaje abajo. Si el agua se queda empozada, las raíces se
                pudren.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <h3 className="text-xl font-bold">Tierra o sustrato</h3>
              <p className="mt-2 leading-7">
                La menta prefiere tierra suelta, rica en materia orgánica y que
                drene bien. Puedes usar potting mix y añadir compost si tienes.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <h3 className="text-xl font-bold">Agua</h3>
              <p className="mt-2 leading-7">
                Le gusta la humedad, pero no el exceso. La tierra debe sentirse
                húmeda, no encharcada.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <h3 className="text-xl font-bold">Luz</h3>
              <p className="mt-2 leading-7">
                Necesita buena claridad. Puede recibir sol suave por la mañana,
                pero en lugares muy calientes conviene darle sombra parcial.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-5 text-lg leading-8">
          <h2 className="text-3xl font-bold">
            Paso a paso para sembrar hierba buena desde esqueje
          </h2>

          <h3 className="text-2xl font-bold">1. Corta un tallo saludable</h3>
          <p>
            Busca un tallo verde, fuerte y sin manchas. Corta un pedazo de 4 a
            6 pulgadas. Quita las hojas de la parte de abajo para que esa zona
            pueda producir raíces.
          </p>

          <h3 className="text-2xl font-bold">2. Ponlo en agua o directo en tierra</h3>
          <p>
            Si lo pones en agua, usa un vaso limpio y cambia el agua cada dos
            días. En una semana más o menos deberías ver raíces. Si lo pones
            directo en tierra, mantén el sustrato húmedo los primeros días.
          </p>

          <h3 className="text-2xl font-bold">3. Prepara la maceta</h3>
          <p>
            Llena la maceta con sustrato suelto. No aprietes demasiado la
            tierra. Las raíces necesitan oxígeno y espacio para crecer.
          </p>

          <h3 className="text-2xl font-bold">4. Siembra el esqueje</h3>
          <p>
            Haz un huequito en el centro, coloca el esqueje y cubre suavemente
            la base. Riega bien, pero sin convertir la maceta en un pantano.
          </p>

          <h3 className="text-2xl font-bold">5. Ubícala en el sitio correcto</h3>
          <p>
            Ponla en un lugar con buena luz. Si estás en Florida, Puerto Rico o
            un sitio bien caliente, evita el sol fuerte de la tarde porque puede
            quemar las hojas.
          </p>
        </section>

        <div className="overflow-hidden rounded-2xl bg-white shadow-sm">
          <Image
            src="/hierbabuena2.JPEG"
            alt="Esqueje de hierba buena desarrollando raíces"
            width={1200}
            height={800}
            className="h-auto w-full object-cover"
          />
        </div>

        <section className="space-y-5 text-lg leading-8">
          <h2 className="text-3xl font-bold">
            Cómo cuidar la hierba buena después de sembrarla
          </h2>

          <p>
            El cuidado principal es mantener balance. No la dejes seca por
            demasiado tiempo, pero tampoco la ahogues. Mete un dedo en la tierra:
            si la primera pulgada está seca, riega. Si todavía está húmeda,
            espera.
          </p>

          <p>
            La poda es clave. Mientras más cortes la planta correctamente, más
            se estimula a crecer frondosa. No arranques hojas sueltas todo el
            tiempo. Mejor corta tallitos completos por encima de un nudo, que es
            donde salen nuevas ramas.
          </p>

          <p>
            Si la planta empieza a florecer, puedes cortar las flores si quieres
            mantener mejor sabor en las hojas. Cuando la menta florece, parte de
            su energía se va a la flor y puede cambiar un poco el sabor.
          </p>
        </section>

        <section className="rounded-2xl bg-green-900 p-6 text-white">
          <h2 className="text-3xl font-bold">
            Consejo práctico
          </h2>

          <p className="mt-4 text-lg leading-8">
            Si quieres tener menta fresca siempre, no dependas de una sola
            planta. Ten dos o tres macetas pequeñas. Mientras una se recupera
            después de cosechar, usas la otra. Eso te da producción más
            constante y evita que acabes pelando una sola planta.
          </p>
        </section>

        <section className="space-y-5 text-lg leading-8">
          <h2 className="text-3xl font-bold">
            Errores comunes al sembrar menta
          </h2>

          <p>
            El primer error es sembrarla directo en el patio sin control. La
            menta puede regarse demasiado y después es difícil eliminarla.
          </p>

          <p>
            El segundo error es ponerla en una maceta sin drenaje. Aunque le
            gusta la humedad, las raíces necesitan respirar. Agua estancada es
            receta para pudrición.
          </p>

          <p>
            El tercer error es dejarla bajo sol fuerte todo el día. En climas
            calientes, eso puede quemarla, ponerla amarilla o detener su
            crecimiento.
          </p>

          <p>
            El cuarto error es no podarla. Una menta sin poda se vuelve larga,
            débil y menos productiva. Una menta podada correctamente se pone más
            compacta y llena.
          </p>
        </section>

        <div className="overflow-hidden rounded-2xl bg-white shadow-sm">
          <Image
            src="/hierbabuena3.JPEG"
            alt="Hojas frescas de hierba buena cosechadas para usar en la cocina"
            width={1200}
            height={800}
            className="h-auto w-full object-cover"
          />
        </div>

        <section className="space-y-5 text-lg leading-8">
          <h2 className="text-3xl font-bold">
            Cuándo y cómo cosechar
          </h2>

          <p>
            Puedes empezar a cosechar cuando la planta tenga varias ramas fuertes
            y se vea establecida. Corta por encima de un par de hojas para que
            desde ahí salgan nuevos brotes.
          </p>

          <p>
            Para usarla fresca, corta lo que necesites y lávala antes de usar.
            Puedes usarla en té, limonada, mojitos, ensaladas, aguas frescas,
            adobos suaves o como toque aromático en la cocina.
          </p>

          <p>
            Si tienes demasiada producción, puedes secar las hojas en un lugar
            ventilado y guardarlas en un frasco limpio. También puedes congelar
            hojas en cubitos de hielo con agua para usarlas luego en bebidas.
          </p>
        </section>

        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-3xl font-bold">
            Resumen rápido
          </h2>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <p>
              <strong>Mejor método:</strong> esqueje o planta comprada.
            </p>
            <p>
              <strong>Maceta:</strong> 8 a 10 pulgadas mínimo.
            </p>
            <p>
              <strong>Luz:</strong> claridad fuerte o sol suave.
            </p>
            <p>
              <strong>Riego:</strong> tierra húmeda, no encharcada.
            </p>
            <p>
              <strong>Poda:</strong> frecuente para que crezca tupida.
            </p>
            <p>
              <strong>Advertencia:</strong> mejor en maceta porque se riega fácil.
            </p>
          </div>
        </section>

        <section className="space-y-5 text-lg leading-8">
          <h2 className="text-3xl font-bold">
            Conclusión
          </h2>

          <p>
            Sembrar hierba buena en casa es de las mejores formas de empezar un
            pequeño huerto. No necesitas mucho espacio, no necesitas equipo caro
            y los resultados se ven rápido. Con una buena maceta, tierra suelta,
            riego moderado, luz correcta y poda constante, puedes tener menta
            fresca casi todo el año.
          </p>

          <p>
            Empieza con un esqueje, ponlo en una maceta con buen drenaje y dale
            seguimiento. En pocas semanas vas a tener una planta útil, bonita y
            lista para usar en la cocina.
          </p>
        </section>
      </article>
    </main>
  );
}