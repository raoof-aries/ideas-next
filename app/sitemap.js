export default function sitemap() {
  const BASE_URL = "https://www.ideas.ariesmar.com";

  const routes = [
    "",
    "/services",
    "/projects",
    "/gallery",
    "/contact",
    "/service/3d-laser-scanning",
    "/service/gnss-survey",
    "/service/total-station-survey",
    "/service/tidal-survey",
    "/service/3d-hand-scanning",
    "/service/3d-modelling-intelligent",
    "/service/3d-modelling-non-intelligent",
    "/service/visual-asset-management",
    "/privacy-policy",
    "/terms-and-conditions",
  ];

  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/services" || route === "/contact" ? 0.9 : route.startsWith("/service/") ? 0.8 : 0.7,
  }));
}
