import { getSeoData } from "@/data/seoData";
import ServicesClient from "./ServicesClient";

export function generateMetadata() {
  return getSeoData("/services");
}

export default function ServicesPage() {
  return <ServicesClient />;
}
