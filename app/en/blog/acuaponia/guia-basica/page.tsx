import Link from "next/link";

export default function ArticlePage() {
  return (
    <main className="min-h-screen bg-[#f4f1e8] px-6 py-12 text-[#1f2a1f]">
      <article className="mx-auto max-w-4xl space-y-8">
        <Link href="/en/blog/acuaponia" className="text-sm font-semibold text-green-800 hover:underline">← Back to Aquaponics</Link>
        <header className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-wide text-green-800">KCGreenWorks Guide</p>
          <h1 className="text-4xl font-bold leading-tight md:text-5xl">Basic Aquaponics Guide for Beginners</h1>
          <p className="text-lg text-[#4b5a4b]">A clear beginner-friendly guide with the practical points you need before starting.</p>
        </header>
        <img src="/acuaponia1en.png" alt="Basic Aquaponics Guide for Beginners" className="w-full rounded-3xl border border-[#dcd6c8] bg-white object-cover shadow-sm" />
        <section className="space-y-5 rounded-3xl bg-white p-7 shadow-sm">
          <h2 className="text-3xl font-bold">What you need to know</h2>
          <p className="text-lg leading-8 text-[#4b5a4b]">Aquaponics connects fish, beneficial bacteria and plants in one living system. Fish produce waste, bacteria convert it into plant-available nutrients, and plants help clean the water.</p><p className="text-lg leading-8 text-[#4b5a4b]">The key is balance. Do not overload the fish tank, do not skip cycling, and do not add plants before the system can process ammonia and nitrite.</p><p className="text-lg leading-8 text-[#4b5a4b]">Start small with simple components: fish tank, pump, grow bed, media, plumbing and aeration. Stability matters more than size.</p>
        </section>
        <section className="space-y-4 rounded-3xl border border-[#dcd6c8] bg-[#fffaf0] p-7">
          <h2 className="text-3xl font-bold">Practical recommendation</h2>
          <p className="text-lg leading-8 text-[#4b5a4b]">Start small, observe the system every day, and adjust one variable at a time. Consistency beats complicated setups.</p>
        </section>
      </article>
    </main>
  );
}
