"use client";

import { useEffect } from "react";
import Link from "next/link";
import "../serviceInnerCommon.css";

const VisualAssetClient = () => {
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
            <span className="highlight">Visual Asset Management</span>
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
                  src="/images/services/visualAssetManagement3.webp"
                  alt="Visual Asset Management - Interactive 3D Environment"
                  className="gallery-image"
                />
                <div className="gallery-overlay">
                  <div className="gallery-overlay-content">
                    <h3>Interactive 3D Environment</h3>
                    <p>
                      Virtual facility representation with hotspot navigation
                      and real-time asset data
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="gallery-item">
              <div className="gallery-image-container">
                <img
                  src="/images/services/visualAssetManagement4.webp"
                  alt="Visual Asset Management - Digital Asset Documentation"
                  className="gallery-image"
                />
                <div className="gallery-overlay">
                  <div className="gallery-overlay-content">
                    <h3>Digital Asset Documentation</h3>
                    <p>
                      Centralized asset database with integrated documentation
                      and inspection workflows
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="service-overview-content">
          <p>
            Our Visual Asset Management solution transforms traditional asset
            documentation into a centralized, interactive, and visual digital
            environment. Using 3D scans, panoramic imagery, and intelligent
            models, we create a virtual representation of your facility or
            asset—accessible anytime, anywhere.
          </p>

          <div className="service-benefits">
            <p>
              This system enhances visibility, improves decision-making, and
              supports operations, maintenance, and inspection workflows across
              <strong>
                {" "}
                oil &amp; gas, marine, infrastructure, and industrial sectors
              </strong>
              .
            </p>
          </div>

          <div className="total-station-services">
            <h3>Key Features:</h3>
            <div className="services-grid">
              <div className="service-item">
                <h4>Interactive 3D viewer with hotspot navigation</h4>
              </div>
              <div className="service-item">
                <h4>
                  Tagged equipment and asset data linked to documents and drawings
                </h4>
              </div>
              <div className="service-item">
                <h4>Searchable asset database with live visuals</h4>
              </div>
              <div className="service-item">
                <h4>
                  Integration with BIM models, P&amp;IDs, isometrics, and inspection reports
                </h4>
              </div>
              <div className="service-item">
                <h4>Web-based access for remote teams and stakeholders</h4>
              </div>
              <div className="service-item">
                <h4>
                  Optional support for offline viewing in secure environments
                </h4>
              </div>
            </div>
          </div>

          <div className="tidal-capabilities">
            <h3>Benefits:</h3>
            <div className="capabilities-grid">
              <div className="capability-item">
                <h4>Centralized digital access to all asset-related information</h4>
              </div>
              <div className="capability-item">
                <h4>Reduced site visits and faster troubleshooting</h4>
              </div>
              <div className="capability-item">
                <h4>Enhanced maintenance planning and execution</h4>
              </div>
              <div className="capability-item">
                <h4>Supports safety reviews and operational audits</h4>
              </div>
              <div className="capability-item">
                <h4>Scalable from single assets to full facility digital twins</h4>
              </div>
            </div>
          </div>

          <div className="service-benefits">
            <p>
              By linking
              <strong> visual intelligence with asset data</strong>, our Visual
              Asset Management system supports smarter operations, reduces
              downtime, and accelerates decision-making in complex environments.
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

export default VisualAssetClient;
