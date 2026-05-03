import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Cómo sembrar lechuga todo el año incluso en clima caliente",
  description:
    "Guía completa para sembrar lechuga en casa durante todo el año, incluso en temporadas de calor fuerte. Aprende variedades, sustrato, riego, sombra, cosecha y errores comunes.",
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
            className="h-auto w-full object-cover"
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
            className="h-auto w-full object-cover"
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
                <strong>Lechuga romana:</strong> buena estructura, hojas firmes y
                mejor tolerancia que muchas lechugas de cabeza.
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
                <strong>Variedades “slow bolt”:</strong> son seleccionadas para
                tardar más en florecer.
              </p>
            </div>
          </div>

          <p>
            Para principiantes, la mejor opción suele ser lechuga de hoja suelta.
            No tienes que esperar a que forme una cabeza completa. Cortas hojas
            externas y la planta sigue produciendo.
          </p>
        </section>

        <section className="rounded-2xl bg-green-900 p-6 text-white">
          <h2 className="text-3xl font-bold">
            Regla clave para sembrar en calor
          </h2>

          <p className="mt-4 text-lg leading-8">
            No trates la lechuga como una planta de sol fuerte. En temporadas
            calientes, dale luz brillante, sol suave de mañana, sombra en las
            horas más duras y agua constante. Ese manejo vale más que cualquier
            fertilizante.
          </p>
        </section>

        <section className="space-y-5 text-lg leading-8">
          <h2 className="text-3xl font-bold">
            Cómo sembrar lechuga paso a paso
          </h2>

          <h3 className="text-2xl font-bold">1. Escoge el lugar correcto</h3>
          <p>
            Busca un área con buena claridad. Si el sol es fuerte, evita el sol
            directo de la tarde. Un lugar con sol temprano y sombra parcial
            después del mediodía funciona mucho mejor.
          </p>

          <h3 className="text-2xl font-bold">2. Prepara el recipiente o la cama</h3>
          <p>
            Puedes sembrar en macetas, bandejas, jardineras, camas elevadas o
            directo en tierra. La profundidad mínima recomendada es de 6 a 8
            pulgadas. Lo más importante es que drene bien.
          </p>

          <h3 className="text-2xl font-bold">3. Usa un buen sustrato</h3>
          <p>
            Una mezcla práctica sería: tierra para macetas, compost maduro y un
            material que ayude al drenaje como perlita, fibra de coco o cascarilla
            de arroz. La mezcla debe sentirse suelta, no compactada.
          </p>

          <h3 className="text-2xl font-bold">4. Siembra superficial</h3>
          <p>
            La semilla de lechuga es pequeña y no debe enterrarse profundo.
            Colócala sobre la superficie y cúbrela con una capa muy fina de
            sustrato. Mantén humedad constante hasta que germine.
          </p>

          <h3 className="text-2xl font-bold">5. Riega con cuidado</h3>
          <p>
            Usa riego suave para no mover las semillas. Un atomizador, regadera
            fina o manguera con presión baja funciona mejor que un chorro fuerte.
          </p>

          <h3 className="text-2xl font-bold">6. Aclara las plantas</h3>
          <p>
            Cuando las plántulas tengan varias hojas, deja espacio entre ellas.
            Si están demasiado pegadas, compiten por agua, luz y nutrientes. Para
            hoja suelta, deja unas 6 a 8 pulgadas. Para romana, deja más espacio.
          </p>
        </section>

        <div className="overflow-hidden rounded-2xl bg-white shadow-sm">
          <Image
            src="/images/lechuga-siembra-semillas.png"
            alt="Manos sembrando semillas de lechuga en una bandeja con sustrato"
            width={1200}
            height={800}
            className="h-auto w-full object-cover"
          />
        </div>

        <section className="space-y-5 text-lg leading-8">
          <h2 className="text-3xl font-bold">
            Cómo mantener lechuga productiva todo el año
          </h2>

          <p>
            La clave es no depender de una sola siembra. Si siembras todo de una
            vez, tendrás mucha lechuga al mismo tiempo y después nada. Lo correcto
            es sembrar en sucesión.
          </p>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <h3 className="text-2xl font-bold">Siembra escalonada</h3>
            <p className="mt-3 leading-8">
              Siembra una pequeña cantidad cada 7 a 14 días. Así tendrás plantas
              jóvenes, plantas listas para cosecha y plantas en recuperación al
              mismo tiempo.
            </p>
          </div>

          <p>
            En calor fuerte, es mejor cosechar hojas jóvenes. Mientras más tiempo
            dejes la planta expuesta al calor, más riesgo hay de que espigue y se
            ponga amarga.
          </p>
        </section>

        <section className="space-y-5 text-lg leading-8">
          <h2 className="text-3xl font-bold">
            Cómo proteger la lechuga del calor
          </h2>

          <p>
            El manejo del calor es el punto más importante de esta guía. Si la
            planta se calienta demasiado, se estresa, crece mal y florece antes
            de tiempo.
          </p>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <h3 className="text-xl font-bold">Usa malla sombra</h3>
              <p className="mt-2 leading-7">
                Una malla sombra de 30% a 50% ayuda a bajar la intensidad del sol
                sin dejar la planta a oscuras.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <h3 className="text-xl font-bold">Riega temprano</h3>
              <p className="mt-2 leading-7">
                Riega por la mañana para que la planta tenga humedad antes del
                calor fuerte.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <h3 className="text-xl font-bold">Usa mulch</h3>
              <p className="mt-2 leading-7">
                Una capa fina de hojas secas, paja o fibra ayuda a mantener la
                raíz más fresca.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <h3 className="text-xl font-bold">Evita macetas negras al sol</h3>
              <p className="mt-2 leading-7">
                Las macetas oscuras se calientan demasiado. Si las usas, dales
                sombra o colócalas dentro de otro recipiente más claro.
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-3xl font-bold">
            Nutrientes que necesita la lechuga
          </h2>

          <p className="mt-4 text-lg leading-8">
            La lechuga produce hojas, así que necesita un suministro moderado y
            constante de nutrientes. No requiere fertilización agresiva. Si te
            pasas, puedes producir hojas débiles, exceso de sales o crecimiento
            desbalanceado.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <p>
              <strong>Nitrógeno:</strong> ayuda al desarrollo de hojas verdes y
              crecimiento vegetativo.
            </p>

            <p>
              <strong>Fósforo:</strong> apoya raíces sanas y desarrollo inicial.
            </p>

            <p>
              <strong>Potasio:</strong> ayuda al vigor general y manejo del
              estrés.
            </p>

            <p>
              <strong>Calcio:</strong> importante para hojas firmes y crecimiento
              saludable.
            </p>

            <p>
              <strong>Magnesio:</strong> forma parte de la clorofila y ayuda al
              color verde.
            </p>

            <p>
              <strong>Materia orgánica:</strong> mejora la estructura, humedad y
              vida microbiana del suelo.
            </p>
          </div>
        </section>

        <section className="space-y-5 text-lg leading-8">
          <h2 className="text-3xl font-bold">
            Fertilización recomendada
          </h2>

          <p>
            Si usas buen compost o humus de lombriz en el sustrato, la lechuga
            puede crecer muy bien con fertilización ligera. Puedes aplicar té de
            compost, lixiviado bien diluido o fertilizante orgánico suave cada 2
            a 3 semanas.
          </p>

          <p>
            Evita aplicar fertilizantes fuertes en horas de calor. Fertiliza
            temprano en la mañana o al final de la tarde, y siempre con la tierra
            húmeda.
          </p>
        </section>

        <section className="rounded-2xl bg-yellow-100 p-6 text-[#3a2a00] shadow-sm">
          <h2 className="text-3xl font-bold">
            Importante si usas lixiviado o fertilizantes líquidos
          </h2>

          <p className="mt-4 text-lg leading-8">
            No apliques lixiviado puro. Para lechuga, usa una dilución suave,
            especialmente si hace calor. Una proporción segura para empezar es 1
            parte de lixiviado en 20 partes de agua. Aplica al suelo, no
            directamente sobre las hojas que vas a comer.
          </p>
        </section>

        <section className="space-y-5 text-lg leading-8">
          <h2 className="text-3xl font-bold">
            Cómo cosechar para que siga produciendo
          </h2>

          <p>
            La forma más práctica es cosechar hoja por hoja. Corta las hojas
            externas y deja el centro vivo. Así la planta sigue sacando hojas
            nuevas.
          </p>

          <p>
            Usa tijeras limpias o corta con cuidado en la base de la hoja. No
            arranques la planta completa si quieres que siga produciendo.
          </p>

          <p>
            Cosecha temprano en la mañana. Las hojas estarán más firmes, frescas
            y con mejor textura.
          </p>
        </section>

        <div className="overflow-hidden rounded-2xl bg-white shadow-sm">
          <Image
            src="/images/lechuga-cosecha-hojas.png"
            alt="Persona cosechando hojas externas de lechuga en un huerto casero"
            width={1200}
            height={800}
            className="h-auto w-full object-cover"
          />
        </div>

        <section className="space-y-5 text-lg leading-8">
          <h2 className="text-3xl font-bold">
            Problemas comunes y cómo corregirlos
          </h2>

          <h3 className="text-2xl font-bold">La lechuga se pone amarga</h3>
          <p>
            Normalmente pasa por calor, falta de agua o porque la planta está
            cerca de espigarse. Cosecha más joven, usa sombra parcial y mantén
            humedad estable.
          </p>

          <h3 className="text-2xl font-bold">Las hojas se marchitan al mediodía</h3>
          <p>
            Puede ser calor fuerte o raíz seca. Revisa la humedad del sustrato y
            añade sombra durante las horas más intensas.
          </p>

          <h3 className="text-2xl font-bold">La planta crece larga y débil</h3>
          <p>
            Le falta luz. Busca un lugar con más claridad, pero sin exponerla al
            sol fuerte de la tarde.
          </p>

          <h3 className="text-2xl font-bold">Las semillas no germinan</h3>
          <p>
            La lechuga germina mal con demasiado calor. Usa bandejas en un área
            fresca, mantén humedad constante y evita ponerlas bajo sol directo
            fuerte mientras germinan.
          </p>

          <h3 className="text-2xl font-bold">Aparecen hongos o pudrición</h3>
          <p>
            Hay exceso de humedad, poca ventilación o demasiada sombra. Mejora el
            drenaje, separa las plantas y riega menos frecuente.
          </p>
        </section>

        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-3xl font-bold">
            Resumen rápido
          </h2>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <p>
              <strong>Mejor variedad:</strong> hoja suelta, romana resistente o
              slow bolt.
            </p>
            <p>
              <strong>Profundidad:</strong> 6 a 8 pulgadas mínimo.
            </p>
            <p>
              <strong>Luz:</strong> sol suave de mañana y sombra parcial en
              calor fuerte.
            </p>
            <p>
              <strong>Riego:</strong> humedad constante sin encharcar.
            </p>
            <p>
              <strong>Siembra:</strong> superficial, sin enterrar profundo.
            </p>
            <p>
              <strong>Producción continua:</strong> siembra cada 7 a 14 días.
            </p>
            <p>
              <strong>Cosecha:</strong> hojas externas, dejando el centro vivo.
            </p>
            <p>
              <strong>Error mayor:</strong> dejarla bajo sol fuerte todo el día.
            </p>
          </div>
        </section>

        <section className="space-y-5 text-lg leading-8">
          <h2 className="text-3xl font-bold">
            Conclusión
          </h2>

          <p>
            Sembrar lechuga todo el año es posible si entiendes cómo manejar el
            calor. No se trata solo de poner semillas en tierra. Se trata de
            escoger variedades adecuadas, sembrar en sucesión, mantener humedad
            constante, proteger del sol fuerte y cosechar en el momento correcto.
          </p>

          <p>
            Para empezar, siembra lechuga de hoja suelta en una maceta o cama con
            buen sustrato, dale sol de mañana, sombra parcial por la tarde y riego
            suave. Cosecha hojas jóvenes y vuelve a sembrar cada una o dos
            semanas. Esa es la manera más sencilla de tener lechuga fresca de
            forma constante.
          </p>
        </section>
      </article>
    </main>
  );
}