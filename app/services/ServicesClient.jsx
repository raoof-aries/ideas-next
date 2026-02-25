"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import "./Services.css";

const ServicesClient = () => {
  useEffect(() => {
    const handleMouseEnter = (e) => {
      e.currentTarget.style.boxShadow = "0 15px 40px rgba(0, 0, 0, 0.1)";
    };
    const handleMouseLeave = (e) => {
      e.currentTarget.style.boxShadow = "0 5px 20px rgba(0, 0, 0, 0.05)";
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

  const services = [
    {
      number: "01",
      title: "3D Laser Scanning",
      description:
        "Ultra-precise spatial data capture using advanced LiDAR technology for offshore platforms, industrial plants, and commercial buildings with accurate as-built documentation.",
      image: "/images/services/laser1.webp",
      url: "/service/3d-laser-scanning",
      internal: true,
    },
    {
      number: "02",
      title: "GNSS Survey",
      description:
        "Comprehensive GNSS survey services for accurate georeferencing, positioning, and control point establishment across offshore and onshore environments.",
      image: "/images/services/gnss1.webp",
      url: "/service/gnss-survey",
      internal: true,
    },
    {
      number: "03",
      title: "Total Station Survey",
      description:
        "High-accuracy dimensional measurements using advanced robotic total stations for offshore structures, industrial facilities, and construction sites.",
      image: "/images/services/TotalStation1.webp",
      url: "/service/total-station-survey",
      internal: true,
    },
    {
      number: "04",
      title: "Tidal Survey",
      description:
        "Accurate water level measurements for elevation referencing, marine construction, and offshore asset planning using radar sensors and pressure transducers.",
      image: "/images/services/tidal1.webp",
      url: "/service/tidal-survey",
      internal: true,
    },
    {
      number: "05",
      title: "3D Hand Scanning",
      description:
        "High-precision portable scanning for detailed capture of engineering components, ideal for reverse engineering, quality control, and digital archiving.",
      image: "/images/services/3d2.webp",
      url: "/service/3d-hand-scanning",
      internal: true,
    },
    {
      number: "06",
      title: "Intelligent 3D Modelling",
      description:
        "Advanced BIM-ready intelligent 3D models with parametric components, semantic data, and clash detection capabilities for comprehensive asset management.",
      image: "/images/services/3din2.webp",
      url: "/service/3d-modelling-intelligent",
      internal: true,
    },
    {
      number: "07",
      title: "Non-Intelligent 3D Modelling",
      description:
        "High-accuracy geometric 3D models for visualization, measurement, and documentation purposes with precise dimensional representation.",
      image: "/images/services/3dnon1.webp",
      url: "/service/3d-modelling-non-intelligent",
      internal: true,
    },
    {
      number: "08",
      title: "Visual Asset Management",
      description:
        "Interactive digital environment using 3D scans and panoramic imagery for centralized asset documentation and enhanced operational decision-making.",
      image: "/images/services/visualAssetManagement1.jpeg",
      url: "/service/visual-asset-management",
      internal: true,
    },
    {
      number: "09",
      title: "Additive Manufacturing",
      description:
        "Advanced 3D printing solutions for rapid prototyping, custom parts manufacturing, and innovative engineering applications across multiple industries.",
      image: "/images/services/am3d2.webp",
      url: "https://www.am3dlab.ariesmar.com/",
      internal: false,
    },
    {
      number: "10",
      title: "Mobile Mapping",
      description:
        "Advanced mobile mapping solutions for large-scale facility documentation, terrain modeling, and comprehensive environmental monitoring.",
      image: "/images/services/mobileMapping1.jpeg",
      url: null,
      internal: false,
    },
    {
      number: "11",
      title: "Aerial Drone Survey",
      description:
        "Revolutionary UAV aerial mapping with 24-hour turnaround, 1cm accuracy, and automated data capture for site assessment and terrain modeling.",
      image: "/images/services/drone1.jpeg",
      url: "https://www.ariesmar.com/ae/en/drone-surveys",
      internal: false,
    },
    {
      number: "12",
      title: "Underwater Survey",
      description:
        "Comprehensive underwater inspection services using advanced drones for hull inspections, structural integrity assessment, and marine construction support.",
      image: "/images/services/underwaterSurvey2.webp",
      url: "https://www.ariesmar.com/ae/en/underwater-inspection-and-surveys",
      internal: false,
    },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  };

  const fadeInDown = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.98 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4, ease: "easeOut" } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 1.05 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const renderServiceLink = (service) => {
    if (!service.url) {
      return (
        <motion.span
          className="service-link disabled"
          style={{ opacity: 0.5, cursor: "not-allowed", color: "#999" }}
        >
          Coming Soon
        </motion.span>
      );
    }

    if (service.internal) {
      return (
        <Link href={service.url} className="service-link">
          Learn More
        </Link>
      );
    }

    return (
      <a
        href={service.url}
        className="service-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn More
      </a>
    );
  };

  return (
    <>
      <motion.section
        className="page-hero"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="page-hero-background"></div>
        <div className="page-hero-content">
          <motion.h1 variants={fadeInDown}>
            What We <span className="highlight">Offer</span>
          </motion.h1>
          <motion.p variants={fadeInUp} transition={{ delay: 0.1 }}>
            Discover tailored solutions from our expert engineering team.
          </motion.p>
        </div>
      </motion.section>

      <motion.section
        className="services-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.05 }}
        variants={staggerContainer}
      >
        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="service-card"
              variants={cardVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="service-image-container">
                <motion.img
                  src={service.image}
                  alt={service.title}
                  className="service-image"
                  variants={imageVariants}
                  whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                />
                <div className="service-image-overlay">
                  <motion.div
                    className="service-number-overlay"
                    initial={{ opacity: 0, y: 20 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {service.number}
                  </motion.div>
                </div>
              </div>

              <div className="service-content">
                <motion.div className="service-number">{service.number}</motion.div>
                <motion.h3 className="service-title">{service.title}</motion.h3>
                <motion.p className="service-description">{service.description}</motion.p>
                {renderServiceLink(service)}
              </div>

              <div className="service-hover-effect"></div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        className="cta-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <motion.h2 className="cta-title" variants={fadeInUp}>
          Ready to Start Your Project?
        </motion.h2>
        <motion.p className="cta-description" variants={fadeInUp}>
          Contact our experts today for a comprehensive consultation and custom
          solution tailored to your needs.
        </motion.p>
        <motion.div variants={fadeInUp}>
          <Link
            href="/contact"
            className="cta-button"
          >
            Get in Touch
          </Link>
        </motion.div>
      </motion.section>
    </>
  );
};

export default ServicesClient;
