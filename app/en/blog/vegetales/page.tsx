const posts = [
  ["/en/blog/vegetales/tomate-black-cherry", "Black Cherry Tomato", "How to grow, support, prune and harvest this productive dark cherry tomato."],
  ["/en/blog/vegetales/zucchini-guia-completa", "Zucchini Growing Guide", "A complete beginner-friendly guide for growing zucchini at home."],
  ["/en/blog/vegetales/pimientos-verdes", "Green Peppers", "Warm-season pepper growing basics for containers and small gardens."],
  ["/en/blog/vegetales/hierba-buena-menta", "Mint and Spearmint", "How to grow mint well without letting it take over your garden."],
  ["/en/blog/vegetales/sembrar-lechuga-todo-el-ano", "Grow Lettuce Year-Round", "How to grow lettuce even when the weather gets hot."],
];

export default function VegetablesEN() {
  return <main className="min-h-screen bg-[#f4f1e8] px-6 py-12 text-[#1f2a1f]"><section className="mx-auto max-w-4xl space-y-6"><a href="/en/blog" className="text-sm font-semibold text-green-800">← Back to blog</a><h1 className="text-4xl font-bold md:text-5xl">Vegetables</h1><p className="text-lg text-[#4b5a4b]">Clear guides for growing useful crops in containers, patios, raised beds and small spaces.</p><div className="grid gap-5">{posts.map(([href,title,desc]) => <a key={href} href={href} className="rounded-2xl border border-[#dcd6c8] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"><h2 className="text-2xl font-bold">{title}</h2><p className="mt-2 text-[#5a6b5a]">{desc}</p></a>)}</div></section></main>;
}
