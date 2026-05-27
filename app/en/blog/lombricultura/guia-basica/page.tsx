import Link from "next/link";

export default function GuiaLombricultura() {
  return (
    <main className="min-h-screen bg-[#f4f1e8] px-6 py-12 text-[#1f2a1f]">
      <section className="mx-auto max-w-4xl space-y-10">

        {/* BACK */}
        <Link
          href="/blog/lombricultura"
          className="text-sm font-semibold text-green-800"
        >
          ← Back to Vermiculture
        </Link>

        {/* TITLE */}
        <h1 className="text-4xl md:text-5xl font-bold">
          Vermiculture: complete guide from scratch (done right)
        </h1>

        {/* INTRO */}
        <p className="text-lg text-[#4b5a4b]">
          Vermiculture is a biological system where worms transform organic waste into humus, one of the most complete fertilizers that exist. It is not simply composting: it is a controlled process that depends on the balance between organic matter, moisture, oxygen, and microbial activity.
        </p>

        <p>
          When managed correctly, it reduces waste, improves soil, and produces high-quality fertilizer in small spaces.
        </p>

        {/* IMAGES */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 mt-8">

          <div className="text-center">
            <img
              src="/lombricultura2es.png"
              alt="Vermiculture process"
              className="rounded-xl shadow-md w-full max-w-[400px]"
            />
            <p className="text-sm text-[#4b5a4b] mt-2">
              Complete process: waste → humus
            </p>
          </div>

          <div className="text-center">
            <img
              src="/lombricultura1es.png"
              alt="Worm digestive system"
              className="rounded-xl shadow-md w-full max-w-[400px]"
            />
            <p className="text-sm text-[#4b5a4b] mt-2">
              Digestive system: how it transforms matter into nutrients
            </p>
          </div>

        </div>

        {/* WHAT IT IS */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">What is vermiculture really?</h2>

          <p>
            It is a system where worms and microorganisms work together to decompose organic matter. The worm does not “eat garbage”; it processes decomposing matter and converts it into available nutrients.
          </p>

          <p>
            The result is humus: a dark, stable, odorless, and highly nutritious material for plants.
          </p>
        </section>

        {/* TYPES */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Types of worms (key)</h2>

          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Eisenia fetida:</strong> the most efficient</li>
            <li><strong>Eisenia andrei:</strong> similar behavior</li>
            <li><strong>African:</strong> larger, more delicate</li>
          </ul>

          <p className="font-semibold">
            Regular earthworms DO NOT work.
          </p>
        </section>

        {/* BENEFITS */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Real benefits</h2>

          <ul className="list-disc pl-6 space-y-2">
            <li>Reduces household waste</li>
            <li>Produces natural fertilizer</li>
            <li>Improves soil structure</li>
            <li>Increases microbiology</li>
            <li>Does not burn plants</li>
          </ul>
        </section>

        {/* SYSTEM */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">How to do it at home</h2>

          <ul className="list-disc pl-6 space-y-2">
            <li>Container (plastic or wood)</li>
            <li>Dry material (cardboard, leaves)</li>
            <li>Worms</li>
            <li>Organic waste</li>
            <li>Ventilation</li>
          </ul>

          <p>
            You can do it on a balcony, patio, or indoors.
          </p>
        </section>

        {/* FEEDING */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Feeding</h2>

          <ul className="list-disc pl-6 space-y-2">
            <li>Fruits</li>
            <li>Vegetables</li>
            <li>Coffee</li>
            <li>Cardboard</li>
          </ul>

          <p className="font-semibold">Avoid:</p>

          <ul className="list-disc pl-6 space-y-2">
            <li>Meat</li>
            <li>Dairy</li>
            <li>Fats</li>
          </ul>
        </section>

        {/* CONDITIONS */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Ideal conditions</h2>

          <ul className="list-disc pl-6 space-y-2">
            <li>Moisture: sponge-like</li>
            <li>Temperature: 13–25°C</li>
            <li>Oxygen: constant</li>
            <li>Neutral pH</li>
          </ul>
        </section>

        {/* ERRORS */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Common mistakes</h2>

          <ul className="list-disc pl-6 space-y-2">
            <li>Overfeeding</li>
            <li>Excess water</li>
            <li>Lack of air</li>
            <li>Poor dry/wet balance</li>
          </ul>
        </section>

        {/* CLOSING */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Conclusion</h2>

          <p>
            Vermiculture is one of the most efficient ways to convert waste into real fertility. It is simple in concept, but requires control to work correctly.
          </p>

          <p className="font-semibold">
            It is not garbage. It is a poorly managed resource.
          </p>
        </section>

      </section>
    </main>
  );
}