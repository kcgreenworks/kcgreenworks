export interface MesData {
  nombre: string;
  nombreEn: string;
  slug: string;
  descripcion: string;
  descripcionEn: string;
  imagen: string;     
  imagenEn: string;   
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
  }
};