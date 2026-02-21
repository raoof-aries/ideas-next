"use client";

import React, { useMemo, useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./HeroSection.css";
import { FiArrowDownRight } from "react-icons/fi";
import Link from "next/link";

const HeroSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  const memoizedIsInView = useMemo(() => isInView, [isInView]);

  const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 1.2, staggerChildren: 0.15, ease: [0.16, 1, 0.3, 1] } } };
  const headingVariants = { hidden: { y: 120, opacity: 0, scale: 0.9, rotateX: 45 }, visible: { y: 0, opacity: 1, scale: 1, rotateX: 0, transition: { duration: 1.4, ease: [0.16, 1, 0.3, 1], type: "spring", damping: 20, stiffness: 100 } } };
  const subTitleVariants = { hidden: { y: 100, opacity: 0, x: 80, scale: 0.8, rotateY: -30 }, visible: { y: 0, opacity: 1, x: 0, scale: 1, rotateY: 0, transition: { duration: 1.6, delay: 0.2, ease: [0.16, 1, 0.3, 1], type: "spring", damping: 25, stiffness: 120 } } };
  const bottomContainerVariants = { hidden: { y: 80, opacity: 0, scale: 0.9, rotateX: 20 }, visible: { y: 0, opacity: 1, scale: 1, rotateX: 0, transition: { duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1], type: "spring", damping: 30, stiffness: 140 } } };
  const linkVariants = { hidden: { opacity: 0, y: 30, scale: 0.8 }, visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] } } };
  const arrowVariants = { hidden: { opacity: 0, scale: 0, rotate: -180 }, visible: { opacity: 1, scale: 1, rotate: 0, transition: { duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1], type: "spring", damping: 15, stiffness: 200 } } };

  return (
    <div className="hero-section-container">
      <div className="hero-video-container" aria-hidden="true">
        <iframe
          src="https://player.vimeo.com/video/1135215957?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&loop=1&controls=0&title=0&byline=0&portrait=0"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          title="Aries Ideas Hero Video - 3D Laser Scanning Services"
          className="hero-video"
        />
        <div className="hero-video-overlay" />
      </div>

      <motion.div ref={ref} className="hero-content" variants={containerVariants} initial="hidden" animate={memoizedIsInView ? "visible" : "hidden"}>
        <div className="hero-heading-container">
          <motion.h1 className="hero-mainTitle" variants={headingVariants} style={{ willChange: "transform, opacity" }}>
            Gateway To <br /> The Virtual World
          </motion.h1>
          <div className="hero-subtitle-container">
            <motion.img src="/images/common/ideas-logo.png" alt="Aries IDEAS Logo" className="hero-logo" variants={subTitleVariants} style={{ willChange: "transform, opacity" }} />
            <motion.h2 className="hero-subTitle" variants={subTitleVariants} style={{ willChange: "transform, opacity" }}>
              Intelligent Detail <br /> Engineering & As Built <br /> Scanning
            </motion.h2>
          </div>
        </div>
        <motion.div className="hero-bottom-container" variants={bottomContainerVariants} style={{ willChange: "transform, opacity" }}>
          <motion.div variants={linkVariants} whileHover={{ scale: 1.05, y: -3, transition: { duration: 0.3 } }} whileTap={{ scale: 0.98 }}>
            <Link className="hero-bottom-container-links text-underline" href="/contact" style={{ willChange: "transform, opacity" }}>
              Get in Touch with Our Experts Today
            </Link>
          </motion.div>
          <div className="hero-bottom-right-container">
            <motion.a className="hero-bottom-container-links transparent-btn" href="#aboutSection" variants={linkVariants} whileHover={{ scale: 1.05, y: -3 }} whileTap={{ scale: 0.98 }} style={{ willChange: "transform, opacity" }}>
              Scroll Down
            </motion.a>
            <motion.a className="hero-bottom-container-links transparent-btn-2" href="#aboutSection" variants={arrowVariants} whileHover={{ scale: 1.15, backgroundColor: "rgba(255,255,255,0.3)" }} whileTap={{ scale: 0.9 }} style={{ willChange: "transform, opacity" }}>
              <FiArrowDownRight />
            </motion.a>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
