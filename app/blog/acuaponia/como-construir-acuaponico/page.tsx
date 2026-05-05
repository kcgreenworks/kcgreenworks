import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Cómo construir un sistema acuapónico casero barato | KCGreenWorks",
  description:
    "Aprende cómo construir un sistema acuapónico casero barato con materiales simples, peces, plantas, bomba de agua y una cama de cultivo.",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-[#f4f1e8] px-6 py-12 text-[#1f2a1f]">
      <article className="mx-auto max-w-4xl space-y-10">
        <Link
          href="/blog"
          className="text-sm font-semibold text-green-800 hover:underline"
        >
          ← Volver al blog
        </Link>

        <header className="space-y-5">
          <p className="text-sm font-bold uppercase tracking-wide text-green-800">
            Acuaponía
          </p>

          <h1 className="text-4xl font-bold leading-tight md:text-5xl">
            Cómo construir un sistema acuapónico casero barato
          </h1>

          <p className="text-lg leading-8 text-[#4b5a4b]">
            La acuaponía combina peces, agua y plantas en un sistema donde todo
            trabaja junto. Los peces producen desechos, esos desechos alimentan
            bacterias beneficiosas, y esas bacterias convierten los nutrientes
            en comida disponible para las plantas. Las plantas ayudan a limpiar
            el agua, y esa agua regresa al tanque de los peces.
          </p>

          <p className="text-lg leading-8 text-[#4b5a4b]">
            Suena complicado, pero un sistema acuapónico casero barato se puede
            construir con materiales sencillos: un tanque, una bomba de agua,
            una cama de cultivo, grava o medio filtrante y algunas plantas de
            crecimiento rápido. La clave no es hacerlo grande desde el principio.
            La clave es hacerlo simple, estable y fácil de mantener.
          </p>
        </header>

        <figure className="mx-auto max-w-2xl">
          <Image
  src="/acuaponia1es.png"
  alt="Sistema acuapónico casero barato con tanque de peces y cama de cultivo"
  width={900}
  height={600}
  className="h-auto w-full rounded-2xl object-cover shadow-md"
  priority
/>
          <figcaption className="mt-2 text-sm text-[#6b786b]">
            Un sistema acuapónico casero puede empezar pequeño: tanque, bomba,
            cama de cultivo y retorno de agua.
          </figcaption>
        </figure>

        <section className="space-y-4">
          <h2 className="text-3xl font-bold">
            ¿Qué es un sistema acuapónico casero?
          </h2>

          <p className="leading-8">
            Un sistema acuapónico casero es una forma de cultivar plantas usando
            agua con peces. No es hidroponía pura, porque aquí los nutrientes no
            vienen de una botella. Vienen del ciclo natural entre peces,
            bacterias y plantas.
          </p>

          <p className="leading-8">
            En palabras simples: los peces ensucian el agua, las bacterias
            convierten ese desperdicio en nutrientes, las plantas consumen esos
            nutrientes y el agua vuelve más limpia al tanque.
          </p>

          <p className="leading-8">
            Ese ciclo se llama filtración biológica. No te compliques con el
            nombre. Solo significa que bacterias buenas ayudan a transformar los
            desechos de los peces en alimento para las plantas.
          </p>
        </section>

        <section className="space-y-4 rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-3xl font-bold">Título SEO</h2>

          <p className="leading-8">
            Cómo construir un sistema acuapónico casero barato paso a paso
          </p>

          <h2 className="text-3xl font-bold">Meta descripción</h2>

          <p className="leading-8">
            Aprende cómo hacer un sistema acuapónico casero barato con tanque,
            peces, bomba de agua, cama de cultivo y materiales fáciles de conseguir.
          </p>
        </section>

        <section className="space-y-5">
          <h2 className="text-3xl font-bold">
            Materiales para construirlo barato
          </h2>

          <p className="leading-8">
            No empieces comprando equipo caro. Para aprender, lo mejor es un
            sistema pequeño. Así entiendes el movimiento del agua, el balance de
            los peces y el crecimiento de las plantas sin gastar demasiado.
          </p>

          <ul className="list-disc space-y-3 pl-6 leading-8">
            <li>
              <strong>Tanque para peces:</strong> puede ser un tote plástico,
              barril cortado, pecera grande o contenedor resistente.
            </li>
            <li>
              <strong>Cama de cultivo:</strong> una caja plástica ancha donde
              pondrás el medio de cultivo y las plantas.
            </li>
            <li>
              <strong>Bomba de agua:</strong> mueve el agua del tanque hacia la
              cama de cultivo.
            </li>
            <li>
              <strong>Tubería o manguera:</strong> lleva el agua desde la bomba
              hasta la cama.
            </li>
            <li>
              <strong>Retorno de agua:</strong> devuelve el agua de la cama al
              tanque.
            </li>
            <li>
              <strong>Medio de cultivo:</strong> grava lavada, piedra volcánica
              o bolas de arcilla expandida.
            </li>
            <li>
              <strong>Peces:</strong> para empezar, usa pocos peces resistentes.
            </li>
            <li>
              <strong>Plantas:</strong> lechuga, albahaca, cilantro, menta,
              cebollines o vegetales de hoja.
            </li>
          </ul>

          <p className="leading-8">
            Para un primer sistema, evita empezar con tomates, pimientos o plantas
            muy exigentes. Puedes llegar ahí después, pero primero aprende con
            plantas fáciles.
          </p>
        </section>

        <figure className="mx-auto max-w-xl">
          <Image
  src="/acuaponia2es.png"
  alt="Tanque de peces para sistema acuapónico casero"
  width={800}
  height={550}
  className="h-auto w-full rounded-2xl object-cover shadow-md"
/>
          <figcaption className="mt-2 text-sm text-[#6b786b]">
            El tanque debe estar estable, protegido del sol fuerte y con espacio
            suficiente para los peces.
          </figcaption>
        </figure>

        <section className="space-y-5">
          <h2 className="text-3xl font-bold">Guía paso a paso: cómo hacerlo</h2>

          <section className="space-y-3">
            <h3 className="text-2xl font-semibold">
              1. Escoge el tamaño del sistema
            </h3>

            <p className="leading-8">
              Para empezar barato, usa un tanque de 20 a 50 galones. Es suficiente
              para aprender sin que el sistema sea imposible de manejar. Mientras
              más pequeño el tanque, más rápido cambian la temperatura y la calidad
              del agua. Por eso no conviene hacerlo demasiado pequeño.
            </p>
          </section>

          <section className="space-y-3">
            <h3 className="text-2xl font-semibold">
              2. Coloca el tanque en un lugar seguro
            </h3>

            <p className="leading-8">
              Pon el tanque sobre una superficie nivelada y fuerte. El agua pesa
              mucho. No lo pongas en una mesa débil ni en una estructura floja.
              Debe estar en sombra parcial o protegido del sol directo fuerte,
              porque el agua caliente estresa los peces y puede crear problemas
              de algas.
            </p>
          </section>

          <section className="space-y-3">
            <h3 className="text-2xl font-semibold">
              3. Prepara la cama de cultivo
            </h3>

            <p className="leading-8">
              La cama de cultivo debe ir encima o cerca del tanque. Llénala con
              grava lavada, piedra volcánica o arcilla expandida. Este material
              sostiene las raíces y también sirve como hogar para bacterias buenas.
            </p>

            <p className="leading-8">
              Lava bien la grava antes de usarla. Si no la lavas, el agua se va
              a poner turbia y puedes llenar el sistema de sedimento.
            </p>
          </section>

          <section className="space-y-3">
            <h3 className="text-2xl font-semibold">
              4. Instala la bomba de agua
            </h3>

            <p className="leading-8">
              Coloca la bomba dentro del tanque y conecta una manguera o tubo que
              suba el agua hacia la cama de cultivo. No necesitas una bomba enorme
              para un sistema pequeño. Necesitas que pueda mover el agua de forma
              constante y estable.
            </p>

            <p className="leading-8">
              Una bomba demasiado fuerte puede causar salpicaduras, erosión en la
              cama y estrés en los peces. Una bomba demasiado débil no mueve bien
              los nutrientes. Busca un punto medio.
            </p>
          </section>

          <section className="space-y-3">
            <h3 className="text-2xl font-semibold">
              5. Crea el retorno de agua
            </h3>

            <p className="leading-8">
              El agua que sube a la cama debe volver al tanque. Puedes hacer un
              retorno sencillo con un tubo de salida que caiga por gravedad. Lo
              importante es que el agua no se quede acumulada sin salida.
            </p>

            <p className="leading-8">
              Si usas un sistema de cama inundada, puedes instalar un sifón de
              campana. El sifón permite que la cama se llene y luego se vacíe
              automáticamente. Si estás empezando, puedes hacerlo simple primero
              con flujo constante y luego mejorar el diseño.
            </p>
          </section>

          <figure className="mx-auto max-w-xl">
            <Image
  src="/acuaponia1es.png"
  alt="Cama de cultivo acuapónica con plantas creciendo"
  width={800}
  height={550}
  className="h-auto w-full rounded-2xl object-cover shadow-md"
/>
            <figcaption className="mt-2 text-sm text-[#6b786b]">
              La cama de cultivo sostiene las plantas y ayuda a filtrar el agua.
            </figcaption>
          </figure>

          <section className="space-y-3">
            <h3 className="text-2xl font-semibold">
              6. Llena el sistema con agua y pruébalo sin peces
            </h3>

            <p className="leading-8">
              Antes de meter peces, llena el sistema y prende la bomba. Revisa
              fugas, flujo, retorno, salpicaduras y estabilidad. Déjalo correr
              varias horas. Si algo gotea o se desborda, arréglalo antes de seguir.
            </p>

            <p className="leading-8">
              Este paso te evita perder peces por un error de construcción.
            </p>
          </section>

          <section className="space-y-3">
            <h3 className="text-2xl font-semibold">
              7. Añade peces poco a poco
            </h3>

            <p className="leading-8">
              No llenes el tanque de peces desde el primer día. Empieza con pocos.
              En acuaponía, más peces no significa mejor sistema. Más peces
              significa más desperdicio, más responsabilidad y más riesgo.
            </p>

            <p className="leading-8">
              Para aprender, usa peces resistentes y fáciles de conseguir. En
              sistemas pequeños, muchas personas usan goldfish o tilapias pequeñas
              donde sea legal y apropiado. Verifica regulaciones locales antes de
              criar especies específicas.
            </p>
          </section>

          <section className="space-y-3">
            <h3 className="text-2xl font-semibold">
              8. Siembra plantas fáciles
            </h3>

            <p className="leading-8">
              Empieza con lechuga, albahaca, menta, cilantro o cebollines. Estas
              plantas no exigen tantos nutrientes como tomates o pimientos. Si el
              sistema está nuevo, las plantas de hoja son mejor opción.
            </p>

            <p className="leading-8">
              Puedes sembrar plántulas pequeñas directamente en el medio de
              cultivo. Lava suavemente la tierra de las raíces antes de colocarlas
              para no ensuciar demasiado el sistema.
            </p>
          </section>

          <section className="space-y-3">
            <h3 className="text-2xl font-semibold">
              9. Observa el sistema todos los días al principio
            </h3>

            <p className="leading-8">
              Los primeros días son de observación. Mira si los peces comen bien,
              si el agua huele raro, si la bomba está trabajando, si las plantas
              se ven firmes y si el retorno funciona. Un sistema acuapónico casero
              barato puede funcionar muy bien, pero solo si lo revisas.
            </p>
          </section>
        </section>

        <section className="space-y-4">
          <h2 className="text-3xl font-bold">
            Dónde poner el sistema acuapónico
          </h2>

          <p className="leading-8">
            El mejor lugar es uno con buena luz para las plantas, pero sin calor
            extremo para los peces. Una terraza, patio techado, área con sombra
            parcial o greenhouse sencillo puede funcionar.
          </p>

          <ul className="list-disc space-y-3 pl-6 leading-8">
            <li>Debe tener acceso a electricidad para la bomba.</li>
            <li>Debe estar nivelado y firme.</li>
            <li>Debe estar protegido de lluvia fuerte y sol extremo.</li>
            <li>Debe ser fácil de revisar todos los días.</li>
            <li>Debe tener suficiente luz para que las plantas crezcan.</li>
          </ul>

          <p className="leading-8">
            No lo pongas en un lugar escondido donde se te olvide. La acuaponía
            funciona mejor cuando puedes mirar el sistema rápido todos los días.
          </p>
        </section>

        <section className="space-y-4 rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-3xl font-bold">Errores comunes</h2>

          <ul className="list-disc space-y-3 pl-6 leading-8">
            <li>
              <strong>Meter demasiados peces:</strong> satura el sistema y puede
              dañar la calidad del agua.
            </li>
            <li>
              <strong>Usar una bomba muy débil:</strong> no mueve bien el agua ni
              los nutrientes.
            </li>
            <li>
              <strong>No lavar la grava:</strong> ensucia el sistema desde el
              primer día.
            </li>
            <li>
              <strong>Ponerlo al sol fuerte todo el día:</strong> calienta el agua
              y favorece algas.
            </li>
            <li>
              <strong>Alimentar demasiado a los peces:</strong> la comida sobrante
              se pudre y afecta el agua.
            </li>
            <li>
              <strong>Empezar con plantas exigentes:</strong> tomates y pimientos
              pueden fallar si el sistema todavía no está maduro.
            </li>
            <li>
              <strong>No revisar fugas:</strong> una fuga pequeña puede vaciar el
              sistema poco a poco.
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-3xl font-bold">
            Consejos para mantenerlo barato
          </h2>

          <ul className="list-disc space-y-3 pl-6 leading-8">
            <li>Usa contenedores reciclados, pero asegúrate de que no hayan tenido químicos.</li>
            <li>Empieza pequeño antes de construir algo grande.</li>
            <li>Compra una bomba adecuada, no la más cara.</li>
            <li>Usa plantas fáciles para evitar pérdidas.</li>
            <li>Construye primero un sistema simple y mejora después.</li>
          </ul>
        </section>

        <section className="space-y-4 rounded-2xl bg-green-50 p-6">
          <h2 className="text-3xl font-bold">Conclusión</h2>

          <p className="leading-8">
            Construir un sistema acuapónico casero barato no significa hacer algo
            mal hecho. Significa empezar inteligente: tamaño pequeño, materiales
            simples, buena circulación de agua y plantas fáciles.
          </p>

          <p className="leading-8">
            Si entiendes el ciclo básico entre peces, bacterias y plantas, ya
            tienes la base. No busques perfección desde el primer día. Construye,
            prueba sin peces, ajusta el flujo, añade pocos peces y observa.
          </p>

          <p className="leading-8">
            La acuaponía es práctica, educativa y poderosa. Con un sistema pequeño
            puedes aprender lo suficiente para luego escalar a algo más grande,
            más productivo y más bonito para tu casa o finca.
          </p>
        </section>
      </article>
    </main>
  );
}