"use client";

import "./CtaSection.css";
import { FiArrowUpRight } from "react-icons/fi";
import { motion } from "framer-motion";
import Link from "next/link";

const CtaSection = () => {
  const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.8, staggerChildren: 0.3 } } };
  const textVariants = { hidden: { opacity: 0, y: 50, scale: 0.9 }, visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 1, ease: "easeOut" } } };
  const buttonVariants = { hidden: { opacity: 0, y: 30, scale: 0.9 }, visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: "easeOut" } } };

  return (
    <motion.div className="ctaSection-container" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.3 }}>
      <motion.p className="cta-text-home" variants={textVariants}>Get Your Custom Quote for 3D <br /> Scanning Services Now</motion.p>
      <motion.div variants={buttonVariants} whileHover={{ scale: 1.05, y: -2, transition: { duration: 0.3 } }} whileTap={{ scale: 0.98, transition: { duration: 0.1 } }}>
        <Link href="/contact" className="cta-btn-home">
          <motion.span initial={{ opacity: 1 }} whileHover={{ letterSpacing: "0.02em", transition: { duration: 0.3 } }}>Get in touch</motion.span>
          <motion.div className="cta-section-home-arrow" whileHover={{ rotate: 45, scale: 1.1, transition: { duration: 0.3 } }} whileTap={{ scale: 0.9 }}>
            <motion.div animate={{ rotate: [0, 10, -10, 0] }} transition={{ duration: 2, repeat: Infinity, repeatDelay: 3, ease: "easeInOut" }}><FiArrowUpRight /></motion.div>
          </motion.div>
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default CtaSection;
