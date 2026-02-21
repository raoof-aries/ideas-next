import { getSeoData } from "@/data/seoData";
import NonIntelligentClient from "./NonIntelligentClient";

export function generateMetadata() {
  return getSeoData("/service/3d-modelling-non-intelligent");
}

export default function NonIntelligentModellingPage() {
  return <NonIntelligentClient />;
}
