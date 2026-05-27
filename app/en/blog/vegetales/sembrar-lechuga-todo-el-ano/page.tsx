import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "How to Grow Lettuce All Year Round Even in Hot Weather",
  description:
    "Complete guide to growing lettuce at home all year long, even during periods of intense heat. Learn about varieties, soil, watering, shade, harvesting, nutrients, and common mistakes.",
};

export default function GrowLettuceAllYearPage() {
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
            How to Grow Lettuce All Year Round, Even in Extreme Heat
          </h1>

          <p className="text-lg leading-8 text-[#405040]">
            Lettuce is one of the most useful vegetables to grow at home,
            but it is also one of the crops that suffers the most when
            temperatures rise. In this guide, you will learn how to grow it,
            care for it, protect it from heat, harvest it properly, and keep
            production going throughout the entire year.
          </p>
        </header>

        <div className="overflow-hidden rounded-2xl bg-white shadow-sm">
          <Image
            src="/images/lechuga-todo-el-ano-hero.png"
            alt="Green lettuce growing in a home garden with good lighting"
            width={1200}
            height={800}
            className="mx-auto h-[450px] w-auto rounded-2xl object-cover shadow-md"
            priority
          />
        </div>

        <section className="space-y-5 text-lg leading-8">
          <h2 className="text-3xl font-bold">
            First: Yes, Lettuce Can Be Grown All Year Long
          </h2>

          <p>
            Lettuce prefers cool weather. That is true. But that does not mean
            it can only be grown during cooler seasons. What changes during hot
            weather is the strategy: you must choose better varieties, control
            sun exposure, manage watering more carefully, and harvest before
            the plant becomes stressed.
          </p>

          <p>
            When lettuce gets too hot, it tries to flower quickly. This process
            is called <strong>bolting</strong>. The plant develops a tall stem,
            the leaves become more bitter, and quality decreases. The goal when
            growing in hot weather is to delay that process as much as possible.
          </p>
        </section>

        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-3xl font-bold">
            Why Grow Lettuce at Home?
          </h2>

          <p className="mt-4 text-lg leading-8">
            Growing lettuce at home gives you fresh leaves for salads,
            sandwiches, wraps, bowls, and quick meals. It is also an excellent
            crop for learning because it grows fast, does not require deep roots,
            and adapts very well to containers, raised beds, simple hydroponics,
            and small gardens.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-xl border border-green-100 bg-[#f4f1e8] p-4">
              <h3 className="font-bold">Fast Harvest</h3>
              <p className="mt-2 leading-7">
                Many varieties allow you to harvest young leaves in just 25 to
                35 days.
              </p>
            </div>

            <div className="rounded-xl border border-green-100 bg-[#f4f1e8] p-4">
              <h3 className="font-bold">Small Space Friendly</h3>
              <p className="mt-2 leading-7">
                Grows well in pots, planters, raised beds, and compact spaces.
              </p>
            </div>

            <div className="rounded-xl border border-green-100 bg-[#f4f1e8] p-4">
              <h3 className="font-bold">Great for Beginners</h3>
              <p className="mt-2 leading-7">
                It reacts quickly to watering, sunlight, and general care,
                making it ideal for learning.
              </p>
            </div>

            <div className="rounded-xl border border-green-100 bg-[#f4f1e8] p-4">
              <h3 className="font-bold">Continuous Production</h3>
              <p className="mt-2 leading-7">
                If you plant a little every week, you can enjoy fresh lettuce
                almost constantly.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-5 text-lg leading-8">
          <h2 className="text-3xl font-bold">
            What Lettuce Needs to Grow Well
          </h2>

          <p>
            Lettuce is not complicated, but it is sensitive to stress. It grows
            best with constant moisture, bright light without excessive heat,
            loose soil, and available nutrients.
          </p>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <h3 className="text-xl font-bold">Light</h3>
              <p className="mt-2 leading-7">
                In mild climates, it can receive several hours of sun. In very
                hot weather, morning sun and afternoon partial shade work best.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <h3 className="text-xl font-bold">Water</h3>
              <p className="mt-2 leading-7">
                It needs consistent moisture. The soil should stay fresh and
                slightly moist, never waterlogged.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <h3 className="text-xl font-bold">Growing Medium</h3>
              <p className="mt-2 leading-7">
                Use a loose mix rich in organic matter with good drainage and
                strong moisture retention.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <h3 className="text-xl font-bold">Temperature</h3>
              <p className="mt-2 leading-7">
                Heat accelerates bolting. That is why shade, proper watering,
                and heat-tolerant varieties are important.
              </p>
            </div>
          </div>
        </section>

        <div className="overflow-hidden rounded-2xl bg-white shadow-sm">
          <Image
            src="/images/lechuga-sombra-calor.png"
            alt="Lettuce growing under partial shade for heat protection"
            width={1200}
            height={800}
            className="mx-auto h-[450px] w-auto rounded-2xl object-cover shadow-md"
          />
        </div>

        <section className="space-y-5 text-lg leading-8">
          <h2 className="text-3xl font-bold">
            Best Lettuce Types for Hot Weather
          </h2>

          <p>
            Not all lettuce varieties tolerate heat the same way. For year-round
            production, it is better to use loose-leaf varieties, heat-resistant
            romaine types, and varieties known for bolting more slowly.
          </p>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <div className="grid gap-4 md:grid-cols-2">
              <p>
                <strong>Romaine Lettuce:</strong> strong structure, crisp leaves,
                and better heat tolerance than many head lettuces.
              </p>

              <p>
                <strong>Loose-Leaf Lettuce:</strong> grows quickly and allows
                gradual harvesting leaf by leaf.
              </p>

              <p>
                <strong>Batavia:</strong> often handles weather changes better
                while maintaining excellent texture.
              </p>

              <p>
                <strong>Slow Bolt Varieties:</strong> specifically selected to
                delay flowering longer.
              </p>
            </div>
          </div>
        </section>

      </article>
    </main>
  );
}