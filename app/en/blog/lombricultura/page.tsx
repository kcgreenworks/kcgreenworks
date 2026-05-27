const posts = [
  ["/en/blog/lombricultura/guia-basica", "Basic Worm Composting Guide", "A complete starting point for beginners."],
  ["/en/blog/lombricultura/vermicompostera", "Homemade Worm Bin", "How to build and manage a simple worm bin."],
  ["/en/blog/lombricultura/lixiviado-lombriz", "Worm Leachate", "What it is, how to use it and what to avoid."],
  ["/en/blog/lombricultura/como-lombrices-mejoran-suelo", "How Worms Improve Soil", "The biology behind worm castings, soil structure and plant health."],
  ["/en/blog/lombricultura/que-pueden-consumir-las-lombrices", "What Worms Can Eat", "Safe foods, foods to avoid and how much to feed."],
];

export default function WormCompostingEN() {
  return <main className="min-h-screen bg-[#f4f1e8] px-6 py-12 text-[#1f2a1f]"><section className="mx-auto max-w-4xl space-y-6"><a href="/en/blog" className="text-sm font-semibold text-green-800">← Back to blog</a><h1 className="text-4xl font-bold md:text-5xl">Worm Composting</h1><p className="text-lg text-[#4b5a4b]">Learn how worms transform organic material into humus, improve soil and support healthier plants.</p><div className="grid gap-5">{posts.map(([href,title,desc]) => <a key={href} href={href} className="rounded-2xl border border-[#dcd6c8] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"><h2 className="text-2xl font-bold">{title}</h2><p className="mt-2 text-[#5a6b5a]">{desc}</p></a>)}</div></section></main>;
}
