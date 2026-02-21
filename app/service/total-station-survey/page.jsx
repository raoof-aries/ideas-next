import { getSeoData } from "@/data/seoData";
import TotalStationClient from "./TotalStationClient";

export function generateMetadata() {
  return getSeoData("/service/total-station-survey");
}

export default function TotalStationSurveyPage() {
  return <TotalStationClient />;
}
