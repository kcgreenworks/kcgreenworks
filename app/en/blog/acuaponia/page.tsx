const posts = [
  ["/en/blog/acuaponia/guia-basica", "Basic Aquaponics Guide", "Understand fish, bacteria, plants and the nutrient cycle."],
  ["/en/blog/acuaponia/como-construir-acuaponico", "Build a Home Aquaponic System", "A practical guide to layout, materials, water flow and cycling."],
  ["/en/blog/acuaponia/hierbas-aromaticas", "Aromatic Herbs in Aquaponics", "Best herbs to grow and how to manage them in small systems."],
];

export default function AquaponicsEN() {
  return <main className="min-h-screen bg-[#f4f1e8] px-6 py-12 text-[#1f2a1f]"><section className="mx-auto max-w-4xl space-y-6"><a href="/en/blog" className="text-sm font-semibold text-green-800">← Back to blog</a><h1 className="text-4xl font-bold md:text-5xl">Aquaponics</h1><p className="text-lg text-[#4b5a4b]">Learn how water, fish, bacteria and plants work together in a balanced home system.</p><div className="grid gap-5">{posts.map(([href,title,desc]) => <a key={href} href={href} className="rounded-2xl border border-[#dcd6c8] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"><h2 className="text-2xl font-bold">{title}</h2><p className="mt-2 text-[#5a6b5a]">{desc}</p></a>)}</div></section></main>;
}
