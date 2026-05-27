export const metadata = {
  title: "KCGreenWorks Guides in English",
  description: "English learning hub for home gardening, aquaponics and worm composting.",
};

export default function BlogEN() {
  return (
    <main className="min-h-screen bg-[#f4f1e8] px-6 py-12 text-[#1f2a1f]">
      <section className="mx-auto max-w-5xl">
        <a href="/en" className="text-sm font-semibold text-green-800">← Home</a>

        <div className="mt-8 mb-10">
          <p className="text-sm font-semibold uppercase tracking-wide text-green-800">KCGreenWorks Learning Hub</p>
          <h1 className="mt-3 text-4xl font-bold md:text-5xl">Learn by category</h1>
          <p className="mt-4 max-w-2xl text-lg text-[#4b5a4b]">Practical guides about home gardens, aquaponics, worm composting and crops for small spaces.</p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <a href="/en/blog/acuaponia" className="rounded-2xl border border-[#dcd6c8] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <h2 className="text-2xl font-bold text-[#2f3e2f]">🐟 Aquaponics</h2>
            <p className="mt-2 text-[#5a6b5a]">Home systems with fish, water and plants.</p>
          </a>
          <a href="/en/blog/lombricultura" className="rounded-2xl border border-[#dcd6c8] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <h2 className="text-2xl font-bold text-[#2f3e2f]">🪱 Worm Composting</h2>
            <p className="mt-2 text-[#5a6b5a]">Turn kitchen scraps into organic soil amendment.</p>
          </a>
          <a href="/en/blog/vegetales" className="rounded-2xl border border-[#dcd6c8] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <h2 className="text-2xl font-bold text-[#2f3e2f]">🥬 Vegetables</h2>
            <p className="mt-2 text-[#5a6b5a]">Easy crops for patios, balconies and containers.</p>
          </a>
        </div>
      </section>
    </main>
  );
}
