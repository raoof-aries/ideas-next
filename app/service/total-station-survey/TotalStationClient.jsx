"use client";

import { useEffect } from "react";
import Link from "next/link";
import "../serviceInnerCommon.css";

const TotalStationClient = () => {
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
            <span className="highlight">Total Station Survey</span>
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
                  src="/images/services/TotalStation2.webp"
                  alt="Total Station Survey - Industrial Plant"
                  className="gallery-image"
                />
                <div className="gallery-overlay">
                  <div className="gallery-overlay-content">
                    <h3>Industrial Plant Survey</h3>
                    <p>Comprehensive data capture for refineries and facilities</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="gallery-item">
              <div className="gallery-image-container">
                <img
                  src="/images/services/TotalStation1.webp"
                  alt="Total Station Survey - Offshore Structure"
                  className="gallery-image"
                />
                <div className="gallery-overlay">
                  <div className="gallery-overlay-content">
                    <h3>Offshore Structure Survey</h3>
                    <p>Precise dimensional measurements for rigs, modules, and helidecks</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="service-overview-content">
          <p>
            Our Total Station services deliver high-accuracy dimensional
            measurements essential for engineering, construction, and asset
            verification. Leveraging advanced robotic total stations, we perform
            comprehensive data capture for:
          </p>

          <div className="service-features">
            <div className="feature-item">
              <h3>Offshore structures</h3>
              <p>(rigs, modules, helidecks)</p>
            </div>
            <div className="feature-item">
              <h3>Onshore plants, refineries, industrial facilities, and buildings</h3>
              <p></p>
            </div>
            <div className="feature-item">
              <h3>Fabrication yards and construction sites</h3>
              <p></p>
            </div>
          </div>

          <div className="total-station-services">
            <h3>Complete Dimensional Extraction Services</h3>
            <p>
              We offer complete dimensional extraction of structural elements,
              equipment layouts, pipe alignments, and civil works. Services include:
            </p>
            <div className="services-grid">
              <div className="service-item">
                <h4>Coordinate spreading and establishment of control networks</h4>
              </div>
              <div className="service-item">
                <h4>Level and elevation check for platforms, skid mounts, foundations</h4>
              </div>
              <div className="service-item">
                <h4>Alignment verification for structural and mechanical components</h4>
              </div>
              <div className="service-item">
                <h4>As-built validation against design models or fabrication drawings</h4>
              </div>
            </div>
          </div>

          <div className="service-benefits">
            <p>
              Executed by experienced dimensional control professionals, our
              Total Station surveys help ensure
              <strong>
                {" "}
                design compliance, minimize rework, and support accurate
                prefabrication, installation, and retrofitting
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

export default TotalStationClient;
