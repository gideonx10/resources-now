import { projects } from "@/src/data/projects";
import { processStages } from "@/src/data/process";
import { services } from "@/src/data/services";

const baseUrl = "https://resourcesnow.in";

export default function sitemap() {
  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/ai-solutions",
    "/case-studies",
    "/process",
    "/stack",
    "/contact",
    "/careers",
    "/blog",
  ];

  return [
    ...staticRoutes.map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: route === "" ? 1 : 0.8,
    })),
    ...services.map((service) => ({
      url: `${baseUrl}/services/${service.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    })),
    ...processStages.map((stage) => ({
      url: `${baseUrl}/process/${stage.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.75,
    })),
    ...projects.map((project) => ({
      url: `${baseUrl}/case-studies/${project.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    })),
  ];
}
