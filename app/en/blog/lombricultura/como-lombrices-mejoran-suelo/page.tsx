import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "How worms improve soil: real explanation of the process",
  description:
    "Clear guide about how worms improve soil, what they do inside the ground, what components they produce, what humus is used for, and how to use it correctly.",
};

export default function ComoLombricesMejoranSueloPage() {
  return (
    <main className="min-h-screen bg-[#f4f1e8] px-6 py-12 text-[#1f2a1f]">
      <article className="mx-auto max-w-4xl space-y-10">
        <Link
          href="/blog/lombricultura"
          className="text-sm font-semibold text-green-800 hover:underline"
        >
          ← Back to Vermiculture
        </Link>

        <header className="space-y-5">
          <p className="text-sm font-semibold uppercase tracking-wide text-green-800">
            Living soil and natural fertility
          </p>

          <h1 className="text-4xl font-bold leading-tight md:text-5xl">
            How worms improve soil: real explanation of the process
          </h1>

          <p className="text-lg leading-8 text-[#405040]">
            Worms do not “perform magic.” What they do is transform organic
            matter, move the soil, activate microorganisms, and produce humus:
            one of the most stable and useful forms of natural fertility. In
            this guide you will understand, from scratch, what really happens beneath
            the ground.
          </p>
        </header>

        <div className="overflow-hidden rounded-2xl bg-white shadow-sm">
          <Image
            src="/images/lombrices-mejoran-suelo-hero.png"
            alt="Worms working in dark fertile soil with plant roots"
            width={1200}
            height={800}
            className="h-auto w-full object-cover"
            priority
          />
        </div>

        <section className="space-y-5 text-lg leading-8">
          <h2 className="text-3xl font-bold">
            First: why are worms so important?
          </h2>

          <p>
            Healthy soil is not simply loose dirt. Healthy soil contains
            air, moisture, organic matter, minerals, roots, fungi, bacteria,
            and small organisms working together. Worms are part of
            that system.
          </p>

          <p>
            Their main function is to process organic material and convert it into
            a more stable, finer, and easier-to-integrate form for the soil. In
            that process they improve physical structure, nutrient
            availability, and biological activity.
          </p>

          <p>
            Simply put: worms help convert organic waste into
            living soil.
          </p>
        </section>

        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-3xl font-bold">
            The real process: what worms do step by step
          </h2>

          <div className="mt-6 space-y-6 text-lg leading-8">
            <div>
              <h3 className="text-2xl font-bold">1. They consume organic matter</h3>
              <p className="mt-2">
                Worms eat decomposing plant scraps, leaves,
                damp cardboard, microorganisms, fungi, and soil particles.
                They do not eat fresh food immediately as it is; first
                microorganisms begin to decompose it and then the worm
                processes it.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold">2. They grind and mix the material</h3>
              <p className="mt-2">
                As it passes through their digestive system, the material fragments,
                mixes with enzymes, and transforms. This increases the surface
                available for beneficial bacteria and fungi to continue
                working.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold">3. They produce worm humus</h3>
              <p className="mt-2">
                The final result is fine, dark, stable castings,
                known as worm humus or vermicompost. This humus is
                rich in stabilized organic matter and helps improve soil
                fertility.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold">4. They create tunnels and pores</h3>
              <p className="mt-2">
                As worms move, they open channels in the soil. Those channels
                allow oxygen to enter, water to penetrate better, and
                roots to find easier paths to grow.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold">5. They activate microbial life</h3>
              <p className="mt-2">
                Worms do not work alone. Their presence supports bacteria,
                fungi, and other microorganisms that participate in nutrient release
                and overall soil health.
              </p>
            </div>
          </div>
        </section>

        <div className="overflow-hidden rounded-2xl bg-white shadow-sm">
          <Image
            src="/images/lombrices-proceso-suelo.png"
            alt="Diagram of the worm process transforming organic matter into humus"
            width={1200}
            height={800}
            className="h-auto w-full object-cover"
          />
        </div>

        <section className="space-y-5 text-lg leading-8">
          <h2 className="text-3xl font-bold">
            What components they contribute to the soil
          </h2>

          <p>
            The humus produced by worms does not always have an identical composition.
            It depends on food source, moisture, temperature, bedding type,
            and process maturity. But in general, it can provide these
            components:
          </p>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <h3 className="text-xl font-bold">Stable organic matter</h3>
              <p className="mt-2 leading-7">
                Improves soil texture, increases moisture retention, and
                helps keep nutrients available longer.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <h3 className="text-xl font-bold">Main nutrients</h3>
              <p className="mt-2 leading-7">
                It may contain nitrogen, phosphorus, and potassium in forms more
                accessible to plants, although it should not be viewed as a strong
                chemical-type fertilizer.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <h3 className="text-xl font-bold">Micronutrients</h3>
              <p className="mt-2 leading-7">
                It may provide iron, zinc, manganese, copper, boron, calcium,
                magnesium, and other elements needed in small amounts.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <h3 className="text-xl font-bold">Beneficial microorganisms</h3>
              <p className="mt-2 leading-7">
                Well-made humus can contain useful bacteria and fungi that
                help activate soil life.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <h3 className="text-xl font-bold">Humic and fulvic acids</h3>
              <p className="mt-2 leading-7">
                They help improve nutrient availability and the interaction
                between soil, roots, and microorganisms.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <h3 className="text-xl font-bold">Enzymes and bioactive compounds</h3>
              <p className="mt-2 leading-7">
                They participate in biological processes that help break down
                organic matter and gradually release nutrients.
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-2xl bg-green-900 p-6 text-white">
          <h2 className="text-3xl font-bold">
            The most important thing
          </h2>

          <p className="mt-4 text-lg leading-8">
            Worms improve soil in three main ways: physically,
            because they aerate and loosen it; chemically, because they help release
            nutrients; and biologically, because they support useful microorganisms.
            That combination is what truly creates fertile soil.
          </p>
        </section>

        <section className="space-y-5 text-lg leading-8">
          <h2 className="text-3xl font-bold">
            What is the purpose of having worms in the system
          </h2>

          <p>
            Having worms in a vermicompost bin or in healthy soil serves
            to transform organic waste into an agricultural resource. Instead of
            throwing away peels, leaves, and plant scraps, you can turn them into humus
            that helps your plants.
          </p>

          <p>
            In home gardens, this is valuable because it reduces waste, improves
            soil, and allows you to depend less on purchased products.
          </p>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <h3 className="text-2xl font-bold">Practical benefits</h3>

            <div className="mt-5 grid gap-3 md:grid-cols-2">
              <p>Improves soil structure.</p>
              <p>Increases moisture retention.</p>
              <p>Helps roots grow better.</p>
              <p>Activates beneficial microorganisms.</p>
              <p>Recycles organic waste.</p>
              <p>Produces useful humus for pots and gardens.</p>
              <p>Reduces compaction.</p>
              <p>Improves nutrient availability.</p>
            </div>
          </div>
        </section>

        <div className="overflow-hidden rounded-2xl bg-white shadow-sm">
          <Image
            src="/images/humus-lombriz-suelo.png"
            alt="Dark worm humus applied on a garden bed"
            width={1200}
            height={800}
            className="h-auto w-full object-cover"
          />
        </div>

        <section className="space-y-5 text-lg leading-8">
          <h2 className="text-3xl font-bold">
            How to use worm humus correctly
          </h2>

          <p>
            Worm humus is used as a soil improver. You do not need to
            apply excessive amounts. Ideally, mix it with soil or
            apply it as a surface layer around plants.
          </p>

          <h3 className="text-2xl font-bold">In pots</h3>
          <p>
            Mix between 10% and 20% worm humus with the substrate. For
            example, if you prepare a pot, you can use 8 parts soil or
            potting mix and 2 parts humus.
          </p>

          <h3 className="text-2xl font-bold">In gardens</h3>
          <p>
            Apply a 1 to 2 inch layer over the garden bed and gently mix it
            with the top part of the soil. There is no need to bury it
            deeply.
          </p>

          <h3 className="text-2xl font-bold">On established plants</h3>
          <p>
            Add a handful or a thin layer around the plant, avoiding placing it
            directly against the stem. Then water so microbial life
            activates.
          </p>

          <h3 className="text-2xl font-bold">In seed trays</h3>
          <p>
            Use a small amount. Humus helps, but a seed tray needs a fine,
            lightweight substrate with good drainage. Too much heavy material can retain
            excessive moisture.
          </p>
        </section>

        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-3xl font-bold">
            How to keep worms healthy
          </h2>

          <div className="mt-6 space-y-5 text-lg leading-8">
            <p>
              For worms to work properly, they need moisture, oxygen,
              shade, suitable food, and moderate temperature. If the system
              gets too hot, dries out, or rots, the worms become stressed or
              die.
            </p>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-xl bg-[#f4f1e8] p-4">
                <h3 className="font-bold">Correct moisture</h3>
                <p className="mt-2 leading-7">
                  The bedding should feel like a squeezed sponge: moist, but
                  not dripping.
                </p>
              </div>

              <div className="rounded-xl bg-[#f4f1e8] p-4">
                <h3 className="font-bold">Good ventilation</h3>
                <p className="mt-2 leading-7">
                  They need oxygen. If the system becomes compacted or soaked, it
                  turns anaerobic and smells bad.
                </p>
              </div>

              <div className="rounded-xl bg-[#f4f1e8] p-4">
                <h3 className="font-bold">Balanced feeding</h3>
                <p className="mt-2 leading-7">
                  Use plant scraps, leaves, damp cardboard, and small amounts
                  of coffee grounds. Do not overfeed.
                </p>
              </div>

              <div className="rounded-xl bg-[#f4f1e8] p-4">
                <h3 className="font-bold">Moderate temperature</h3>
                <p className="mt-2 leading-7">
                  Avoid strong direct sunlight. Excessive heat can kill worms
                  quickly.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-5 text-lg leading-8">
          <h2 className="text-3xl font-bold">
            Common mistakes
          </h2>

          <h3 className="text-2xl font-bold">Thinking any worm works the same</h3>
          <p>
            For vermicomposting, composting worms are used, especially the
            red wiggler worm. Not all worms work the same way or
            live well in containers.
          </p>

          <h3 className="text-2xl font-bold">Adding too much food</h3>
          <p>
            If you add more food than they can process, the material rots,
            flies appear, and the system starts to smell bad.
          </p>

          <h3 className="text-2xl font-bold">Keeping the bedding too wet</h3>
          <p>
            Worms breathe through their skin. If everything is soaked and
            without oxygen, the system becomes dangerous for them.
          </p>

          <h3 className="text-2xl font-bold">Using the humus too early</h3>
          <p>
            Finished humus should look dark, fine, smell like damp soil, and have no
            large pieces of fresh food. If there is still rotten material, it
            is not ready.
          </p>
        </section>

        <section className="rounded-2xl bg-yellow-100 p-6 text-[#3a2a00] shadow-sm">
          <h2 className="text-3xl font-bold">
            Important warning
          </h2>

          <p className="mt-4 text-lg leading-8">
            If a worm bin smells rotten, like ammonia, strong vinegar, or sewage,
            something is wrong. Normally it is excess food, too much moisture, or
            lack of air. A healthy worm bin should smell like damp soil, not
            garbage.
          </p>
        </section>

        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-3xl font-bold">
            Quick summary
          </h2>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <p>
              <strong>What they do:</strong> transform organic matter into humus.
            </p>
            <p>
              <strong>How they help:</strong> aerate, mix, and activate the soil.
            </p>
            <p>
              <strong>What they produce:</strong> humus rich in organic matter.
            </p>
            <p>
              <strong>What they provide:</strong> nutrients, microorganisms, and structure.
            </p>
            <p>
              <strong>Ideal use:</strong> pots, gardens, and established plants.
            </p>
            <p>
              <strong>Key care:</strong> moisture without excess water.
            </p>
            <p>
              <strong>Do not do:</strong> overfeed the worm bin.
            </p>
            <p>
              <strong>Good sign:</strong> smell of damp soil.
            </p>
          </div>
        </section>

        <section className="space-y-5 text-lg leading-8">
          <h2 className="text-3xl font-bold">
            Conclusion
          </h2>

          <p>
            Worms improve soil because they accelerate the transformation of
            organic waste into fertile and stable matter. By eating, moving, and
            producing humus, they change soil structure, increase microbial
            life, and help plants have a healthier environment to
            grow.
          </p>

          <p>
            If you are starting with home gardening, understanding this process gives you a
            huge advantage. It is not just about having worms; it is about creating
            a balanced system where food, moisture, oxygen, and
            microorganisms work together. That is where the soil truly starts to
            improve.
          </p>
        </section>
      </article>
    </main>
  );
}