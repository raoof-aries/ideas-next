import { getSeoData } from "@/data/seoData";
import LaserScanningClient from "./LaserScanningClient";

export function generateMetadata() {
  return getSeoData("/service/3d-laser-scanning");
}

export default function LaserScanningPage() {
  return <LaserScanningClient />;
}
