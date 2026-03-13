import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.appcatholique.com";

  const routes = [
    "",
    "/vie-de-saint",
    "/livre-catholique",
    "/verite-catho",
    "/jeux",
    "/l-apostat",
    "/juste-un",
    "/trivia-biblique",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }));
}