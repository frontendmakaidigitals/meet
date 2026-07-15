// app/sitemap.ts
import type { MetadataRoute } from "next";
import { dbAll } from "@/lib/db";

interface BlogRow {
  slugTitle: string;
  updatedAt: string;
}

type ChangeFreq = MetadataRoute.Sitemap[number]["changeFrequency"];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://tradingmeet.com";

  const staticRoutes: MetadataRoute.Sitemap = [
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
  ].map((route) => {
    const changeFrequency: ChangeFreq = route === "" ? "weekly" : "monthly";
    return {
      url: `${baseUrl}${route ? `/${route}` : ""}`,
      lastModified: new Date(),
      changeFrequency,
      priority: route === "" ? 1 : 0.8,
    };
  });

  const blogs = (await dbAll(
    "SELECT slugTitle, updatedAt FROM blogs ORDER BY updatedAt DESC",
  )) as BlogRow[];

  const blogRoutes: MetadataRoute.Sitemap = blogs.map((blog) => ({
    url: `${baseUrl}/blogs/${blog.slugTitle}`,
    lastModified: new Date(blog.updatedAt),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...blogRoutes];
}