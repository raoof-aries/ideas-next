import fs from "fs";
import path from "path";

/**
 * Reads SEO metadata from public/seo-data.json (outside the JS bundle).
 * Anyone can edit that JSON file to update titles, descriptions, keywords, etc.
 * without touching any code — just edit the JSON and redeploy.
 *
 * @param {string} routePath - e.g. "/" or "/services" or "/service/gnss-survey"
 * @returns {object} Next.js metadata object
 */
export function getSeoData(routePath) {
  const filePath = path.join(process.cwd(), "public", "seo-data.json");
  const raw = fs.readFileSync(filePath, "utf-8");
  const seoConfig = JSON.parse(raw);

  const defaults = seoConfig.defaults || {};
  const data = seoConfig.routes?.[routePath] || {};

  const baseUrl = defaults.baseUrl || "https://www.ideas.ariesmar.com";
  const ogImage = data.ogImage || defaults.ogImage;

  return {
    title: data.title || defaults.title,
    description: data.description || defaults.description,
    keywords: data.keywords || defaults.keywords,
    alternates: {
      canonical: data.canonical || `${baseUrl}${routePath}`,
    },
    openGraph: {
      title: data.ogTitle || data.title || defaults.title,
      description:
        data.ogDescription || data.description || defaults.description,
      url: data.canonical || `${baseUrl}${routePath}`,
      siteName: defaults.siteName || "Aries Ideas",
      images: [{ url: ogImage, width: 1200, height: 630 }],
      type: data.ogType || defaults.ogType || "website",
    },
    twitter: {
      card: "summary_large_image",
      title: data.ogTitle || data.title || defaults.title,
      description:
        data.ogDescription || data.description || defaults.description,
      images: [ogImage],
    },
  };
}

/**
 * Returns the default metadata for the root layout.
 * Read from the JSON so layout defaults stay in sync with the file.
 */
export function getDefaultMetadata() {
  const filePath = path.join(process.cwd(), "public", "seo-data.json");
  const raw = fs.readFileSync(filePath, "utf-8");
  const seoConfig = JSON.parse(raw);

  const defaults = seoConfig.defaults || {};
  const homeRoute = seoConfig.routes?.["/"] || {};
  const ogImage = defaults.ogImage;

  return {
    title: {
      default: defaults.title,
    },
    description: defaults.description,
    keywords: defaults.keywords,
    metadataBase: new URL(defaults.baseUrl || "https://www.ideas.ariesmar.com"),
    openGraph: {
      title: homeRoute.ogTitle || defaults.title,
      description: homeRoute.ogDescription || defaults.description,
      url: defaults.baseUrl,
      siteName: defaults.siteName || "Aries Ideas",
      images: [{ url: ogImage, width: 1200, height: 630 }],
      type: defaults.ogType || "website",
    },
    twitter: {
      card: "summary_large_image",
      title: homeRoute.ogTitle || defaults.title,
      description: homeRoute.ogDescription || defaults.description,
      images: [ogImage],
    },
  };
}
