import Link from "next/link";

export default function ThanksPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f4f1e8] px-6 py-12">
      <div className="max-w-2xl rounded-3xl bg-white p-8 text-center shadow-xl md:p-12">
        <p className="text-sm font-semibold uppercase tracking-wide text-green-700">Your guide is ready</p>
        <h1 className="mt-3 text-4xl font-bold text-green-950">Welcome to the KCGreenWorks community!</h1>
        <p className="mt-6 text-lg leading-8 text-gray-700">
          We sent a copy to your inbox. You can also download it immediately using the button below.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a href="/guia-huerto.pdf" download className="rounded-xl bg-green-800 px-6 py-3 font-semibold text-white transition hover:bg-green-900">
            Download PDF guide
          </a>
          <Link href="/en" className="rounded-xl border border-green-800 px-6 py-3 font-semibold text-green-900 transition hover:bg-green-50">
            Back to home
          </Link>
        </div>
      </div>
    </main>
  );
}
