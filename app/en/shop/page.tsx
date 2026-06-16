import Link from "next/link";
import Image from "next/image";

const books = [
  {
    title: "VERMICOMPOSTING AT HOME",
    description: "Build your own vermicomposting system from scratch.",
    image: "/images/shop/book1.jpg",
    link: "https://www.amazon.com/dp/B0H24D725B",
  },
  {
    title: "AQUAPONICS",
    description: "From scratch to your first harvest.",
    image: "/images/shop/book2.jpg",
    link: "https://a.co/d/0gRcplww",
  },
  {
    title: "THE EARTHWORM UNCOVERED",
    description: "Biology, feeding, and practical vermiculture.",
    image: "/images/shop/book3.jpg",
    link: "https://a.co/d/04YEWNq2",
  },
  {
    title: "FISH FOR AQUAPONICS",
    description:
      "Breeding, feeding, water quality and fish selection for aquaponic systems.",
    image: "/images/shop/book4.jpg",
    link: "https://a.co/d/0dbs9z5j",
  },
  {
    title: "AQUAPONICS FOR BEGINNERS",
    description: "A practical guide to start your first aquaponic system.",
    image: "/images/shop/book5.jpg",
    link: "#",
  },
  {
    title: "AQUAPONICS AT HOME",
    description: "Build your own system and grow food with less water.",
    image: "/images/shop/book6.jpg",
    link: "https://a.co/d/00LlFNKN",
  },
];

const products = [
  {
    title: "AeroGarden",
    description: "Indoor hydroponic garden with LED grow light.",
    image: "/images/shop/aerogarden1.jpg",
    link: "https://amzn.to/4e842me",
  },
  {
    title: "Back to the Roots Indoor Aquaponic Garden",
    description:
      "3-gallon indoor aquaponics system with fish tank and planter.",
    image: "/images/shop/backtotheroots1.jpg",
    link: "https://amzn.to/3RrNBIL",
  },
  {
    title: "Hydroponics Grow System",
    description: "DWC hydroponic system with top drip kit.",
    image: "/images/shop/hydrogrowsystem5gallon1.jpg",
    link: "https://amzn.to/3Px1q8a",
  },
  {
    title: "Electric Composter",
    description: "4L electric kitchen composter.",
    image: "/images/shop/eleccompost1.jpg",
    link: "https://amzn.to/4dQU8UC",
  },
  {
    title: "Outdoor Tumbling Composter",
    description: "43-gallon outdoor rotating composter.",
    image: "/images/shop/rotcompost1.jpg",
    link: "https://amzn.to/3Q3rd85",
  },
  {
    title: "Red Wiggler Composting Worms",
    description: "Red composting worms for healthier soil.",
    image: "/images/shop/uncleredworms1.jpg",
    link: "https://amzn.to/4fHlK16",
  },
  {
    title: "Rolling Elevated Raised Garden Bed",
    description: "Mobile raised garden bed for vegetables and herbs.",
    image: "/images/shop/elevatedraise1.jpg",
    link: "https://amzn.to/4v9WVPN",
  },
  {
    title: "Backpack Sprayer",
    description: "Battery-powered backpack sprayer for lawns and gardens.",
    image: "/images/shop/backpacksprayer1.jpg",
    link: "https://amzn.to/3PQ8OLU",
  },
  {
    title: "Auto Drip Irrigation System",
    description: "Automatic drip irrigation system.",
    image: "/images/shop/bucketdrain1.jpg",
    link: "https://amzn.to/4wQuwzX",
  },
  {
    title: "Outdoor Greenhouse",
    description: "Portable greenhouse for outdoor growing.",
    image: "/images/shop/greenhouse1.jpg",
    link: "https://amzn.to/4nVJrET",
  },
  {
    title: "Indoor Hydroponics Growing System",
    description: "10-pod indoor hydroponic system with LED grow light.",
    image: "/images/shop/indoorgarden1.jpg",
    link: "https://amzn.to/3S5XiN0",
  },
];

