import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Productos que uso y recomiendo | KCGreenWorks",
  description:
    "Una selección razonada de herramientas para huerto, germinación, lombricultura y acuaponía, con consejos para elegir mejor.",
};

type Product = {
  number: string;
  name: string;
  category: "Huerto" | "Germinación" | "Lombricultura" | "Acuaponía";
  use: string;
  image: string;
  amazonPath: string;
  why: string;
  forWhom: string;
  note: string;
};

type Book = {
  title: string;
  description: string;
  image: string;
  link: string;
};

/**
 * Déjalo vacío hasta que Amazon apruebe la nueva solicitud.
 * Después, coloca aquí el nuevo Associates ID para añadirlo a todos los enlaces.
 */
const AMAZON_ASSOCIATES_ID = "";

function amazonLink(path: string) {
  const url = new URL(path, "https://www.amazon.com");

  if (AMAZON_ASSOCIATES_ID) {
    url.searchParams.set("tag", AMAZON_ASSOCIATES_ID);
  }

  return url.toString();
}

const books: Book[] = [
  {
    title: "Huerto en Casa",
    description: "Guía práctica para comenzar desde cero, sembrar, cuidar y cosechar alimentos en cualquier espacio.",
    image: "/images/shop/book7-huerto-en-casa.jpg",
    link: amazonLink("/dp/B0H8TFTNLG"),
  },
  {
    title: "Cosecha Roja",
    description: "Cómo sembrar, cuidar y cosechar tomates en tierra, hidroponía o acuaponía.",
    image: "/images/shop/book8-cosecha-roja.jpg",
    link: amazonLink("/dp/B0HFKZ4P8L"),
  },
  {
    title: "El Arte de Cultivar Yerba Buena",
    description: "Una guía para cultivar yerba buena y llevarla de la planta a la mesa.",
    image: "/images/shop/book9-yerba-buena.png",
    link: amazonLink("/dp/B0HDV98V67"),
  },
  {
    title: "Lombricultura en Casa",
    description: "Construye y mantén tu propio sistema de vermicompostaje desde cero.",
    image: "/images/shop/book1.jpg",
    link: amazonLink("/dp/B0H24D725B"),
  },
  {
    title: "Acuaponía",
    description: "La guía completa para avanzar desde cero hasta tu primera cosecha.",
    image: "/images/shop/book2.jpg",
    link: "https://a.co/d/0gRcplww",
  },
  {
    title: "La Lombriz al Descubierto",
    description: "Biología, alimentación, reproducción y lombricultura práctica en una sola guía.",
    image: "/images/shop/book3.jpg",
    link: "https://a.co/d/04YEWNq2",
  },
  {
    title: "Acuaponía en Casa",
    description: "Construye un sistema funcional y aprende a producir alimentos en casa.",
    image: "/images/shop/book4.jpg",
    link: "https://a.co/d/00LlFNKN",
  },
  {
    title: "Peces para Acuaponía",
    description: "Elige, alimenta y cuida peces para mantener un sistema acuapónico saludable.",
    image: "/images/shop/book6.jpg",
    link: "https://a.co/d/0dbs9z5j",
  },
];

