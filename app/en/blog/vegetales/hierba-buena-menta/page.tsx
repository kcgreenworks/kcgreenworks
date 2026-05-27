import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "How to Grow Mint at Home Step by Step",
  description:
    "Practical guide to growing mint at home from cuttings, seeds, or starter plants. Learn about soil, watering, sunlight, pruning, common mistakes, and harvesting.",
};

export default function MintPage() {
  return (
    <main className="min-h-screen bg-[#f4f1e8] px-6 py-12 text-[#1f2a1f]">
      <article className="mx-auto max-w-4xl space-y-10">

        <Link
          href="/en/blog/vegetales"
          className="text-sm font-semibold text-green-800 hover:underline"
        >
          ← Back to Vegetables
        </Link>

        <header className="space-y-5">
          <p className="text-sm font-semibold uppercase tracking-wide text-green-800">
            Home Growing Guide
          </p>

          <h1 className="text-4xl font-bold leading-tight md:text-5xl">
            How to Grow Mint at Home Step by Step
          </h1>

          <p className="text-lg leading-8 text-[#405040]">
            Learn how to grow mint at home in a simple, practical, and realistic
            way. This plant is perfect for beginners because it grows fast,
            smells amazing, works great for cooking, drinks, home remedies,
            and does not require a large space.
          </p>
        </header>

        <div className="overflow-hidden rounded-2xl bg-white shadow-sm">
          <Image
            src="/images/hierbabuena1.jpg.jpeg"
            alt="Mint plant growing in a container"
            width={1200}
            height={800}
            className="mx-auto h-[450px] w-auto rounded-2xl object-cover shadow-md"
            priority
          />
        </div>

        <section className="space-y-5 text-lg leading-8">
          <p>
            Mint is one of those plants truly worth having at home. It does not
            take much space, adapts well to containers, and can produce fresh
            leaves almost year-round if properly maintained.
          </p>

          <p>
            The important thing to understand from the beginning is this:
            mint is easy to grow, but it is also very invasive. If planted
            directly in the ground, it can spread everywhere. That is why for
            most people, growing it in containers is the smartest option.
          </p>
        </section>

        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-3xl font-bold">
            The Best Way to Start Growing Mint
          </h2>

          <p className="text-lg leading-8">
            The fastest and most reliable way to grow mint is by using a cutting.
            A cutting is simply a stem taken from a healthy plant. Place it in
            water or directly into moist soil, and within a few days it will
            begin developing roots.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="rounded-xl border border-green-100 bg-[#f4f1e8] p-4">
              <h3 className="font-bold">From Cuttings</h3>
              <p className="mt-2 text-sm leading-6">
                The best option. Fast-growing, easy, and highly successful.
              </p>
            </div>

            <div className="rounded-xl border border-green-100 bg-[#f4f1e8] p-4">
              <h3 className="font-bold">From Store-Bought Plants</h3>
              <p className="mt-2 text-sm leading-6">
                Ideal if you want immediate results with less work.
              </p>
            </div>

            <div className="rounded-xl border border-green-100 bg-[#f4f1e8] p-4">
              <h3 className="font-bold">From Seeds</h3>
              <p className="mt-2 text-sm leading-6">
                Possible, but slower and requires more patience.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-3xl font-bold">
            Materials You Need
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <h3 className="text-xl font-bold">Container</h3>
              <p className="mt-2 leading-7">
                Use a container at least 8–10 inches wide. It must have proper
                drainage holes. If water sits at the bottom, the roots will rot.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <h3 className="text-xl font-bold">Soil or Potting Mix</h3>
              <p className="mt-2 leading-7">
                Mint prefers loose soil rich in organic matter with good drainage.
                A quality potting mix with compost works very well.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <h3 className="text-xl font-bold">Water</h3>
              <p className="mt-2 leading-7">
                Mint likes moisture but not excess water. The soil should stay
                moist, not soaked.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <h3 className="text-xl font-bold">Light</h3>
              <p className="mt-2 leading-7">
                It needs strong brightness. Morning sun is excellent, but in
                very hot climates partial shade works better.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-5 text-lg leading-8">
          <h2 className="text-3xl font-bold">
            Step-by-Step: Growing Mint From a Cutting
          </h2>

          <h3 className="text-2xl font-bold">
            1. Cut a Healthy Stem
          </h3>

          <p>
            Choose a green, strong stem without spots or damage. Cut a piece
            around 4–6 inches long. Remove the leaves from the lower section
            so roots can form there.
          </p>

          <h3 className="text-2xl font-bold">
            2. Place It in Water or Soil
          </h3>

          <p>
            If using water, place the stem in a clean glass and change the water
            every two days. In about a week you should start seeing roots.
            If planting directly into soil, keep the soil moist during the
            first few days.
          </p>

          <h3 className="text-2xl font-bold">
            3. Prepare the Container
          </h3>

          <p>
            Fill the container with loose potting mix. Do not compact the soil.
            Roots need oxygen and room to grow.
          </p>

          <h3 className="text-2xl font-bold">
            4. Plant the Cutting
          </h3>

          <p>
            Make a small hole in the center, place the cutting inside, and
            gently cover the base. Water thoroughly, but do not turn the pot
            into a swamp.
          </p>

          <h3 className="text-2xl font-bold">
            5. Place It in the Right Location
          </h3>

          <p>
            Put the plant somewhere with strong natural light. If you live in
            Florida, Puerto Rico, or another very hot climate, avoid intense
            afternoon sun because it can burn the leaves.
          </p>
        </section>

        <div className="overflow-hidden rounded-2xl bg-white shadow-sm">
          <Image
            src="/images/hierbabuena2.jpeg"
            alt="Mint cutting developing roots"
            width={1200}
            height={800}
            className="mx-auto h-[450px] w-auto rounded-2xl object-cover shadow-md"
          />
        </div>

        <section className="space-y-5 text-lg leading-8">
          <h2 className="text-3xl font-bold">
            How to Care for Mint After Planting
          </h2>

          <p>
            The main goal is balance. Do not let the plant stay dry for too
            long, but do not drown it either. Stick your finger into the soil:
            if the top inch feels dry, water it. If it still feels moist, wait.
          </p>

          <p>
            Pruning is essential. The more you prune correctly, the fuller and
            bushier the plant becomes. Avoid constantly pulling random leaves.
            Instead, cut full stems just above a node, where new branches form.
          </p>

          <p>
            If the plant begins flowering, you can trim the flowers to maintain
            better flavor in the leaves. Once mint flowers, part of its energy
            shifts toward flowering and the flavor may slightly change.
          </p>
        </section>

        <section className="rounded-2xl bg-green-900 p-6 text-white">
          <h2 className="text-3xl font-bold">
            Practical Tip
          </h2>

          <p className="mt-4 text-lg leading-8">
            If you want fresh mint all the time, do not rely on a single plant.
            Keep two or three smaller containers. While one recovers after
            harvesting, you can use the others. This creates more consistent
            production and prevents over-harvesting a single plant.
          </p>
        </section>

        <section className="space-y-5 text-lg leading-8">
          <h2 className="text-3xl font-bold">
            Common Mistakes When Growing Mint
          </h2>

          <p>
            The first mistake is planting mint directly in the yard without
            control. Mint spreads aggressively and later becomes difficult
            to remove.
          </p>

          <p>
            The second mistake is using containers without drainage. Even though
            mint likes moisture, the roots still need oxygen. Standing water
            leads to root rot.
          </p>

          <p>
            The third mistake is leaving it under harsh sunlight all day.
            In hot climates, this can burn the leaves, turn them yellow,
            or slow growth.
          </p>

          <p>
            The fourth mistake is not pruning. Unpruned mint becomes leggy,
            weak, and less productive. Properly pruned mint becomes fuller
            and healthier.
          </p>
        </section>

        <div className="overflow-hidden rounded-2xl bg-white shadow-sm">
          <Image
            src="/images/hierbabuena3.jpeg"
            alt="Freshly harvested mint leaves ready for kitchen use"
            width={1200}
            height={800}
            className="mx-auto h-[450px] w-auto rounded-2xl object-cover shadow-md"
          />
        </div>

        <section className="space-y-5 text-lg leading-8">
          <h2 className="text-3xl font-bold">
            When and How to Harvest
          </h2>

          <p>
            You can start harvesting once the plant has several strong branches
            and looks fully established. Cut above a pair of leaves so new
            growth develops from that point.
          </p>

          <p>
            For fresh use, cut only what you need and wash before using.
            Mint works great in tea, lemonade, mojitos, salads, infused water,
            marinades, and as an aromatic ingredient in cooking.
          </p>

          <p>
            If production becomes excessive, you can dry the leaves in a
            ventilated area and store them in a clean jar. You can also freeze
            mint leaves in ice cubes for later use in drinks.
          </p>
        </section>

        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-3xl font-bold">
            Quick Summary
          </h2>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <p>
              <strong>Best method:</strong> cuttings or starter plants.
            </p>

            <p>
              <strong>Container:</strong> minimum 8–10 inches.
            </p>

            <p>
              <strong>Light:</strong> bright light or gentle sun.
            </p>

            <p>
              <strong>Watering:</strong> moist soil, never soaked.
            </p>

            <p>
              <strong>Pruning:</strong> frequent pruning for bushier growth.
            </p>

            <p>
              <strong>Warning:</strong> best grown in containers because it spreads easily.
            </p>
          </div>
        </section>

        <section className="space-y-5 text-lg leading-8">
          <h2 className="text-3xl font-bold">
            Conclusion
          </h2>

          <p>
            Growing mint at home is one of the best ways to start a small home
            garden. You do not need much space, expensive equipment, or years
            of experience. With a proper container, loose soil, moderate
            watering, correct lighting, and regular pruning, you can enjoy
            fresh mint almost year-round.
          </p>

          <p>
            Start with a cutting, plant it in a well-drained container, and
            stay consistent with care. Within a few weeks, you will have a
            useful, beautiful, and productive plant ready for your kitchen.
          </p>
        </section>

      </article>
    </main>
  );
}