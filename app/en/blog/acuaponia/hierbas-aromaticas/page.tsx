import Link from "next/link";

const herbs = [
  {
    name: "Basil",
    english: "Basil",
    use: "Perfect for pasta, pizza, pesto, salads, and fresh sauces.",
    why: "In aquaponics it tends to grow fast because it takes great advantage of the system's nitrates.",
    sow: "Germinate in a moist seed tray. Transplant when it has 2–3 pairs of true leaves.",
    tip: "Prune it often. The more you cut it, the more it branches out."
  },
  {
    name: "Cilantro",
    english: "Coriander / Cilantro",
    use: "Ideal for Latin food, sofrito, tacos, rice, stews, and sauces.",
    why: "Constant moisture prevents strong stress and helps keep leaves tender.",
    sow: "Plant several seeds together. Do not bury them too deep; just cover them lightly.",
    tip: "Prefers cool weather. If it gets too hot, it bolts quickly."
  },
  {
    name: "Parsley",
    english: "Parsley",
    use: "Great for meats, soups, salads, potatoes, rice, and marinades.",
    why: "Responds well to stable systems with moderate nutrients and oxygenated roots.",
    sow: "The seed takes longer than other herbs. Keep constant moisture until germination.",
    tip: "Harvest outer leaves and leave the center growing."
  },
  {
    name: "Mint",
    english: "Mint",
    use: "Excellent for drinks, tea, desserts, salads, and fresh sauces.",
    why: "Grows aggressively in aquaponics because it has strong roots and tolerates high humidity.",
    sow: "Best propagated by cutting. Place a stem in water until it develops roots.",
    tip: "Keep it under control. If left unchecked, it will take over the space."
  },
  {
    name: "Oregano",
    english: "Oregano",
    use: "Key for pizza, meats, sauces, pasta, marinades, and Mediterranean food.",
    why: "In well-oxygenated systems it maintains steady growth without waterlogging.",
    sow: "Germinates near the surface. Needs good light and not too much shade.",
    tip: "It does not like excess moisture on the leaves. Give it good ventilation."
  },
  {
    name: "Thyme",
    english: "Thyme",
    use: "Works well with meats, soups, roasted vegetables, and sauces.",
    why: "Can grow well in a media bed if the roots have oxygen and are not waterlogged.",
    sow: "Small and slow seed. You can also propagate by cuttings.",
    tip: "Do not treat it like basil. It needs less direct moisture."
  },
  {
    name: "Rosemary",
    english: "Rosemary",
    use: "Excellent for chicken, meats, potatoes, breads, oils, and marinades.",
    why: "Can work, but needs excellent drainage and plenty of light.",
    sow: "Best propagated by cutting. From seed it is slow and less practical.",
    tip: "It is more advanced. Avoid roots that stay too wet."
  },
  {
    name: "Chives",
    english: "Chives",
    use: "Great for eggs, potatoes, soups, salads, and fresh toppings.",
    why: "Grows well in small systems and allows frequent harvests.",
    sow: "Plant in groups. Transplant when roots are well developed.",
    tip: "Cut with scissors and leave 2–3 inches so it regrows."
  }
];

