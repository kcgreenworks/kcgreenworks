import Link from "next/link";

const herbs = [
  {
    name: "Albahaca",
    english: "Basil",
    use: "Esta es la que yo siempre pongo primero cuando quiero ver el sistema responder rápido. La uso para pastas, pizzas, pesto, ensaladas y para darle vida a una comida sencilla.",
    why: "Según mi experiencia, la albahaca aprovecha muy bien los nitratos cuando el sistema ya está estable. Si tiene buena luz y raíces oxigenadas, se nota rápido en el color y en el tamaño de las hojas.",
    sow: "Yo prefiero germinarla aparte, en un semillero húmedo, y pasarla al sistema cuando ya tiene 2–3 pares de hojas reales. Así no la tiro a sufrir desde el primer día.",
    tip: "Pódala sin miedo. Así me pasó a mí: cuando la dejaba quieta se ponía larga y floja; cuando la cortaba seguido, se ramificaba y producía más."
  },
  {
    name: "Cilantro",
    english: "Coriander / Cilantro",
    use: "Para mí, el cilantro es cocina de casa: sofrito, habichuelas, arroces, tacos, guisos y salsas frescas. Cuando lo tienes vivo cerca, lo usas más.",
    why: "Funciona bien, pero no perdona el calor fuerte. La humedad constante ayuda, pero si la temperatura se dispara, florece rápido y se va en semilla.",
    sow: "Siembra varias semillas juntas y cúbrelas apenas. Cuando yo lo entierro demasiado, tarda más y sale disparejo.",
    tip: "Dale algo de sombra en calor fuerte. El cilantro no es una mata para maltratarla al sol todo el día."
  },
  {
    name: "Perejil",
    english: "Parsley",
    use: "Lo uso en carnes, sopas, ensaladas, papas, arroz y marinados. No grita como la albahaca, pero siempre hace falta.",
    why: "En un sistema estable, con nutrientes moderados y buena oxigenación, el perejil se mantiene bonito y permite cosechas constantes.",
    sow: "La semilla es más lenta que otras hierbas. Según mi experiencia, aquí gana el que tiene paciencia y mantiene humedad pareja sin encharcar.",
    tip: "Cosecha las hojas de afuera y deja el centro vivo. Si arrancas demasiado de una vez, la planta se atrasa."
  },
  {
    name: "Menta",
    english: "Mint",
    use: "La menta va con té, limonadas, postres, ensaladas y salsas frescas. Una sola mata bien manejada te da bastante.",
    why: "Crece agresiva porque tiene raíces fuertes y tolera mucha humedad. En acuaponía eso puede ser una bendición o un problema.",
    sow: "Yo casi nunca la empiezo por semilla. Mejor corto un esqueje, lo pongo en agua y espero raíces antes de llevarlo al sistema.",
    tip: "Contrólala desde temprano. Así me pasó a mí: si la dejas libre, se cree dueña del grow bed."
  },
  {
    name: "Orégano",
    english: "Oregano",
    use: "Es clave para pizza, carnes, pastas, salsas, adobos y comida mediterránea. Bien usado, levanta cualquier plato.",
    why: "Puede funcionar en acuaponía, pero necesita buena luz y ventilación. No le gusta vivir con las hojas mojadas ni encerrado sin aire.",
    sow: "Germina superficialmente. No entierres la semilla como si fuera una habichuela; es pequeña y necesita luz y humedad controlada.",
    tip: "Menos agua sobre la hoja y más aire alrededor. Esa ha sido mi regla con orégano."
  },
  {
    name: "Tomillo",
    english: "Thyme",
    use: "Me gusta para carnes, sopas, vegetales asados y salsas. Tiene sabor fuerte, así que no necesitas mucho.",
    why: "Puede crecer en media bed si las raíces tienen oxígeno y el área no se mantiene demasiado saturada.",
    sow: "La semilla es pequeña y lenta. Si quieres ir más seguro, puedes propagarlo por esquejes.",
    tip: "No lo trates como albahaca. El tomillo no quiere estar demasiado mojado todo el tiempo."
  },
  {
    name: "Romero",
    english: "Rosemary",
    use: "Excelente para pollo, carnes, papas, panes, aceites y marinados. Es de esas hierbas que huelen a cocina seria.",
    why: "Funciona mejor cuando tiene mucha luz, buena ventilación y drenaje excelente. En sistemas muy húmedos puede sufrir.",
    sow: "Desde semilla es lento. Según mi experiencia, si vas a intentarlo, hazlo por esqueje y con paciencia.",
    tip: "Es más avanzado. Yo no lo pondría como primera prueba si todavía estás aprendiendo a balancear el sistema."
  },
  {
    name: "Cebollín",
    english: "Chives",
    use: "Va perfecto con huevos, papas, sopas, ensaladas y toppings frescos. Es práctico porque cortas un poco y vuelve a crecer.",
    why: "En sistemas pequeños responde bien y permite cosechas frecuentes sin sacar la planta completa.",
    sow: "Siémbralo en grupos y trasplántalo cuando tenga raíces fuertes. No lo pongas demasiado profundo.",
    tip: "Corta con tijera y deja 2–3 pulgadas. Si lo cortas bien, vuelve y arranca."
  }
];

