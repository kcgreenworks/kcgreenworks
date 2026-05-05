import Link from "next/link";

export default function ArticlePage() {
  return (
    <main className="min-h-screen bg-[#f4f1e8] px-6 py-12 text-[#1f2a1f]">
      <article className="mx-auto max-w-4xl space-y-8">
        <Link href="/en/blog/vegetales" className="text-sm font-semibold text-green-800 hover:underline">← Back to Vegetables</Link>
        <header className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-wide text-green-800">KCGreenWorks Guide</p>
          <h1 className="text-4xl font-bold leading-tight md:text-5xl">How to Grow Lettuce All Year</h1>
          <p className="text-lg text-[#4b5a4b]">A clear beginner-friendly guide with the practical points you need before starting.</p>
        </header>
        <img src="/tomates1.JPEG" alt="How to Grow Lettuce All Year" className="w-full rounded-3xl border border-[#dcd6c8] bg-white object-cover shadow-sm" />
        <section className="space-y-5 rounded-3xl bg-white p-7 shadow-sm">
          <h2 className="text-3xl font-bold">What you need to know</h2>
          <p className="text-lg leading-8 text-[#4b5a4b]">Lettuce prefers cooler conditions, but you can extend production with shade, morning sun and heat-tolerant varieties.</p><p className="text-lg leading-8 text-[#4b5a4b]">Use shallow containers, loose soil and frequent light watering. Heat stress causes bitterness and early bolting.</p><p className="text-lg leading-8 text-[#4b5a4b]">Harvest outer leaves first so the plant can continue producing. Start new seeds regularly for a steady supply.</p>
        </section>
        <section className="space-y-4 rounded-3xl border border-[#dcd6c8] bg-[#fffaf0] p-7">
          <h2 className="text-3xl font-bold">Practical recommendation</h2>
          <p className="text-lg leading-8 text-[#4b5a4b]">Start small, observe the system every day, and adjust one variable at a time. Consistency beats complicated setups.</p>
        </section>
      </article>
    </main>
  );
}
