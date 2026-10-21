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
  },
  septiembre: {
    nombre: "Septiembre",
    nombreEn: "September",
    slug: "septiembre",
    descripcion: "Septiembre abre la temporada de otoño y permite comenzar una nueva cosecha en Puerto Rico y Florida. Elige variedades adaptadas a tu zona y protege los semilleros de las lluvias fuertes.",
    descripcionEn: "September opens the fall growing season in Puerto Rico and Florida. Choose varieties suited to your area and protect young seedlings from heavy rain.",
    imagen: "/images/meses/septiembre.png",
    hojasHierbas: ["Lechuga", "Col rizada", "Acelga", "Cilantro"],
    hojasHierbasEn: ["Lettuce", "Kale", "Swiss chard", "Cilantro"],
    vegetales: ["Tomate", "Pimiento", "Berenjena", "Pepino", "Habichuelas (Ejotes)"],
    vegetalesEn: ["Tomato", "Pepper", "Eggplant", "Cucumber", "Green beans"],
    raicesOtros: ["Zanahoria", "Rábano", "Cebollín"],
    raicesOtrosEn: ["Carrot", "Radish", "Scallions"],
    tips: [
      "Siembra por etapas para extender la cosecha y no tener todo listo al mismo tiempo.",
      "Mejora el drenaje del suelo antes de los periodos de lluvia intensa.",
      "Protege los semilleros de los aguaceros y del sol fuerte del mediodía.",
      "Revisa las recomendaciones de tu zona: el calendario cambia entre el norte, centro y sur de Florida."
    ],
    tipsEn: [
      "Plant in stages to extend the harvest instead of having everything mature at once.",
      "Improve soil drainage before periods of heavy rain.",
      "Protect seed trays from downpours and strong midday sun.",
      "Check guidance for your area because planting dates vary across North, Central and South Florida."
    ]
  },
  octubre: {
    nombre: "Octubre",
    nombreEn: "October",
    slug: "octubre",
    descripcion: "Octubre es el corazón de la temporada de otoño en Puerto Rico y Florida. Con temperaturas más frescas y menos lluvia, es el mejor momento para sembrar hojas verdes, trasplantar tomates de otoño y sembrar raíces directo en el suelo.",
    descripcionEn: "October is the heart of the fall growing season in Puerto Rico and Florida. With cooler temperatures and less rain, it's the best time to plant leafy greens, transplant fall tomatoes, and direct-sow root crops.",
    imagen: "/images/meses/octubre.png",
    hojasHierbas: ["Lechuga", "Espinaca", "Acelga", "Col rizada", "Rúcula", "Cilantro", "Perejil", "Cebollín", "Mostaza", "Berro"],
    hojasHierbasEn: ["Lettuce", "Spinach", "Swiss Chard", "Kale", "Arugula", "Cilantro", "Parsley", "Chives", "Mustard Greens", "Watercress"],
    vegetales: ["Tomate", "Pimiento", "Berenjena", "Habichuelas (Ejotes)", "Pepino"],
    vegetalesEn: ["Tomato", "Pepper", "Eggplant", "Green Beans", "Cucumber"],
    raicesOtros: ["Zanahoria", "Rábano", "Remolacha", "Nabo", "Cebolla", "Ajo"],
    raicesOtrosEn: ["Carrot", "Radish", "Beets", "Turnip", "Onion", "Garlic"],
    tips: [
      "Aprovecha el clima más fresco: es el mejor momento para trasplantar.",
      "Siembra zanahoria y rábano directo en suelo suelto y bien drenado.",
      "Reduce el riego: con menos calor y menos lluvia el suelo retiene más humedad.",
      "Vigila orugas y gusanos cogolleros, que aparecen mucho en otoño.",
      "Usa mulch para conservar la humedad y mantener estable la temperatura del suelo."
    ],
    tipsEn: [
      "Take advantage of cooler weather: it's the best time for transplants.",
      "Direct-sow carrots and radishes in loose, well-drained soil.",
      "Water less: with lower heat and less rain, soil holds moisture longer.",
      "Watch for caterpillars and armyworms, common in the fall.",
      "Use mulch to conserve moisture and keep soil temperature stable."
    ]
  },
  noviembre: {
    nombre: "Noviembre",
    nombreEn: "November",
    slug: "noviembre",
    descripcion: "Noviembre cierra la temporada de otoño en Puerto Rico y Florida. Las noches más frescas favorecen las crucíferas y las hojas verdes, es el momento de sembrar las raíces de invierno y en Florida conviene empezar a vigilar las primeras noches frías.",
    descripcionEn: "November closes the fall season in Puerto Rico and Florida. Cooler nights favor brassicas and leafy greens, it's time to sow winter root crops, and in Florida you should start watching for the first cold nights.",
    imagen: "/images/meses/noviembre.png",
    hojasHierbas: ["Lechuga", "Espinaca", "Acelga", "Col rizada", "Col berza", "Rúcula", "Cilantro", "Perejil", "Cebollín", "Mostaza"],
    hojasHierbasEn: ["Lettuce", "Spinach", "Swiss Chard", "Kale", "Collard Greens", "Arugula", "Cilantro", "Parsley", "Chives", "Mustard Greens"],
    vegetales: ["Brócoli", "Coliflor", "Repollo", "Tomate", "Pimiento", "Habichuelas (Ejotes)", "Pepino", "Calabaza"],
    vegetalesEn: ["Broccoli", "Cauliflower", "Cabbage", "Tomato", "Pepper", "Green Beans", "Cucumber", "Pumpkin/Squash"],
    raicesOtros: ["Zanahoria", "Rábano", "Remolacha", "Nabo", "Cebolla", "Ajo", "Papa"],
    raicesOtrosEn: ["Carrot", "Radish", "Beets", "Turnip", "Onion", "Garlic", "Potato"],
    tips: [
      "Es el mes de las crucíferas: trasplanta brócoli, coliflor y repollo aprovechando el clima fresco.",
      "Siembra zanahoria, rábano y remolacha directo en el suelo: germinan mejor con las noches frescas.",
      "En Florida, ten cubiertas o mantas de huerto a mano por si llega una noche fría de golpe.",
      "Reduce el riego: con noches frescas el suelo conserva la humedad por más tiempo.",
      "Vigila las orugas en brócoli y repollo: siguen activas en noviembre y se controlan con red o Bt orgánico."
    ],
    tipsEn: [
      "It's brassica month: transplant broccoli, cauliflower and cabbage while the weather is cool.",
      "Direct-sow carrots, radishes and beets: they germinate better with cool nights.",
      "In Florida, keep row covers or frost blankets handy in case a cold night arrives suddenly.",
      "Water less: cool nights help the soil hold moisture longer.",
      "Watch for caterpillars on broccoli and cabbage: they stay active in November and can be controlled with netting or organic Bt."
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
