"use client";

import { useEffect } from "react";
import Link from "next/link";
import "../serviceInnerCommon.css";

const NonIntelligentClient = () => {
  useEffect(() => {
    const handleMouseEnter = (e) => {
      e.currentTarget.style.boxShadow = "0 12px 35px rgba(0, 0, 0, 0.08)";
    };
    const handleMouseLeave = (e) => {
      e.currentTarget.style.boxShadow = "none";
    };
    const serviceCards = document.querySelectorAll(".service-card");
    serviceCards.forEach((card) => {
      card.addEventListener("mouseenter", handleMouseEnter);
      card.addEventListener("mouseleave", handleMouseLeave);
    });
    return () => {
      serviceCards.forEach((card) => {
        card.removeEventListener("mouseenter", handleMouseEnter);
        card.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      <section className="service-hero">
        <div className="service-hero-background"></div>
        <div className="service-hero-content">
          <h1>
            <span className="highlight">Non-Intelligent 3D Modelling</span>
          </h1>
        </div>
      </section>

      <section className="service-overview">
        {" "}
        <section className="service-gallery">
          <div className="gallery-grid">
            <div className="gallery-item">
              <div className="gallery-image-container">
                <img
                  src="/images/services/3dnon2.webp"
                  alt="3D Modelling - Marine Structure"
                  className="gallery-image"
                />
                <div className="gallery-overlay">
                  <div className="gallery-overlay-content">
                    <h3>Marine Structure Modelling</h3>
                    <p>
                      Detailed modeling of vessels and superstructures for
                      maritime applications
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="gallery-item">
              <div className="gallery-image-container">
                <img
                  src="/images/services/3dnon1.webp"
                  alt="3D Modelling - Industrial Facility"
                  className="gallery-image"
                />
                <div className="gallery-overlay">
                  <div className="gallery-overlay-content">
                    <h3>Industrial Facility Modelling</h3>
                    <p>
                      Precise 3D geometry capture for offshore platforms and
                      onshore facilities
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="service-overview-content">
          <p>
            Our Non-Intelligent 3D Modelling delivers precise as-built geometry
            without embedded metadata. This is suitable for applications where
            visual accuracy and spatial coordination are needed without complex
            data structures.
          </p>

          <div className="service-features">
            <div className="feature-item">
              <h3>Offshore platforms and onshore facilities</h3>
              <p>Comprehensive 3D geometry capture for industrial environments</p>
            </div>
            <div className="feature-item">
              <h3>Marine vessels and superstructures</h3>
              <p>Detailed modeling of complex maritime structures</p>
            </div>
            <div className="feature-item">
              <h3>Structural, mechanical, and piping layouts</h3>
              <p>Accurate representation of engineering systems</p>
            </div>
          </div>

          <div className="total-station-services">
            <h3>Key Features</h3>
            <p>
              Our 3D modelling solutions provide lightweight, exportable
              geometry optimized for various engineering applications and rapid
              project delivery.
            </p>
            <div className="services-grid">
              <div className="service-item">
                <h4>Lightweight 3D geometry</h4>
              </div>
              <div className="service-item">
                <h4>Exportable to AutoCAD, Navisworks, SketchUp, etc.</h4>
              </div>
              <div className="service-item">
                <h4>Rapid turnaround for planning and documentation</h4>
              </div>
              <div className="service-item">
                <h4>Retrofits, clash detection, and general reference</h4>
              </div>
            </div>
          </div>

          <div className="service-benefits">
            <p>
              Our Non-Intelligent 3D Modelling services provide
              <strong>
                {" "}
                cost-effective solutions for visual documentation, spatial
                coordination, and rapid project planning
              </strong>
              , delivering clean geometry optimized for your specific workflow
              requirements.
            </p>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <h2 className="cta-title">Ready to Start Your Project?</h2>
        <p className="cta-description">
          Contact our experts today for a comprehensive consultation and custom
          solution tailored to your needs.
        </p>
        <Link href="/contact" className="cta-button">
          Get in Touch
        </Link>
      </section>
    </>
  );
};

export default NonIntelligentClient;
