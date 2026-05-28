import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "How worms improve soil: a real explanation of the process",
  description:
    "A clear guide on how worms improve soil, what they do underground, what components they produce, what worm humus is for, and how to use it correctly.",
};

export default function HowWormsImproveSoilPage() {
  return (
    <main className="min-h-screen bg-[#f4f1e8] px-6 py-12 text-[#1f2a1f]">
      <article className="mx-auto max-w-4xl space-y-10">
        <Link
          href="/en/blog/lombricultura"
          className="text-sm font-semibold text-green-800 hover:underline"
        >
          ← Back to Vermicomposting
        </Link>

        <header className="space-y-5">
          <p className="text-sm font-semibold uppercase tracking-wide text-green-800">
            Living soil and natural fertility
          </p>

          <h1 className="text-4xl font-bold leading-tight md:text-5xl">
            How worms improve soil: a real explanation of the process
          </h1>

          <p className="text-lg leading-8 text-[#405040]">
            Worms don&apos;t &quot;do magic.&quot; What they do is transform
            organic matter, move through the soil, activate microorganisms, and
            produce humus — one of the most stable and useful forms of natural
            fertility. In this guide you will understand, from scratch, what
            really happens underground.
          </p>
        </header>

        <div className="overflow-hidden rounded-2xl bg-white shadow-sm">
          <Image
            src="/images/lombrices-mejoran-suelo-hero.png"
            alt="Worms working in dark, fertile soil with plant roots"
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
            Healthy soil is not simply loose dirt. Healthy soil has air,
            moisture, organic matter, minerals, roots, fungi, bacteria, and
            small organisms all working together. Worms are part of that system.
          </p>

          <p>
            Their main function is to process organic material and convert it
            into a more stable, finer form that integrates more easily into the
            soil. In that process they improve physical structure, nutrient
            availability, and biological activity.
          </p>

          <p>
            Put simply: worms help turn organic waste into living soil.
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
                Worms eat decomposing plant scraps, leaves, damp cardboard,
                microorganisms, fungi, and soil particles. They do not eat fresh
                food right away; microorganisms begin breaking it down first, and
                then the worm processes it.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold">2. They shred and mix the material</h3>
              <p className="mt-2">
                As material passes through their digestive system, it is
                fragmented, mixed with enzymes, and transformed. This increases
                the surface area available for beneficial bacteria and fungi to
                continue their work.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold">3. They produce worm humus</h3>
              <p className="mt-2">
                The end result is fine, dark, and stable castings known as worm
                humus or vermicompost. This humus is rich in stabilized organic
                matter and helps improve soil fertility.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold">4. They create tunnels and pores</h3>
              <p className="mt-2">
                As they move, worms open channels in the soil. Those channels
                allow oxygen to enter, water to penetrate more easily, and roots
                to find clearer paths to grow.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold">5. They activate microbial life</h3>
              <p className="mt-2">
                Worms do not work alone. Their presence encourages bacteria,
                fungi, and other microorganisms that participate in nutrient
                release and the overall health of the soil.
              </p>
            </div>
          </div>
        </section>

        <div className="overflow-hidden rounded-2xl bg-white shadow-sm">
          <Image
            src="/images/lombrices-proceso-sueloen.png"
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
            Worm-produced humus does not always have an identical composition.
            It depends on diet, moisture, temperature, bedding type, and process
            maturity. But in general, it can contribute these components:
          </p>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <h3 className="text-xl font-bold">Stable organic matter</h3>
              <p className="mt-2 leading-7">
                Improves soil texture, increases moisture retention, and helps
                keep nutrients available for longer.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <h3 className="text-xl font-bold">Primary nutrients</h3>
              <p className="mt-2 leading-7">
                May contain nitrogen, phosphorus, and potassium in forms more
                accessible to plants, though it should not be seen as a strong
                fertilizer like chemical products.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <h3 className="text-xl font-bold">Micronutrients</h3>
              <p className="mt-2 leading-7">
                Can provide iron, zinc, manganese, copper, boron, calcium,
                magnesium, and other elements needed in small amounts.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <h3 className="text-xl font-bold">Beneficial microorganisms</h3>
              <p className="mt-2 leading-7">
                Well-made humus can introduce useful bacteria and fungi that
                help activate soil life.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <h3 className="text-xl font-bold">Humic and fulvic acids</h3>
              <p className="mt-2 leading-7">
                Help improve nutrient availability and the interaction between
                soil, roots, and microorganisms.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <h3 className="text-xl font-bold">Enzymes and bioactive compounds</h3>
              <p className="mt-2 leading-7">
                Participate in biological processes that help break down organic
                matter and gradually release nutrients.
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-2xl bg-green-900 p-6 text-white">
          <h2 className="text-3xl font-bold">
            The most important point
          </h2>

          <p className="mt-4 text-lg leading-8">
            Worms improve soil in three main ways: physically, by aerating and
            loosening it; chemically, by helping release nutrients; and
            biologically, by encouraging useful microorganisms. That combination
            is what creates truly fertile soil.
          </p>
        </section>

        <section className="space-y-5 text-lg leading-8">
          <h2 className="text-3xl font-bold">
            What having worms in the system is good for
          </h2>

          <p>
            Having worms in a vermicomposter or healthy soil transforms organic
            waste into an agricultural resource. Instead of throwing away peels,
            leaves, and plant scraps, you can turn them into humus that benefits
            your plants.
          </p>

          <p>
            In home gardens, this is valuable because it reduces waste, improves
            the soil, and lets you rely less on purchased products.
          </p>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <h3 className="text-2xl font-bold">Practical benefits</h3>

            <div className="mt-5 grid gap-3 md:grid-cols-2">
              <p>Improves soil structure.</p>
              <p>Increases moisture retention.</p>
              <p>Helps roots grow better.</p>
              <p>Activates beneficial microorganisms.</p>
              <p>Recycles organic waste.</p>
              <p>Produces humus useful for pots and garden beds.</p>
              <p>Reduces compaction.</p>
              <p>Improves nutrient availability.</p>
            </div>
          </div>
        </section>

        <div className="overflow-hidden rounded-2xl bg-white shadow-sm">
          <Image
            src="/images/humus-lombriz-suelo.png"
            alt="Dark worm humus applied to a growing bed"
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
            Worm humus is used as a soil amendment. You do not need to apply
            excessive amounts. The ideal approach is to mix it with soil or apply
            it as a top layer around plants.
          </p>

          <h3 className="text-2xl font-bold">In pots</h3>
          <p>
            Mix between 10% and 20% worm humus with the growing medium. For
            example, when preparing a pot you can use 8 parts soil or potting
            mix and 2 parts humus.
          </p>

          <h3 className="text-2xl font-bold">In garden beds</h3>
          <p>
            Apply a 1 to 2 inch layer over the growing bed and gently mix it
            into the top of the soil. There is no need to bury it deep.
          </p>

          <h3 className="text-2xl font-bold">Around established plants</h3>
          <p>
            Add a handful or thin layer around the plant, keeping it away from
            direct contact with the stem. Then water so the microbial life
            activates.
          </p>

          <h3 className="text-2xl font-bold">In seedling trays</h3>
          <p>
            Use sparingly. Humus helps, but seedlings need a fine, lightweight
            medium with good drainage. Too much heavy material can retain
            excessive moisture.
          </p>
        </section>

        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-3xl font-bold">
            How to keep worms healthy
          </h2>

          <div className="mt-6 space-y-5 text-lg leading-8">
            <p>
              For worms to work well, they need moisture, oxygen, shade, adequate
              food, and moderate temperature. If the system overheats, dries out,
              or rots, the worms become stressed or die.
            </p>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-xl bg-[#f4f1e8] p-4">
                <h3 className="font-bold">Correct moisture</h3>
                <p className="mt-2 leading-7">
                  The bedding should feel like a wrung-out sponge: damp, but not
                  dripping.
                </p>
              </div>

              <div className="rounded-xl bg-[#f4f1e8] p-4">
                <h3 className="font-bold">Good ventilation</h3>
                <p className="mt-2 leading-7">
                  They need oxygen. If the system compacts or becomes
                  waterlogged, it turns anaerobic and smells bad.
                </p>
              </div>

              <div className="rounded-xl bg-[#f4f1e8] p-4">
                <h3 className="font-bold">Balanced diet</h3>
                <p className="mt-2 leading-7">
                  Use vegetable scraps, leaves, damp cardboard, and small
                  amounts of coffee grounds. Do not overfeed.
                </p>
              </div>

              <div className="rounded-xl bg-[#f4f1e8] p-4">
                <h3 className="font-bold">Moderate temperature</h3>
                <p className="mt-2 leading-7">
                  Avoid strong direct sunlight. Excessive heat can kill worms
                  very quickly.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-5 text-lg leading-8">
          <h2 className="text-3xl font-bold">
            Common mistakes
          </h2>

          <h3 className="text-2xl font-bold">Thinking any worm works the same way</h3>
          <p>
            Vermicomposting uses composting worms, especially the red wiggler.
            Not all worms work the same way or live well in containers.
          </p>

          <h3 className="text-2xl font-bold">Adding too much food</h3>
          <p>
            If you add more food than the worms can process, the material rots,
            flies appear, and the system starts to smell bad.
          </p>

          <h3 className="text-2xl font-bold">Keeping the bedding too wet</h3>
          <p>
            Worms breathe through their skin. If everything is waterlogged and
            oxygen-free, the system becomes dangerous for them.
          </p>

          <h3 className="text-2xl font-bold">Using humus before it is ready</h3>
          <p>
            Finished humus should look dark and fine, smell like damp earth, and
            have no large pieces of fresh food. If there is still rotting
            material, it is not ready.
          </p>
        </section>

        <section className="rounded-2xl bg-yellow-100 p-6 text-[#3a2a00] shadow-sm">
          <h2 className="text-3xl font-bold">
            Important warning
          </h2>

          <p className="mt-4 text-lg leading-8">
            If a worm bin smells like rot, ammonia, strong vinegar, or sewage,
            something is wrong. It is usually too much food, too much moisture,
            or lack of air. A healthy worm bin should smell like damp earth, not
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
              <strong>What they contribute:</strong> nutrients, microorganisms, and structure.
            </p>
            <p>
              <strong>Ideal use:</strong> pots, garden beds, and established plants.
            </p>
            <p>
              <strong>Key care:</strong> moisture without excess water.
            </p>
            <p>
              <strong>Do not:</strong> overfeed the worm bin.
            </p>
            <p>
              <strong>Good sign:</strong> smells like damp earth.
            </p>
          </div>
        </section>

        <section className="space-y-5 text-lg leading-8">
          <h2 className="text-3xl font-bold">
            Conclusion
          </h2>

          <p>
            Worms improve soil because they accelerate the transformation of
            organic waste into fertile, stable matter. By eating, moving, and
            producing humus, they change soil structure, increase microbial life,
            and help plants have a healthier environment to grow in.
          </p>

          <p>
            If you are starting out with home gardening, understanding this
            process gives you a huge advantage. It is not just about having
            worms; it is about creating a balanced system where food, moisture,
            oxygen, and microorganisms work together. That is where soil truly
            begins to improve.
          </p>
        </section>
      </article>
    </main>
  );
}
