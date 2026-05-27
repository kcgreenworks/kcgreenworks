import Link from "next/link";

export default function QuePuedenConsumirLasLombrices() {
  return (
    <main className="min-h-screen bg-[#f4f1e8] px-6 py-12 text-[#1f2a1f]">
      <article className="mx-auto max-w-4xl space-y-10">

        <Link
          href="/blog/lombricultura"
          className="text-sm font-semibold text-green-800 hover:underline"
        >
          ← Back to Vermiculture
        </Link>

        <section className="space-y-8">

          {/* TITLE */}
          <div className="space-y-4">
            <h1 className="text-4xl font-bold md:text-5xl leading-tight">
              What worms can eat and how they turn it into compost
            </h1>

            <p className="text-lg text-[#4b5a4b]">
              Worms do not turn “garbage” into fertilizer by magic. They work together with bacteria, fungi, and microorganisms to transform organic waste into stable, dark, life-filled humus, with a clean earth smell and highly nutritious for plants.
            </p>

            <img
              src="/lombricultura2es.png"
              alt="Step-by-step vermiculture system"
              className="mx-auto w-full max-w-3xl rounded-xl shadow-md"
            />
          </div>

          {/* HOW IT WORKS */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">
              How the worm transforms waste
            </h2>

            <p>
              The red wiggler worm ingests decomposing organic matter together with microorganisms. Inside its digestive system, a key process takes place:
            </p>

            <ul className="list-disc pl-6 space-y-2">
              <li>Reduces the size of the material (breaks it down)</li>
              <li>Activates beneficial bacteria</li>
              <li>Stabilizes nutrients</li>
              <li>Converts waste into highly fertile humus</li>
            </ul>

            <p className="font-semibold">
              The final result is not common soil: it is a biologically active fertilizer.
            </p>

            <img
              src="/lombricultura1es.png"
              alt="Worm digestive system"
              className="mx-auto w-full max-w-3xl rounded-xl shadow-md"
            />
          </div>

          {/* LIST */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">
              What worms can eat
            </h2>

            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Fruits and vegetables</h3>
              <p>
                Peels, kitchen scraps, pulp, and leaves. They are rich in water and natural sugars.
              </p>
              <p className="font-semibold">
                They decompose quickly and accelerate the humus production process.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Coffee grounds</h3>
              <p>
                Excellent source of nitrogen. Improves microbial activity and compost structure.
              </p>
              <p className="font-semibold">
                Worms convert it into a more stable and balanced material.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Dry leaves</h3>
              <p>
                They provide carbon, regulate moisture, and prevent bad odors.
              </p>
              <p className="font-semibold">
                They are key to maintaining system balance.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Cardboard and paper</h3>
              <p>
                Without heavy ink. They provide structure and aeration.
              </p>
              <p className="font-semibold">
                They prevent compaction and improve oxygen flow.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Eggshells</h3>
              <p>
                Natural source of calcium. They help regulate pH.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Garden waste</h3>
              <p>
                Dry grass, leaves, and pruning leftovers.
              </p>
              <p className="font-semibold">
                They increase the biological diversity of the humus.
              </p>
            </div>
          </div>

          {/* WHAT NOT */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">
              What you should NOT add
            </h2>

            <ul className="list-disc pl-6 space-y-2">
              <li>Meat or fish</li>
              <li>Dairy products</li>
              <li>Greasy or processed food</li>
              <li>Excess citrus</li>
              <li>Chemicals or pesticides</li>
            </ul>

            <p>
              These materials generate bad odors, attract pests, and break the balance of the system.
            </p>
          </div>

          {/* CLOSING */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">
              Conclusion
            </h2>

            <p>
              The worm does not just decompose: it improves. It converts waste into a living fertilizer, rich in microorganisms and ready to nourish plants naturally.
            </p>

            <p className="font-semibold">
              The better you feed your worms, the better the result you will get.
            </p>
          </div>

        </section>
      </article>
    </main>
  );
}