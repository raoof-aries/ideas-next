import { getSeoData } from "@/data/seoData";
import HandScanningClient from "./HandScanningClient";

export function generateMetadata() {
  return getSeoData("/service/3d-hand-scanning");
}

export default function HandScanningPage() {
  return <HandScanningClient />;
}
