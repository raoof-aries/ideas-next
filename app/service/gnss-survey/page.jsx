import { getSeoData } from "@/data/seoData";
import GnssSurveyClient from "./GnssSurveyClient";

export function generateMetadata() {
  return getSeoData("/service/gnss-survey");
}

export default function GnssSurveyPage() {
  return <GnssSurveyClient />;
}