const products: Product[] = [
  {
    number: "01",
    name: "Tijeras de poda Fiskars Bypass",
    category: "Huerto",
    use: "Poda y cosecha",
    image: "/images/shop/winner-fiskars-pruning-shears.jpg",
    amazonPath: "/dp/B00002N66H",
    why:
      "Unas tijeras de corte bypass hacen cortes limpios en tallos verdes. Son una herramienta sencilla, durable y de las que termino usando casi cada vez que entro al huerto.",
    forWhom:
      "Para quien cultiva tomates, pimientos, aromáticas, flores o frutales jóvenes y quiere podar sin maltratar la planta.",
    note: "La primera herramienta que compraría para un huerto nuevo.",
  },
  {
    number: "02",
    name: "Medidor de humedad XLUX",
    category: "Huerto",
    use: "Control del riego",
    image: "/images/shop/winner-xlux-moisture-meter.jpg",
    amazonPath: "/dp/B014MJ8J2U",
    why:
      "Ayuda a comprobar qué pasa bajo la superficie antes de volver a regar. Me gusta porque no necesita baterías y convierte una duda frecuente en una lectura rápida.",
    forWhom:
      "Para principiantes, personas con macetas o camas elevadas y cualquiera que tienda a regar de más.",
    note: "Úsalo como referencia y confirma también con el peso de la maceta y el aspecto de la planta.",
  },
  {
    number: "03",
    name: "Sistema de riego por goteo Spider Farmer",
    category: "Huerto",
    use: "Riego automático",
    image: "/images/shop/bucketdrain1.jpg",
    amazonPath: "/s?k=Spider+Farmer+automatic+drip+irrigation+system",
    why:
      "El goteo entrega el agua de forma localizada y constante. Es especialmente útil cuando el calor, los viajes o una agenda apretada vuelven irregular el riego manual.",
    forWhom:
      "Para patios, balcones, pequeños invernaderos o colecciones de macetas que necesitan una rutina más estable.",
    note: "Haz una prueba completa y ajusta cada gotero antes de dejarlo trabajando solo.",
  },
  {
    number: "04",
    name: "Manta térmica VIVOSUN con termostato",
    category: "Germinación",
    use: "Temperatura de semilleros",
    image: "/images/shop/winner-vivosun-heat-mat.jpg",
    amazonPath: "/dp/B016MKY7C8",
    why:
      "Mantener una temperatura más estable en la zona de las raíces puede mejorar la germinación de semillas que agradecen calor. El termostato aporta mucho más control que una manta siempre encendida.",
    forWhom:
      "Para quien inicia tomates, pimientos, berenjenas u otras semillas en una habitación fresca.",
    note: "No todas las semillas necesitan calor; revisa primero la temperatura recomendada para cada cultivo.",
  },
  {
    number: "05",
    name: "Luces de cultivo Barrina T5",
    category: "Germinación",
    use: "Luz para plántulas",
    image: "/images/shop/winner-barrina-grow-lights.jpg",
    amazonPath: "/dp/B07V6YJKR6",
    why:
      "Su formato lineal funciona bien sobre estanterías y permite acercar la luz a las plántulas. Eso ayuda a evitar tallos débiles y demasiado estirados cuando no hay una ventana luminosa.",
    forWhom:
      "Para semilleros interiores, microgreens y personas que quieren comenzar la temporada antes de que mejore el clima.",
    note: "La distancia y las horas de luz importan tanto como la lámpara; observa la respuesta de las plantas.",
  },
  {
    number: "06",
    name: "Lombrices rojas de Uncle Jim’s Worm Farm",
    category: "Lombricultura",
    use: "Iniciar un lombricario",
    image: "/images/shop/uncleredworms1.jpg",
    amazonPath: "/s?k=Uncle+Jims+Worm+Farm+red+wiggler+composting+worms",
    why:
      "La lombriz roja es una opción práctica para transformar residuos orgánicos en humus dentro de un sistema bien aireado. Un proveedor especializado reduce la incertidumbre al comenzar.",
    forWhom:
      "Para hogares que quieren aprovechar restos vegetales y producir una enmienda para macetas o huerto.",
    note: "Confirma las restricciones de envío de organismos vivos y prepara el lecho antes de recibirlas.",
  },
  {
    number: "07",
    name: "Compostera giratoria FCMP de doble cámara",
    category: "Lombricultura",
    use: "Precompostaje y compost",
    image: "/images/shop/winner-fcmp-composter.jpg",
    amazonPath: "/dp/B009378AG2",
    why:
      "Las dos cámaras permiten alimentar un lado mientras el otro madura. Aunque no sustituye un lombricario, sirve para precompostar materiales y manejar residuos que no conviene añadir directamente a las lombrices.",
    forWhom:
      "Para quien tiene patio, genera residuos con frecuencia y busca un proceso ordenado por lotes.",
    note: "El equilibrio entre materiales secos, húmedos y aireación sigue siendo la clave.",
  },
  {
    number: "08",
    name: "Medidor de pH Apera PH20",
    category: "Acuaponía",
    use: "Medición de pH",
    image: "/images/shop/winner-apera-ph-meter.jpg",
    amazonPath: "/dp/B01ENFOHN8",
    why:
      "En acuaponía, medir el pH con regularidad ayuda a entender el equilibrio entre peces, bacterias y plantas. Prefiero un medidor que pueda calibrarse a depender únicamente de estimaciones visuales.",
    forWhom:
      "Para sistemas acuapónicos o hidropónicos que ya necesitan seguimiento frecuente del agua.",
    note: "Un medidor solo es confiable si se calibra, enjuaga y almacena según sus instrucciones.",
  },
  {
    number: "09",
    name: "API Freshwater Master Test Kit",
    category: "Acuaponía",
    use: "Ciclo del nitrógeno",
    image: "/images/shop/winner-api-water-test-kit.jpg",
    amazonPath: "/dp/B000255NCI",
    why:
      "Permite seguir pH, amoníaco, nitrito y nitrato: datos esenciales para comprobar que el ciclo biológico avanza y que el agua sigue siendo segura para los peces.",
    forWhom:
      "Para quien está ciclando su primer sistema, incorpora peces o necesita investigar un cambio inesperado en el agua.",
    note: "Registra fecha y resultados; una serie de mediciones cuenta más que un valor aislado.",
  },
  {
    number: "10",
    name: "LETPOT jardín hidropónico de 12 espacios",
    category: "Acuaponía",
    use: "Cultivo interior compacto",
    image: "/images/shop/winner-letpot-hydroponics.jpg",
    amazonPath: "/dp/B0BL3GG6J3",
    why:
      "Es una manera compacta de practicar iluminación, nutrición y manejo del agua antes de construir un sistema mayor. Resulta cómodo para hierbas y hojas de crecimiento rápido.",
    forWhom:
      "Para principiantes con poco espacio que quieren experimentar con cultivo sin suelo dentro de casa.",
    note: "Es hidroponía, no acuaponía: utiliza nutrientes preparados y no incluye peces.",
  },
];

