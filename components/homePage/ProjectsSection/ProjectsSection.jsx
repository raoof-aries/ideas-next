"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, useInView, useReducedMotion, useAnimation } from "framer-motion";
import "./ProjectsSection.css";
import projectsData from "@/data/projectsData";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import Link from "next/link";

const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.6, staggerChildren: 0.1, ease: "easeOut" } } };
const fadeInVariant = (delay = 0) => ({ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { delay, duration: 0.6, ease: "easeOut" } } });

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.15 });
  const shouldReduceMotion = useReducedMotion();
  const controls = useAnimation();
  const [displayedProjects, setDisplayedProjects] = useState(() => projectsData.slice(0, 4));

  useEffect(() => {
    const updateDisplayed = () => { const isMobile = window.innerWidth <= 768; setDisplayedProjects(projectsData.slice(0, isMobile ? 2 : 4)); };
    updateDisplayed();
    window.addEventListener("resize", updateDisplayed);
    return () => window.removeEventListener("resize", updateDisplayed);
  }, []);

  useEffect(() => { if (isInView && !shouldReduceMotion) controls.start("visible"); else controls.start("hidden"); }, [isInView, shouldReduceMotion, controls]);

  return (
    <motion.div ref={ref} className="projects-section-container" initial="hidden" animate={controls} variants={!shouldReduceMotion ? containerVariants : undefined}>
      <motion.div className="projects-section-headerContainer" variants={!shouldReduceMotion ? fadeInVariant(0) : undefined}>
        <div className="horizontal-separator-section" />
        <div className="projects-section-header-textBtn-container">
          <motion.p className="section-title" variants={!shouldReduceMotion ? fadeInVariant(0.1) : undefined}>Projects</motion.p>
          <motion.div variants={!shouldReduceMotion ? fadeInVariant(0.2) : undefined} whileHover={!shouldReduceMotion ? { x: 3 } : undefined} whileTap={{ scale: 0.96 }}>
            <Link href="/projects" className="view-all-btn">
              View All
              <motion.div whileHover={!shouldReduceMotion ? { x: 3 } : undefined}><IoArrowForwardCircleOutline className="view-all-icon" /></motion.div>
            </Link>
          </motion.div>
        </div>
        <div className="horizontal-separator-section" />
      </motion.div>
      <motion.div className="projects-grid-container" variants={!shouldReduceMotion ? fadeInVariant(0.3) : undefined}>
        <motion.div className="projects-grid">
          {displayedProjects.map((project, index) => (
            <motion.div key={index} className="project-card" variants={!shouldReduceMotion ? fadeInVariant(0.2 + index * 0.1) : undefined} whileHover={!shouldReduceMotion ? { y: -4, scale: 1.01 } : undefined} whileTap={{ scale: 0.98 }} style={{ willChange: "transform, box-shadow", transform: "translateZ(0)" }}>
              <div className="project-content"><motion.h3 className="project-title" whileHover={!shouldReduceMotion ? { scale: 1.01 } : undefined}>{project.title}</motion.h3></div>
              <motion.div className="project-image-container" whileHover={!shouldReduceMotion ? { boxShadow: "0 0.8rem 1.6rem rgba(0,0,0,0.12)" } : undefined} style={{ willChange: "transform, box-shadow", transform: "translateZ(0)" }}>
                <motion.img src={project.img} alt={project.title} className="project-image" whileHover={!shouldReduceMotion ? { scale: 1.03 } : undefined} />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectsSection;
