"use client";

import HeroSection from "@/components/homePage/HeroSection/HeroSection";
import AboutSection from "@/components/homePage/AboutSection/AboutSection";
import ServiceSection from "@/components/homePage/ServiceSection/ServiceSection";
import ProjectsSection from "@/components/homePage/ProjectsSection/ProjectsSection";
import CtaSection from "@/components/homePage/CtaSection/CtaSection";

export default function HomeClient() {
  return (
    <div className="home-container">
      <HeroSection />
      <AboutSection />
      <ServiceSection />
      <ProjectsSection />
      <CtaSection />
    </div>
  );
}
