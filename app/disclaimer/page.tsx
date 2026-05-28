import Link from "next/link";

export default function DisclaimerPage() {
  return (
    <main className="min-h-screen bg-[#f4f1e8] px-6 py-12 text-[#1f2a1f]">
      <section className="mx-auto max-w-4xl">
        <div className="mb-10 flex flex-wrap gap-3">
          <Link
            href="/"
            className="rounded-xl border border-green-800 px-5 py-2 font-semibold text-green-900 transition hover:bg-green-800 hover:text-white"
          >
            ← Inicio
          </Link>

          <Link
            href="/shop"
            className="rounded-xl border border-green-800 px-5 py-2 font-semibold text-green-900 transition hover:bg-green-800 hover:text-white"
          >
            Tienda
          </Link>
        </div>

        <h1 className="mb-8 text-5xl font-bold">Disclaimer</h1>

        <div className="space-y-6 text-lg leading-8 text-[#4b5a4b]">
          <p>
            The information provided on KCGreenWorks is intended for educational
            and informational purposes only.
          </p>

          <p>
            The content published on this website may include topics related to
            gardening, home food production, hydroponics, aquaponics,
            vermiculture, composting, fertilizers, hydroponic nutrients, soil
            management, pest control, agricultural equipment, and other related
            subjects.
          </p>

          <p>
            Results may vary depending on climate, growing conditions, water
            quality, nutrient management, soil characteristics, equipment, local
            regulations, individual experience, and many other factors beyond our
            control.
          </p>

          <p>
            KC MARK SOLUTIONS LLC does not guarantee specific results and assumes
            no responsibility or liability for losses, damages, injuries, crop
            failures, fish losses, equipment failures, property damage, financial
            losses, or any other consequences resulting from the use of
            information, products, recommendations, techniques, or resources
            presented on this website.
          </p>

          <p>
            Any recommendations regarding products, fertilizers, nutrients,
            hydroponic solutions, aquaponic systems, gardening practices,
            agricultural methods, composting, vermiculture, or food production
            systems should be independently evaluated before implementation.
          </p>

          <p>
            Users are solely responsible for verifying information and complying
            with all applicable laws, regulations, safety procedures,
            environmental requirements, and manufacturer instructions.
          </p>

          <p>
            The content on this website should not be considered professional
            agricultural, engineering, legal, financial, environmental, medical,
            veterinary, nutritional, or business advice.
          </p>

          <p>
            By using this website, you acknowledge and agree that all actions
            taken based on the information provided are entirely at your own risk.
          </p>

          <p>
            KC MARK SOLUTIONS LLC reserves the right to modify, update, or remove
            content at any time without notice.
          </p>

          <p>
            All articles, guides, ebooks, graphics, photographs, illustrations,
            educational materials, and other content published on KCGreenWorks are
            protected under United States copyright law.
          </p>

          <p>
            Reproduction, redistribution, republication, resale, commercial use,
            or modification of any content without prior written permission from
            KC MARK SOLUTIONS LLC is strictly prohibited.
          </p>
        </div>
      </section>
    </main>
  );
}