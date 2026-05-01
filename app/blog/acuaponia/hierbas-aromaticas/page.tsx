import Link from "next/link";

const herbs = [
  {
    name: "Albahaca",
    english: "Basil",
    use: "Perfecta para pastas, pizzas, pesto, ensaladas y salsas frescas.",
    why: "En acuaponía suele crecer rápido porque aprovecha muy bien los nitratos del sistema.",
    sow: "Germina en semillero húmedo. Trasplanta cuando tenga 2–3 pares de hojas reales.",
    tip: "Pódala seguido. Mientras más la cortas, más se ramifica."
  },
  {
    name: "Cilantro",
    english: "Coriander / Cilantro",
    use: "Ideal para comida latina, sofritos, tacos, arroces, guisos y salsas.",
    why: "La humedad constante evita estrés fuerte y ayuda a mantener hojas tiernas.",
    sow: "Siembra varias semillas juntas. No entierres demasiado; solo cúbrelas ligeramente.",
    tip: "Prefiere clima fresco. Si hace mucho calor, florece rápido."
  },
  {
    name: "Perejil",
    english: "Parsley",
    use: "Bueno para carnes, sopas, ensaladas, papas, arroz y marinados.",
    why: "Responde bien a sistemas estables con nutrientes moderados y raíces oxigenadas.",
    sow: "La semilla tarda más que otras hierbas. Mantén humedad constante hasta germinar.",
    tip: "Cosecha hojas exteriores y deja el centro creciendo."
  },
  {
    name: "Menta",
    english: "Mint",
    use: "Excelente para bebidas, té, postres, ensaladas y salsas frescas.",
    why: "Crece agresivamente en acuaponía porque tiene raíces fuertes y tolera alta humedad.",
    sow: "Mejor por esqueje. Coloca un tallo en agua hasta que saque raíces.",
    tip: "Contrólala. Si la dejas libre, invade el espacio."
  },
  {
    name: "Orégano",
    english: "Oregano",
    use: "Clave para pizza, carnes, salsas, pastas, adobos y comida mediterránea.",
    why: "En sistemas bien oxigenados mantiene crecimiento constante sin encharcarse.",
    sow: "Germina superficialmente. Necesita buena luz y no demasiada sombra.",
    tip: "No le gusta el exceso de humedad en hojas. Dale buena ventilación."
  },
  {
    name: "Tomillo",
    english: "Thyme",
    use: "Funciona bien en carnes, sopas, vegetales asados y salsas.",
    why: "Puede crecer bien en media bed si las raíces tienen oxígeno y no se saturan.",
    sow: "Semilla pequeña y lenta. También puedes propagar por esquejes.",
    tip: "No lo trates como albahaca. Necesita menos humedad directa."
  },
  {
    name: "Romero",
    english: "Rosemary",
    use: "Excelente para pollo, carnes, papas, panes, aceites y marinados.",
    why: "Puede funcionar, pero necesita excelente drenaje y mucha luz.",
    sow: "Mejor por esqueje. Desde semilla es lento y menos práctico.",
    tip: "Es más avanzado. Evita raíces demasiado mojadas."
  },
  {
    name: "Cebollín",
    english: "Chives",
    use: "Bueno para huevos, papas, sopas, ensaladas y toppings frescos.",
    why: "Crece bien en sistemas pequeños y permite cosechas frecuentes.",
    sow: "Siembra en grupos. Trasplanta cuando tenga buen desarrollo de raíces.",
    tip: "Corta con tijera y deja 2–3 pulgadas para que rebrote."
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
            Si quieres empezar con un cultivo que te dé resultados rápidos, buen aroma y uso real en la cocina,
            las hierbas aromáticas son de las mejores opciones para un sistema acuapónico. No ocupan mucho espacio,
            responden bien a nutrientes constantes y muchas se pueden cosechar varias veces sin arrancar la planta.
          </p>
        </header>

        <figure className="rounded-3xl bg-white p-4 shadow-sm">
          <img
            src="/hierbas-acuaponia-hero.svg"
            alt="Hierbas aromáticas creciendo en un sistema acuapónico casero"
            className="mx-auto w-full rounded-2xl"
          />
          <figcaption className="mt-3 text-center text-sm text-[#5a6b5a]">
            Hierbas aromáticas en acuaponía: raíces oxigenadas, agua recirculando y nutrientes disponibles.
          </figcaption>
        </figure>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">¿Por qué las hierbas aromáticas funcionan tan bien en acuaponía?</h2>

          <p>
            Las hierbas como albahaca, cilantro, perejil, menta y cebollín no necesitan un sistema enorme para producir.
            Lo que necesitan es estabilidad: agua con nutrientes, oxígeno en las raíces, buena luz y cosechas frecuentes.
            Eso encaja muy bien con la acuaponía.
          </p>

          <p>
            En un huerto tradicional, una planta puede sufrir por riego irregular: un día seca, otro día encharcada.
            En acuaponía, si el sistema está bien diseñado, la raíz recibe humedad y nutrientes de forma constante.
            Esa estabilidad reduce estrés y puede ayudar a producir hojas más tiernas, más verdes y con mejor aroma.
          </p>

          <p className="font-semibold">
            El sabor no aparece por magia. Aparece cuando la planta crece sana, sin estrés fuerte y con buena luz.
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
            src="/hierbas-acuaponia-cocina.svg"
            alt="Hierbas aromáticas frescas para condimentar comidas"
            className="mx-auto w-full rounded-2xl"
          />
          <figcaption className="mt-3 text-center text-sm text-[#5a6b5a]">
            La ventaja real: cosechas pequeñas y frecuentes para cocinar con hierbas frescas.
          </figcaption>
        </figure>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Cómo sembrarlas en un sistema acuapónico</h2>

          <p>
            La forma más segura es germinar primero fuera del sistema y trasplantar cuando la planta ya tenga raíces.
            Puedes usar plugs, esponjas de germinación, fibra de coco o semilleros pequeños. No conviene tirar semillas
            directamente al agua o al grow bed y esperar que todo funcione perfecto.
          </p>

          <ul className="list-disc space-y-2 pl-6">
            <li><strong>Germina primero:</strong> mantén el semillero húmedo, no encharcado.</li>
            <li><strong>Espera hojas reales:</strong> trasplanta cuando tenga 2–3 pares de hojas reales.</li>
            <li><strong>Protege raíces:</strong> no rompas la raíz al mover la planta.</li>
            <li><strong>Usa buena luz:</strong> mínimo 4–6 horas de luz fuerte o luz artificial adecuada.</li>
            <li><strong>Cosecha seguido:</strong> cortar puntas estimula crecimiento más denso.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Dónde sembrarlas: media bed, NFT o raft</h2>

          <p>
            Para un principiante, lo más fácil es usar <strong>media bed</strong> con grava lavada, piedra volcánica o arcilla expandida.
            Este sistema sostiene la planta, filtra sólidos y sirve como casa para bacterias beneficiosas.
          </p>

          <p>
            En <strong>NFT</strong>, las hierbas también funcionan muy bien, especialmente albahaca, cilantro, perejil y cebollín,
            pero hay que cuidar que las raíces no bloqueen el canal. En <strong>DWC o raft</strong>, pueden crecer rápido si hay buena
            oxigenación, pero no todas las hierbas mediterráneas toleran tanta humedad alrededor de la raíz.
          </p>
        </section>

        <section className="rounded-2xl border border-green-900/10 bg-[#eef3df] p-6">
          <h2 className="mb-3 text-2xl font-bold">Mi recomendación para empezar</h2>
          <p>
            Empieza con albahaca, menta, perejil y cebollín. Son tolerantes, útiles en la cocina y te enseñan rápido si tu sistema
            está estable. Después puedes probar cilantro, orégano, tomillo y romero, que requieren más atención a temperatura,
            ventilación y exceso de humedad.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Por qué pueden saber mejor</h2>

          <p>
            El sabor de una hierba viene en gran parte de sus aceites esenciales. Una planta con buena luz, nutrición balanceada
            y crecimiento constante tiende a producir hojas más aromáticas. En acuaponía, el agua recirculante ofrece nutrientes
            de manera continua, mientras las raíces se mantienen activas.
          </p>

          <p>
            Eso no significa que todo sistema acuapónico produce mejor sabor automáticamente. Si hay poca luz, exceso de nitrógeno,
            mala oxigenación o calor fuerte, la planta puede crecer grande pero con menos aroma. El secreto es balance: nutrientes,
            luz, oxígeno y poda.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Errores comunes</h2>

          <ul className="list-disc space-y-2 pl-6">
            <li>Sembrar en un sistema que todavía no está ciclado.</li>
            <li>Poner demasiadas plantas para pocos peces y pocos nutrientes.</li>
            <li>Dejar que la albahaca o la menta se vuelvan largas sin podar.</li>
            <li>No controlar el calor: cilantro y perejil sufren mucho con calor extremo.</li>
            <li>Usar poca luz y esperar sabor intenso.</li>
            <li>Permitir raíces bloqueando tuberías o canales.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Conclusión</h2>

          <p>
            Las hierbas aromáticas son una entrada inteligente al mundo acuapónico porque producen rápido, ocupan poco y se usan
            de verdad en la cocina. Si quieres que tu sistema te motive, no empieces solo con plantas complicadas. Empieza con algo
            que puedas cortar, oler y usar el mismo día.
          </p>

          <p className="font-semibold">
            En acuaponía, una buena mata de albahaca o menta puede enseñarte más sobre estabilidad que un sistema enorme mal balanceado.
          </p>
        </section>
      </article>
    </main>
  );
}
