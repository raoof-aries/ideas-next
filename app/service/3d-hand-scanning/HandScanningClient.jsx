"use client";

import { useEffect } from "react";
import Link from "next/link";
import "../serviceInnerCommon.css";

const HandScanningClient = () => {
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
            <span className="highlight">3D Hand Scanning</span>
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
                  src="/images/services/3d1.webp"
                  alt="3D Hand Scanning - Component Analysis"
                  className="gallery-image"
                />
                <div className="gallery-overlay">
                  <div className="gallery-overlay-content">
                    <h3>Component Analysis</h3>
                    <p>
                      High-precision scanning of engineering components for
                      reverse engineering and quality control
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="gallery-item">
              <div className="gallery-image-container">
                <img
                  src="/images/services/3d2.webp"
                  alt="3D Hand Scanning - Complex Geometries"
                  className="gallery-image"
                />
                <div className="gallery-overlay">
                  <div className="gallery-overlay-content">
                    <h3>Complex Geometries</h3>
                    <p>
                      Capturing intricate surface details and freeform shapes
                      with micron-level accuracy
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="service-overview-content">
          <p>
            We provide high-precision 3D hand scanning services for detailed and
            accurate capture of engineering components across industries such as
            oil &amp; gas, automotive, marine, aerospace, and manufacturing. Using
            advanced portable scanners, we generate high-resolution 3D models
            with fine surface details—ideal for small to mid-sized objects where
            accuracy is critical.
          </p>

          <div className="service-features">
            <div className="feature-item">
              <h3>Reverse Engineering</h3>
              <p>Legacy parts or damaged components</p>
            </div>
            <div className="feature-item">
              <h3>3D Printing &amp; Rapid Prototyping</h3>
              <p>Accelerate product development cycles</p>
            </div>
            <div className="feature-item">
              <h3>Dimensional Inspection &amp; Quality Control</h3>
              <p>Ensure component integrity and compliance</p>
            </div>
            <div className="feature-item">
              <h3>Design Validation &amp; Fitment Analysis</h3>
              <p>Verify design specifications and assemblies</p>
            </div>
            <div className="feature-item">
              <h3>Digital Archiving of Critical Components</h3>
              <p>Preserve engineering assets digitally</p>
            </div>
          </div>

          <div className="total-station-services">
            <h3>Key Features &amp; Capabilities</h3>
            <p>
              Our advanced portable scanners deliver exceptional accuracy and
              versatility for comprehensive 3D data capture across diverse
              applications.
            </p>
            <div className="services-grid">
              <div className="service-item">
                <h4>Accuracy up to micron-level tolerance</h4>
              </div>
              <div className="service-item">
                <h4>Compatible with all major CAD formats</h4>
              </div>
              <div className="service-item">
                <h4>Non-contact and non-destructive scanning</h4>
              </div>
              <div className="service-item">
                <h4>Onsite scanning for hard-to-move parts</h4>
              </div>
              <div className="service-item">
                <h4>Ideal for complex geometries and freeform surfaces</h4>
              </div>
            </div>
          </div>

          <div className="service-benefits">
            <p>
              Our 3D hand scanning solutions
              <strong>
                {" "}
                accelerate the engineering design cycle, ensure component
                integrity, and support digital manufacturing workflows with
                unmatched efficiency
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

export default HandScanningClient;
