import { getSeoData } from "@/data/seoData";
import HomeClient from "./HomeClient";

export function generateMetadata() {
  return getSeoData("/");
}

export default function HomePage() {
  return <HomeClient />;
}
