import { getSeoData } from "@/data/seoData";
import ContactClient from "./ContactClient";

export function generateMetadata() {
  return getSeoData("/contact");
}

export default function ContactPage() {
  return <ContactClient />;
}
