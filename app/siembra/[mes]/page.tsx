import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { infoMeses } from '../data';
import { Metadata } from 'next';

interface Props {
  params: Promise<{ mes: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { mes } = await params;
  const datosMes = infoMeses[mes.toLowerCase()];
  
  if (!datosMes) return { title: 'Mes no encontrado' };

  return {
    title: `¿Qué Sembrar en ${datosMes.nombre}? - Guía de Cultivo`,
    description: datosMes.descripcion,
  };
}

export default async function PaginaMes({ params }: Props) {
  const { mes } = await params;
  const datosMes = infoMeses[mes.toLowerCase()];

  if (!datosMes) {
    notFound();
  }

  return (
    <article className="max-w-4xl mx-auto px-4 py-8 text-neutral-800 font-sans">
      
      {/* Menú de navegación rápido entre meses */}
      <nav className="mb-8 overflow-x-auto pb-3 border-b border-neutral-200">
        <ul className="flex gap-2 text-sm whitespace-nowrap">
          {Object.values(infoMeses).map((m) => (
            <li key={m.slug}>
              <Link 
                href={`/siembra/${m.slug}`}
                className={`px-3 py-1.5 rounded-full transition-colors ${
                  m.slug === datosMes.slug 
                    ? 'bg-green-600 text-white font-bold' 
                    : 'bg-neutral-100 hover:bg-neutral-200 text-neutral-600'
                }`}
              >
                {m.nombre}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Encabezado */}
      <header className="text-center mb-8">
        <span className="text-sm font-semibold uppercase tracking-wider text-green-600 block mb-2">
          Calendario Mensual de Siembra
        </span>
        <h1 className="text-3xl md:text-5xl font-black tracking-tight mb-4 text-neutral-900">
          ¿Qué puedes sembrar en {datosMes.nombre}?
        </h1>
        <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
          {datosMes.descripcion}
        </p>
      </header>

      {/* Imagen de la infografía */}
      <section className="flex justify-center mb-12 shadow-xl rounded-2xl overflow-hidden bg-white border border-neutral-100">
        <Image
          src={datosMes.imagen}
          alt={`Infografía sobre qué sembrar en ${datosMes.nombre}`}
          width={1000}
          height={1000}
          priority
          className="w-full h-auto object-cover"
        />
      </section>

      {/* Transcripción de Texto */}
      <section className="bg-neutral-50 p-6 md:p-8 rounded-2xl border border-neutral-200/60 mb-10">
        <h2 className="text-2xl font-bold mb-4 text-neutral-900 border-b border-neutral-200 pb-2">
          Variedades Recomendadas
        </h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <h3 className="font-bold text-green-700 mb-2">🌿 Hojas y Hierbas</h3>
            <ul className="list-disc pl-5 space-y-1 text-sm text-neutral-600">
              {datosMes.hojasHierbas.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-green-700 mb-2">🍅 Vegetales</h3>
            <ul className="list-disc pl-5 space-y-1 text-sm text-neutral-600">
              {datosMes.vegetales.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-green-700 mb-2">🥔 Raíces y Otros</h3>
            <ul className="list-disc pl-5 space-y-1 text-sm text-neutral-600">
              {datosMes.raicesOtros.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
          </div>
        </div>
      </section>

      {/* Consejos/Tips */}
      <section className="mb-10 bg-green-50/60 border border-green-100 p-6 rounded-2xl">
        <h2 className="text-xl font-bold text-green-900 mb-3">💡 Tips para {datosMes.nombre}</h2>
        <ul className="grid sm:grid-cols-2 gap-3 text-sm text-green-800">
          {datosMes.tips.map((tip, i) => (
            <li key={i} className="flex items-start gap-2">🌱 <span>{tip}</span></li>
          ))}
        </ul>
      </section>

      {/* Créditos */}
      <footer className="text-center text-xs text-neutral-500 border-t border-neutral-200 pt-6">
        <p className="mb-2">Cultiva Hoy, Cosecha Mañana.</p>
        <p>Infografía cortesía de <span className="font-semibold">KC Greenworks</span>.</p>
      </footer>

    </article>
  );
}

export async function generateStaticParams() {
  return Object.keys(infoMeses).map((mes) => ({
    mes: mes,
  }));
}