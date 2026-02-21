import { getSeoData } from "@/data/seoData";
import IntelligentClient from "./IntelligentClient";

export function generateMetadata() {
  return getSeoData("/service/3d-modelling-intelligent");
}

export default function IntelligentModellingPage() {
  return <IntelligentClient />;
}
