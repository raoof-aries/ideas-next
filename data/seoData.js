import fs from "fs";
import path from "path";

function readSeoConfig() {
  const filePath = path.join(process.cwd(), "public", "seo-data.json");
  const raw = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(raw);
}

/**
 * Builds page metadata from public/seo-data.json.
 * Route values override defaults; missing route values fall back to defaults.
 */
export function getSeoData(routePath) {
  const seoConfig = readSeoConfig();
  const defaults = seoConfig.defaults || {};
  const routeData = seoConfig.routes?.[routePath] || {};

  const baseUrl = (defaults.baseUrl || "").replace(/\/$/, "");
  const fallbackCanonical =
    baseUrl && (routePath === "/" ? baseUrl : `${baseUrl}${routePath}`);
  const canonical = routeData.canonical || fallbackCanonical;
  const ogImage = routeData.ogImage || defaults.ogImage;

  return {
    title: routeData.title || defaults.title,
    description: routeData.description || defaults.description,
    keywords: routeData.keywords || defaults.keywords,
    alternates: canonical ? { canonical } : undefined,
    openGraph: {
      title: routeData.ogTitle || routeData.title || defaults.title,
      description:
        routeData.ogDescription ||
        routeData.description ||
        defaults.description,
      url: canonical,
      siteName: defaults.siteName,
      images: ogImage ? [{ url: ogImage, width: 1200, height: 630 }] : undefined,
      type: routeData.ogType || defaults.ogType,
    },
    twitter: {
      card: "summary_large_image",
      title: routeData.ogTitle || routeData.title || defaults.title,
      description:
        routeData.ogDescription ||
        routeData.description ||
        defaults.description,
      images: ogImage ? [ogImage] : undefined,
    },
  };
}

/**
 * Layout-level metadata only.
 * Keep route SEO fields out of layout to avoid duplicate page tags.
 */
export function getLayoutMetadata() {
  const seoConfig = readSeoConfig();
  const defaults = seoConfig.defaults || {};
  return defaults.baseUrl ? { metadataBase: new URL(defaults.baseUrl) } : {};
}
