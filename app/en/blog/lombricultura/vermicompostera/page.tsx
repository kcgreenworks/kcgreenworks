import EnglishArticle from "@/components/EnglishArticle";

export const metadata = {
  title: 'How to build and manage a homemade worm bin',
  description: 'Complete English guide to a homemade worm bin.',
};

export default function WormBinPage() {
  return (
    <EnglishArticle
      backHref='/en/blog/lombricultura'
      backLabel='Back to Worm Composting'
      eyebrow='Worm bin setup'
      title='How to build and manage a homemade worm bin'
      intro='A homemade worm bin is one of the cheapest ways to produce worm castings at home. The key is drainage, airflow, bedding, moderate feeding and protection from heat.'
      image='/images/blog/vermicompostera/vermicompostera-caja.png'
      imageAlt='Homemade worm bin'
      sections={[
    {
      title: 'Container',
      body: [
        'Use a plastic tote, wooden box or stacked bin system. It must have ventilation and a way to prevent standing water.',
      ],
    },
    {
      title: 'Bedding setup',
      body: [
        'Fill the bin with moist shredded cardboard, paper, leaves or coir. It should feel like a wrung-out sponge, not dripping wet.',
      ],
    },
    {
      title: 'Adding worms',
      body: [
        'Add composting worms and give them time to settle before heavy feeding. Keep the bin shaded and protected from extreme temperatures.',
      ],
    },
    {
      title: 'Maintenance',
      body: [
        'Check smell, moisture and food levels weekly. A healthy bin smells earthy. A sour or rotten smell means too much food, poor airflow or excess water.',
      ],
    },
  ]}
      recommendation='Use a simple bin first. Fancy designs do not compensate for bad moisture control or overfeeding.'
    />
  );
}
