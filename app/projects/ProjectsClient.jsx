"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import projectsData from "@/data/projectsData";
import "./Projects.css";

const ProjectsClient = () => {
  useEffect(() => {
    const handleMouseEnter = (e) => {
      e.currentTarget.style.boxShadow = "0 12px 35px rgba(0, 0, 0, 0.08)";
    };
    const handleMouseLeave = (e) => {
      e.currentTarget.style.boxShadow = "none";
    };
    const projectCards = document.querySelectorAll(".project-card");
    projectCards.forEach((card) => {
      card.addEventListener("mouseenter", handleMouseEnter);
      card.addEventListener("mouseleave", handleMouseLeave);
    });
    return () => {
      projectCards.forEach((card) => {
        card.removeEventListener("mouseenter", handleMouseEnter);
        card.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const fadeInDown = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
  };

  const projectCardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const imageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut", delay: 0.2 } },
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
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
            Our <span className="highlight">Projects</span>
          </motion.h1>
          <motion.p variants={fadeInUp} transition={{ delay: 0.2 }}>
            Explore our portfolio of precision engineering solutions across
            diverse industries.
          </motion.p>
        </div>
      </motion.section>

      <motion.section
        className="projects-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerContainer}
      >
        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              variants={projectCardVariants}
              whileHover={{ y: -8, scale: 1.01, transition: { duration: 0.3 } }}
            >
              <div className="project-image-container">
                <motion.img
                  src={project.img}
                  alt={project.title}
                  className="project-image"
                  variants={imageVariants}
                />
              </div>

              <motion.div className="project-content" variants={contentVariants}>
                <div className="project-top-line"></div>
                <div className="project-right-line"></div>
                <div className="project-decorator"></div>
                <motion.h3 className="project-title" variants={slideInLeft}>
                  {project.title}
                </motion.h3>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        className="cta-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
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
          <Link href="/contact" className="cta-button">
            Get in Touch
          </Link>
        </motion.div>
      </motion.section>
    </>
  );
};

export default ProjectsClient;
