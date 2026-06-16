export default function GraciasPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[#f4f1e8] px-6">
      <div className="max-w-2xl rounded-3xl bg-white p-10 shadow-xl text-center">
        <h1 className="text-4xl font-bold text-green-900">
          Welcome to the KCGreenWorks Community!
        </h1>

        <p className="mt-6 text-lg text-gray-700">
          Check your inbox. You'll soon receive practical guides about
          aquaponics, vermicomposting, home gardening, and sustainable food
          production.
        </p>

        <a
          href="/en"
          className="inline-block mt-8 rounded-xl bg-green-800 px-6 py-3 font-semibold text-white"
        >
          Back to Home
        </a>
      </div>
    </main>
  );
}