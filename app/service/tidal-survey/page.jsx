import { getSeoData } from "@/data/seoData";
import TidalSurveyClient from "./TidalSurveyClient";

export function generateMetadata() {
  return getSeoData("/service/tidal-survey");
}

export default function TidalSurveyPage() {
  return <TidalSurveyClient />;
}