export default function HierbasAromaticasAcuaponia() {
  return (
    <main className="min-h-screen bg-[#f4f1e8] px-6 py-12 text-[#1f2a1f]">
      <article className="mx-auto max-w-5xl space-y-12">
        <Link
          href="/blog/acuaponia"
          className="text-sm font-semibold text-green-800 hover:underline"
        >
          ← Volver a Acuaponía
        </Link>

        <header className="space-y-5">
          <p className="text-sm font-bold uppercase tracking-wide text-green-800">
            Acuaponía casera
          </p>

          <h1 className="text-4xl font-bold leading-tight md:text-5xl">
            Hierbas aromáticas ideales para acuaponía
          </h1>

          <p className="max-w-3xl text-lg text-[#4b5a4b]">
            Cuando yo empecé a probar hierbas aromáticas en acuaponía, entendí algo rápido:
            no siempre la planta más grande es la que más te enseña. A veces una mata de
            albahaca, un poco de menta o un cebollín bien cuidado te dicen más sobre la salud
            del sistema que una cama llena de plantas complicadas.
          </p>

          <p className="max-w-3xl text-lg text-[#4b5a4b]">
            Según mi experiencia, las hierbas son de las mejores entradas al mundo acuapónico
            porque crecen rápido, ocupan poco espacio, se usan de verdad en la cocina y te obligan
            a observar detalles importantes: luz, oxígeno, nutrientes, poda y temperatura.
          </p>
        </header>

        <figure className="rounded-3xl bg-white p-4 shadow-sm">
          <img
           src="/images/lechuga-todo-el-ano-hero.png"
          alt="Hierbas aromáticas"
          className="mx-auto w-full rounded-2xl"

          />
          <figcaption className="mt-3 text-center text-sm text-[#5a6b5a]">
            Así es como me gusta ver un sistema pequeño: raíces oxigenadas, agua recirculando y plantas que uno puede cosechar sin arrancarlas completas.
          </figcaption>
        </figure>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Por qué las hierbas aromáticas funcionan tan bien en acuaponía</h2>

          <p>
            En acuaponía, uno no está echando fertilizante de una botella cada vez que la planta
            se ve triste. El sistema depende de un ciclo vivo. Los peces producen amoníaco a través
            de sus desechos, las bacterias nitrificantes transforman ese amoníaco primero en nitrito
            y luego en nitrato, y las plantas aprovechan ese nitrato como una fuente importante de
            nitrógeno para crecer.
          </p>

          <p>
            Cuando yo entendí ese ciclo, dejé de mirar la acuaponía como un invento bonito y empecé
            a verla como un ecosistema pequeño que hay que respetar. Las hierbas como albahaca,
            cilantro, perejil, menta y cebollín no necesitan un sistema enorme para producir. Lo que
            necesitan es estabilidad: agua con nutrientes, oxígeno en las raíces, buena luz y cosechas
            frecuentes.
          </p>

          <p>
            Así me pasó a mí con la albahaca. La primera vez que la dejé crecer sin podarla, se puso
            larga, débil y menos productiva. Cuando empecé a cortarle las puntas, la planta respondió
            con más ramas y más hojas. Ahí aprendí que en muchas hierbas la cosecha no es solamente
            para cocinar; también es parte del manejo de la planta.
          </p>

          <p className="font-semibold">
            El sabor no aparece por magia. Aparece cuando la planta tiene buena luz, raíces activas,
            nutrientes disponibles y poco estrés.
          </p>
        </section>

        <section className="grid gap-5 md:grid-cols-2">
          {herbs.map((herb) => (
            <div key={herb.name} className="rounded-2xl border border-[#d9d3c3] bg-white p-5 shadow-sm">
              <h3 className="text-2xl font-bold">{herb.name}</h3>
              <p className="mb-4 text-sm font-semibold text-green-800">{herb.english}</p>

              <div className="space-y-3 text-sm leading-relaxed text-[#354535]">
                <p><strong>Uso en cocina:</strong> {herb.use}</p>
                <p><strong>Por qué va bien:</strong> {herb.why}</p>
                <p><strong>Cómo sembrarla:</strong> {herb.sow}</p>
                <p><strong>Consejo práctico:</strong> {herb.tip}</p>
              </div>
            </div>
          ))}
        </section>

        <figure className="rounded-3xl bg-white p-4 shadow-sm">
          <img
            src="/images/blog/acuaponia/como-construir-acuaponico/hierbas-acuaponicas.png"
            alt="Hierbas aromáticas frescas para condimentar comidas"
            className="mx-auto w-full rounded-2xl"
          />
          <figcaption className="mt-3 text-center text-sm text-[#5a6b5a]">
            La ventaja real no es solo verlas crecer. Es cortar un poco, llevarlo a la cocina y usarlo ese mismo día.
          </figcaption>
        </figure>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Cómo yo las siembro en un sistema acuapónico</h2>

          <p>
            La forma que mejor me ha funcionado es germinar primero fuera del sistema y trasplantar
            cuando la planta ya tiene raíces. Se puede germinar en plugs, esponjas de germinación,
            fibra de coco bien manejada o semilleros pequeños. Lo que no recomiendo, especialmente
            al principio, es tirar semillas al grow bed y esperar que todas salgan perfectas.
          </p>

          <p>
            Cuando yo hice eso, algunas germinaron, otras se perdieron entre el medio de cultivo y
            otras salieron donde no me convenía. Por eso prefiero llevar al sistema una plantita que
            ya tenga fuerza. No tiene que ser grande; tiene que estar lista.
          </p>

          <ul className="list-disc space-y-2 pl-6">
            <li><strong>Germina primero:</strong> mantén el semillero húmedo, pero no empapado.</li>
            <li><strong>Espera hojas reales:</strong> yo trasplanto cuando veo 2–3 pares de hojas reales.</li>
            <li><strong>Protege raíces:</strong> mueve la planta con calma; una raíz rota atrasa el crecimiento.</li>
            <li><strong>Usa buena luz:</strong> muchas hierbas necesitan por lo menos 6 horas de luz fuerte para producir buen sabor.</li>
            <li><strong>Cosecha seguido:</strong> cortar puntas estimula plantas más densas en hierbas como albahaca y menta.</li>
          </ul>

          <p>
            Un detalle importante: si la planta viene de tierra, yo lavo la raíz con cuidado antes de
            pasarla al sistema. No quiero meter exceso de tierra, sedimento ni materia orgánica que
            después termine afectando el agua.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Dónde sembrarlas: media bed, NFT o raft</h2>

          <p>
            Si alguien me pregunta por dónde empezar, yo casi siempre digo lo mismo: empieza con
            <strong> media bed</strong>. Una cama con grava lavada, piedra volcánica o arcilla expandida
            te sostiene la planta, ayuda a atrapar sólidos y ofrece superficie para que vivan bacterias
            beneficiosas. Para aprender, eso vale mucho.
          </p>

          <p>
            En <strong>NFT</strong>, donde el agua corre en una lámina fina por canales, las hierbas
            también pueden producir muy bien. La albahaca, el perejil, el cilantro y el cebollín pueden
            responder bonito, pero hay que vigilar las raíces. Así me pasó a mí: una raíz que parecía
            inofensiva terminó reduciendo el flujo en un canal. En NFT, si el agua deja de correr bien,
            el problema se siente rápido.
          </p>

          <p>
            En <strong>DWC o raft</strong>, las plantas flotan sobre agua aireada. Puede funcionar muy
            bien con hojas y algunas hierbas, pero no todas agradecen tanta humedad alrededor de la
            raíz. Las hierbas mediterráneas como romero, tomillo y orégano suelen pedir más cuidado:
            buena luz, aire, oxígeno y nada de humedad atrapada en las hojas.
          </p>
        </section>

        <section className="rounded-2xl border border-green-900/10 bg-[#eef3df] p-6">
          <h2 className="mb-3 text-2xl font-bold">Mi recomendación para empezar</h2>
          <p>
            Si yo tuviera que empezar de nuevo con hierbas aromáticas, empezaría con albahaca,
            menta, perejil y cebollín. Son útiles, tolerantes y te enseñan rápido si el sistema está
            estable. Después entraría con cilantro, orégano, tomillo y romero, porque esas requieren
            mirar mejor la temperatura, la ventilación y el exceso de humedad.
          </p>

          <p className="mt-4">
            No lo digo porque las otras no sirvan. Lo digo porque cuando uno está empezando, necesita
            victorias pequeñas. Una mata que crece, que puedes oler, cortar y usar en la cocina, te
            mantiene motivado y te obliga a seguir observando el sistema.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Por qué algunas hierbas pueden saber mejor</h2>

          <p>
            El sabor de una hierba viene en gran parte de sus aceites esenciales y compuestos aromáticos.
            Eso depende de la genética de la planta, la luz, la temperatura, la nutrición, el manejo de
            agua y el momento de cosecha. En otras palabras, la acuaponía ayuda, pero no hace milagros
            si el resto está mal.
          </p>

          <p>
            Según mi experiencia, una hierba con buena luz y crecimiento parejo suele tener mejor aroma
            que una planta estresada, amarilla o débil. Pero también aprendí esto: si hay poca luz y mucho
            nitrógeno disponible, algunas plantas pueden crecer grandes y verdes, pero no necesariamente
            más sabrosas.
          </p>

          <p>
            Por eso yo no miro solamente el tamaño. Miro el color, la firmeza de la hoja, el olor cuando
            la toco, la velocidad de rebrote después de la poda y cómo están las raíces. La raíz casi siempre
            cuenta la verdad antes que la hoja.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Errores comunes que yo evitaría</h2>

          <ul className="list-disc space-y-2 pl-6">
            <li><strong>Sembrar antes de ciclar el sistema:</strong> sin bacterias establecidas, el sistema todavía no procesa bien los desechos.</li>
            <li><strong>Poner demasiadas plantas para pocos peces:</strong> si no hay suficientes nutrientes, las plantas se quedan pálidas y lentas.</li>
            <li><strong>Dejar la albahaca o la menta sin poda:</strong> se alargan, pierden forma y producen menos hojas útiles.</li>
            <li><strong>Ignorar el calor:</strong> cilantro y perejil sufren mucho cuando el ambiente está demasiado caliente.</li>
            <li><strong>Usar poca luz:</strong> sin luz suficiente, puedes tener hojas, pero no necesariamente buen aroma.</li>
            <li><strong>No mirar las raíces:</strong> raíces tapando canales, tuberías o drenajes pueden virar el sistema completo.</li>
            <li><strong>Mojar demasiado las hojas:</strong> en hierbas como orégano, tomillo y romero, humedad atrapada puede traer problemas.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Cómo las cosecho sin dañar la planta</h2>

          <p>
            Una cosa que aprendí a fuerza de práctica es que cosechar bien importa tanto como sembrar
            bien. Yo no arranco la mata completa si no hace falta. En albahaca y menta corto por encima
            de un nudo para que ramifique. En perejil corto tallos exteriores. En cebollín uso tijera y dejo
            unas pulgadas para que vuelva a salir.
          </p>

          <p>
            Así el sistema sigue produciendo. Para mí, esa es la belleza de las hierbas aromáticas en
            acuaponía: no estás esperando meses para ver resultado. Puedes hacer cosechas pequeñas,
            frecuentes y útiles.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Conclusión</h2>

          <p>
            Las hierbas aromáticas son una entrada inteligente al mundo acuapónico porque producen
            rápido, ocupan poco espacio y tienen uso real en la cocina. Si quieres que tu sistema te
            motive, no empieces solamente con plantas difíciles. Empieza con algo que puedas cortar,
            oler y usar ese mismo día.
          </p>

          <p>
            Cuando yo veo una mata de albahaca rebrotando después de una poda, o una menta invadiendo
            más de la cuenta, no lo veo como un detalle pequeño. Lo veo como información. La planta te
            está hablando. Te dice si hay luz, si hay nutrientes, si hay oxígeno y si el sistema está encontrando
            su balance.
          </p>

          <p className="font-semibold">
            En acuaponía, una buena mata de albahaca o menta puede enseñarte más sobre estabilidad que
            un sistema enorme mal balanceado.
          </p>
        </section>
      </article>
    </main>
  );
}
