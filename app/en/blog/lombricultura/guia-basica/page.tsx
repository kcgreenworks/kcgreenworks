import Link from "next/link";

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
          Vermicomposting is a biological system in which worms transform
          organic waste into worm castings (humus), one of the most complete
          natural fertilizers available. It is not simply composting—it is a
          controlled process that depends on the balance between organic matter,
          moisture, oxygen, and microbial activity.
        </p>

        <p>
          When managed correctly, it reduces waste, improves soil quality, and
          produces high-quality fertilizer even in small spaces.
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
            <li><strong>Eisenia fetida:</strong> the most efficient species</li>
            <li><strong>Eisenia andrei:</strong> very similar behavior</li>
            <li><strong>African Nightcrawler:</strong> larger but more delicate</li>
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
            You can build a system on a balcony, patio, garage, or indoors.
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

      </section>
    </main>
  );
}