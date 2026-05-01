export default function HomeEN() {
  return (
    <main className="min-h-screen bg-[#f4f1e8] text-[#1f2a1f]">
      <section className="mx-auto max-w-5xl px-6 py-16">
        
        <div className="mb-6 flex items-center justify-between">
          <p className="text-sm font-semibold text-green-800">
            KCGREENWORKS
          </p>

          <a href="/" className="text-sm font-semibold text-green-900 underline">
            Español
          </a>
        </div>

        <h1 className="max-w-3xl text-4xl font-bold leading-tight md:text-6xl">
          Learn how to grow food at home, even with limited space.
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-[#4b5a4b]">
          Practical guides for people who want to start with home gardens,
          composting, worms, and simple home agriculture.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            className="rounded-xl bg-green-800 px-6 py-3 text-center font-semibold text-white"
            href="/en/start-here"
          >
            Start now
          </a>

          <a
            className="rounded-xl border border-green-800 px-6 py-3 text-center font-semibold text-green-900"
            href="/en/blog"
          >
            View guides
          </a>
        </div>

      </section>
    </main>
  );
}