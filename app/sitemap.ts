import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.kcgreenworks.com";

  // Agrega aquí cualquier ruta nueva que publiques
  const routes = ["", "/blog", "/blog/lombricultura", "/siembra", "/shop"];

  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.7,
  }));
}
