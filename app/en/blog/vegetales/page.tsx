import Link from "next/link";

export default function CategoryPage() {
  const guides = [{ href: "/en/blog/vegetales/tomate-black-cherry", title: "Black Cherry Tomato", description: "Complete guide from seed to harvest" },{ href: "/en/blog/vegetales/zucchini-guia-completa", title: "Zucchini", description: "Complete guide from seed to harvest" },{ href: "/en/blog/vegetales/pimientos-verdes", title: "Green Peppers", description: "How to grow green peppers at home" },{ href: "/en/blog/vegetales/hierba-buena-menta", title: "Mint / Spearmint", description: "How to grow mint at home step by step" },{ href: "/en/blog/vegetales/sembrar-lechuga-todo-el-ano", title: "Lettuce All Year", description: "How to grow lettuce at home even during hot weather" }];
  return (
    <main className="min-h-screen bg-[#f4f1e8] px-6 py-12 text-[#1f2a1f]">
      <section className="mx-auto max-w-4xl space-y-6">
        <Link href="/en/blog" className="text-sm font-semibold text-green-800 hover:underline">← Back to blog</Link>
        <h1 className="text-4xl font-bold md:text-5xl">Vegetables</h1>
        <p className="text-lg text-[#4b5a4b]">Organized guides for growing vegetables at home, from simple container crops to plants that need more attention.</p>
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
