import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "How to Build a Cheap DIY Aquaponics System | KCGreenWorks",
  description:
    "Learn how to build a cheap DIY aquaponics system using simple materials, fish, plants, a water pump, and a grow bed.",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-[#f4f1e8] px-6 py-12 text-[#1f2a1f]">
      <article className="mx-auto max-w-4xl space-y-10">
        <Link
          href="/en/blog"
          className="text-sm font-semibold text-green-800 hover:underline"
        >
          ← Back to Blog
        </Link>

        <header className="space-y-5">
          <p className="text-sm font-bold uppercase tracking-wide text-green-800">
            Aquaponics
          </p>

          <h1 className="text-4xl font-bold leading-tight md:text-5xl">
            How to Build a Cheap DIY Aquaponics System
          </h1>

          <p className="text-lg leading-8 text-[#4b5a4b]">
            Aquaponics combines fish, water, and plants in a system where
            everything works together. Fish produce waste, that waste feeds
            beneficial bacteria, and those bacteria convert nutrients into food
            available for plants. The plants help clean the water, and that
            water returns back to the fish tank.
          </p>

          <p className="text-lg leading-8 text-[#4b5a4b]">
            It sounds complicated, but a cheap DIY aquaponics system can be
            built with simple materials: a tank, a water pump, a grow bed,
            gravel or grow media, and a few fast-growing plants. The key is not
            starting big. The key is building something simple, stable, and easy
            to maintain.
          </p>
        </header>

        <figure className="mx-auto max-w-2xl">
          <Image
            src="/images/blog/acuaponia/como-construir-acuaponico/sistema-acuaponico-casero.eng.jpg"
            alt="Cheap DIY aquaponics system with fish tank and grow bed"
            width={900}
            height={600}
            className="h-auto w-full rounded-2xl object-cover shadow-md"
            priority
          />

          <figcaption className="mt-2 text-sm text-[#6b786b]">
            A DIY aquaponics system can start small: tank, pump, grow bed, and
            water return.
          </figcaption>
        </figure>

        <section className="space-y-4">
          <h2 className="text-3xl font-bold">
            What Is a DIY Aquaponics System?
          </h2>

          <p className="leading-8">
            A DIY aquaponics system is a way to grow plants using water with
            fish. It is not pure hydroponics because the nutrients do not come
            from a bottle. They come from the natural cycle between fish,
            bacteria, and plants.
          </p>

          <p className="leading-8">
            In simple terms: fish dirty the water, bacteria convert that waste
            into nutrients, plants absorb those nutrients, and the water returns
            cleaner to the tank.
          </p>

          <p className="leading-8">
            That cycle is called biological filtration. Do not overcomplicate
            the name. It simply means beneficial bacteria help transform fish
            waste into food for plants.
          </p>
        </section>

        <section className="space-y-4 rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-3xl font-bold">SEO Title</h2>

          <p className="leading-8">
            How to Build a Cheap DIY Aquaponics System Step by Step
          </p>

          <h2 className="text-3xl font-bold">Meta Description</h2>

          <p className="leading-8">
            Learn how to build a cheap DIY aquaponics system with a tank, fish,
            pump, grow bed, and easy-to-grow plants.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-3xl font-bold">
            Materials You Need to Get Started
          </h2>

          <p className="leading-8">
            You do not need expensive equipment to build your first aquaponics
            setup. Many people start with reused containers, food-grade buckets,
            IBC totes, or plastic storage bins.
          </p>

          <ul className="list-disc space-y-2 pl-6 leading-8">
            <li>Fish tank or container</li>
            <li>Water pump</li>
            <li>Grow bed</li>
            <li>PVC pipes or tubing</li>
            <li>Expanded clay, gravel, or grow media</li>
            <li>Air pump and air stone</li>
            <li>Fish food</li>
            <li>Plants</li>
          </ul>

          <p className="leading-8">
            Start small. A stable small system is far better than a large system
            that constantly fails.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-3xl font-bold">
            Best Fish for Aquaponics
          </h2>

          <p className="leading-8">
            Tilapia is one of the most common fish used in aquaponics because it
            grows fast, tolerates water fluctuations well, and adapts easily.
            However, depending on your location and climate, you can also use
            goldfish, koi, catfish, bluegill, or even guppies in smaller
            systems.
          </p>

          <p className="leading-8">
            The most important thing is stability. Healthy fish create a stable
            nutrient source for the entire system.
          </p>

          <p className="leading-8">
            Avoid overcrowding the tank. Beginners often add too many fish too
            quickly, which creates ammonia spikes and unstable water conditions.
          </p>
        </section>

        <figure className="mx-auto max-w-2xl">
          <Image
            src="/images/blog/acuaponia/como-construir-acuaponico/peces-acuaponia.png"
            alt="Tilapia fish inside an aquaponics tank"
            width={900}
            height={600}
            className="h-auto w-full rounded-2xl object-cover shadow-md"
          />

          <figcaption className="mt-2 text-sm text-[#6b786b]">
            Tilapia is one of the most beginner-friendly fish for aquaponics.
          </figcaption>
        </figure>

        <section className="space-y-4">
          <h2 className="text-3xl font-bold">
            Water Quality and System Balance
          </h2>

          <p className="leading-8">
            Water quality controls everything in aquaponics. If the water is
            unhealthy, the fish suffer, bacteria stop working properly, and the
            plants slow down.
          </p>

          <p className="leading-8">
            Monitor these basic parameters:
          </p>

          <ul className="list-disc space-y-2 pl-6 leading-8">
            <li>pH</li>
            <li>Water temperature</li>
            <li>Ammonia</li>
            <li>Nitrite</li>
            <li>Nitrate</li>
            <li>Oxygen levels</li>
          </ul>

          <p className="leading-8">
            Most beginner systems perform well with a pH between 6.8 and 7.2.
            Keep the water moving constantly and make sure the fish always have
            enough oxygen.
          </p>
        </section>

        <section className="space-y-4 rounded-2xl bg-green-50 p-6">
          <h2 className="text-3xl font-bold">
            Beginner Mistakes to Avoid
          </h2>

          <ul className="list-disc space-y-2 pl-6 leading-8">
            <li>Adding fish before cycling the system</li>
            <li>Overfeeding fish</li>
            <li>Using treated water with chlorine</li>
            <li>Adding too many fish at once</li>
            <li>Using weak water circulation</li>
            <li>Ignoring water testing</li>
          </ul>

          <p className="leading-8">
            Most aquaponics failures happen because people rush the process.
            Stability matters more than speed.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-3xl font-bold">
            Best Plants for Beginners
          </h2>

          <p className="leading-8">
            Fast-growing leafy greens are usually the easiest plants for a first
            aquaponics system.
          </p>

          <ul className="list-disc space-y-2 pl-6 leading-8">
            <li>Lettuce</li>
            <li>Basil</li>
            <li>Mint</li>
            <li>Kale</li>
            <li>Swiss chard</li>
            <li>Green onions</li>
          </ul>

          <p className="leading-8">
            Once the system becomes stable, you can experiment with tomatoes,
            peppers, cucumbers, and larger fruiting plants.
          </p>
        </section>

        <figure className="mx-auto max-w-2xl">
          <Image
            src="/images/blog/acuaponia/como-construir-acuaponico/plantas-acuaponia.png"
            alt="Leafy greens growing inside a DIY aquaponics system"
            width={900}
            height={600}
            className="h-auto w-full rounded-2xl object-cover shadow-md"
          />

          <figcaption className="mt-2 text-sm text-[#6b786b]">
            Lettuce and herbs are excellent starter plants for aquaponics.
          </figcaption>
        </figure>

        <section className="space-y-4">
          <h2 className="text-3xl font-bold">
            How the Nitrogen Cycle Works
          </h2>

          <p className="leading-8">
            The nitrogen cycle is the foundation of aquaponics. Fish release
            ammonia through waste and respiration. Beneficial bacteria convert
            ammonia into nitrites and later into nitrates. Plants absorb those
            nitrates as nutrients.
          </p>

          <p className="leading-8">
            Without bacteria, the system collapses. That is why cycling the
            system before adding too many fish is critical.
          </p>
        </section>

        <section className="space-y-4 rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-3xl font-bold">
            Realistic Expectations for Beginners
          </h2>

          <p className="leading-8">
            Your first aquaponics system does not need to be perfect. Expect to
            make adjustments, fix leaks, change water flow, and learn through
            observation.
          </p>

          <p className="leading-8">
            When I started my first system, I realized very quickly that water
            movement changes everything. One small blockage or poor return flow
            can affect oxygen levels, plant growth, and fish health.
          </p>

          <p className="leading-8">
            The people who succeed long term are usually the ones who stay
            patient and keep improving little by little.
          </p>
        </section>

        <section className="space-y-4 rounded-2xl bg-green-50 p-6">
          <h2 className="text-3xl font-bold">Conclusion</h2>

          <p className="leading-8">
            Building a cheap DIY aquaponics system does not mean building
            something poorly made. It means starting smart: small size, simple
            materials, strong water circulation, and beginner-friendly plants.
          </p>

          <p className="leading-8">
            If you understand the basic cycle between fish, bacteria, and
            plants, you already have the foundation. Do not chase perfection on
            day one. Build the system, test it without fish, adjust the water
            flow, add a few fish, and observe.
          </p>

          <p className="leading-8">
            Aquaponics is practical, educational, and powerful. A small system
            can teach you enough to later scale into something bigger, more
            productive, and more visually impressive for your home or property.
          </p>
        </section>
      </article>
    </main>
  );
}

