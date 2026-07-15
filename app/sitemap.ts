// app/sitemap.ts
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://tradingmeet.com";

  const staticRoutes = [
    "",
    "about",
    "apparel",
    "travel-bags",
    "mattress",
    "batteries",
    "electric-vehicle",
    "personal-electronics",
    "home-appliance",
    "sustainability",
    "blogs",
    "careers",
    "contact",
  ];

  return staticRoutes.map((route) => ({
    url: `${baseUrl}${route ? `/${route}` : ""}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}