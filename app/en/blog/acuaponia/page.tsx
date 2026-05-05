import Link from "next/link";

export default function CategoryPage() {
  const guides = [{ href: "/en/blog/acuaponia/guia-basica", title: "Basic Aquaponics Guide", description: "The full beginner foundation" },{ href: "/en/blog/acuaponia/como-construir-acuaponico", title: "How to Build a Home Aquaponic System", description: "Step-by-step structure, components and common mistakes" },{ href: "/en/blog/acuaponia/hierbas-aromaticas", title: "Aromatic Herbs in Aquaponics", description: "Basil, mint and herbs that perform well in water-based systems" }];
  return (
    <main className="min-h-screen bg-[#f4f1e8] px-6 py-12 text-[#1f2a1f]">
      <section className="mx-auto max-w-4xl space-y-6">
        <Link href="/en/blog" className="text-sm font-semibold text-green-800 hover:underline">← Back to blog</Link>
        <h1 className="text-4xl font-bold md:text-5xl">Aquaponics</h1>
        <p className="text-lg text-[#4b5a4b]">Clear guides to understand home aquaponic systems, fish, bacteria, grow beds, water flow and plant production.</p>
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