export default function HierbasAromaticasAcuaponia() {
  return (
    <main className="min-h-screen bg-[#f4f1e8] px-6 py-12 text-[#1f2a1f]">
      <article className="mx-auto max-w-5xl space-y-12">
        <Link
          href="/en/blog/acuaponia"
          className="text-sm font-semibold text-green-800 hover:underline"
        >
          ← Back to Aquaponics
        </Link>

        <header className="space-y-5">
          <p className="text-sm font-bold uppercase tracking-wide text-green-800">
            Home aquaponics
          </p>

          <h1 className="text-4xl font-bold leading-tight md:text-5xl">
            Ideal aromatic herbs for aquaponics
          </h1>

          <p className="max-w-3xl text-lg text-[#4b5a4b]">
            If you want to start with a crop that gives you fast results, great aroma, and real use in the kitchen,
            aromatic herbs are one of the best options for an aquaponic system. They do not take up much space,
            respond well to constant nutrients, and many can be harvested multiple times without uprooting the plant.
          </p>
        </header>

        <figure className="rounded-3xl bg-white p-4 shadow-sm">
          <img
            src="/images/blog/acuaponia/como-construir-acuaponico/hierbas-acuaponicas.png"
            alt="Aromatic herbs growing in a homemade aquaponic system"
            className="mx-auto w-full rounded-2xl"
          />
          <figcaption className="mt-3 text-center text-sm text-[#5a6b5a]">
            Aromatic herbs in aquaponics: oxygenated roots, recirculating water, and available nutrients.
          </figcaption>
        </figure>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Why do aromatic herbs work so well in aquaponics?</h2>

          <p>
            Herbs like basil, cilantro, parsley, mint, and chives do not need a huge system to produce.
            What they need is stability: water with nutrients, oxygen at the roots, good light, and frequent harvests.
            That fits very well with aquaponics.
          </p>

          <p>
            In a traditional garden, a plant can suffer from irregular watering: one day dry, the next waterlogged.
            In aquaponics, if the system is well designed, the root receives moisture and nutrients consistently.
            That stability reduces stress and can help produce more tender, greener leaves with better aroma.
          </p>

          <p className="font-semibold">
            Flavor does not appear by magic. It appears when the plant grows healthy, without strong stress and with good light.
          </p>
        </section>

        <section className="grid gap-5 md:grid-cols-2">
          {herbs.map((herb) => (
            <div key={herb.name} className="rounded-2xl border border-[#d9d3c3] bg-white p-5 shadow-sm">
              <h3 className="text-2xl font-bold">{herb.name}</h3>
              <p className="mb-4 text-sm font-semibold text-green-800">{herb.english}</p>

              <div className="space-y-3 text-sm leading-relaxed text-[#354535]">
                <p><strong>Kitchen use:</strong> {herb.use}</p>
                <p><strong>Why it works well:</strong> {herb.why}</p>
                <p><strong>How to plant it:</strong> {herb.sow}</p>
                <p><strong>Practical tip:</strong> {herb.tip}</p>
              </div>
            </div>
          ))}
        </section>

        <figure className="rounded-3xl bg-white p-4 shadow-sm">
          <img
            src="/images/blog/acuaponia/como-construir-acuaponico/hierbas-acuaponicas2.png"
            alt="Fresh aromatic herbs for seasoning meals"
            className="mx-auto w-full rounded-2xl"
          />
          <figcaption className="mt-3 text-center text-sm text-[#5a6b5a]">
            The real advantage: small, frequent harvests to cook with fresh herbs.
          </figcaption>
        </figure>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">How to plant them in an aquaponic system</h2>

          <p>
            The safest way is to germinate first outside the system and transplant when the plant already has roots.
            You can use plugs, germination sponges, coco coir, or small seed trays. It is not a good idea to toss seeds
            directly into the water or grow bed and expect everything to work perfectly.
          </p>

          <ul className="list-disc space-y-2 pl-6">
            <li><strong>Germinate first:</strong> keep the seed tray moist, not waterlogged.</li>
            <li><strong>Wait for true leaves:</strong> transplant when it has 2–3 pairs of true leaves.</li>
            <li><strong>Protect the roots:</strong> do not break the root when moving the plant.</li>
            <li><strong>Use good light:</strong> at least 4–6 hours of strong light or adequate artificial light.</li>
            <li><strong>Harvest often:</strong> cutting the tips stimulates denser growth.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Where to plant them: media bed, NFT, or raft</h2>

          <p>
            For a beginner, the easiest option is to use a <strong>media bed</strong> with washed gravel, lava rock, or expanded clay.
            This system supports the plant, filters solids, and serves as a home for beneficial bacteria.
          </p>

          <p>
            In <strong>NFT</strong>, herbs also work very well, especially basil, cilantro, parsley, and chives,
            but you need to make sure roots do not block the channel. In <strong>DWC or raft</strong>, they can grow fast with good
            oxygenation, but not all Mediterranean herbs tolerate that much moisture around the root.
          </p>
        </section>

        <section className="rounded-2xl border border-green-900/10 bg-[#eef3df] p-6">
          <h2 className="mb-3 text-2xl font-bold">My recommendation to get started</h2>
          <p>
            Start with basil, mint, parsley, and chives. They are tolerant, useful in the kitchen, and will quickly show you whether
            your system is stable. Afterwards you can try cilantro, oregano, thyme, and rosemary, which require more attention to
            temperature, ventilation, and excess moisture.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Why they can taste better</h2>

          <p>
            The flavor of an herb comes largely from its essential oils. A plant with good light, balanced nutrition,
            and steady growth tends to produce more aromatic leaves. In aquaponics, the recirculating water provides nutrients
            continuously while the roots stay active.
          </p>

          <p>
            That does not mean every aquaponic system automatically produces better flavor. If there is little light, excess nitrogen,
            poor oxygenation, or strong heat, the plant may grow large but with less aroma. The secret is balance: nutrients,
            light, oxygen, and pruning.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Common mistakes</h2>

          <ul className="list-disc space-y-2 pl-6">
            <li>Planting in a system that has not cycled yet.</li>
            <li>Adding too many plants for too few fish and too few nutrients.</li>
            <li>Letting basil or mint grow long without pruning.</li>
            <li>Not managing heat: cilantro and parsley suffer greatly in extreme heat.</li>
            <li>Using too little light and expecting intense flavor.</li>
            <li>Allowing roots to block pipes or channels.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Conclusion</h2>

          <p>
            Aromatic herbs are a smart entry point into the world of aquaponics because they produce quickly, take up little space,
            and are genuinely used in the kitchen. If you want your system to keep you motivated, do not start only with complicated plants.
            Start with something you can cut, smell, and use the same day.
          </p>

          <p className="font-semibold">
            In aquaponics, a good basil or mint plant can teach you more about stability than a large, poorly balanced system.
          </p>
        </section>
      </article>
    </main>
  );
}