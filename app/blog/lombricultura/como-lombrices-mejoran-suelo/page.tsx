import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Cómo las lombrices mejoran el suelo: explicación real del proceso",
  description:
    "Guía clara sobre cómo las lombrices mejoran el suelo, qué hacen dentro de la tierra, qué componentes producen, para qué sirve el humus y cómo usarlo correctamente.",
};

export default function ComoLombricesMejoranSueloPage() {
  return (
    <main className="min-h-screen bg-[#f4f1e8] px-6 py-12 text-[#1f2a1f]">
      <article className="mx-auto max-w-4xl space-y-10">
        <Link
          href="/blog/lombricultura"
          className="text-sm font-semibold text-green-800 hover:underline"
        >
          ← Volver a Lombricultura
        </Link>

        <header className="space-y-5">
          <p className="text-sm font-semibold uppercase tracking-wide text-green-800">
            Suelo vivo y fertilidad natural
          </p>

          <h1 className="text-4xl font-bold leading-tight md:text-5xl">
            Cómo las lombrices mejoran el suelo: explicación real del proceso
          </h1>

          <p className="text-lg leading-8 text-[#405040]">
            Cuando yo empecé a trabajar con lombrices, escuché muchas veces que eran casi mágicas. Según mi experiencia, la realidad es todavía más impresionante. Las lombrices transforman materia orgánica, mejoran la estructura del suelo, estimulan la actividad microbiana y producen humus, uno de los materiales más valiosos que he utilizado para cultivar. En esta guía te voy a explicar, tal como yo lo he visto ocurrir una y otra vez, qué pasa realmente debajo de la tierra y por qué un suelo con lombrices se comporta diferente a uno que no las tiene.
          </p>
        </header>

        <div className="overflow-hidden rounded-2xl bg-white shadow-sm">
          <Image
            src="/images/lombrices-mejoran-suelo-hero.png"
            alt="Lombrices trabajando en suelo oscuro y fértil con raíces de plantas"
            width={1200}
            height={800}
            className="h-auto w-full object-cover"
            priority
          />
        </div>

        <section className="space-y-5 text-lg leading-8">
          <h2 className="text-3xl font-bold">
            Primero: ¿por qué las lombrices son tan importantes?
          </h2>

          <p>
            Una de las primeras cosas que aprendí fue que un suelo sano no es solamente tierra. Cuando uno escarba en un suelo verdaderamente vivo encuentra raíces, microorganismos, humedad, materia orgánica y una enorme cantidad de actividad biológica. Las lombrices forman parte de ese equipo silencioso que trabaja las veinticuatro horas del día.
          </p>

          <p>
            Su función principal es procesar material orgánico y convertirlo en
            una forma más estable, más fina y más fácil de integrar al suelo. En
            ese proceso mejoran la estructura física, la disponibilidad de
            nutrientes y la actividad biológica.
          </p>

          <p>
            Dicho simple: las lombrices ayudan a convertir basura orgánica en
            suelo vivo.
          </p>
        </section>

        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-3xl font-bold">
            El proceso real: qué hacen las lombrices paso a paso
          </h2>

          <div className="mt-6 space-y-6 text-lg leading-8">
            <div>
              <h3 className="text-2xl font-bold">1. Consumen materia orgánica</h3>
              <p className="mt-2">
                Las lombrices comen restos vegetales en descomposición, hojas,
                cartón húmedo, microorganismos, hongos y partículas del suelo.
                No comen la comida fresca como tal de inmediato; primero los
                microorganismos empiezan a descomponerla y luego la lombriz la
                procesa.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold">2. Trituran y mezclan el material</h3>
              <p className="mt-2">
                Al pasar por su sistema digestivo, el material se fragmenta, se
                mezcla con enzimas y se transforma. Esto aumenta la superficie
                disponible para que bacterias y hongos beneficiosos sigan
                trabajando.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold">3. Producen humus de lombriz</h3>
              <p className="mt-2">
                El resultado final son excretas finas, oscuras y estables,
                conocidas como humus de lombriz o vermicompost. Este humus es
                rico en materia orgánica estabilizada y ayuda a mejorar la
                fertilidad del suelo.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold">4. Crean túneles y poros</h3>
              <p className="mt-2">
                Al moverse, las lombrices abren canales en el suelo. Esos canales
                permiten que entre oxígeno, que el agua penetre mejor y que las
                raíces encuentren caminos más fáciles para crecer.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold">5. Activan la vida microbiana</h3>
              <p className="mt-2">
                Las lombrices no trabajan solas. Su presencia favorece bacterias,
                hongos y otros microorganismos que participan en la liberación de
                nutrientes y en la salud general del suelo.
              </p>
            </div>
          </div>
        </section>

        <div className="overflow-hidden rounded-2xl bg-white shadow-sm">
          <Image
            src="/images/lombrices-proceso-suelo.png"
            alt="Diagrama del proceso de las lombrices transformando materia orgánica en humus"
            width={1200}
            height={800}
            className="h-auto w-full object-cover"
          />
        </div>

        <section className="space-y-5 text-lg leading-8">
          <h2 className="text-3xl font-bold">
            Qué componentes aportan al suelo
          </h2>

          <p>
            El humus producido por lombrices no tiene una composición idéntica
            siempre. Depende de la alimentación, humedad, temperatura, tipo de
            cama y madurez del proceso. Pero, en general, puede aportar estos
            componentes:
          </p>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <h3 className="text-xl font-bold">Materia orgánica estable</h3>
              <p className="mt-2 leading-7">
                Mejora la textura del suelo, aumenta la retención de humedad y
                ayuda a mantener nutrientes disponibles por más tiempo.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <h3 className="text-xl font-bold">Nutrientes principales</h3>
              <p className="mt-2 leading-7">
                Puede contener nitrógeno, fósforo y potasio en formas más
                accesibles para las plantas, aunque no debe verse como fertilizante
                fuerte tipo químico.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <h3 className="text-xl font-bold">Micronutrientes</h3>
              <p className="mt-2 leading-7">
                Puede aportar hierro, zinc, manganeso, cobre, boro, calcio,
                magnesio y otros elementos necesarios en pequeñas cantidades.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <h3 className="text-xl font-bold">Microorganismos beneficiosos</h3>
              <p className="mt-2 leading-7">
                Un humus bien hecho puede traer bacterias y hongos útiles que
                ayudan a activar la vida del suelo.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <h3 className="text-xl font-bold">Ácidos húmicos y fúlvicos</h3>
              <p className="mt-2 leading-7">
                Ayudan a mejorar la disponibilidad de nutrientes y la interacción
                entre suelo, raíces y microorganismos.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <h3 className="text-xl font-bold">Enzimas y compuestos bioactivos</h3>
              <p className="mt-2 leading-7">
                Participan en procesos biológicos que ayudan a descomponer
                materia orgánica y liberar nutrientes gradualmente.
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-2xl bg-green-900 p-6 text-white">
          <h2 className="text-3xl font-bold">
            Lo más importante
          </h2>

          <p className="mt-4 text-lg leading-8">
            Las lombrices mejoran el suelo de tres formas principales: físicamente,
            porque lo airean y lo sueltan; químicamente, porque ayudan a liberar
            nutrientes; y biológicamente, porque favorecen microorganismos útiles.
            Esa combinación es lo que crea suelo fértil de verdad.
          </p>
        </section>

        <section className="space-y-5 text-lg leading-8">
          <h2 className="text-3xl font-bold">
            Para qué sirve tener lombrices en el sistema
          </h2>

          <p>
            Tener lombrices en una vermicompostera o en un suelo saludable sirve
            para transformar residuos orgánicos en un recurso agrícola. En vez de
            botar cáscaras, hojas y restos vegetales, puedes convertirlos en humus
            que ayuda a tus plantas.
          </p>

          <p>
            En huertos caseros, esto es valioso porque reduce desperdicio, mejora
            el suelo y te permite depender menos de productos comprados.
          </p>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <h3 className="text-2xl font-bold">Beneficios prácticos</h3>

            <div className="mt-5 grid gap-3 md:grid-cols-2">
              <p>Mejora la estructura del suelo.</p>
              <p>Aumenta la retención de humedad.</p>
              <p>Ayuda a que las raíces crezcan mejor.</p>
              <p>Activa microorganismos beneficiosos.</p>
              <p>Recicla residuos orgánicos.</p>
              <p>Produce humus útil para macetas y huertos.</p>
              <p>Reduce compactación.</p>
              <p>Mejora la disponibilidad de nutrientes.</p>
            </div>
          </div>
        </section>

        <div className="overflow-hidden rounded-2xl bg-white shadow-sm">
          <Image
            src="/images/humus-lombriz-suelo.png"
            alt="Humus de lombriz oscuro aplicado en una cama de cultivo"
            width={1200}
            height={800}
            className="h-auto w-full object-cover"
          />
        </div>

        <section className="space-y-5 text-lg leading-8">
          <h2 className="text-3xl font-bold">
            Cómo usar el humus de lombriz correctamente
          </h2>

          <p>
            El humus de lombriz se usa como mejorador de suelo. No tienes que
            echar cantidades exageradas. Lo ideal es mezclarlo con tierra o
            aplicarlo como capa superficial alrededor de las plantas.
          </p>

          <h3 className="text-2xl font-bold">En macetas</h3>
          <p>
            Mezcla entre 10% y 20% de humus de lombriz con el sustrato. Por
            ejemplo, si preparas una maceta, puedes usar 8 partes de tierra o
            potting mix y 2 partes de humus.
          </p>

          <h3 className="text-2xl font-bold">En huertos</h3>
          <p>
            Aplica una capa de 1 a 2 pulgadas sobre la cama de cultivo y mézclala
            suavemente con la parte superior del suelo. No hace falta enterrarlo
            profundo.
          </p>

          <h3 className="text-2xl font-bold">En plantas establecidas</h3>
          <p>
            Añade un puñado o una capa fina alrededor de la planta, evitando pegarlo
            directamente al tallo. Luego riega para que la vida microbiana se
            active.
          </p>

          <h3 className="text-2xl font-bold">En semilleros</h3>
          <p>
            Usa poco. El humus ayuda, pero un semillero necesita un sustrato fino,
            liviano y con buen drenaje. Demasiado material pesado puede retener
            humedad excesiva.
          </p>
        </section>

        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-3xl font-bold">
            Cómo mantener lombrices saludables
          </h2>

          <div className="mt-6 space-y-5 text-lg leading-8">
            <p>
              Para que las lombrices trabajen bien, necesitan humedad, oxígeno,
              sombra, alimento adecuado y temperatura moderada. Si el sistema se
              calienta demasiado, se seca o se pudre, las lombrices se estresan o
              mueren.
            </p>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-xl bg-[#f4f1e8] p-4">
                <h3 className="font-bold">Humedad correcta</h3>
                <p className="mt-2 leading-7">
                  La cama debe sentirse como una esponja exprimida: húmeda, pero
                  no chorreando.
                </p>
              </div>

              <div className="rounded-xl bg-[#f4f1e8] p-4">
                <h3 className="font-bold">Buena ventilación</h3>
                <p className="mt-2 leading-7">
                  Necesitan oxígeno. Si el sistema se compacta o se empapa, se
                  vuelve anaeróbico y huele mal.
                </p>
              </div>

              <div className="rounded-xl bg-[#f4f1e8] p-4">
                <h3 className="font-bold">Alimento balanceado</h3>
                <p className="mt-2 leading-7">
                  Usa restos vegetales, hojas, cartón húmedo y pequeñas cantidades
                  de borra de café. No sobrealimentes.
                </p>
              </div>

              <div className="rounded-xl bg-[#f4f1e8] p-4">
                <h3 className="font-bold">Temperatura moderada</h3>
                <p className="mt-2 leading-7">
                  Evita sol directo fuerte. El calor excesivo puede matar las
                  lombrices rápidamente.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-5 text-lg leading-8">
          <h2 className="text-3xl font-bold">
            Errores comunes
          </h2>

          <h3 className="text-2xl font-bold">Pensar que cualquier lombriz sirve igual</h3>
          <p>
            Para vermicomposta se usan lombrices compostadoras, especialmente la
            lombriz roja californiana. No todas las lombrices trabajan igual ni
            viven bien en recipientes.
          </p>

          <h3 className="text-2xl font-bold">Echar demasiada comida</h3>
          <p>
            Si añades más comida de la que pueden procesar, el material se pudre,
            aparecen moscas y el sistema empieza a oler mal.
          </p>

          <h3 className="text-2xl font-bold">Mantener la cama demasiado mojada</h3>
          <p>
            Las lombrices respiran a través de su piel. Si todo está empapado y
            sin oxígeno, el sistema se vuelve peligroso para ellas.
          </p>

          <h3 className="text-2xl font-bold">Usar el humus antes de tiempo</h3>
          <p>
            El humus listo debe verse oscuro, fino, con olor a tierra húmeda y sin
            pedazos grandes de comida fresca. Si todavía hay material podrido, no
            está listo.
          </p>
        </section>

        <section className="rounded-2xl bg-yellow-100 p-6 text-[#3a2a00] shadow-sm">
          <h2 className="text-3xl font-bold">
            Advertencia importante
          </h2>

          <p className="mt-4 text-lg leading-8">
            Si una lombricera huele a podrido, amoníaco, vinagre fuerte o cloaca,
            algo está mal. Normalmente es exceso de comida, demasiada humedad o
            falta de aire. Una lombricera sana debe oler a tierra húmeda, no a
            basura.
          </p>
        </section>

        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-3xl font-bold">
            Resumen rápido
          </h2>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <p>
              <strong>Qué hacen:</strong> transforman materia orgánica en humus.
            </p>
            <p>
              <strong>Cómo ayudan:</strong> airean, mezclan y activan el suelo.
            </p>
            <p>
              <strong>Qué producen:</strong> humus rico en materia orgánica.
            </p>
            <p>
              <strong>Qué aportan:</strong> nutrientes, microorganismos y estructura.
            </p>
            <p>
              <strong>Uso ideal:</strong> macetas, huertos y plantas establecidas.
            </p>
            <p>
              <strong>Cuidado clave:</strong> humedad sin exceso de agua.
            </p>
            <p>
              <strong>No hacer:</strong> sobrealimentar la lombricera.
            </p>
            <p>
              <strong>Señal buena:</strong> olor a tierra húmeda.
            </p>
          </div>
        </section>

        <section className="space-y-5 text-lg leading-8">
          <h2 className="text-3xl font-bold">
            Conclusión
          </h2>

          <p>
            Las lombrices mejoran el suelo porque aceleran la transformación de
            residuos orgánicos en materia fértil y estable. Al comer, moverse y
            producir humus, cambian la estructura del suelo, aumentan la vida
            microbiana y ayudan a que las plantas tengan un ambiente más sano para
            crecer.
          </p>

          <p>
            Si estás empezando en huertos caseros, entender este proceso te da una
            ventaja enorme. No se trata solo de tener lombrices; se trata de crear
            un sistema equilibrado donde la comida, la humedad, el oxígeno y los
            microorganismos trabajen juntos. Ahí es donde el suelo empieza a
            mejorar de verdad.
          </p>
        </section>
      </article>
    </main>
  );
}