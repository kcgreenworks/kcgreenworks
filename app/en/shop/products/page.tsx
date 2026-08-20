import Link from "next/link";
import Image from "next/image";

const products = [
  { title: "LETPOT Smart Hydroponic Garden", description: "12-pod smart indoor hydroponic garden with LED grow light, Wi-Fi and app control.", image: "/images/shop/winner-letpot-hydroponics.jpg", link: "https://www.amazon.com/dp/B0BL3GG6J3?tag=kcmarkshop09-20" },
  { title: "FCMP Dual-Chamber Composter", description: "37-gallon rotating dual-chamber composter for continuous batches of finished compost.", image: "/images/shop/winner-fcmp-composter.jpg", link: "https://www.amazon.com/dp/B009378AG2?tag=kcmarkshop09-20" },
  { title: "Apera PH20 pH Tester Kit", description: "Waterproof pH tester with automatic calibration for hydroponic and aquaponic systems.", image: "/images/shop/winner-apera-ph-meter.jpg", link: "https://www.amazon.com/dp/B01ENFOHN8?tag=kcmarkshop09-20" },
  { title: "API Freshwater Master Test Kit", description: "Complete water test kit for pH, ammonia, nitrite and nitrate control in aquaponic systems.", image: "/images/shop/winner-api-water-test-kit.jpg", link: "https://www.amazon.com/dp/B000255NCI?tag=kcmarkshop09-20" },
  { title: "Fiskars Bypass Pruning Shears", description: "Durable precision pruning shears for herbs, vegetables, flowers and small branches.", image: "/images/shop/winner-fiskars-pruning-shears.jpg", link: "https://www.amazon.com/dp/B00002N66H?tag=kcmarkshop09-20" },
  { title: "XLUX Soil Moisture Meter", description: "Instant soil moisture readings to help prevent overwatering and underwatering.", image: "/images/shop/winner-xlux-moisture-meter.jpg", link: "https://www.amazon.com/dp/B014MJ8J2U?tag=kcmarkshop09-20" },
  { title: "VIVOSUN Seedling Heat Mat", description: "Seedling heat mat with digital thermostat for germination and stronger root development.", image: "/images/shop/winner-vivosun-heat-mat.jpg", link: "https://www.amazon.com/dp/B016MKY7C8?tag=kcmarkshop09-20" },
  { title: "Barrina T5 Grow Lights", description: "Eight full-spectrum LED grow-light strips for seedlings and indoor growing shelves.", image: "/images/shop/winner-barrina-grow-lights.jpg", link: "https://www.amazon.com/dp/B07V6YJKR6?tag=kcmarkshop09-20" },
  { title: "AeroGarden", description: "Soil-Free Indoor Hydroponic Garden with LED Grow Light for year-round gardening of up to 6 herbs and vegetables.", image: "/images/shop/aerogarden1.jpg", link: "https://amzn.to/4e842me" },
  { title: "Hydroponics Grow System with Top Drip Kit", description: "DWC hydroponics grow system with 5-gallon buckets, top drip kit, air hose, air pump and air stone.", image: "/images/shop/hydrogrowsystem5gallon1.jpg", link: "https://amzn.to/3Px1q8a" },
  { title: "4L Electric Composter for Kitchen", description: "Smart countertop compost bin for turning food waste into fertilizer. Odorless, low noise and auto-cleaning.", image: "/images/shop/eleccompost1.jpg", link: "https://amzn.to/4dQU8UC" },
  { title: "Outdoor Tumbling Composter", description: "Dual rotating outdoor compost bin with 43-gallon capacity for batch composting.", image: "/images/shop/rotcompost1.jpg", link: "https://amzn.to/3Q3rd85" },
  { title: "Uncle Jim's Worm Farm Red Wiggler", description: "Starter pack of composting worms for improving garden soil structure and quality.", image: "/images/shop/uncleredworms1.jpg", link: "https://amzn.to/4fHlK16" },
  { title: "Rolling Elevated Raised Garden Bed", description: "2' x 6' raised garden bed with legs, wheels and storage rack for vegetables, flowers and herbs.", image: "/images/shop/elevatedraise1.jpg", link: "https://amzn.to/4v9WVPN" },
  { title: "Backpack Sprayer", description: "5.2 gallon battery powered backpack sprayer for lawn, yard, weed and pest control.", image: "/images/shop/backpacksprayer1.jpg", link: "https://amzn.to/3PQ8OLU" },
  { title: "Spider Farmer Auto Drip Irrigation System", description: "Automatic drip irrigation system with 13-gallon bucket, 25W water pump and low water level sensor.", image: "/images/shop/bucketdrain1.jpg", link: "https://amzn.to/4wQuwzX" },
  { title: "Greenhouse for Outdoors", description: "Portable lean-to greenhouse with heavy-duty cover and roll-up zippered door for outdoor plant growing.", image: "/images/shop/greenhouse1.jpg", link: "https://amzn.to/4nVJrET" },
  { title: "Back to the Roots Indoor Aquaponic Garden", description: "3-gallon self-watering planter and self-cleaning fish tank for herbs, microgreens, bamboo and houseplants.", image: "/images/shop/backtotheroots1.jpg", link: "https://amzn.to/3RrNBIL" },
  { title: "Indoor Garden Hydroponics Growing System", description: "10-pod indoor hydroponics growing system with LED grow light for herbs, vegetables and lettuce.", image: "/images/shop/indoorgarden1.jpg", link: "https://amzn.to/3S5XiN0" },
];

export default function ShopProductsPageEN() {
  return (
    <main className="min-h-screen bg-[#f4f1e8] px-6 py-12 text-[#1f2a1f]">
      <section className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-wrap gap-4">
          <Link href="/en/shop" className="text-sm font-semibold text-green-800 hover:underline">← Back to Shop</Link>
          <Link href="/en" className="text-sm font-semibold text-green-800 hover:underline">Back to Home</Link>
        </div>
        <header className="mb-12">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-green-800">KCGREENWORKS SHOP</p>
          <h1 className="text-5xl font-bold leading-tight">Recommended Products</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-[#4b5a4b]">
            Useful systems, equipment, and products for home agriculture, aquaponics, hydroponics, composting, and small-space growing.
          </p>
          <p className="mt-4 max-w-3xl text-sm leading-6 text-[#6b786b]">As an Amazon Associate, I may earn from qualifying purchases.</p>
        </header>
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {products.map((product) => (
            <article key={product.title} className="overflow-hidden rounded-3xl border border-[#d8d2c3] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
              <div className="relative flex h-[420px] w-full items-center justify-center bg-[#eef2e8] p-6">
                <Image src={product.image} alt={product.title} fill className="object-contain p-4" />
              </div>
              <div className="p-8">
                <h2 className="text-2xl font-bold leading-tight">{product.title}</h2>
                <p className="mt-5 text-[17px] leading-8 text-[#4b5a4b]">{product.description}</p>
                <a href={product.link} target="_blank" rel="noopener noreferrer sponsored" className="mt-8 inline-flex rounded-2xl bg-green-800 px-6 py-3 font-semibold text-white transition hover:bg-green-900">
                  View on Amazon
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
