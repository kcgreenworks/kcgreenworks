export const metadata = {
  title: "Start here | KCGreenWorks",
  description: "A simple starting path for learning home gardening, aquaponics and worm composting.",
};

export default function StartHereEN() {
  return (
    <main className="min-h-screen bg-[#f4f1e8] px-6 py-12 text-[#1f2a1f]">
      <section className="mx-auto max-w-4xl space-y-8">
        <a href="/en" className="text-sm font-semibold text-green-800">← Home</a>
        <h1 className="text-4xl font-bold md:text-5xl">Start here</h1>
        <p className="text-lg leading-8 text-[#405040]">KCGreenWorks is built for people who want to grow food at home without overcomplicating the process. Start with one simple system, learn the basics and improve step by step.</p>
        <div className="grid gap-5 md:grid-cols-3">
          <a href="/en/blog/vegetales" className="rounded-2xl bg-white p-6 shadow-sm"><h2 className="text-2xl font-bold">1. Vegetables</h2><p className="mt-2 text-[#405040]">Start with practical crops that teach you light, water and harvest timing.</p></a>
          <a href="/en/blog/lombricultura" className="rounded-2xl bg-white p-6 shadow-sm"><h2 className="text-2xl font-bold">2. Worm composting</h2><p className="mt-2 text-[#405040]">Turn organic scraps into soil-building material.</p></a>
          <a href="/en/blog/acuaponia" className="rounded-2xl bg-white p-6 shadow-sm"><h2 className="text-2xl font-bold">3. Aquaponics</h2><p className="mt-2 text-[#405040]">Learn the fish-water-plant cycle after you understand the basics.</p></a>
        </div>
      </section>
    </main>
  );
}
