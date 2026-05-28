export default function HomeEN() {
  return (
    <main className="min-h-screen bg-[#f4f1e8] text-[#1f2a1f]">
      <section className="mx-auto max-w-5xl px-6 py-20">
        <p className="mb-6 text-sm font-semibold uppercase tracking-wide text-green-800">
          KCGREENWORKS
        </p>

        <h1 className="max-w-4xl text-5xl font-bold leading-tight md:text-7xl">
          Learn how to grow food at home, even with limited space.
        </h1>

        <p className="mt-8 max-w-3xl text-xl leading-9 text-[#4b5a4b]">
          Practical step-by-step guides about home gardening, aquaponics,
          composting, worm farming, and sustainable food production for beginners.
        </p>

        <div className="mt-10">
          <a
            href="/en/blog"
            className="inline-flex rounded-2xl border border-green-800 px-8 py-4 text-lg font-semibold text-green-900 transition hover:bg-green-800 hover:text-white"
          >
            View Guides
          </a>
        </div>
      </section>
    </main>
  );
}