function CarouselCard({
  item,
  buttonText,
}: {
  item: { title: string; description: string; image: string; link: string };
  buttonText: string;
}) {
  return (
    <div className="w-[210px] shrink-0 overflow-hidden rounded-2xl border border-[#d8d2c3] bg-white shadow-sm md:w-[240px]">
      <div className="relative h-[170px] bg-[#eef2e8]">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-contain p-4"
        />
      </div>

      <div className="p-4">
        <h3 className="min-h-[40px] text-base font-bold leading-snug">
          {item.title}
        </h3>

        <p className="mt-2 min-h-[50px] text-xs leading-5 text-[#4b5a4b]">
          {item.description}
        </p>

        <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="mt-4 inline-flex rounded-xl bg-green-800 px-4 py-2 text-xs font-semibold text-white transition hover:bg-green-900"
        >
          {buttonText}
        </a>
      </div>
    </div>
  );
}

function ProductCarousel({
  items,
  buttonText,
}: {
  items: { title: string; description: string; image: string; link: string }[];
  buttonText: string;
}) {
  const loopItems = [...items, ...items];

  return (
    <div className="relative overflow-hidden py-2">
      <div className="kc-carousel flex w-max gap-5">
        {loopItems.map((item, index) => (
          <CarouselCard
            key={item.title + "-" + index}
            item={item}
            buttonText={buttonText}
          />
        ))}
      </div>
    </div>
  );
}

export default function ShopPageEN() {
  return (
    <main className="min-h-screen bg-[#f4f1e8] px-6 py-10 text-[#1f2a1f]">
      <style>
        {`
          @keyframes kcScroll {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(-50%);
            }
          }

          .kc-carousel {
            animation: kcScroll 60s linear infinite;
          }

          .kc-carousel:hover {
            animation-play-state: paused;
          }
        `}
      </style>

      <section className="mx-auto max-w-7xl">
        <Link
          href="/en"
          className="mb-8 inline-block text-sm font-semibold text-green-800 hover:underline"
        >
          ← Back to Home
        </Link>

        <header className="mb-10">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-green-800">
            KCGREENWORKS SHOP
          </p>

          <h1 className="text-4xl font-bold leading-tight md:text-5xl">
            Recommended Books & Products
          </h1>

          <p className="mt-4 max-w-3xl text-lg leading-8 text-[#4b5a4b]">
            Carefully selected resources to help you learn, grow food, compost,
            and build sustainable systems at home.
          </p>

          <p className="mt-3 max-w-3xl text-sm leading-6 text-[#6b786b]">
            As an Amazon Associate, I may earn commissions from qualifying
            purchases made through these links at no additional cost to you.
          </p>
        </header>

        <section className="mb-14 rounded-3xl border border-[#d8d2c3] bg-[#fbfaf5] p-6 shadow-sm">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
            <div>
              <h2 className="text-3xl font-bold">Featured Books</h2>
              <p className="mt-2 text-sm text-[#4b5a4b]">
                Books written and recommended by KCGreenWorks.
              </p>
            </div>

            <Link
              href="/en/shop/books"
              className="rounded-xl border border-green-800 px-5 py-2 text-sm font-semibold text-green-900 transition hover:bg-green-800 hover:text-white"
            >
              View All Books
            </Link>
          </div>

          <ProductCarousel items={books} buttonText="View Book" />
        </section>

        <section className="rounded-3xl border border-[#d8d2c3] bg-[#fbfaf5] p-6 shadow-sm">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
            <div>
              <h2 className="text-3xl font-bold">Recommended Products</h2>
              <p className="mt-2 text-sm text-[#4b5a4b]">
                Products for aquaponics, hydroponics, composting, gardening,
                and home food production.
              </p>
            </div>

            <Link
              href="/en/shop/products"
              className="rounded-xl border border-green-800 px-5 py-2 text-sm font-semibold text-green-900 transition hover:bg-green-800 hover:text-white"
            >
              View All Products
            </Link>
          </div>

          <ProductCarousel items={products} buttonText="View on Amazon" />
        </section>
      </section>
    </main>
  );
}