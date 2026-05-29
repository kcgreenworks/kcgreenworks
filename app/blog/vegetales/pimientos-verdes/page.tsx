import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Cómo Sembrar Pimientos Verdes en Casa | Guía Completa",
  description:
    "Aprende cómo sembrar pimientos verdes desde semilla hasta cosecha: germinación, trasplante, riego, nutrientes, plagas, cosecha y cómo sacar semillas.",
};

export default function PimientosVerdesPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-12 text-neutral-800">
      
      {/* BOTÓN VOLVER */}
      <div className="mb-6">
        <Link
          href="/blog/vegetales"
          className="text-green-700 font-semibold text-base hover:opacity-80 transition"
        >
          ← Volver a vegetales
        </Link>
      </div>

      <article className="space-y-10">
        <header className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-wide text-green-700">
            Vegetales en casa
          </p>

          <h1 className="text-4xl font-bold tracking-tight text-neutral-950">
            Lo que aprendí sembrando pimientos verdes temporada tras temporada
          </h1>

          <p className="text-lg leading-8 text-neutral-700">
            Hay cultivos que uno aprende a respetar porque obligan a tener paciencia. El pimiento verde es uno de ellos. La primera vez que sembré pimientos pensaba que iban a crecer tan rápido como una lechuga. Así no fue. Según mi experiencia, el pimiento se toma su tiempo, pero cuando finalmente comienza a producir, la espera vale la pena. Después de varias temporadas cultivándolo, he aprendido que los mejores resultados llegan cuando uno entiende el ritmo de la planta y deja de intentar apresurarla.
          </p>
        </header>

        <Image
          src="/images/blog/pimientos-verdes/pimiento-verde-planta.png"
          alt="Planta de pimiento verde creciendo en huerto casero"
          width={1200}
          height={800}
          className="rounded-2xl object-cover shadow-md"
          priority
        />

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-neutral-950">
            Resumen rápido del cultivo
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border p-5 shadow-sm">
              <h3 className="font-semibold">Germinación</h3>
              <p>7 a 28 días, dependiendo del calor y la calidad de la semilla.</p>
            </div>

            <div className="rounded-2xl border p-5 shadow-sm">
              <h3 className="font-semibold">Trasplante</h3>
              <p>Cuando la planta tenga buen tamaño y las noches estén sobre 50°F.</p>
            </div>

            <div className="rounded-2xl border p-5 shadow-sm">
              <h3 className="font-semibold">Sol</h3>
              <p>6 a 8 horas de sol directo al día.</p>
            </div>

            <div className="rounded-2xl border p-5 shadow-sm">
              <h3 className="font-semibold">Cosecha</h3>
              <p>Usualmente 70 a 80 días después del trasplante.</p>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-neutral-950">
            Cómo empezar desde semilla
          </h2>

          <p>
            Lo ideal es comenzar las semillas en bandejas o vasos pequeños, con
            una mezcla liviana para germinar. El pimiento necesita calor para
            arrancar bien.
          </p>

          <ul className="list-disc space-y-2 pl-6">
            <li>Usa bandejas con buen drenaje.</li>
            <li>Mantén el sustrato húmedo, no encharcado.</li>
            <li>Coloca las semillas en un lugar cálido.</li>
            <li>Dales buena luz cuando broten.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-neutral-950">
            Trasplante
          </h2>

          <p>
            Cuando la planta tenga varias hojas y esté fuerte, puedes moverla.
            Usa tiestos de 5 galones o siembra directo en el suelo con buen espacio.
          </p>

          <ul className="list-disc space-y-2 pl-6">
            <li>18–24 pulgadas entre plantas.</li>
            <li>Riega bien después del trasplante.</li>
            <li>No trasplantes bajo sol fuerte.</li>
          </ul>
        </section>

        <Image
          src="/images/blog/pimientos-verdes/pimiento-verde-flor.png"
          alt="Flor de pimiento"
          width={1200}
          height={800}
          className="rounded-2xl object-cover shadow-md"
        />

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Cuidados</h2>

          <p>
            Necesita sol directo, riego constante y buen suelo con nutrientes balanceados.
          </p>

          <ul className="list-disc space-y-2 pl-6">
            <li>6–8 horas de sol</li>
            <li>Riego profundo</li>
            <li>Evitar exceso de nitrógeno</li>
          </ul>
        </section>

        <Image
          src="/images/blog/pimientos-verdes/pimiento-verde-cosecha.png"
          alt="Pimientos verdes listos"
          width={1200}
          height={800}
          className="rounded-2xl object-cover shadow-md"
        />

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Cosecha</h2>

          <p>
            Cosecha cuando el pimiento esté firme, verde brillante y de buen tamaño.
          </p>

          <ul className="list-disc space-y-2 pl-6">
            <li>No lo arranques, córtalo.</li>
            <li>Cosechar ayuda a que produzca más.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Errores comunes</h2>

          <ul className="list-disc space-y-2 pl-6">
            <li>Demasiada agua</li>
            <li>Poco sol</li>
            <li>Sembrar en frío</li>
            <li>No revisar plagas</li>
          </ul>
        </section>

        <section className="space-y-4 rounded-2xl bg-green-50 p-6">
          <h2 className="text-2xl font-bold">Conclusión</h2>

          <p>
            Si haces lo básico bien — sol, agua, suelo y paciencia — vas a tener
            pimientos verdes saludables y productivos en casa.
          </p>
        </section>

      </article>
    </main>
  );
}