"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import "./Gallery.css";

const galleryData = [
  { id: 1, title: "Marine Documentation", category: "Marine", image: "/images/projects/project1.webp", description: "Comprehensive marine asset documentation" },
  { id: 2, title: "Architectural Modeling", category: "Architecture", image: "/images/projects/project2.webp", description: "Detailed 3D modeling for construction projects" },
  { id: 3, title: "Industrial Survey", category: "Industrial", image: "/images/projects/project3.webp", description: "Advanced industrial asset inspection" },
  { id: 4, title: "Marine Scanning", category: "Marine/Scanning", image: "/images/projects/project4.webp", description: "High-precision marine laser scanning" },
  { id: 5, title: "3D Laser Scanning", category: "Scanning", image: "/images/projects/project5.webp", description: "High-precision laser scanning of facilities" },
  { id: 6, title: "Industrial Assessment", category: "Industrial", image: "/images/projects/project6.webp", description: "Industrial facility documentation" },
  { id: 7, title: "Industrial Inspection", category: "Industrial", image: "/images/projects/project7.webp", description: "Precision measurement and quality assurance" },
  { id: 8, title: "Survey & Scanning", category: "Surveying/Scanning", image: "/images/projects/project8.webp", description: "Comprehensive surveying and scanning services" },
  { id: 9, title: "3D Scanning Project", category: "Scanning", image: "/images/projects/project9.webp", description: "Advanced 3D scanning documentation" },
  { id: 10, title: "Marine Scanning", category: "Marine/Scanning", image: "/images/projects/project10.webp", description: "Marine infrastructure scanning" },
  { id: 11, title: "Industrial Scanning", category: "Industrial/Scanning", image: "/images/projects/project11.webp", description: "Industrial facility scanning" },
  { id: 12, title: "Surveying Project", category: "Surveying", image: "/images/projects/project12.webp", description: "Large-scale terrain documentation" },
  { id: 13, title: "Survey & Scanning", category: "Surveying/Scanning", image: "/images/projects/project13.webp", description: "Integrated surveying and scanning" },
  { id: 14, title: "Architectural Project", category: "Architecture", image: "/images/projects/project14.webp", description: "Architectural documentation and modeling" },
];

const GalleryClient = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredImages, setFilteredImages] = useState(galleryData);

  const categories = [
    "All",
    ...new Set(galleryData.flatMap((item) => item.category.split("/"))),
  ];

  useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredImages(galleryData);
    } else {
      setFilteredImages(
        galleryData.filter((item) =>
          item.category.split("/").includes(selectedCategory)
        )
      );
    }
  }, [selectedCategory]);

  useEffect(() => {
    const handleMouseEnter = (e) => {
      e.currentTarget.style.transform = "translateY(-0.5rem)";
      e.currentTarget.style.boxShadow = "0 1rem 2.5rem rgba(0, 0, 0, 0.12)";
    };
    const handleMouseLeave = (e) => {
      e.currentTarget.style.transform = "translateY(0)";
      e.currentTarget.style.boxShadow = "0 0.125rem 0.75rem rgba(0, 0, 0, 0.04)";
    };
    const galleryItems = document.querySelectorAll(".gallery-item");
    galleryItems.forEach((item) => {
      item.addEventListener("mouseenter", handleMouseEnter);
      item.addEventListener("mouseleave", handleMouseLeave);
    });
    return () => {
      galleryItems.forEach((item) => {
        item.removeEventListener("mouseenter", handleMouseEnter);
        item.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, [filteredImages]);

  return (
    <>
      <section className="page-hero">
        <div className="page-hero-background"></div>
        <div className="page-hero-content">
          <h1>
            Our <span className="highlight">Gallery</span>
          </h1>
          <p>
            Showcasing our precision engineering excellence through visual
            documentation of completed projects.
          </p>
        </div>
      </section>

      <section className="gallery-section">
        <div className="gallery-filters">
          {categories.map((category) => (
            <button
              key={category}
              className={`filter-btn ${selectedCategory === category ? "active" : ""}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="gallery-grid">
          {filteredImages.map((item) => (
            <div key={item.id} className="gallery-item">
              <div className="gallery-image-container height-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="gallery-image"
                />
                <div className="gallery-overlay">
                  <div className="gallery-overlay-content">
                    <h3 className="gallery-title">{item.title}</h3>
                    <p className="gallery-description">{item.description}</p>
                    <span className="gallery-category">{item.category}</span>
                  </div>
                </div>
              </div>
              <div className="gallery-decorator"></div>
            </div>
          ))}
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

export default GalleryClient;
