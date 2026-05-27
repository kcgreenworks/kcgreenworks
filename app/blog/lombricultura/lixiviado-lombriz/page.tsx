import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Lixiviado de lombriz: qué es, cómo se hace y cómo usarlo",
  description:
    "Guía completa sobre el lixiviado de lombriz: qué es, cómo se produce, qué contiene, para qué sirve, cómo diluirlo y cómo aplicarlo correctamente en plantas.",
};

export default function LixiviadoLombrizPage() {
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
            Fertilización orgánica
          </p>

          <h1 className="text-4xl font-bold leading-tight md:text-5xl">
            Lixiviado de lombriz: qué es, cómo se hace y cómo usarlo correctamente
          </h1>

          <p className="text-lg leading-8 text-[#405040]">
            El lixiviado de lombriz es un líquido oscuro que puede salir de una
            vermicompostera cuando el agua pasa a través del material orgánico,
            el humus y la cama donde viven las lombrices. Bien manejado y bien
            diluido, puede ayudar a mejorar la vida del suelo y apoyar el
            crecimiento de las plantas. Mal manejado, puede oler mal, fermentar
            demasiado y hasta dañar raíces.
          </p>
        </header>

        <div className="overflow-hidden rounded-2xl bg-white shadow-sm">
          <Image
            src="/images/lixiviado-lombriz-hero.png"
            alt="Lixiviado de lombriz oscuro en un recipiente junto a plantas verdes"
            width={1200}
            height={800}
            className="h-auto w-full object-cover"
            priority
          />
        </div>

        <section className="space-y-5 text-lg leading-8">
          <h2 className="text-3xl font-bold">Primero: no confundas lixiviado con té de humus</h2>

          <p>
            Esto es importante. Mucha gente llama “té de lombriz” a cualquier
            líquido oscuro que sale de la vermicompostera, pero no es exactamente
            lo mismo.
          </p>

          <p>
            El <strong>lixiviado</strong> es el líquido que drena naturalmente
            cuando hay exceso de humedad y el agua arrastra compuestos solubles
            del material en descomposición. Puede contener nutrientes, pero
            también puede contener sustancias no deseadas si el sistema está muy
            mojado, sin oxígeno o con comida pudriéndose.
          </p>

          <p>
            El <strong>té de humus aireado</strong> se prepara aparte, usando
            humus de lombriz maduro, agua sin cloro, oxígeno y, a veces, una
            fuente mínima de alimento para microorganismos. Ese proceso es más
            controlado.
          </p>

          <p>
            En palabras simples: el lixiviado puede servir, pero hay que usarlo
            con más cuidado. No se aplica puro y no se guarda por meses como si
            fuera un producto comercial estable.
          </p>
        </section>

        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-3xl font-bold">¿Qué es el lixiviado de lombriz?</h2>

          <p className="mt-4 text-lg leading-8">
            Es un líquido concentrado que se forma cuando el agua atraviesa una
            cama de lombrices, restos orgánicos, microorganismos y humus. Su
            color suele ser marrón oscuro o casi negro. Puede tener nutrientes
            solubles, ácidos húmicos, ácidos fúlvicos, enzimas y microorganismos.
          </p>

          <p className="mt-4 text-lg leading-8">
            No debe verse como “fertilizante mágico”. Es un complemento. La base
            de una planta sana sigue siendo buena tierra, buen drenaje, materia
            orgánica, luz correcta y riego adecuado.
          </p>
        </section>

        <section className="space-y-5">
          <h2 className="text-3xl font-bold">¿Cómo se produce?</h2>

          <p className="text-lg leading-8">
            El lixiviado aparece cuando hay humedad en la vermicompostera. Parte
            del agua baja por gravedad, pasa entre el material orgánico y termina
            saliendo por el drenaje inferior.
          </p>

          <div className="overflow-hidden rounded-2xl bg-white shadow-sm">
            <Image
              src="/images/lixiviado-lombriz-proceso.png"
              alt="Proceso de producción de lixiviado de lombriz en una vermicompostera"
              width={1200}
              height={800}
              className="h-auto w-full object-cover"
            />
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <h3 className="text-xl font-bold">Producción normal</h3>
              <p className="mt-2 leading-7">
                Sale poco líquido, sin mal olor fuerte, color oscuro, y la cama
                de lombrices se mantiene húmeda pero no empapada.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <h3 className="text-xl font-bold">Producción problemática</h3>
              <p className="mt-2 leading-7">
                Sale demasiado líquido, huele agrio o podrido, hay moscas, comida
                babosa o falta de oxígeno. Ese lixiviado no conviene aplicarlo a
                las plantas.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-5 text-lg leading-8">
          <h2 className="text-3xl font-bold">Cómo hacer lixiviado de lombriz en casa</h2>

          <p>
            La forma correcta no es inundar la vermicompostera para sacar más
            líquido. Eso es un error común. El objetivo principal debe ser
            producir buen humus; el lixiviado es un subproducto, no el producto
            principal.
          </p>

          <h3 className="text-2xl font-bold">1. Usa una vermicompostera con drenaje</h3>
          <p>
            Necesitas un recipiente con agujeros o una llave de drenaje en la
            parte baja. Debajo debe haber una bandeja o envase para recoger el
            líquido.
          </p>

          <h3 className="text-2xl font-bold">2. Prepara una cama adecuada</h3>
          <p>
            Usa cartón sin tinta brillante, papel sin químicos, fibra de coco,
            hojas secas o material seco similar. La cama debe estar húmeda como
            una esponja exprimida, no chorreando agua.
          </p>

          <h3 className="text-2xl font-bold">3. Añade lombrices rojas californianas</h3>
          <p>
            Las más usadas son las lombrices rojas compostadoras. No son iguales
            a cualquier lombriz de patio. Ellas trabajan mejor en materia
            orgánica superficial y en ambientes húmedos, frescos y con oxígeno.
          </p>

          <h3 className="text-2xl font-bold">4. Alimenta poco a poco</h3>
          <p>
            Añade cáscaras de frutas, vegetales, borra de café en poca cantidad,
            hojas y residuos vegetales. Evita carne, grasa, lácteos, comida
            cocida con aceite, cítricos en exceso y alimentos muy salados.
          </p>

          <h3 className="text-2xl font-bold">5. Controla la humedad</h3>
          <p>
            Si la cama está demasiado mojada, añade cartón seco o fibra seca. Si
            está demasiado seca, rocía agua sin cloro poco a poco. El balance de
            humedad es lo que evita malos olores.
          </p>

          <h3 className="text-2xl font-bold">6. Recolecta el líquido</h3>
          <p>
            Si sale lixiviado, recógelo en un envase limpio. Úsalo rápido,
            preferiblemente el mismo día o dentro de 24 a 48 horas. Mientras más
            tiempo lo guardes, más cambia su microbiología.
          </p>
        </section>

        <div className="overflow-hidden rounded-2xl bg-white shadow-sm">
          <Image
            src="/images/lombrices-humus.png"
            alt="Lombrices rojas trabajando en humus de lombriz"
            width={1200}
            height={800}
            className="h-auto w-full object-cover"
          />
        </div>

        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-3xl font-bold">¿Qué componentes puede tener?</h2>

          <p className="mt-4 text-lg leading-8">
            La composición exacta cambia según lo que comen las lombrices, la
            humedad, la temperatura, el nivel de oxígeno y la madurez del humus.
            No todos los lixiviados son iguales.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-xl border border-green-100 bg-[#f4f1e8] p-4">
              <h3 className="font-bold">Macronutrientes</h3>
              <p className="mt-2 leading-7">
                Puede contener nitrógeno, fósforo y potasio en cantidades
                variables.
              </p>
            </div>

            <div className="rounded-xl border border-green-100 bg-[#f4f1e8] p-4">
              <h3 className="font-bold">Micronutrientes</h3>
              <p className="mt-2 leading-7">
                Puede aportar hierro, zinc, manganeso, cobre, boro y otros
                elementos en pequeñas cantidades.
              </p>
            </div>

            <div className="rounded-xl border border-green-100 bg-[#f4f1e8] p-4">
              <h3 className="font-bold">Ácidos húmicos y fúlvicos</h3>
              <p className="mt-2 leading-7">
                Ayudan a mejorar la disponibilidad de nutrientes y la actividad
                del suelo.
              </p>
            </div>

            <div className="rounded-xl border border-green-100 bg-[#f4f1e8] p-4">
              <h3 className="font-bold">Microorganismos</h3>
              <p className="mt-2 leading-7">
                Puede contener bacterias, hongos y otros organismos beneficiosos,
                siempre que el sistema esté sano y con oxígeno.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-5 text-lg leading-8">
          <h2 className="text-3xl font-bold">¿Para qué sirve?</h2>

          <p>
            El lixiviado bien manejado puede ayudar a activar la vida microbiana
            del suelo, mejorar la absorción de nutrientes y apoyar plantas que
            están creciendo activamente. No sustituye un buen compost ni una
            fertilización completa si el suelo está pobre.
          </p>

          <p>
            Puede usarse en vegetales, aromáticas, ornamentales, frutales jóvenes
            y plantas en maceta. Funciona mejor cuando se aplica en suelos vivos,
            con materia orgánica y buen drenaje.
          </p>

          <div className="rounded-2xl bg-green-900 p-6 text-white">
            <h3 className="text-2xl font-bold">Beneficios principales</h3>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <p>Mejora la actividad biológica del suelo.</p>
              <p>Puede estimular el crecimiento de raíces.</p>
              <p>Ayuda a reciclar nutrientes orgánicos.</p>
              <p>Apoya plantas en etapa de crecimiento.</p>
              <p>Puede mejorar vigor general si se usa bien.</p>
              <p>Reduce dependencia de fertilizantes sintéticos.</p>
            </div>
          </div>
        </section>

        <section className="space-y-5 text-lg leading-8">
          <h2 className="text-3xl font-bold">Cómo usarlo correctamente</h2>

          <p>
            La regla principal es sencilla: <strong>nunca lo apliques puro</strong>.
            Es concentrado, variable y puede quemar raíces o afectar hojas si
            está demasiado fuerte.
          </p>

          <div className="overflow-hidden rounded-2xl bg-white shadow-sm">
            <Image
              src="/images/lixiviado-aplicacion.png"
              alt="Aplicación de lixiviado de lombriz diluido en plantas"
              width={1200}
              height={800}
              className="h-auto w-full object-cover"
            />
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <h3 className="text-xl font-bold">Aplicación al suelo</h3>
              <p className="mt-2 leading-7">
                Diluye 1 parte de lixiviado en 10 partes de agua. Aplica
                alrededor de la planta, no pegado directamente al tallo.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <h3 className="text-xl font-bold">Aplicación foliar</h3>
              <p className="mt-2 leading-7">
                Diluye más suave: 1 parte de lixiviado en 20 partes de agua.
                Pulveriza al atardecer o temprano en la mañana.
              </p>
            </div>
          </div>

          <p>
            Para plantas delicadas, semilleros o plantas recién trasplantadas,
            usa una dilución más suave: 1 parte de lixiviado en 20 o 30 partes de
            agua. Es mejor empezar suave que pasarte.
          </p>
        </section>

        <section className="rounded-2xl bg-yellow-100 p-6 text-[#3a2a00] shadow-sm">
          <h2 className="text-3xl font-bold">Advertencia importante</h2>

          <p className="mt-4 text-lg leading-8">
            Si el lixiviado huele a podrido, ácido fuerte, cloaca o fermentación
            agresiva, no lo uses en hojas ni en plantas delicadas. Ese olor suele
            indicar falta de oxígeno o descomposición anaeróbica. En ese caso,
            dilúyelo mucho y úsalo en una pila de compost, o descártalo lejos de
            plantas sensibles.
          </p>
        </section>

        <section className="space-y-5 text-lg leading-8">
          <h2 className="text-3xl font-bold">Cada cuánto aplicarlo</h2>

          <p>
            Para plantas en crecimiento, una aplicación cada 2 a 4 semanas es
            suficiente. Más no siempre es mejor. Si aplicas demasiado, puedes
            desbalancear el sustrato, atraer mosquitos o crear exceso de humedad.
          </p>

          <p>
            En macetas, usa menos cantidad porque el volumen de tierra es
            limitado. En suelo directo puedes aplicar un poco más, siempre
            diluido y observando cómo responde la planta.
          </p>
        </section>

        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-3xl font-bold">Cómo saber si está bueno</h2>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-xl bg-[#f4f1e8] p-4">
              <h3 className="font-bold text-green-900">Señales buenas</h3>
              <p className="mt-2 leading-7">
                Color marrón oscuro, olor a tierra húmeda, poca espuma, sin olor
                ofensivo y sin larvas o pudrición evidente.
              </p>
            </div>

            <div className="rounded-xl bg-[#f4f1e8] p-4">
              <h3 className="font-bold text-red-900">Señales malas</h3>
              <p className="mt-2 leading-7">
                Olor agrio fuerte, olor a podrido, líquido baboso, moscas,
                comida fermentada o cama de lombrices demasiado mojada.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-5 text-lg leading-8">
          <h2 className="text-3xl font-bold">Errores comunes</h2>

          <h3 className="text-2xl font-bold">Usarlo puro</h3>
          <p>
            Este es el error más común. Aunque sea orgánico, puede estar
            concentrado. Orgánico no significa automáticamente seguro en cualquier
            cantidad.
          </p>

          <h3 className="text-2xl font-bold">Guardar el lixiviado por demasiado tiempo</h3>
          <p>
            Es un líquido biológicamente activo. Si lo guardas mucho tiempo sin
            aireación, puede cambiar, fermentar y perder calidad.
          </p>

          <h3 className="text-2xl font-bold">Inundar la vermicompostera para sacar más</h3>
          <p>
            Eso perjudica a las lombrices. Una vermicompostera sana debe estar
            húmeda, no empapada. Si sale demasiado líquido, probablemente hay
            exceso de agua.
          </p>

          <h3 className="text-2xl font-bold">Aplicarlo a pleno sol</h3>
          <p>
            Si lo aplicas en hojas bajo sol fuerte, puedes manchar o quemar la
            planta. Mejor temprano en la mañana o al atardecer.
          </p>
        </section>

        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-3xl font-bold">Resumen práctico</h2>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <p>
              <strong>Qué es:</strong> líquido drenado de una vermicompostera.
            </p>
            <p>
              <strong>Color normal:</strong> marrón oscuro o negro.
            </p>
            <p>
              <strong>Uso principal:</strong> complemento para suelo y plantas.
            </p>
            <p>
              <strong>Dilución suelo:</strong> 1 parte en 10 partes de agua.
            </p>
            <p>
              <strong>Dilución foliar:</strong> 1 parte en 20 partes de agua.
            </p>
            <p>
              <strong>Frecuencia:</strong> cada 2 a 4 semanas.
            </p>
            <p>
              <strong>No hacer:</strong> aplicarlo puro.
            </p>
            <p>
              <strong>No usar:</strong> si huele a podrido o fermentado fuerte.
            </p>
          </div>
        </section>

        <section className="space-y-5 text-lg leading-8">
          <h2 className="text-3xl font-bold">Conclusión</h2>

          <p>
            El lixiviado de lombriz puede ser una herramienta útil dentro de un
            huerto casero, pero hay que entenderlo bien. No es magia, no reemplaza
            una buena tierra y no se debe aplicar sin diluir. Su valor está en
            aportar compuestos solubles, vida microbiana y apoyo biológico al
            suelo cuando se produce en un sistema sano.
          </p>

          <p>
            Si vas a empezar, mantén la vermicompostera equilibrada, evita el
            exceso de agua, recoge poco lixiviado, úsalo fresco, dilúyelo siempre
            y observa cómo responden tus plantas. Esa es la forma correcta de
            usarlo sin inventar ni dañar el cultivo.
          </p>
        </section>
      </article>
    </main>
  );
}