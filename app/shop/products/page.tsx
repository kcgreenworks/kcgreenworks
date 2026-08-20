import Link from "next/link";
import Image from "next/image";

const products = [
  { title: "LETPOT Smart Hydroponic Garden", description: "Jardín hidropónico inteligente de 12 plantas con luz LED, Wi-Fi y control desde la aplicación.", image: "/images/shop/winner-letpot-hydroponics.jpg", link: "https://www.amazon.com/dp/B0BL3GG6J3?tag=kcmarkshop09-20" },
  { title: "FCMP Dual-Chamber Composter", description: "Compostera giratoria de doble cámara y 37 galones para producir composta continuamente.", image: "/images/shop/winner-fcmp-composter.jpg", link: "https://www.amazon.com/dp/B009378AG2?tag=kcmarkshop09-20" },
  { title: "Apera PH20 pH Tester Kit", description: "Medidor de pH impermeable con calibración automática para hidroponía y acuaponía.", image: "/images/shop/winner-apera-ph-meter.jpg", link: "https://www.amazon.com/dp/B01ENFOHN8?tag=kcmarkshop09-20" },
  { title: "API Freshwater Master Test Kit", description: "Kit completo para medir pH, amoníaco, nitritos y nitratos en sistemas acuapónicos.", image: "/images/shop/winner-api-water-test-kit.jpg", link: "https://www.amazon.com/dp/B000255NCI?tag=kcmarkshop09-20" },
  { title: "Fiskars Bypass Pruning Shears", description: "Tijeras resistentes y precisas para podar hierbas, vegetales, flores y ramas pequeñas.", image: "/images/shop/winner-fiskars-pruning-shears.jpg", link: "https://www.amazon.com/dp/B00002N66H?tag=kcmarkshop09-20" },
  { title: "XLUX Soil Moisture Meter", description: "Medidor de humedad de lectura inmediata para evitar el exceso o la falta de riego.", image: "/images/shop/winner-xlux-moisture-meter.jpg", link: "https://www.amazon.com/dp/B014MJ8J2U?tag=kcmarkshop09-20" },
  { title: "VIVOSUN Seedling Heat Mat", description: "Manta térmica con termostato digital para germinar semillas y fortalecer raíces.", image: "/images/shop/winner-vivosun-heat-mat.jpg", link: "https://www.amazon.com/dp/B016MKY7C8?tag=kcmarkshop09-20" },
  { title: "Barrina T5 Grow Lights", description: "Juego de ocho luces LED de espectro completo para semilleros y cultivos interiores.", image: "/images/shop/winner-barrina-grow-lights.jpg", link: "https://www.amazon.com/dp/B07V6YJKR6?tag=kcmarkshop09-20" },
  { title: "AeroGarden", description: "Jardín hidropónico interior sin tierra, con luz LED para cultivar hasta seis plantas durante todo el año.", image: "/images/shop/aerogarden1.jpg", link: "https://amzn.to/4e842me" },
  { title: "Hydroponics Grow System with Top Drip Kit", description: "Sistema hidropónico DWC con cubetas de cinco galones, riego superior, bomba de aire y piedras difusoras.", image: "/images/shop/hydrogrowsystem5gallon1.jpg", link: "https://amzn.to/3Px1q8a" },
  { title: "4L Electric Composter for Kitchen", description: "Compostera eléctrica de cocina para transformar residuos de alimentos con poco ruido y control de olores.", image: "/images/shop/eleccompost1.jpg", link: "https://amzn.to/4dQU8UC" },
  { title: "Outdoor Tumbling Composter", description: "Compostera exterior giratoria de doble cámara y 43 galones para trabajar por lotes.", image: "/images/shop/rotcompost1.jpg", link: "https://amzn.to/3Q3rd85" },
  { title: "Uncle Jim's Worm Farm Red Wiggler", description: "Paquete de lombrices rojas para iniciar el compostaje y mejorar la estructura del suelo.", image: "/images/shop/uncleredworms1.jpg", link: "https://amzn.to/4fHlK16" },
  { title: "Rolling Elevated Raised Garden Bed", description: "Cama de cultivo elevada con ruedas y espacio de almacenamiento para vegetales, flores y hierbas.", image: "/images/shop/elevatedraise1.jpg", link: "https://amzn.to/4v9WVPN" },
  { title: "Backpack Sprayer", description: "Aspersor de mochila a batería para jardín, malezas y control de plagas.", image: "/images/shop/backpacksprayer1.jpg", link: "https://amzn.to/3PQ8OLU" },
  { title: "Spider Farmer Auto Drip Irrigation System", description: "Sistema automático de riego por goteo con depósito, bomba de agua y sensor de nivel bajo.", image: "/images/shop/bucketdrain1.jpg", link: "https://amzn.to/4wQuwzX" },
  { title: "Greenhouse for Outdoors", description: "Invernadero portátil con cubierta resistente y puerta enrollable para cultivos exteriores.", image: "/images/shop/greenhouse1.jpg", link: "https://amzn.to/4nVJrET" },
  { title: "Back to the Roots Indoor Aquaponic Garden", description: "Sistema acuapónico interior de tres galones con pecera y jardinera de autorriego.", image: "/images/shop/backtotheroots1.jpg", link: "https://amzn.to/3RrNBIL" },
  { title: "Indoor Garden Hydroponics Growing System", description: "Sistema hidropónico interior de diez plantas con luz LED para hierbas, vegetales y lechuga.", image: "/images/shop/indoorgarden1.jpg", link: "https://amzn.to/3S5XiN0" },
];

export default function ShopProductsPage() {
  return (
    <main className="min-h-screen bg-[#f4f1e8] px-6 py-12 text-[#1f2a1f]">
      <section className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-wrap gap-4">
          <Link href="/shop" className="text-sm font-semibold text-green-800 hover:underline">
            ← Volver al shop
          </Link>
          <Link href="/" className="text-sm font-semibold text-green-800 hover:underline">
            Volver al inicio
          </Link>
        </div>

        <header className="mb-12">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-green-800">
            KCGREENWORKS SHOP
          </p>
          <h1 className="text-5xl font-bold leading-tight">Productos recomendados</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-[#4b5a4b]">
            Sistemas, equipos y productos útiles para agricultura casera,
            acuaponía, hidroponía, compostaje y siembra en espacios pequeños.
          </p>
          <p className="mt-4 max-w-3xl text-sm leading-6 text-[#6b786b]">
            Como Asociado de Amazon, puedo ganar una comisión por compras calificadas.
          </p>
        </header>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {products.map((product) => (
            <article
              key={product.title}
              className="overflow-hidden rounded-3xl border border-[#d8d2c3] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative flex h-[420px] w-full items-center justify-center bg-[#eef2e8] p-6">
                <Image src={product.image} alt={product.title} fill className="object-contain p-4" />
              </div>
              <div className="p-8">
                <h2 className="text-2xl font-bold leading-tight">{product.title}</h2>
                <p className="mt-5 text-[17px] leading-8 text-[#4b5a4b]">
                  {product.description}
                </p>
                <a
                  href={product.link}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="mt-8 inline-flex rounded-2xl bg-green-800 px-6 py-3 font-semibold text-white transition hover:bg-green-900"
                >
                  Ver en Amazon
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
