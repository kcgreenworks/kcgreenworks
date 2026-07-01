import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { infoMeses } from '../../../siembra/data';
import { Metadata } from 'next';

interface Props {
  params: Promise<{ mes: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { mes } = await params;
  const datosMes = infoMeses[mes.toLowerCase()];
  
  if (!datosMes) return { title: 'Month not found' };

  return {
    title: `What to Plant in ${datosMes.nombreEn}? - Gardening Guide`,
    description: datosMes.descripcionEn,
  };
}

export default async function PaginaMesEnglish({ params }: Props) {
  const { mes } = await params;
  const datosMes = infoMeses[mes.toLowerCase()];

  if (!datosMes) {
    notFound();
  }

  return (
    <article className="max-w-4xl mx-auto px-4 py-8 text-neutral-800 font-sans">
      
      {/* Months Navigation Menu */}
      <nav className="mb-6 overflow-x-auto pb-3 border-b border-neutral-200">
        <ul className="flex gap-2 text-sm whitespace-nowrap">
          {Object.values(infoMeses).map((m) => (
            <li key={m.slug}>
              <Link 
                href={`/en/siembra/${m.slug}`}
                className={`px-3 py-1.5 rounded-full transition-colors ${
                  m.slug === datosMes.slug 
                    ? 'bg-green-600 text-white font-bold' 
                    : 'bg-neutral-100 hover:bg-neutral-200 text-neutral-600'
                }`}
              >
                {m.nombreEn}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Back to Home Button */}
      <div className="mb-8">
        <Link 
          href="/en"
          className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-500 hover:text-green-700 transition-colors"
        >
          ← Back to Home
        </Link>
      </div>

      {/* Header */}
      <header className="text-center mb-8">
        <span className="text-sm font-semibold uppercase tracking-wider text-green-600 block mb-2">
          Monthly Planting Calendar
        </span>
        <h1 className="text-3xl md:text-5xl font-black tracking-tight mb-4 text-neutral-900">
          What can you plant in {datosMes.nombreEn}?
        </h1>
        <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
          {datosMes.descripcionEn}
        </p>
      </header>

      {/* Infographic Image */}
      <section className="flex justify-center mb-12 shadow-xl rounded-2xl overflow-hidden bg-white border border-neutral-100">
        <Image
          src={datosMes.imagenEn} 
          alt={`Infographic about what to plant in ${datosMes.nombreEn}`}
          width={1000}
          height={1000}
          priority
          className="w-full h-auto object-cover"
        />
      </section>

      {/* Dynamic Text Transcription */}
      <section className="bg-neutral-50 p-6 md:p-8 rounded-2xl border border-neutral-200/60 mb-10">
        <h2 className="text-2xl font-bold mb-4 text-neutral-900 border-b border-neutral-200 pb-2">
          Recommended Varieties
        </h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <h3 className="font-bold text-green-700 mb-2">🌿 Herbs & Greens</h3>
            <ul className="list-disc pl-5 space-y-1 text-sm text-neutral-600">
              {datosMes.hojasHierbasEn.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-green-700 mb-2">🍅 Vegetables</h3>
            <ul className="list-disc pl-5 space-y-1 text-sm text-neutral-600">
              {datosMes.vegetalesEn.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-green-700 mb-2">🥔 Roots & Others</h3>
            <ul className="list-disc pl-5 space-y-1 text-sm text-neutral-600">
              {datosMes.raicesOtrosEn.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="mb-10 bg-green-50/60 border border-green-100 p-6 rounded-2xl">
        <h2 className="text-xl font-bold text-green-900 mb-3">💡 Tips for {datosMes.nombreEn}</h2>
        <ul className="grid sm:grid-cols-2 gap-3 text-sm text-green-800">
          {datosMes.tipsEn.map((tip, i) => (
            <li key={i} className="flex items-start gap-2">🌱 <span>{tip}</span></li>
          ))}
        </ul>
      </section>

      {/* Credits */}
      <footer className="text-center text-xs text-neutral-500 border-t border-neutral-200 pt-6">
        <p className="mb-2">Grow Today, Harvest Tomorrow.</p>
        <p>Infographic courtesy of <span className="font-semibold">KC Greenworks</span>.</p>
      </footer>

    </article>
  );
}

export async function generateStaticParams() {
  return Object.keys(infoMeses).map((mes) => ({
    mes: mes,
  }));
}