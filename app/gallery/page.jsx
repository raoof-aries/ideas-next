import { getSeoData } from "@/data/seoData";
import GalleryClient from "./GalleryClient";

export function generateMetadata() {
  return getSeoData("/gallery");
}

export default function GalleryPage() {
  return <GalleryClient />;
}
