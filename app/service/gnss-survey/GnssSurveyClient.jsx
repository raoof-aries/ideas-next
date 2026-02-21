"use client";

import { useEffect } from "react";
import Link from "next/link";
import "../serviceInnerCommon.css";

const GnssSurveyClient = () => {
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
            <span className="highlight">GNSS Survey</span>
          </h1>
        </div>
      </section>

      <section className="service-overview">
        <section className="service-gallery">
          <div className="gallery-grid">
            <div className="gallery-item">
              <div className="gallery-image-container">
                <img
                  src="/images/services/gnss1.webp"
                  alt="GNSS Survey - Industrial Site"
                  className="gallery-image"
                />
                <div className="gallery-overlay">
                  <div className="gallery-overlay-content">
                    <h3>Industrial Site Survey</h3>
                    <p>Accurate control point establishment for industrial plants</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="gallery-item">
              <div className="gallery-image-container">
                <img
                  src="/images/services/gnss2.webp"
                  alt="GNSS Survey - Offshore Platform"
                  className="gallery-image"
                />
                <div className="gallery-overlay">
                  <div className="gallery-overlay-content">
                    <h3>Offshore Platform Survey</h3>
                    <p>High-precision GNSS positioning for offshore installations</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="service-overview-content">
          <p>
            We provide comprehensive GNSS survey services for accurate
            georeferencing, positioning, and control point establishment across
            a wide range of environments. Using high-precision GNSS receivers
            and robust field practices, our team ensures accurate spatial data
            collection aligned with project-specific datums.
          </p>

          <div className="service-features">
            <div className="feature-item">
              <h3>Offshore platforms and subsea installations</h3>
              <p>Precise positioning for marine environments</p>
            </div>
            <div className="feature-item">
              <h3>Onshore industrial plants and infrastructure sites</h3>
              <p>Accurate surveying for complex industrial facilities</p>
            </div>
            <div className="feature-item">
              <h3>Construction and civil projects in remote terrains</h3>
              <p>Reliable positioning in challenging environments</p>
            </div>
          </div>

          <div className="gnss-technical-specs">
            <h3>Technical Expertise</h3>
            <p>
              We specialize in performing geodetic calculations, datum shifts,
              and coordinate system transformations—from global standards like
              WGS84 to local or project-specific systems—ensuring seamless
              integration into engineering and GIS workflows.
            </p>
          </div>

          <div className="service-benefits">
            <p>
              All transformations and survey adjustments are carried out by
              qualified geospatial experts, guaranteeing reliable results for
              <strong>
                {" "}
                construction layout, dimensional verification, pipeline routing,
                and marine navigation
              </strong>
              .
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

export default GnssSurveyClient;
