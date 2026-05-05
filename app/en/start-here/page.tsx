import Link from "next/link";

export default function StartHereEN() {
  return (
    <main className="min-h-screen bg-[#f4f1e8] px-6 py-12 text-[#1f2a1f]">
      <section className="mx-auto max-w-4xl space-y-8">
        <Link href="/en" className="text-sm font-semibold text-green-800 hover:underline">← Home</Link>
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-green-800">Start here</p>
          <h1 className="mt-3 text-4xl font-bold md:text-5xl">A simple path to begin growing at home</h1>
          <p className="mt-4 text-lg text-[#4b5a4b]">Start with one category, learn the basics, then build from there. KCGreenWorks is organized for beginners who want clear steps, not confusing theory.</p>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          <Link href="/en/blog/vegetales" className="rounded-2xl border border-[#dcd6c8] bg-white p-6 shadow-sm"><h2 className="text-2xl font-bold">Vegetables</h2><p className="mt-2 text-[#5a6b5a]">Begin with crops you can grow in pots, beds or small spaces.</p></Link>
          <Link href="/en/blog/acuaponia" className="rounded-2xl border border-[#dcd6c8] bg-white p-6 shadow-sm"><h2 className="text-2xl font-bold">Aquaponics</h2><p className="mt-2 text-[#5a6b5a]">Learn how fish, bacteria and plants work together.</p></Link>
          <Link href="/en/blog/lombricultura" className="rounded-2xl border border-[#dcd6c8] bg-white p-6 shadow-sm"><h2 className="text-2xl font-bold">Worm Composting</h2><p className="mt-2 text-[#5a6b5a]">Turn kitchen scraps into rich organic fertilizer.</p></Link>
        </div>
      </section>
    </main>
  );
}
