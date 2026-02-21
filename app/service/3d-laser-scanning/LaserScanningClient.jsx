"use client";

import { useEffect } from "react";
import Link from "next/link";
import "../serviceInnerCommon.css";

const LaserScanningClient = () => {
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
            <span className="highlight">3D Laser Scanning</span>
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
                  src="/images/services/laser1.webp"
                  alt="3D Laser Scanning - Offshore Platform"
                  className="gallery-image"
                />
                <div className="gallery-overlay">
                  <div className="gallery-overlay-content">
                    <h3>Offshore Platform Scanning</h3>
                    <p>High-precision scanning of jack-ups, rigs, and FPSOs</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="gallery-item">
              <div className="gallery-image-container">
                <img
                  src="/images/services/laser4.webp"
                  alt="3D Laser Scanning - Industrial Plant"
                  className="gallery-image"
                />
                <div className="gallery-overlay">
                  <div className="gallery-overlay-content">
                    <h3>Industrial Plant Survey</h3>
                    <p>Detailed scanning of refineries and utility facilities</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="service-overview-content">
          <p>
            Our 3D laser scanning services deliver ultra-precise spatial data by
            capturing millions of data points from physical environments. Using
            advanced LiDAR-based technology, we generate high-resolution point
            clouds and accurate 3D models for a wide range of structures,
            including:
          </p>

          <div className="service-features">
            <div className="feature-item">
              <h3>Offshore platforms</h3>
              <p>(jack-ups, rigs, FPSOs)</p>
            </div>
            <div className="feature-item">
              <h3>Onshore industrial plants</h3>
              <p>(oil &amp; gas, refineries, utilities)</p>
            </div>
            <div className="feature-item">
              <h3>Commercial buildings &amp; infrastructure</h3>
              <p></p>
            </div>
          </div>

          <div className="service-benefits">
            <p>
              This non-contact, fast, and reliable method is ideal for
              <strong>
                {" "}
                as-built documentation, retrofit planning, clash detection, and
                dimensional verification
              </strong>
              , significantly reducing rework and improving engineering accuracy.
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

export default LaserScanningClient;