const categories = [
  { name: "Huerto", href: "#huerto", count: 3 },
  { name: "Germinación", href: "#germinacion", count: 2 },
  { name: "Lombricultura", href: "#lombricultura", count: 2 },
  { name: "Acuaponía", href: "#acuaponia", count: 3 },
] as const;

function categoryId(category: Product["category"]) {
  return category.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group grid overflow-hidden rounded-[1.75rem] border border-[#d8d2c3] bg-[#fffdf7] shadow-[0_12px_40px_rgba(31,42,31,0.06)] lg:grid-cols-[minmax(240px,0.78fr)_1.22fr]">
      <div className="relative min-h-[280px] overflow-hidden bg-[#e7eee2] sm:min-h-[340px] lg:min-h-full">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 1024px) 100vw, 38vw"
          className="object-contain p-8 transition duration-500 group-hover:scale-[1.025]"
        />
        <span className="absolute left-5 top-5 rounded-full bg-[#173f2a] px-3 py-1.5 text-xs font-extrabold uppercase tracking-[0.12em] text-white shadow-sm">
          {product.category}
        </span>
      </div>

      <div className="flex flex-col p-6 sm:p-8">
        <div className="flex items-start justify-between gap-5">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-green-800">{product.use}</p>
            <h2 className="mt-2 text-2xl font-black leading-tight text-[#19331f] sm:text-3xl">{product.name}</h2>
          </div>
          <span className="font-mono text-2xl font-bold text-[#b7c3ae]" aria-hidden="true">{product.number}</span>
        </div>

        <div className="mt-6 space-y-5 text-[15px] leading-7 text-[#4b5a4b] sm:text-base">
          <div>
            <h3 className="font-extrabold text-[#1f2a1f]">Por qué lo recomiendo</h3>
            <p className="mt-1">{product.why}</p>
          </div>
          <div>
            <h3 className="font-extrabold text-[#1f2a1f]">Para quién sirve</h3>
            <p className="mt-1">{product.forWhom}</p>
          </div>
        </div>

        <div className="mt-6 border-l-2 border-[#d5a72f] pl-4 text-sm italic leading-6 text-[#657064]">{product.note}</div>

        <a
          href={amazonLink(product.amazonPath)}
          target="_blank"
          rel="noopener noreferrer sponsored"
          aria-label={`Buscar ${product.name} en Amazon (abre en otra pestaña)`}
          className="mt-7 inline-flex min-h-12 w-full items-center justify-center rounded-xl bg-green-800 px-5 py-3 text-center text-sm font-extrabold text-white transition hover:bg-green-950 focus:outline-none focus:ring-2 focus:ring-green-700 focus:ring-offset-2 sm:w-fit"
        >
          Ver opciones en Amazon <span className="ml-2" aria-hidden="true">↗</span>
        </a>
      </div>
    </article>
  );
}

