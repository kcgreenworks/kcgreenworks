import Link from "next/link";

export default function CategoryPage() {
  const guides = [{ href: "/en/blog/lombricultura/guia-basica", title: "Basic Worm Composting Guide", description: "A clear starting point for beginners" },{ href: "/en/blog/lombricultura/vermicompostera", title: "Homemade Worm Bin", description: "How to build and manage a simple worm bin" },{ href: "/en/blog/lombricultura/lixiviado-lombriz", title: "Worm Leachate", description: "What it is, how to use it and what to avoid" },{ href: "/en/blog/lombricultura/que-pueden-consumir-las-lombrices", title: "What Worms Can Eat", description: "Safe foods, foods to avoid and feeding balance" },{ href: "/en/blog/lombricultura/como-lombrices-mejoran-suelo", title: "How Worms Improve Soil", description: "Soil structure, biology, nutrients and plant health" }];
  return (
    <main className="min-h-screen bg-[#f4f1e8] px-6 py-12 text-[#1f2a1f]">
      <section className="mx-auto max-w-4xl space-y-6">
        <Link href="/en/blog" className="text-sm font-semibold text-green-800 hover:underline">← Back to blog</Link>
        <h1 className="text-4xl font-bold md:text-5xl">Worm Composting</h1>
        <p className="text-lg text-[#4b5a4b]">Learn how worms transform organic material into humus, improve soil and support healthier plants.</p>
        <div className="mt-8 grid gap-5">
          {guides.map((guide) => (
            <Link key={guide.href} href={guide.href} className="block rounded-xl border border-[#1f2a1f] bg-white p-5 transition hover:shadow-md">
              <h2 className="text-xl font-semibold">{guide.title}</h2>
              <p className="mt-1 text-gray-600">{guide.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
