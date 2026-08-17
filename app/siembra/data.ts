export interface MesData {
  nombre: string;
  nombreEn: string;
  slug: string;
  descripcion: string;
  descripcionEn: string;
  imagen?: string;
  imagenEn?: string;
  hojasHierbas: string[];
  hojasHierbasEn: string[];
  vegetales: string[];
  vegetalesEn: string[];
  raicesOtros: string[];
  raicesOtrosEn: string[];
  tips: string[];
  tipsEn: string[];
}

export const infoMeses: Record<string, MesData> = {
  julio: {
    nombre: "Julio",
    nombreEn: "July",
    slug: "julio",
    descripcion: "Julio es un mes perfecto para cultivar en Puerto Rico y Florida. El calor y las lluvias frecuentes crean las condiciones ideales para cosechas abundantes y sabrosas.",
    descripcionEn: "July is a perfect month to grow in Puerto Rico and Florida. The intense heat and frequent rains create the ideal conditions for abundant and flavorful harvests.",
    imagen: "/images/meses/julio.png",
    imagenEn: "/images/meses/july.png", 
    hojasHierbas: ["Albahaca", "Cilantro", "Perejil", "Espinaca", "Lechuga", "Acelga", "Repollo", "Rúcula", "Berro", "Cebollín"],
    hojasHierbasEn: ["Basil", "Cilantro", "Parsley", "Spinach", "Lettuce", "Swiss Chard", "Cabbage", "Arugula", "Watercress", "Chives"],
    vegetales: ["Tomate", "Pimientos", "Pepino", "Okra", "Habichuelas (Ejotes)", "Berenjena", "Calabaza", "Zanahoria", "Remolacha"],
    vegetalesEn: ["Tomato", "Peppers", "Cucumber", "Okra", "Green Beans", "Eggplant", "Pumpkin/Squash", "Carrot", "Beets"],
    raicesOtros: ["Batata", "Yuca", "Ñame", "Plátano", "Malanga", "Jengibre", "Cúrcuma", "Ajíes (Picantes)", "Maíz (Dulce)"],
    raicesOtrosEn: ["Sweet Potato", "Cassava (Yuca)", "Yam", "Plantain", "Taro (Malanga)", "Ginger", "Turmeric", "Hot Peppers", "Sweet Corn"],
    tips: [
      "Riega temprano en la mañana o al atardecer.",
      "Usa mulch para conservar la humedad del suelo.",
      "Fertiliza siempre de forma orgánica.",
      "Protege tus plantas del viento fuerte por la temporada de vientos y ondas tropicales."
    ],
    tipsEn: [
      "Water early in the morning or at dusk.",
      "Use mulch to conserve soil moisture.",
      "Always fertilize organically.",
      "Protect your plants from strong winds due to the tropical wave season."
    ]
  },
  agosto: {
    nombre: "Agosto",
    nombreEn: "August",
    slug: "agosto",
    descripcion: "Agosto es un mes ideal para preparar tu huerto y sembrar cultivos que prosperan durante esta temporada en Puerto Rico y Florida.",
    descripcionEn: "August is an ideal month to prepare your garden and plant crops that thrive during this season in Puerto Rico and Florida.",
    imagen: "/images/meses/agosto.png",
    hojasHierbas: ["Lechuga", "Espinaca", "Acelga", "Cilantro", "Cebollín", "Albahaca"],
    hojasHierbasEn: ["Lettuce", "Spinach", "Swiss chard", "Cilantro", "Scallions", "Basil"],
    vegetales: ["Pepinillo", "Berenjena", "Pimiento"],
    vegetalesEn: ["Cucumber", "Eggplant", "Pepper"],
    raicesOtros: ["Rábano", "Zanahoria"],
    raicesOtrosEn: ["Radish", "Carrot"],
    tips: [
      "Mantén el suelo fértil con composta o materia orgánica.",
      "Riega adecuadamente y comprueba la humedad antes de añadir más agua.",
      "Siembra en un lugar con buen drenaje durante los periodos de lluvia.",
      "Observa tus plantas con frecuencia y disfruta el proceso de cultivar tus propios alimentos."
    ],
    tipsEn: [
      "Keep the soil fertile with compost or organic matter.",
      "Water appropriately and check the soil moisture before adding more water.",
      "Plant in a location with good drainage during periods of rain.",
      "Observe your plants frequently and enjoy growing your own food."
    ]
  }
};

const monthSlugs = [
  "enero", "febrero", "marzo", "abril", "mayo", "junio",
  "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"
];

export function getCurrentOrLatestMonthSlug(date = new Date()) {
  const currentMonth = monthSlugs[date.getMonth()];

  if (infoMeses[currentMonth]) return currentMonth;

  const availableMonths = monthSlugs.filter((month) => infoMeses[month]);
  return availableMonths.at(-1) ?? "julio";
}
