import { getSeoData } from "@/data/seoData";
import ProjectsClient from "./ProjectsClient";

export function generateMetadata() {
  return getSeoData("/projects");
}

export default function ProjectsPage() {
  return <ProjectsClient />;
}
