"use client";

import { useEffect } from "react";
import Link from "next/link";
import "../serviceInnerCommon.css";

const TidalSurveyClient = () => {
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
            <span className="highlight">Tidal Survey</span>
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
                  src="/images/services/tidal1.webp"
                  alt="Tidal Survey - Offshore Platform"
                  className="gallery-image"
                />
                <div className="gallery-overlay">
                  <div className="gallery-overlay-content">
                    <h3>Offshore Platform Monitoring</h3>
                    <p>Precise tidal measurements for platform elevation verification</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="gallery-item">
              <div className="gallery-image-container">
                <img
                  src="/images/services/tidal2.webp"
                  alt="Tidal Survey - Port Development"
                  className="gallery-image"
                />
                <div className="gallery-overlay">
                  <div className="gallery-overlay-content">
                    <h3>Port Development Support</h3>
                    <p>Real-time tidal data for marine construction and dredging</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="service-overview-content">
          <p>
            Our Tidal Survey services provide accurate and reliable water level
            measurements essential for elevation referencing, marine
            construction, and offshore asset planning. Designed for use in
            coastal, port, and offshore environments, we deploy advanced
            technologies to capture real-time and long-term tidal behaviour with
            high precision.
          </p>

          <div className="tidal-capabilities">
            <h3>Our Capabilities Include</h3>
            <div className="capabilities-grid">
              <div className="capability-item">
                <h4>Offshore Platform Elevation Determination</h4>
                <p>Relative to chart datums such as LAT, MSL, and HAT</p>
              </div>
              <div className="capability-item">
                <h4>Mean Sea Level (MSL) Calculation</h4>
                <p>For long-term coastal planning and engineering design reference</p>
              </div>
              <div className="capability-item">
                <h4>Lowest Astronomical Tide (LAT) Determination</h4>
                <p>For safe clearance, dredging, and vessel navigation</p>
              </div>
              <div className="capability-item">
                <h4>Real-time Tidal Monitoring</h4>
                <p>Using radar level sensors and pressure transducers with data loggers</p>
              </div>
              <div className="capability-item">
                <h4>Tidal Station Deployment</h4>
                <p>For both short-term project-based studies and long-term observatories</p>
              </div>
              <div className="capability-item">
                <h4>Post-processed Tidal Data Correction</h4>
                <p>For bathymetric surveys and elevation model adjustments</p>
              </div>
            </div>
          </div>

          <div className="tidal-monitoring-details">
            <h3>Advanced Monitoring Technologies</h3>
            <div className="monitoring-grid">
              <div className="monitoring-item">
                <h4>Radar Level Sensors</h4>
                <p>Non-contact, ideal for offshore and high-turbulence conditions</p>
              </div>
              <div className="monitoring-item">
                <h4>Pressure Transducers &amp; Data Loggers</h4>
                <p>High-accuracy subsurface water level sensing</p>
              </div>
            </div>
          </div>

          <div className="tidal-applications">
            <h3>Applications</h3>
            <div className="applications-grid">
              <div className="application-item">
                <h4>Offshore Platform &amp; Structure Height Verification</h4>
              </div>
              <div className="application-item">
                <h4>Port Development &amp; Dredging Operations</h4>
              </div>
              <div className="application-item">
                <h4>Bridge &amp; Causeway Design Support</h4>
              </div>
              <div className="application-item">
                <h4>Bathymetric &amp; Hydrographic Correlation</h4>
              </div>
              <div className="application-item">
                <h4>Coastal Resilience &amp; Sea Level Trend Analysis</h4>
              </div>
            </div>
          </div>

          <div className="tidal-processing">
            <h3>Expert Processing &amp; Analysis</h3>
            <p>
              All collected data is processed by experienced hydrographic
              surveyors and geodetic engineers, ensuring:
            </p>
            <div className="processing-grid">
              <div className="processing-item">
                <h4>Accurate Transformation to Local or Global Datums</h4>
              </div>
              <div className="processing-item">
                <h4>Compatibility with GNSS-based Elevation Models</h4>
              </div>
              <div className="processing-item">
                <h4>Alignment with IHO and IAG Guidelines</h4>
              </div>
            </div>
          </div>

          <div className="service-benefits">
            <p>
              Our Tidal Survey services are critical for offshore elevation
              surveys, marine asset integration, and safe approach design—
              <strong>
                {" "}
                enabling confidence in your structural planning, navigational
                safety, and compliance requirements
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

export default TidalSurveyClient;
