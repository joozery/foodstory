import type { MetadataRoute } from "next";
import { solutions } from "@/lib/data/solutions";
import { featuresNav } from "@/lib/data/navigation";

const BASE_URL = "https://pos.wongnai.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    { url: BASE_URL, priority: 1.0, changeFrequency: "weekly" as const },
    { url: `${BASE_URL}/solutions`, priority: 0.9, changeFrequency: "weekly" as const },
    { url: `${BASE_URL}/features`, priority: 0.9, changeFrequency: "weekly" as const },
    { url: `${BASE_URL}/pricing`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/payments`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/hardware`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/why-wongnai-pos`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/customer-stories`, priority: 0.8, changeFrequency: "weekly" as const },
    { url: `${BASE_URL}/articles`, priority: 0.7, changeFrequency: "daily" as const },
    { url: `${BASE_URL}/help`, priority: 0.7, changeFrequency: "weekly" as const },
    { url: `${BASE_URL}/contact`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/get-quote`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/about`, priority: 0.6, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/legal/privacy`, priority: 0.3, changeFrequency: "yearly" as const },
    { url: `${BASE_URL}/legal/terms`, priority: 0.3, changeFrequency: "yearly" as const },
  ];

  const solutionPages = solutions.map((s) => ({
    url: `${BASE_URL}/solutions/${s.slug}`,
    priority: 0.85,
    changeFrequency: "monthly" as const,
  }));

  const featurePages = featuresNav.flatMap((g) =>
    g.items.map((f) => ({
      url: `${BASE_URL}/features/${f.slug}`,
      priority: 0.8,
      changeFrequency: "monthly" as const,
    }))
  );

  const now = new Date();

  return [...staticPages, ...solutionPages, ...featurePages].map((page) => ({
    url: page.url,
    lastModified: now,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
