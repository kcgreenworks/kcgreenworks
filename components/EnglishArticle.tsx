import Image from "next/image";
import Link from "next/link";

type Section = {
  title: string;
  body?: string[];
  bullets?: string[];
};

type ArticleProps = {
  backHref: string;
  backLabel: string;
  eyebrow: string;
  title: string;
  intro: string;
  image?: string;
  imageAlt?: string;
  sections: Section[];
  recommendation?: string;
};

export default function EnglishArticle({
  backHref,
  backLabel,
  eyebrow,
  title,
  intro,
  image,
  imageAlt,
  sections,
  recommendation,
}: ArticleProps) {
  return (
    <main className="min-h-screen bg-[#f4f1e8] px-6 py-12 text-[#1f2a1f]">
      <article className="mx-auto max-w-4xl space-y-10">
        <Link href={backHref} className="text-sm font-semibold text-green-800 hover:underline">
          ← {backLabel}
        </Link>

        <header className="space-y-5">
          <p className="text-sm font-semibold uppercase tracking-wide text-green-800">{eyebrow}</p>
          <h1 className="text-4xl font-bold leading-tight md:text-5xl">{title}</h1>
          <p className="text-lg leading-8 text-[#405040]">{intro}</p>
        </header>

        {image ? (
          <div className="overflow-hidden rounded-2xl bg-white shadow-sm">
            <Image src={image} alt={imageAlt || title} width={1200} height={800} className="h-auto w-full object-cover" priority />
          </div>
        ) : null}

        {sections.map((section) => (
          <section key={section.title} className="rounded-2xl bg-white p-6 shadow-sm space-y-4">
            <h2 className="text-3xl font-bold">{section.title}</h2>
            {section.body?.map((paragraph) => (
              <p key={paragraph.slice(0, 60)} className="text-lg leading-8 text-[#405040]">{paragraph}</p>
            ))}
            {section.bullets ? (
              <ul className="list-disc space-y-2 pl-6 text-lg leading-8 text-[#405040]">
                {section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
              </ul>
            ) : null}
          </section>
        ))}

        {recommendation ? (
          <section className="rounded-2xl border border-[#d8d2c3] bg-[#fffaf0] p-6 shadow-sm">
            <h2 className="text-3xl font-bold">Practical recommendation</h2>
            <p className="mt-4 text-lg leading-8 text-[#405040]">{recommendation}</p>
          </section>
        ) : null}
      </article>
    </main>
  );
}
