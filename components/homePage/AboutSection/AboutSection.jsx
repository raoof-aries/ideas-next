"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import CountUp from "react-countup";
import "./AboutSection.css";

const METRIC_FORMATS = {
  Projects: { suffix: " k+", decimals: 1, color: "#2563eb" },
  Clients: { suffix: " k+", decimals: 1, color: "#059669" },
  Industries: { suffix: "+", decimals: 0, color: "#7c3aed" },
  Years: { suffix: "+", decimals: 0, color: "#dc2626" },
};

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  const memoizedIsInView = useMemo(() => isInView, [isInView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };
  const leftContainerVariants = {
    hidden: { x: -40, opacity: 0, scale: 0.95 },
    visible: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1],
        type: "spring",
        damping: 25,
        stiffness: 100,
      },
    },
  };
  const rightContainerVariants = {
    hidden: { x: 40, opacity: 0, scale: 0.95 },
    visible: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.2,
        delay: 0.2,
        ease: [0.16, 1, 0.3, 1],
        type: "spring",
        damping: 25,
        stiffness: 100,
      },
    },
  };
  const subTitleVariants = {
    hidden: { y: 30, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };
  const bigTitleVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.95 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.2,
        delay: 0.1,
        ease: [0.16, 1, 0.3, 1],
        type: "spring",
        damping: 20,
        stiffness: 120,
      },
    },
  };
  const metricsContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        delay: 0.3,
        staggerChildren: 0.15,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };
  const metricVariants = {
    hidden: { y: 40, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.1,
        ease: [0.16, 1, 0.3, 1],
        type: "spring",
        damping: 18,
        stiffness: 150,
      },
    },
  };
  const separatorVariants = {
    hidden: { scaleY: 0, opacity: 0 },
    visible: {
      scaleY: 1,
      opacity: 1,
      transition: { duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] },
    },
  };
  const horizontalSeparatorVariants = {
    hidden: { scaleX: 0, opacity: 0 },
    visible: {
      scaleX: 1,
      opacity: 1,
      transition: { duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };
  const visionMissionVariants = {
    hidden: { y: 30, opacity: 0, scale: 0.95 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: [0.16, 1, 0.3, 1],
        type: "spring",
        damping: 25,
        stiffness: 120,
      },
    },
  };
  const counterAnimation = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1 },
  };

  const [metrics, setMetrics] = useState([]);
  const [metricsLoading, setMetricsLoading] = useState(true);

  useEffect(() => {
    const loadMetrics = async () => {
      try {
        const response = await fetch("/about-metrics.json");
        if (!response.ok)
          throw new Error(`Failed to load metrics: ${response.status}`);
        const data = await response.json();
        let rawMetrics = Array.isArray(data)
          ? data
          : Array.isArray(data.metrics)
            ? data.metrics
            : [];
        const enriched = rawMetrics
          .map((item) => {
            const format = METRIC_FORMATS[item.label];
            if (!format) return null;
            const rawNumber = Number(item.number);
            const isKMetric =
              item.label === "Projects" || item.label === "Clients";
            const numberPart = isKMetric ? rawNumber / 1000 : rawNumber;
            return {
              label: item.label,
              numberPart,
              suffix: format.suffix,
              decimals: format.decimals,
              color: format.color,
            };
          })
          .filter(Boolean);
        setMetrics(enriched);
      } catch (error) {
        console.error("Error loading metrics data:", error);
      } finally {
        setMetricsLoading(false);
      }
    };
    loadMetrics();
  }, []);

  return (
    <motion.section
      id="aboutSection"
      ref={ref}
      className="about-section-container"
      variants={containerVariants}
      initial="hidden"
      animate={memoizedIsInView ? "visible" : "hidden"}
    >
      <motion.div
        className="about-section-left-container"
        variants={leftContainerVariants}
      >
        <motion.p className="section-sub-title" variants={subTitleVariants}>
          About Us
        </motion.p>
        <motion.p className="section-big-title" variants={bigTitleVariants}>
          We deliver precise as-built 3D data for marine, offshore, and
          industrial projects
        </motion.p>
        <motion.div
          className="about-section-left-metrics-container"
          variants={metricsContainerVariants}
        >
          {!metricsLoading &&
            metrics.map((item, index) => (
              <motion.div
                key={index}
                className="about-section-metric-container"
                variants={metricVariants}
                whileHover={{
                  scale: 1.05,
                  y: -5,
                  transition: { duration: 0.3 },
                }}
              >
                <motion.p
                  className="metric-title"
                  variants={counterAnimation}
                  whileHover={{
                    scale: 1.03,
                    color: item.color,
                    transition: { duration: 0.3 },
                  }}
                >
                  <span
                    className="metric-number"
                    title={`${item.numberPart}${item.suffix}`}
                  >
                    <CountUp
                      start={0}
                      end={isInView ? item.numberPart : 0}
                      duration={2}
                      decimals={item.decimals}
                      preserveValue={true}
                    />
                    <span className="metric-suffix">{item.suffix}</span>
                  </span>
                </motion.p>
                <p className="metric-desc">{item.label}</p>
              </motion.div>
            ))}
        </motion.div>
        <div className="mobile-horizontal-separator"></div>
      </motion.div>
      <motion.div
        className="vertical-separator"
        variants={separatorVariants}
        style={{ originY: 0 }}
      ></motion.div>
      <motion.div
        className="about-section-right-container"
        variants={rightContainerVariants}
      >
        <motion.div
          className="about-VsnMsn-container"
          variants={visionMissionVariants}
        >
          <motion.p className="small-sub-title text-caps">Vision</motion.p>
          <p className="small-text-body text-darkGray">
            To be the world&apos;s most trusted and forward-thinking leader in
            marine engineering and innovation driving sustainable,
            client-focused solutions that transform industries and shape a
            better future.
          </p>
        </motion.div>
        <motion.div
          className="horizontal-separator"
          variants={horizontalSeparatorVariants}
          style={{ originX: 0 }}
        ></motion.div>
        <motion.div
          className="about-VsnMsn-container"
          variants={visionMissionVariants}
        >
          <motion.p className="small-sub-title text-caps">Mission</motion.p>
          <p className="small-text-body text-darkGray">
            To pioneer innovative, human-centered solutions by blending marine
            expertise with advanced engineering and digital technologies
            delivering excellence, safety, and lasting value through integrity,
            quality, and unwavering commitment to our clients.
          </p>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default AboutSection;
