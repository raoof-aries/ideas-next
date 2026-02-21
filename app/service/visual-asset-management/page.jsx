import { getSeoData } from "@/data/seoData";
import VisualAssetClient from "./VisualAssetClient";

export function generateMetadata() {
  return getSeoData("/service/visual-asset-management");
}

export default function VisualAssetManagementPage() {
  return <VisualAssetClient />;
}