function BookCard({ book }: { book: Book }) {
  return (
    <article className="group flex min-w-0 flex-col overflow-hidden rounded-2xl border border-[#d8d2c3] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="relative h-80 overflow-hidden bg-[#e7eee2] sm:h-96">
        <Image
          src={book.image}
          alt={`Portada de ${book.title}`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-contain p-5 transition duration-500 group-hover:scale-[1.025]"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-xl font-black leading-tight text-[#19331f]">{book.title}</h3>
        <p className="mt-3 flex-1 text-sm leading-6 text-[#526052]">{book.description}</p>
        <a
          href={book.link}
          target="_blank"
          rel="noopener noreferrer sponsored"
          aria-label={`Ver ${book.title} en Amazon (abre en otra pestaña)`}
          className="mt-5 inline-flex min-h-12 w-full items-center justify-center rounded-xl bg-green-800 px-4 py-3 text-center text-sm font-extrabold text-white transition hover:bg-green-950 focus:outline-none focus:ring-2 focus:ring-green-700 focus:ring-offset-2"
        >
          Ver libro en Amazon <span className="ml-2" aria-hidden="true">↗</span>
        </a>
      </div>
    </article>
  );
}

export default function ShopPage() {
  return (
    <main className="min-h-screen bg-[#f4f1e8] text-[#1f2a1f]">
      <section className="px-5 pb-10 pt-7 sm:px-6 md:pb-14 md:pt-10">
        <div className="mx-auto max-w-7xl">
          <Link href="/" className="inline-flex min-h-11 items-center text-sm font-bold text-green-800 hover:underline">
            ← Volver al inicio
          </Link>

          <header className="relative mt-5 overflow-hidden rounded-[2rem] bg-[#173f2a] px-6 py-10 text-white shadow-xl sm:px-9 md:px-14 md:py-16">
            <div className="absolute -right-16 -top-24 h-72 w-72 rounded-full bg-[#d5a72f]/20 blur-2xl" />
            <div className="absolute -bottom-32 left-1/3 h-72 w-72 rounded-full bg-[#7eb66a]/20 blur-3xl" />

            <div className="relative max-w-4xl">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-[#e8c75e] sm:text-sm">La selección de KCGreenWorks</p>
              <h1 className="mt-4 max-w-3xl text-4xl font-black leading-[1.04] tracking-[-0.035em] sm:text-5xl md:text-7xl">
                Productos que uso y recomiendo
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-[#e6efe8] md:text-xl">
                Mis libros y diez herramientas que resuelven problemas reales del huerto, la germinación, la lombricultura y la acuaponía. Te cuento qué aportan y cuándo sí vale la pena considerarlas.
              </p>
              <a
                href="#libros"
                className="mt-7 inline-flex min-h-12 items-center justify-center rounded-xl bg-[#e8c75e] px-6 py-3 text-sm font-black text-[#173f2a] transition hover:bg-[#f3d87e] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#173f2a]"
              >
                Ver mis libros <span className="ml-2" aria-hidden="true">↓</span>
              </a>
            </div>

            <div className="relative mt-9 max-w-3xl rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur-sm">
              <p className="text-sm font-bold text-[#f6e9b6]">Aviso de afiliados</p>
              <p className="mt-2 text-sm leading-6 text-[#e6efe8]">
                Algunos enlaces de esta página pueden convertirse en enlaces de afiliado. Si compras a través de ellos, KCGreenWorks podría recibir una comisión sin costo adicional para ti. Por ahora, los enlaces no incluyen ningún Associates ID.
              </p>
            </div>
          </header>
        </div>
      </section>

      <section id="libros" className="scroll-mt-24 px-5 pb-12 sm:px-6 md:pb-16">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-[#d8d2c3] bg-[#fffdf7] p-5 shadow-sm sm:p-8">
          <div className="mb-7 flex flex-col gap-4 border-b border-[#d8d2c3] pb-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.18em] text-green-800">Biblioteca KCGreenWorks</p>
              <h2 className="mt-2 text-3xl font-black tracking-[-0.02em] sm:text-4xl">Mis libros</h2>
              <p className="mt-3 max-w-2xl leading-7 text-[#526052]">
                Guías escritas desde la experiencia para ayudarte a cultivar, criar lombrices y comenzar en acuaponía con una base clara.
              </p>
            </div>
            <Link
              href="/shop/books"
              className="inline-flex min-h-12 shrink-0 items-center justify-center rounded-xl border border-green-800 px-5 py-3 text-sm font-extrabold text-green-900 transition hover:bg-green-800 hover:text-white"
            >
              Ver biblioteca completa
            </Link>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {books.map((book) => <BookCard key={book.title} book={book} />)}
          </div>
        </div>
      </section>

      <section className="px-5 pb-12 sm:px-6 md:pb-16">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.82fr_1.18fr]">
          <div className="rounded-[1.75rem] border border-[#d8d2c3] bg-[#fffdf7] p-6 sm:p-8">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-green-800">Mi criterio</p>
            <h2 className="mt-3 text-3xl font-black tracking-[-0.02em]">Menos cosas. Mejores decisiones.</h2>
            <p className="mt-4 leading-7 text-[#526052]">
              No busco llenar una tienda. Priorizo herramientas útiles, fáciles de integrar y capaces de resolver una necesidad concreta. Antes de comprar, comprueba siempre las medidas, el voltaje y la compatibilidad con tu sistema.
            </p>
          </div>

          <nav aria-label="Categorías de productos" className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-2">
            {categories.map((category) => (
              <a
                key={category.name}
                href={category.href}
                className="group flex min-h-28 flex-col justify-between rounded-2xl border border-[#d8d2c3] bg-[#e4ebdc] p-5 transition hover:-translate-y-0.5 hover:border-green-700 hover:bg-[#dce7d4] focus:outline-none focus:ring-2 focus:ring-green-700 focus:ring-offset-2"
              >
                <span className="text-lg font-black text-[#19331f]">{category.name}</span>
                <span className="text-sm font-bold text-green-800">
                  {category.count} selecciones <span aria-hidden="true">↓</span>
                </span>
              </a>
            ))}
          </nav>
        </div>
      </section>

      <section className="px-5 pb-16 sm:px-6 md:pb-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex flex-col gap-3 border-b border-[#cfc9b9] pb-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.18em] text-green-800">La lista corta</p>
              <h2 className="mt-2 text-3xl font-black tracking-[-0.02em] sm:text-4xl">Diez recomendaciones, con contexto</h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-[#657064]">
              El mejor producto no es el más complejo: es el que encaja con tu espacio, experiencia y forma de cultivar.
            </p>
          </div>

          <div className="space-y-7">
            {products.map((product, index) => {
              const previousCategory = products[index - 1]?.category;
              const startsCategory = product.category !== previousCategory;

              return (
                <div key={product.name}>
                  {startsCategory && (
                    <div id={categoryId(product.category)} className="scroll-mt-24 pb-4 pt-5">
                      <p className="text-sm font-black uppercase tracking-[0.18em] text-green-800">{product.category}</p>
                    </div>
                  )}
                  <ProductCard product={product} />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#173f2a] px-5 py-12 text-white sm:px-6 md:py-16">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1fr_0.75fr] md:items-center">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.18em] text-[#e8c75e]">Antes de comprar</p>
            <h2 className="mt-3 text-3xl font-black tracking-[-0.02em] sm:text-4xl">Empieza por el problema, no por el producto.</h2>
            <p className="mt-4 max-w-2xl leading-7 text-[#dce8de]">
              Define qué quieres mejorar, mide el espacio disponible y revisa si ya tienes una herramienta que pueda cumplir la misma función. Comprar menos también es parte de cultivar de manera sostenible.
            </p>
          </div>
          <div className="rounded-2xl border border-white/20 bg-white/10 p-6 text-sm leading-6 text-[#e6efe8]">
            <p className="font-extrabold text-white">Transparencia</p>
            <p className="mt-2">
              Esta selección es editorial. La posibilidad de recibir una comisión no cambia el precio para ti ni sustituye tu propia evaluación del producto. Precios y disponibilidad pueden cambiar en Amazon.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
