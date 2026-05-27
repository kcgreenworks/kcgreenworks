import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Worm leachate: what it is, how it is made, and how to use it",
  description:
    "Complete guide about worm leachate: what it is, how it is produced, what it contains, what it is used for, how to dilute it, and how to apply it correctly to plants.",
};

export default function LixiviadoLombrizPage() {
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
            Organic fertilization
          </p>

          <h1 className="text-4xl font-bold leading-tight md:text-5xl">
            Worm leachate: what it is, how it is made, and how to use it correctly
          </h1>

          <p className="text-lg leading-8 text-[#405040]">
            Worm leachate is a dark liquid that can come out of a
            vermicompost bin when water passes through the organic material,
            humus, and bedding where the worms live. Properly managed and properly
            diluted, it can help improve soil life and support plant
            growth. Poorly managed, it can smell bad, ferment
            excessively, and even damage roots.
          </p>
        </header>

        <div className="overflow-hidden rounded-2xl bg-white shadow-sm">
          <Image
            src="/images/lixiviado-lombriz-hero.png"
            alt="Dark worm leachate in a container next to green plants"
            width={1200}
            height={800}
            className="h-auto w-full object-cover"
            priority
          />
        </div>

        <section className="space-y-5 text-lg leading-8">
          <h2 className="text-3xl font-bold">First: do not confuse leachate with worm tea</h2>

          <p>
            This is important. Many people call any
            dark liquid coming from a vermicompost bin “worm tea,” but it is not exactly
            the same thing.
          </p>

          <p>
            <strong>Leachate</strong> is the liquid that naturally drains
            when there is excess moisture and water carries soluble compounds
            from decomposing material. It may contain nutrients, but
            it may also contain unwanted substances if the system is too
            wet, lacking oxygen, or has rotting food.
          </p>

          <p>
            <strong>Aerated worm tea</strong> is prepared separately, using
            mature worm humus, chlorine-free water, oxygen, and sometimes a
            minimal food source for microorganisms. That process is more
            controlled.
          </p>

          <p>
            In simple terms: leachate can be useful, but it must be used
            more carefully. It is not applied pure and should not be stored for months as if
            it were a stable commercial product.
          </p>
        </section>

        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-3xl font-bold">What is worm leachate?</h2>

          <p className="mt-4 text-lg leading-8">
            It is a concentrated liquid formed when water passes through a
            worm bed, organic scraps, microorganisms, and humus. Its
            color is usually dark brown or almost black. It may contain soluble
            nutrients, humic acids, fulvic acids, enzymes, and microorganisms.
          </p>

          <p className="mt-4 text-lg leading-8">
            It should not be viewed as a “magic fertilizer.” It is a supplement. The foundation
            of a healthy plant is still good soil, good drainage, organic
            matter, correct light, and proper watering.
          </p>
        </section>

        <section className="space-y-5">
          <h2 className="text-3xl font-bold">How is it produced?</h2>

          <p className="text-lg leading-8">
            Leachate appears when there is moisture in the vermicompost bin. Part
            of the water moves downward by gravity, passes through the organic material, and ends
            up exiting through the lower drain.
          </p>

          <div className="overflow-hidden rounded-2xl bg-white shadow-sm">
            <Image
              src="/images/lixiviado-lombriz-proceso.png"
              alt="Production process of worm leachate in a vermicompost bin"
              width={1200}
              height={800}
              className="h-auto w-full object-cover"
            />
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <h3 className="text-xl font-bold">Normal production</h3>
              <p className="mt-2 leading-7">
                A small amount of liquid comes out, without strong bad odor, dark in color, and the worm
                bedding stays moist but not soaked.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <h3 className="text-xl font-bold">Problematic production</h3>
              <p className="mt-2 leading-7">
                Too much liquid comes out, it smells sour or rotten, there are flies, slimy food,
                or lack of oxygen. That leachate should not be applied to
                plants.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-5 text-lg leading-8">
          <h2 className="text-3xl font-bold">How to make worm leachate at home</h2>

          <p>
            The correct way is not to flood the vermicompost bin to extract more
            liquid. That is a common mistake. The main goal should be
            producing good humus; leachate is a byproduct, not the main
            product.
          </p>

          <h3 className="text-2xl font-bold">1. Use a vermicompost bin with drainage</h3>
          <p>
            You need a container with holes or a drainage valve on the
            lower part. Underneath there should be a tray or container to collect the
            liquid.
          </p>

          <h3 className="text-2xl font-bold">2. Prepare proper bedding</h3>
          <p>
            Use cardboard without glossy ink, paper without chemicals, coconut fiber,
            dry leaves, or similar dry material. The bedding should be moist like
            a squeezed sponge, not dripping water.
          </p>

          <h3 className="text-2xl font-bold">3. Add red wiggler worms</h3>
          <p>
            The most commonly used are red composting worms. They are not the same
            as any backyard worm. They work better in surface organic
            matter and in moist, cool, oxygen-rich environments.
          </p>

          <h3 className="text-2xl font-bold">4. Feed little by little</h3>
          <p>
            Add fruit peels, vegetables, small amounts of coffee grounds,
            leaves, and plant scraps. Avoid meat, grease, dairy, cooked
            food with oil, excess citrus, and very salty foods.
          </p>

          <h3 className="text-2xl font-bold">5. Control moisture</h3>
          <p>
            If the bedding is too wet, add dry cardboard or dry fiber. If
            it is too dry, spray chlorine-free water little by little. Moisture
            balance is what prevents bad odors.
          </p>

          <h3 className="text-2xl font-bold">6. Collect the liquid</h3>
          <p>
            If leachate comes out, collect it in a clean container. Use it quickly,
            preferably the same day or within 24 to 48 hours. The longer
            you store it, the more its microbiology changes.
          </p>
        </section>

        <div className="overflow-hidden rounded-2xl bg-white shadow-sm">
          <Image
            src="/images/lombrices-humus.png"
            alt="Red worms working in worm humus"
            width={1200}
            height={800}
            className="h-auto w-full object-cover"
          />
        </div>

        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-3xl font-bold">What components can it contain?</h2>

          <p className="mt-4 text-lg leading-8">
            The exact composition changes depending on what the worms eat, the
            moisture, temperature, oxygen level, and humus maturity.
            Not all leachates are the same.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-xl border border-green-100 bg-[#f4f1e8] p-4">
              <h3 className="font-bold">Macronutrients</h3>
              <p className="mt-2 leading-7">
                It may contain nitrogen, phosphorus, and potassium in varying
                amounts.
              </p>
            </div>

            <div className="rounded-xl border border-green-100 bg-[#f4f1e8] p-4">
              <h3 className="font-bold">Micronutrients</h3>
              <p className="mt-2 leading-7">
                It may provide iron, zinc, manganese, copper, boron, and other
                elements in small amounts.
              </p>
            </div>

            <div className="rounded-xl border border-green-100 bg-[#f4f1e8] p-4">
              <h3 className="font-bold">Humic and fulvic acids</h3>
              <p className="mt-2 leading-7">
                They help improve nutrient availability and soil
                activity.
              </p>
            </div>

            <div className="rounded-xl border border-green-100 bg-[#f4f1e8] p-4">
              <h3 className="font-bold">Microorganisms</h3>
              <p className="mt-2 leading-7">
                It may contain bacteria, fungi, and other beneficial organisms,
                as long as the system is healthy and oxygenated.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-5 text-lg leading-8">
          <h2 className="text-3xl font-bold">What is it used for?</h2>

          <p>
            Properly managed leachate can help activate microbial life
            in the soil, improve nutrient absorption, and support plants that
            are actively growing. It does not replace good compost or complete
            fertilization if the soil is poor.
          </p>

          <p>
            It can be used on vegetables, herbs, ornamentals, young fruit trees,
            and potted plants. It works best when applied to living soils,
            with organic matter and good drainage.
          </p>

          <div className="rounded-2xl bg-green-900 p-6 text-white">
            <h3 className="text-2xl font-bold">Main benefits</h3>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <p>Improves biological activity in the soil.</p>
              <p>May stimulate root growth.</p>
              <p>Helps recycle organic nutrients.</p>
              <p>Supports plants during growth stages.</p>
              <p>May improve overall vigor if used correctly.</p>
              <p>Reduces dependence on synthetic fertilizers.</p>
            </div>
          </div>
        </section>

        <section className="space-y-5 text-lg leading-8">
          <h2 className="text-3xl font-bold">How to use it correctly</h2>

          <p>
            The main rule is simple: <strong>never apply it pure</strong>.
            It is concentrated, variable, and can burn roots or damage leaves if
            it is too strong.
          </p>

          <div className="overflow-hidden rounded-2xl bg-white shadow-sm">
            <Image
              src="/images/lixiviado-aplicacion.png"
              alt="Application of diluted worm leachate on plants"
              width={1200}
              height={800}
              className="h-auto w-full object-cover"
            />
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <h3 className="text-xl font-bold">Soil application</h3>
              <p className="mt-2 leading-7">
                Dilute 1 part leachate in 10 parts water. Apply
                around the plant, not directly against the stem.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <h3 className="text-xl font-bold">Foliar application</h3>
              <p className="mt-2 leading-7">
                Use a lighter dilution: 1 part leachate in 20 parts water.
                Spray at sunset or early in the morning.
              </p>
            </div>
          </div>

          <p>
            For delicate plants, seed trays, or newly transplanted plants,
            use a lighter dilution: 1 part leachate in 20 or 30 parts
            water. It is better to start light than overdo it.
          </p>
        </section>

        <section className="rounded-2xl bg-yellow-100 p-6 text-[#3a2a00] shadow-sm">
          <h2 className="text-3xl font-bold">Important warning</h2>

          <p className="mt-4 text-lg leading-8">
            If the leachate smells rotten, strongly acidic, like sewage, or aggressively fermented,
            do not use it on leaves or delicate plants. That smell usually
            indicates lack of oxygen or anaerobic decomposition. In that case,
            dilute it heavily and use it in a compost pile, or discard it away from
            sensitive plants.
          </p>
        </section>

        <section className="space-y-5 text-lg leading-8">
          <h2 className="text-3xl font-bold">How often to apply it</h2>

          <p>
            For growing plants, one application every 2 to 4 weeks is
            enough. More is not always better. If you apply too much, you may
            unbalance the substrate, attract mosquitoes, or create excess moisture.
          </p>

          <p>
            In pots, use smaller amounts because the soil volume is
            limited. In direct soil you can apply a little more, always
            diluted and observing how the plant responds.
          </p>
        </section>

        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-3xl font-bold">How to know if it is good</h2>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-xl bg-[#f4f1e8] p-4">
              <h3 className="font-bold text-green-900">Good signs</h3>
              <p className="mt-2 leading-7">
                Dark brown color, smell of damp soil, little foam, no offensive
                odor, and no larvae or obvious rot.
              </p>
            </div>

            <div className="rounded-xl bg-[#f4f1e8] p-4">
              <h3 className="font-bold text-red-900">Bad signs</h3>
              <p className="mt-2 leading-7">
                Strong sour smell, rotten smell, slimy liquid, flies,
                fermented food, or worm bedding that is too wet.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-5 text-lg leading-8">
          <h2 className="text-3xl font-bold">Common mistakes</h2>

          <h3 className="text-2xl font-bold">Using it pure</h3>
          <p>
            This is the most common mistake. Even if it is organic, it may be
            concentrated. Organic does not automatically mean safe in any
            quantity.
          </p>

          <h3 className="text-2xl font-bold">Storing leachate for too long</h3>
          <p>
            It is a biologically active liquid. If you store it too long without
            aeration, it can change, ferment, and lose quality.
          </p>

          <h3 className="text-2xl font-bold">Flooding the vermicompost bin to extract more</h3>
          <p>
            That harms the worms. A healthy vermicompost bin should be
            moist, not soaked. If too much liquid comes out, there is probably
            excess water.
          </p>

          <h3 className="text-2xl font-bold">Applying it under full sun</h3>
          <p>
            If you apply it on leaves under strong sunlight, you may stain or burn the
            plant. Better early in the morning or at sunset.
          </p>
        </section>

        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-3xl font-bold">Practical summary</h2>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <p>
              <strong>What it is:</strong> liquid drained from a vermicompost bin.
            </p>
            <p>
              <strong>Normal color:</strong> dark brown or black.
            </p>
            <p>
              <strong>Main use:</strong> supplement for soil and plants.
            </p>
            <p>
              <strong>Soil dilution:</strong> 1 part in 10 parts water.
            </p>
            <p>
              <strong>Foliar dilution:</strong> 1 part in 20 parts water.
            </p>
            <p>
              <strong>Frequency:</strong> every 2 to 4 weeks.
            </p>
            <p>
              <strong>Do not do:</strong> apply it pure.
            </p>
            <p>
              <strong>Do not use:</strong> if it smells rotten or strongly fermented.
            </p>
          </div>
        </section>

        <section className="space-y-5 text-lg leading-8">
          <h2 className="text-3xl font-bold">Conclusion</h2>

          <p>
            Worm leachate can be a useful tool within a
            home garden, but it must be properly understood. It is not magic, it does not replace
            good soil, and it should not be applied without dilution. Its value lies in
            providing soluble compounds, microbial life, and biological support to the
            soil when it is produced in a healthy system.
          </p>

          <p>
            If you are going to start, keep the vermicompost bin balanced, avoid
            excess water, collect small amounts of leachate, use it fresh, always dilute it,
            and observe how your plants respond. That is the correct way to
            use it without improvising or damaging the crop.
          </p>
        </section>
      </article>
    </main>
  );
}