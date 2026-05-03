import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Cómo hacer una vermicompostera casera paso a paso | KCGreenWorks",
  description:
    "Aprende a crear una vermicompostera casera paso a paso y convierte residuos orgánicos en humus natural para tus plantas.",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-[#f4f1e8] px-6 py-12 text-[#1f2a1f]">
      <article className="mx-auto max-w-4xl space-y-10">
        <Link
          href="/blog/lombricultura"
          className="text-sm font-semibold text-green-800 hover:underline"
        >
          ← Volver a lombricultura
        </Link>

        <header className="space-y-5">
          <p className="text-sm font-bold uppercase tracking-wide text-green-800">
            Lombricultura
          </p>

          <h1 className="text-4xl font-bold leading-tight md:text-5xl">
            Cómo hacer una vermicompostera casera paso a paso
          </h1>

          <p className="text-lg leading-8 text-[#4b5a4b]">
            Si quieres reducir basura, aprovechar los residuos de la cocina y
            producir un abono natural para tus plantas, una vermicompostera
            casera es uno de los proyectos más útiles que puedes empezar. No
            necesitas un patio grande ni equipo caro. Con una caja, material
            seco, restos vegetales y lombrices rojas, puedes crear un sistema
            vivo que transforma desperdicios en humus de lombriz.
          </p>
        </header>

        <figure className="mx-auto max-w-2xl">
          <Image
            src="/images/blog/vermicompostera/vermicompostera-caja.png"
            alt="Vermicompostera casera en caja plástica"
            width={900}
            height={600}
            className="h-auto w-full rounded-2xl object-cover shadow-md"
            priority
          />
          <figcaption className="mt-2 text-sm text-[#6b786b]">
            Una vermicompostera casera puede hacerse con una caja plástica,
            cartón húmedo y buena ventilación.
          </figcaption>
        </figure>

        <section className="space-y-4">
          <h2 className="text-3xl font-bold">¿Qué es una vermicompostera casera?</h2>

          <p className="leading-8">
            Una <strong>vermicompostera casera</strong> es un recipiente donde
            las lombrices convierten residuos orgánicos en humus. El humus es un
            abono oscuro, suelto y con olor a tierra limpia. Sirve para mejorar
            la vida del suelo, alimentar plantas y ayudar a que el huerto retenga
            mejor la humedad.
          </p>

          <p className="leading-8">
            La clave está en entender que esto no es un zafacón. Es un pequeño
            ecosistema. Las lombrices trabajan, pero necesitan condiciones
            estables: humedad, aire, sombra, temperatura adecuada y comida en la
            cantidad correcta.
          </p>
        </section>

        <section className="space-y-4 rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-3xl font-bold">Beneficios principales</h2>

          <ul className="list-disc space-y-3 pl-6 leading-8">
            <li>Reduces la basura orgánica que termina en el zafacón.</li>
            <li>Produces humus de lombriz para tiestos, camas elevadas y huertos.</li>
            <li>Mejoras la estructura del suelo sin depender de fertilizantes químicos.</li>
            <li>Aprovechas cáscaras, restos vegetales, café usado y cartón.</li>
            <li>Aprendes un proceso natural que conecta bien con jardinería sostenible.</li>
          </ul>
        </section>

        <section className="space-y-5">
          <h2 className="text-3xl font-bold">
            Materiales para hacer una vermicompostera casera
          </h2>

          <p className="leading-8">
            Para empezar, no necesitas nada complicado. Lo importante es que el
            recipiente tenga ventilación, drenaje y espacio suficiente para que
            las lombrices se muevan.
          </p>

          <ul className="list-disc space-y-3 pl-6 leading-8">
            <li>Una caja plástica con tapa, preferiblemente opaca.</li>
            <li>Lombrices rojas californianas.</li>
            <li>Cartón sin brillo, papel sin tinta fuerte o fibra de coco.</li>
            <li>Un poco de tierra, composta madura o material de jardín limpio.</li>
            <li>Restos de frutas y vegetales picados.</li>
            <li>Taladro, clavo caliente o herramienta para hacer agujeros.</li>
            <li>Bandeja inferior para recoger exceso de líquido, si la caja drena.</li>
          </ul>

          <p className="leading-8">
            Evita cajas transparentes si van a recibir luz. Las lombrices
            prefieren oscuridad. Si solo tienes una caja clara, colócala en un
            lugar oscuro o cúbrela.
          </p>
        </section>

        <section className="space-y-5">
          <h2 className="text-3xl font-bold">Paso a paso</h2>

          <section className="space-y-3">
            <h3 className="text-2xl font-semibold">
              1. Prepara el recipiente
            </h3>

            <p className="leading-8">
              Haz agujeros pequeños en los lados superiores de la caja para que
              entre oxígeno. También puedes hacer algunos agujeros en la tapa.
              Si la caja va a drenar líquido, haz unos pocos agujeros en la base
              y coloca una bandeja debajo.
            </p>

            <p className="leading-8">
              No exageres con los agujeros de abajo. La meta no es que se salga
              todo, sino evitar que el sistema se encharque.
            </p>
          </section>

          <section className="space-y-3">
            <h3 className="text-2xl font-semibold">
              2. Crea la cama de las lombrices
            </h3>

            <p className="leading-8">
              La cama es el material donde las lombrices van a vivir. Puedes usar
              cartón roto en pedazos pequeños, papel sin tinta brillante o fibra
              de coco. Humedécelo hasta que se sienta como una esponja exprimida:
              húmedo, pero sin chorrear agua.
            </p>

            <p className="leading-8">
              Añade un poco de tierra o composta madura. Esto ayuda a introducir
              microorganismos y le da textura al sistema.
            </p>
          </section>

          <figure className="mx-auto max-w-xl">
            <Image
              src="/images/blog/vermicompostera/lombrices-rojas.png"
              alt="Lombrices rojas californianas para vermicompostaje"
              width={800}
              height={550}
              className="h-auto w-full rounded-2xl object-cover shadow-md"
            />
            <figcaption className="mt-2 text-sm text-[#6b786b]">
              Las lombrices rojas californianas son las más usadas porque comen
              rápido y se adaptan bien a sistemas pequeños.
            </figcaption>
          </figure>

          <section className="space-y-3">
            <h3 className="text-2xl font-semibold">
              3. Introduce las lombrices
            </h3>

            <p className="leading-8">
              Coloca las lombrices sobre la cama húmeda y deja que se metan solas.
              No las pongas bajo sol directo. Tampoco las entierres a la fuerza.
              Si el ambiente está correcto, ellas mismas bajan buscando humedad
              y oscuridad.
            </p>

            <p className="leading-8">
              Lo ideal es empezar con poca comida los primeros días. Déjalas
              adaptarse antes de exigirles trabajo completo.
            </p>
          </section>

          <section className="space-y-3">
            <h3 className="text-2xl font-semibold">
              4. Alimenta correctamente
            </h3>

            <p className="leading-8">
              Puedes darle cáscaras de frutas, restos de vegetales, borra de café
              en poca cantidad, hojas secas, pedacitos de cartón húmedo y cáscara
              de huevo triturada. Mientras más pequeño piques los residuos, más
              rápido se procesan.
            </p>

            <p className="leading-8">
              No pongas carne, pescado, lácteos, comida con aceite, comida salada,
              salsas ni cítricos en exceso. Eso atrae plagas, crea mal olor y
              puede dañar el equilibrio de la vermicompostera casera.
            </p>

            <div className="rounded-2xl bg-[#eef6e8] p-5">
              <p className="font-semibold">Regla práctica:</p>
              <p className="mt-2 leading-8">
                Si todavía hay comida visible de la última vez, no añadas más.
                Espera a que el sistema procese primero.
              </p>
            </div>
          </section>

          <section className="space-y-3">
            <h3 className="text-2xl font-semibold">
              5. Mantén humedad, aire y sombra
            </h3>

            <p className="leading-8">
              La humedad correcta se siente como una esponja húmeda. Si aprietas
              un puñado y chorrea agua, está demasiado mojado. Si se desbarata
              seco, le falta humedad.
            </p>

            <p className="leading-8">
              Mantén la caja en sombra, fresca y protegida de lluvia fuerte. En
              climas calientes, un garaje ventilado, balcón con sombra o esquina
              protegida funciona mejor que dejarla al sol.
            </p>
          </section>

          <section className="space-y-3">
            <h3 className="text-2xl font-semibold">
              6. Controla olores y plagas
            </h3>

            <p className="leading-8">
              Una vermicompostera casera saludable no debe oler podrido. Debe
              oler a tierra húmeda. Si huele mal, casi siempre hay demasiada
              comida, exceso de agua o falta de oxígeno.
            </p>

            <p className="leading-8">
              Para evitar mosquitas, entierra la comida debajo del cartón húmedo
              o cúbrela con material seco. No dejes frutas expuestas en la
              superficie.
            </p>
          </section>

          <section className="space-y-3">
            <h3 className="text-2xl font-semibold">
              7. Cosecha el humus
            </h3>

            <p className="leading-8">
              Después de 2 a 3 meses, parte del material se verá oscuro, suelto
              y uniforme. Ese es el humus de lombriz. Para cosecharlo sin matar
              lombrices, mueve el contenido viejo a un lado y coloca comida fresca
              al otro. En varios días, muchas lombrices migran hacia la comida.
              Entonces puedes sacar el humus del lado más limpio.
            </p>
          </section>
        </section>

        <figure className="mx-auto max-w-xl">
          <Image
            src="/images/blog/vermicompostera/humus-lombriz.png"
            alt="Humus de lombriz listo para usar"
            width={800}
            height={550}
            className="h-auto w-full rounded-2xl object-cover shadow-md"
          />
          <figcaption className="mt-2 text-sm text-[#6b786b]">
            El humus terminado se ve oscuro, suelto y huele como tierra limpia.
          </figcaption>
        </figure>

        <section className="space-y-4">
          <h2 className="text-3xl font-bold">Cómo usar el humus de lombriz</h2>

          <p className="leading-8">
            Puedes mezclar el humus con tierra para tiestos, aplicarlo alrededor
            de plantas establecidas o usarlo como parte de la mezcla en camas
            elevadas. No hace falta usar demasiado. Una capa ligera alrededor de
            la planta o una mezcla moderada con el sustrato ya ayuda bastante.
          </p>

          <ul className="list-disc space-y-3 pl-6 leading-8">
            <li>En tiestos: mezcla una parte de humus con varias partes de tierra.</li>
            <li>En huerto: aplica alrededor de la base de la planta.</li>
            <li>En semilleros: usa poca cantidad para no saturar la mezcla.</li>
          </ul>
        </section>

        <section className="space-y-4 rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-3xl font-bold">Errores comunes a evitar</h2>

          <ul className="list-disc space-y-3 pl-6 leading-8">
            <li>
              <strong>Dar demasiada comida:</strong> causa mal olor y atrae
              mosquitas.
            </li>
            <li>
              <strong>Encharcar la caja:</strong> las lombrices necesitan humedad,
              no vivir ahogadas.
            </li>
            <li>
              <strong>Ponerla al sol:</strong> el calor directo puede matar las
              lombrices.
            </li>
            <li>
              <strong>No añadir material seco:</strong> cartón y papel ayudan a
              balancear humedad y textura.
            </li>
            <li>
              <strong>Usar comida incorrecta:</strong> carnes, lácteos y aceites
              dañan el sistema.
            </li>
          </ul>
        </section>

        <section className="space-y-5">
          <h2 className="text-3xl font-bold">Preguntas frecuentes</h2>

          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold">
                ¿La vermicompostera casera huele mal?
              </h3>
              <p className="mt-2 leading-8">
                No debe oler mal. Si huele podrido, hay exceso de comida, mucha
                humedad o falta de ventilación.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">
                ¿Puedo tenerla dentro de la casa?
              </h3>
              <p className="mt-2 leading-8">
                Sí, siempre que esté bien manejada. Muchas personas la tienen en
                cocina, balcón, laundry o garaje.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">
                ¿Cuánto tarda en producir humus?
              </h3>
              <p className="mt-2 leading-8">
                Usualmente de 2 a 3 meses, dependiendo de la cantidad de lombrices,
                temperatura, humedad y comida disponible.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">
                ¿Qué hago si salen mosquitas?
              </h3>
              <p className="mt-2 leading-8">
                Cubre la comida con cartón húmedo o material seco. También reduce
                la cantidad de frutas por unos días.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">
                ¿Puedo echar cítricos?
              </h3>
              <p className="mt-2 leading-8">
                Poco, sí. Mucho cítrico puede alterar el sistema. Mejor úsalo con
                moderación.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-4 rounded-2xl bg-green-50 p-6">
          <h2 className="text-3xl font-bold">Conclusión</h2>

          <p className="leading-8">
            Hacer una vermicompostera casera es una forma simple y poderosa de
            convertir desperdicios en vida para tus plantas. No tienes que
            hacerlo perfecto desde el primer día. Empieza con una caja, prepara
            una buena cama, alimenta poco a poco y observa el sistema.
          </p>

          <p className="leading-8">
            Con paciencia, vas a tener humus natural para tu huerto, menos basura
            en la casa y una manera práctica de participar en un ciclo más
            sostenible. Empieza pequeño, aprende el ritmo de tus lombrices y deja
            que ellas hagan el trabajo pesado.
          </p>
        </section>
      </article>
    </main>
  );
}