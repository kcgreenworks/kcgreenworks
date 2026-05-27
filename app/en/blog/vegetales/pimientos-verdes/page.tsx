import EnglishArticle from "@/components/EnglishArticle";

export const metadata = {
  title: 'Green peppers: home growing guide',
  description: 'Complete English guide for growing green peppers at home.',
};

export default function GreenPeppersPage() {
  return (
    <EnglishArticle
      backHref='/en/blog/vegetales'
      backLabel='Back to Vegetables'
      eyebrow='Home growing guide'
      title='Green peppers: how to grow them at home'
      intro='Green peppers are productive, useful in the kitchen and well suited for containers, raised beds and small gardens. They need warmth, steady moisture and patience during the early stages.'
      image='/images/blog/pimientos-verdes/pimiento-verde-planta.png'
      imageAlt='Green pepper plant'
      sections={[
    {
      title: 'Climate and light',
      body: [
        'Peppers are warm-season plants. They grow slowly when temperatures are low and perform best with strong light and warm roots.',
      ],
      bullets: [
        'Full sun',
        'Warm soil',
        'Protection from cold wind',
        'Good drainage',
      ],
    },
    {
      title: 'Soil and containers',
      body: [
        'Use loose soil with organic matter. Containers should drain well and be large enough for roots to expand. A cramped plant produces less.',
      ],
    },
    {
      title: 'Flowering and fruiting',
      body: [
        'Pepper flowers become fruit when the plant is healthy and not under extreme stress. Heat, drought or poor nutrition can cause blossom drop.',
      ],
    },
    {
      title: 'Harvesting',
      body: [
        'Green peppers are harvested before they fully ripen. You can leave some fruit longer to change color, but that slows new production.',
      ],
    },
  ]}
      recommendation='Do not overwater peppers. Keep the soil evenly moist, not soggy, and protect young plants from cold nights.'
    />
  );
}
