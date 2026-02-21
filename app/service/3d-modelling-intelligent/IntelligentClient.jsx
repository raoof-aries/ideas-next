"use client";

import { useEffect } from "react";
import Link from "next/link";
import "../serviceInnerCommon.css";

const IntelligentClient = () => {
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
            <span className="highlight">Intelligent 3D Modelling</span>
          </h1>
          <p>BIM/Plant Design-Ready Solutions</p>
        </div>
      </section>

      <section className="service-overview">
        <section className="service-gallery">
          <div className="gallery-grid">
            <div className="gallery-item">
              <div className="gallery-image-container">
                <img
                  src="/images/services/3din2.webp"
                  alt="3D Modelling - Plant Design"
                  className="gallery-image"
                />
                <div className="gallery-overlay">
                  <div className="gallery-overlay-content">
                    <h3>Plant Design Modelling</h3>
                    <p>Advanced 3D models for process plants and industrial facilities</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="gallery-item">
              <div className="gallery-image-container">
                <img
                  src="/images/services/3din3.webp"
                  alt="3D Modelling - BIM Architecture"
                  className="gallery-image"
                />
                <div className="gallery-overlay">
                  <div className="gallery-overlay-content">
                    <h3>BIM Architecture</h3>
                    <p>Intelligent building models with embedded specifications</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="service-overview-content">
          <p>
            Our Intelligent Modelling service offers data-driven 3D models
            embedded with specifications, tags, and metadata for use in
            engineering design, plant operations, and digital twin platforms.
          </p>

          <div className="service-features">
            <div className="feature-item">
              <h3>Revit</h3>
              <p>Architectural, structural, and MEP</p>
            </div>
            <div className="feature-item">
              <h3>Plant 3D</h3>
              <p>Process plant design and layout</p>
            </div>
            <div className="feature-item">
              <h3>SP3D (SmartPlant 3D)</h3>
              <p>Intelligent design for complex industrial facilities</p>
            </div>
            <div className="feature-item">
              <h3>E3D (AVEVA Everything 3D)</h3>
              <p>Advanced plant design with full metadata integration</p>
            </div>
          </div>

          <div className="total-station-services">
            <h3>Applications</h3>
            <p>
              We deliver intelligent 3D models across diverse industrial
              sectors, providing the foundation for digital transformation and
              smart asset management.
            </p>
            <div className="services-grid">
              <div className="service-item">
                <h4>Oil &amp; gas process facilities</h4>
              </div>
              <div className="service-item">
                <h4>Petrochemical plants and refineries</h4>
              </div>
              <div className="service-item">
                <h4>Marine and offshore assets</h4>
              </div>
              <div className="service-item">
                <h4>Infrastructure and utility networks</h4>
              </div>
            </div>
          </div>

          <div className="gnss-technical-specs">
            <h3>Key Features</h3>
            <p>
              <strong>Object-level intelligence with specifications</strong> •
              Fully compatible with digital asset management systems • Ideal for
              detailed design, procurement, and lifecycle maintenance • Supports
              Digital Twin and Industry 4.0 initiatives
            </p>
          </div>

          <div className="service-benefits">
            <p>
              Whether for engineering design, documentation, or digital
              transformation, our 3D modelling services provide
              <strong>
                {" "}
                the accuracy and intelligence required to support smart project
                execution and asset management
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

export default IntelligentClient;
