import Link from "next/link";

export default function ArticlePage() {
  return (
    <main className="min-h-screen bg-[#f4f1e8] px-6 py-12 text-[#1f2a1f]">
      <article className="mx-auto max-w-4xl space-y-8">
        <Link href="/en/blog/vegetales" className="text-sm font-semibold text-green-800 hover:underline">← Back to Vegetables</Link>
        <header className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-wide text-green-800">KCGreenWorks Guide</p>
          <h1 className="text-4xl font-bold leading-tight md:text-5xl">Mint and Spearmint: How to Grow It at Home</h1>
          <p className="text-lg text-[#4b5a4b]">A clear beginner-friendly guide with the practical points you need before starting.</p>
        </header>
        <img src="/hierbabuena1.JPEG" alt="Mint and Spearmint: How to Grow It at Home" className="w-full rounded-3xl border border-[#dcd6c8] bg-white object-cover shadow-sm" />
        <section className="space-y-5 rounded-3xl bg-white p-7 shadow-sm">
          <h2 className="text-3xl font-bold">What you need to know</h2>
          <p className="text-lg leading-8 text-[#4b5a4b]">Mint is vigorous and should usually be grown in a pot because it spreads aggressively. Give it bright light and steady moisture.</p><p className="text-lg leading-8 text-[#4b5a4b]">Trim often to keep the plant compact and productive. Cutting stems encourages new growth and better leaf quality.</p><p className="text-lg leading-8 text-[#4b5a4b]">Use fresh leaves for teas, cooking, infused water and garden fragrance. Avoid letting the plant dry completely.</p>
        </section>
        <section className="space-y-4 rounded-3xl border border-[#dcd6c8] bg-[#fffaf0] p-7">
          <h2 className="text-3xl font-bold">Practical recommendation</h2>
          <p className="text-lg leading-8 text-[#4b5a4b]">Start small, observe the system every day, and adjust one variable at a time. Consistency beats complicated setups.</p>
        </section>
      </article>
    </main>
  );
}
