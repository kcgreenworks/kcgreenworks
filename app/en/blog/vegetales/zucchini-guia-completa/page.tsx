import Link from "next/link";

export default function ZucchiniGuide() {
  return (
    <main className="min-h-screen bg-[#f4f1e8] px-6 py-12 text-[#1f2a1f]">
      <article className="mx-auto max-w-4xl space-y-10">

        <Link
          href="/en/blog/vegetales"
          className="text-sm font-semibold text-green-800 hover:underline"
        >
          ← Back to Vegetables
        </Link>

        <section className="space-y-8">

          {/* TITLE */}
          <div className="space-y-4">
            <h1 className="text-4xl font-bold md:text-5xl leading-tight">
              Zucchini: Complete Guide From Seed to Harvest
            </h1>

            <p className="text-lg text-[#4b5a4b]">
              Zucchini is one of the most productive plants you can grow at home.
              It grows fast, produces heavily, and performs well both in soil and
              in aquaponic systems when properly fed.
            </p>

            <img
              src="/zucchini1.png"
              alt="Growing zucchini plant"
              className="mx-auto w-full max-w-3xl rounded-xl shadow-md"
            />
          </div>

          {/* SEED */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">
              Starting From Seed
            </h2>

            <p>
              Zucchini germinates quickly when conditions are correct.
            </p>

            <ul className="list-disc pl-6 space-y-2">
              <li>Ideal temperature: 20–30°C</li>
              <li>Germination: 3–7 days</li>
              <li>Depth: 1–2 cm</li>
              <li>Light: required immediately after sprouting</li>
            </ul>

            <p className="font-semibold">
              Common mistake: too much water → seed rot.
            </p>
          </div>

          {/* GROWTH */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">
              Plant Growth
            </h2>

            <p>
              This is an aggressively growing plant. In just a few weeks, it can
              easily double in size.
            </p>

            <ul className="list-disc pl-6 space-y-2">
              <li>Needs plenty of space (large roots and leaves)</li>
              <li>High nutrient demand</li>
              <li>Consistent watering without waterlogging</li>
              <li>Minimum 6 hours of direct sunlight</li>
            </ul>

            <img
              src="/zucchini2.png"
              alt="Zucchini flower"
              className="mx-auto w-full max-w-3xl rounded-xl shadow-md"
            />
          </div>

          {/* FLOWERING */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">
              Flowering and Pollination
            </h2>

            <p>
              Zucchini plants produce separate male and female flowers.
            </p>

            <ul className="list-disc pl-6 space-y-2">
              <li>Male flower: produces pollen only</li>
              <li>Female flower: has the fruit behind the flower</li>
              <li>Pollination is required for fruit production</li>
            </ul>

            <p className="font-semibold">
              No pollination → the fruit rots before developing.
            </p>
          </div>

          {/* NUTRIENTS */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">
              Nutrient Requirements
            </h2>

            <p>
              Zucchini is a demanding plant. Without proper nutrients, production
              drops significantly.
            </p>

            <ul className="list-disc pl-6 space-y-2">
              <li>Nitrogen → leaf growth</li>
              <li>Phosphorus → root and flower development</li>
              <li>Potassium → fruit production</li>
            </ul>

            <p className="font-semibold">
              In aquaponics, it performs best only in mature systems.
            </p>
          </div>

          {/* HARVEST */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">
              Harvest
            </h2>

            <p>
              Zucchini should be harvested young for better flavor and continuous
              production.
            </p>

            <ul className="list-disc pl-6 space-y-2">
              <li>Time: 40–60 days from planting</li>
              <li>Ideal size: 6–8 inches</li>
              <li>Frequent harvesting = more production</li>
            </ul>

            <img
              src="/zucchini3.png"
              alt="Zucchini ready for harvest"
              className="mx-auto w-full max-w-3xl rounded-xl shadow-md"
            />
          </div>

          {/* SEEDS */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">
              How to Save Seeds
            </h2>

            <p>
              To collect seeds, you must allow the fruit to fully mature.
            </p>

            <ul className="list-disc pl-6 space-y-2">
              <li>Allow the fruit to grow large and hard</li>
              <li>Cut open and remove the seeds</li>
              <li>Wash and dry them completely</li>
              <li>Store in a dry location</li>
            </ul>

            <p className="font-semibold">
              Do not use seeds from immature fruit.
            </p>
          </div>

          {/* CONCLUSION */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">
              Conclusion
            </h2>

            <p>
              Zucchini is one of the best plants for home food production, but
              it requires nutrients, space, and proper management.
            </p>

            <p className="font-semibold">
              Properly managed = continuous production. Poorly managed = large
              plant with little or no fruit.
            </p>
          </div>

        </section>
      </article>
    </main>
  );
}