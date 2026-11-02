import type { MetadataRoute } from "next";
import { infoMeses } from "./siembra/data";

const BASE_URL = "https://kcgreenworks.com";

// Rutas públicas con versiones en español e inglés.
// Añade aquí cada artículo nuevo cuando publiques ambas versiones.
const sharedRoutes = [
  "",
  "/start-here",
  "/blog",
  "/blog/acuaponia",
  "/blog/acuaponia/como-construir-acuaponico",
  "/blog/acuaponia/guia-basica",
  "/blog/acuaponia/hierbas-aromaticas",
  "/blog/lombricultura",
  "/blog/lombricultura/como-lombrices-mejoran-suelo",
  "/blog/lombricultura/lixiviado-lombriz",
  "/blog/lombricultura/vermicompostera",
  "/blog/lombricultura/guia-basica",
  "/blog/lombricultura/que-pueden-consumir-las-lombrices",
  "/blog/vegetales",
  "/blog/vegetales/tomate-black-cherry",
  "/blog/vegetales/zucchini-guia-completa",
  "/blog/vegetales/pimientos-verdes",
  "/blog/vegetales/hierba-buena-menta",
  "/blog/vegetales/sembrar-lechuga-todo-el-ano",
  "/shop",
  "/shop/books",
  "/shop/products",
];

export default function sitemap(): MetadataRoute.Sitemap {
  // Solo incluye meses existentes. Se actualizan al añadirlos a data.ts.
  const monthRoutes = Object.values(infoMeses).map(
    (month) => `/siembra/${month.slug}`,
  );
  const routes = [...new Set([...sharedRoutes, ...monthRoutes])];

  // /siembra redirige al mes actual; usamos sus destinos finales.
  // Se omiten confirmaciones, API, copias /app/... y avisos legales.
  // Omitimos lastModified hasta disponer de fechas reales por página.
  const bilingualPages = routes.flatMap((route): MetadataRoute.Sitemap => {
    const spanishUrl = `${BASE_URL}${route || "/"}`;
    const englishUrl = `${BASE_URL}/en${route}`;
    const languages = { es: spanishUrl, en: englishUrl };

    return [
      { url: spanishUrl, alternates: { languages } },
      { url: englishUrl, alternates: { languages } },
    ];
  });

  // La ruta inglesa contiene un mensaje de bienvenida, no un planificador.
  return [
    ...bilingualPages,
    { url: `${BASE_URL}/garden-planner` },
  ];
}

