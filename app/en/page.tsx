export default function HomeEN() {
  return (
    <main className="min-h-screen bg-[#f4f1e8] text-[#1f2a1f] px-6 py-12">
      <section className="mx-auto max-w-5xl">
        <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-green-800">KCGREENWORKS</p>
        <h1 className="max-w-3xl text-4xl font-bold leading-tight md:text-6xl">Grow food at home, even with limited space.</h1>
        <p className="mt-6 max-w-2xl text-lg text-[#4b5a4b]">Practical guides for people who want to start with vegetables, compost, worms, aquaponics and home agriculture without overcomplicating it.</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a href="/en/start-here" className="rounded-xl bg-green-800 px-6 py-3 text-center font-semibold text-white">Start now</a>
          <a href="/en/blog" className="rounded-xl border border-green-800 px-6 py-3 text-center font-semibold text-green-900">View guides</a>
        </div>
      </section>
    </main>
  );
}
