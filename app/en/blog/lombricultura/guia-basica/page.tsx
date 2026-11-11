import Link from "next/link";

export const metadata = {
  alternates: { canonical: "https://kcgreenworks.com/en/blog/lombricultura/guia-basica" },
  title: "Vermicomposting: A Complete Guide from Hands-On Experience",
  description:
    "Everything about vermicomposting after raising thousands of worms: how to start, what they eat, how they multiply, and how to harvest quality worm castings at home.",
};


export default function VermicompostingGuide() {
  return (
    <main className="min-h-screen bg-[#f4f1e8] px-6 py-12 text-[#1f2a1f]">
      <section className="mx-auto max-w-4xl space-y-10">

        {/* BACK */}
        <Link
          href="/en/blog/lombricultura"
          className="text-sm font-semibold text-green-800"
        >
          ← Back to Vermicomposting
        </Link>

        {/* TITLE */}
        <h1 className="text-4xl md:text-5xl font-bold">
          Vermicomposting: Complete Beginner's Guide (Done Right)
        </h1>

        {/* INTRO */}
        <p className="text-lg text-[#4b5a4b]">
          If you had asked me years ago what a worm could do, I probably would
          have given you a pretty simple answer. Today I see it very
          differently. After countless hours watching them work, making
          mistakes, fixing systems, and seeing how they transform organic
          waste into top-quality humus, I can tell you that vermicomposting
          is one of the most powerful tools there is to improve soil
          naturally. It is not just composting: it is understanding a living
          ecosystem where moisture, oxygen, organic matter, and millions of
          microorganisms work together with the worms.
        </p>

        <p>
          That is what happened to me: the more I learned about worms, the
          more I understood that the scraps many people consider trash are
          actually raw material. When the system is managed correctly, it
          reduces waste, improves soil structure, increases biological
          activity, and produces a stable fertilizer that can be used in
          vegetable gardens, flower beds, and growing systems of every kind.
        </p>

        {/* IMAGES */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 mt-8">

          <div className="text-center">
            <img
              src="/lombricultura2en.png"
              alt="Vermicomposting process"
              className="rounded-xl shadow-md w-full max-w-[400px]"
            />
            <p className="text-sm text-[#4b5a4b] mt-2">
              Complete process: waste → humus
            </p>
          </div>

          <div className="text-center">
            <img
              src="/lombricultura1en.png"
              alt="Worm digestive system"
              className="rounded-xl shadow-md w-full max-w-[400px]"
            />
            <p className="text-sm text-[#4b5a4b] mt-2">
              Digestive system: how worms transform matter into nutrients
            </p>
          </div>

        </div>

        {/* WHAT IS IT */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">
            What Is Vermicomposting Really?
          </h2>

          <p>
            It is a system where worms and microorganisms work together to
            break down organic matter. Worms do not simply "eat garbage";
            they process decomposing organic material and convert it into
            plant-available nutrients.
          </p>

          <p>
            The result is worm humus: a dark, stable, odorless, and highly
            nutritious soil amendment for plants.
          </p>
        </section>

        {/* TYPES */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">
            Worm Species (Important)
          </h2>

          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Eisenia fetida:</strong> the most efficient species — it lives in the bedding, eats about half its body weight a day, and tolerates a home bin better than any other</li>
            <li><strong>Eisenia andrei:</strong> nearly identical behavior; the two species often come mixed in commercial worm cultures</li>
            <li><strong>African Nightcrawler:</strong> larger and fast in warm weather, but more delicate — cold hurts it quickly</li>
          </ul>

          <p className="font-semibold">
            Regular earthworms are NOT suitable for vermicomposting.
          </p>
        </section>

        {/* BENEFITS */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Real Benefits</h2>

          <ul className="list-disc pl-6 space-y-2">
            <li>Reduces household organic waste</li>
            <li>Produces natural fertilizer</li>
            <li>Improves soil structure</li>
            <li>Increases beneficial microbial life</li>
            <li>Will not burn plants like chemical fertilizers</li>
          </ul>
        </section>

        {/* SYSTEM */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">
            How to Start at Home
          </h2>

          <ul className="list-disc pl-6 space-y-2">
            <li>Container (plastic or wood)</li>
            <li>Dry bedding material (cardboard, leaves)</li>
            <li>Composting worms</li>
            <li>Organic waste</li>
            <li>Ventilation</li>
          </ul>

          <p>
            Start in that order: bedding first, then the worms, then the
            food. You can build a system on a balcony, patio, garage, or
            indoors.
          </p>
        </section>

        {/* WHAT I USE */}
        <section className="space-y-4 rounded-2xl border border-[#d8d2c3] bg-[#fffdf7] p-6">
          <h2 className="text-2xl font-bold">Start Without Improvising</h2>

          <p>
            You can build the system with any container, but if you want to
            start with proven equipment, this is what I recommend:
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li>
              <a
                href="https://www.amazon.com/dp/B0GFB7PQ91?tag=kcgreenworks-20"
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="font-semibold text-green-800 underline"
              >
                VermiHut Plus 5-Tray Worm Composter
              </a>
              : the worms climb up tray by tray on their own and the
              finished castings stay at the bottom.
            </li>
            <li>
              <a
                href="https://www.amazon.com/s?k=Uncle+Jims+Worm+Farm+red+wiggler+composting+worms&tag=kcgreenworks-20"
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="font-semibold text-green-800 underline"
              >
                Red Wiggler Composting Worms from Uncle Jim&rsquo;s Worm Farm
              </a>
              : the Eisenia you need to stock your system from day one.
            </li>
          </ul>

          <p className="text-sm text-[#657064]">
            Some links on this page are Amazon affiliate links: if you buy
            through them, KC Greenworks may earn a commission at no extra
            cost to you.
          </p>
        </section>

        {/* FEEDING */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Feeding</h2>

          <ul className="list-disc pl-6 space-y-2">
            <li>Fruit scraps</li>
            <li>Vegetable scraps</li>
            <li>Coffee grounds</li>
            <li>Cardboard and paper</li>
          </ul>

          <p className="font-semibold">Avoid:</p>

          <ul className="list-disc pl-6 space-y-2">
            <li>Meat</li>
            <li>Dairy products</li>
            <li>Grease and oils</li>
          </ul>

          <p>
            The full list, with amounts and frequency, is in my guide{" "}
            <Link href="/en/blog/lombricultura/que-pueden-consumir-las-lombrices" className="font-semibold text-green-800 underline">
              What Worms Can Eat
            </Link>
            .
          </p>
        </section>

        {/* CONDITIONS */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Ideal Conditions</h2>

          <ul className="list-disc pl-6 space-y-2">
            <li>Moisture: like a wrung-out sponge</li>
            <li>Temperature: 55–77°F (13–25°C)</li>
            <li>Constant oxygen supply</li>
            <li>Neutral pH</li>
          </ul>
        </section>

        {/* MISTAKES */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Common Mistakes</h2>

          <ul className="list-disc pl-6 space-y-2">
            <li>Overfeeding</li>
            <li>Too much water</li>
            <li>Lack of airflow</li>
            <li>Poor balance between dry and wet materials</li>
          </ul>

          <p>
            Every one of these announces itself the same way: bad smell,
            fruit flies, or worms trying to escape. The bin always tells you
            what is wrong.
          </p>
        </section>

        {/* CONCLUSION */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Conclusion</h2>

          <p>
            Vermicomposting is one of the most efficient ways to transform
            waste into real soil fertility. The concept is simple, but proper
            management is essential for success.
          </p>

          <p className="font-semibold">
            It is not waste. It is a resource that has not been managed properly.
          </p>
        </section>

        {/* KEEP GOING AND MY BOOKS */}
        <section className="space-y-4 rounded-2xl border border-[#d8d2c3] bg-[#fffdf7] p-6">
          <h2 className="text-2xl font-bold">Keep Going: The Complete System</h2>

          <ul className="list-disc pl-6 space-y-2">
            <li>
              <Link href="/en/blog/lombricultura/vermicompostera" className="font-semibold text-green-800 underline">
                How to build and manage a homemade worm bin
              </Link>
            </li>
            <li>
              <Link href="/en/blog/lombricultura/lixiviado-lombriz" className="font-semibold text-green-800 underline">
                Worm leachate: what it is and how to use it without burning your plants
              </Link>
            </li>
            <li>
              <Link href="/en/shop" className="font-semibold text-green-800 underline">
                Everything I use in my system, in the shop
              </Link>
            </li>
          </ul>

          <p>
            And if you want the whole topic, organized and without filler,
            it is in my books:{" "}
            <a
              href="https://www.amazon.com/dp/B0H24D725B?tag=kcgreenworks-20"
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="font-semibold text-green-800 underline"
            >
              Vermicomposting at Home
            </a>{" "}
            and{" "}
            <a
              href="https://a.co/d/04YEWNq2"
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="font-semibold text-green-800 underline"
            >
              The Earthworm Uncovered
            </a>
            .
          </p>
        </section>

      </section>
    </main>
  );
}
