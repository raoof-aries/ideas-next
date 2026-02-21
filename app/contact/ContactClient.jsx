"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  HiMail,
  HiPhone,
  HiLocationMarker,
  HiPaperAirplane,
  HiCheckCircle,
} from "react-icons/hi";
import ReCAPTCHA from "react-google-recaptcha";
import "./Contact.css";

const ContactClient = () => {
  const recaptchaRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
    recaptchaToken: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    recaptcha: "",
    server: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validatePhone = (phone) => {
    const digits = phone.replace(/\D/g, "");
    return digits.length >= 7 && digits.length <= 15;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "", server: "" }));
  };

  const handleRecaptchaChange = (token) => {
    setFormData((prev) => ({ ...prev, recaptchaToken: token }));
    setErrors((prev) => ({ ...prev, recaptcha: "", server: "" }));
  };

  const handleRecaptchaExpired = () => {
    setFormData((prev) => ({ ...prev, recaptchaToken: "" }));
    setErrors((prev) => ({
      ...prev,
      recaptcha: "reCAPTCHA expired. Please verify again.",
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = { name: "", email: "", phone: "", message: "", recaptcha: "", server: "" };

    if (!formData.name.trim()) newErrors.name = "Full name is required.";
    if (!formData.email.trim()) newErrors.email = "Email address is required.";
    else if (!validateEmail(formData.email.trim()))
      newErrors.email = "Please enter a valid email address.";

    if (formData.phone.trim()) {
      if (!validatePhone(formData.phone.trim()))
        newErrors.phone = "Please enter a valid phone number.";
    }

    if (!formData.message.trim()) newErrors.message = "Project details are required.";
    if (!formData.recaptchaToken) newErrors.recaptcha = "Please verify you're not a robot.";

    const hasErrors = Object.values(newErrors).some((v) => v);
    if (hasErrors) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    setErrors((prev) => ({ ...prev, server: "" }));

    try {
      const resp = await fetch("/contact-action.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json, text/plain, */*",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          service: formData.service,
          message: formData.message,
          recaptchaToken: formData.recaptchaToken,
        }),
      });

      const text = await resp.text();
      let parsed = null;
      try {
        parsed = JSON.parse(text);
      } catch {
        parsed = text;
      }

      const success = parsed === "1" || parsed === 1;

      if (resp.ok && success) {
        setIsSubmitted(true);
        setFormData({ name: "", email: "", phone: "", service: "", message: "", recaptchaToken: "" });
        setErrors({ name: "", email: "", phone: "", message: "", recaptcha: "", server: "" });
        if (recaptchaRef.current && typeof recaptchaRef.current.reset === "function") {
          recaptchaRef.current.reset();
        }
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        let serverMsg = "Something went wrong. Please try again later.";
        if (parsed === "0" || parsed === 0) {
          serverMsg = "Server validation failed (possible reCAPTCHA failure). Please verify the reCAPTCHA and try again.";
          newErrors.recaptcha = "reCAPTCHA verification failed. Please verify and try again.";
        } else if (!resp.ok) {
          serverMsg = `Server returned status ${resp.status}.`;
        } else if (typeof parsed === "string" && parsed.length > 0) {
          serverMsg = parsed;
        }
        setErrors((prev) => ({ ...prev, server: serverMsg, recaptcha: newErrors.recaptcha }));
        if (recaptchaRef.current && typeof recaptchaRef.current.reset === "function") {
          recaptchaRef.current.reset();
          setFormData((prev) => ({ ...prev, recaptchaToken: "" }));
        }
      }
    } catch (err) {
      console.error("Network or server error:", err);
      setErrors((prev) => ({
        ...prev,
        server: "Network error. Please check your connection and try again.",
      }));
      if (recaptchaRef.current && typeof recaptchaRef.current.reset === "function") {
        recaptchaRef.current.reset();
        setFormData((prev) => ({ ...prev, recaptchaToken: "" }));
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleContactClick = (href) => {
    if (href.startsWith("tel:") || href.startsWith("mailto:")) {
      window.location.href = href;
    } else if (href.startsWith("http")) {
      window.open(href, "_blank", "noopener,noreferrer");
    }
  };

  const services = [
    { value: "", label: "Choose a service" },
    { value: "3d-laser-scanning", label: "3D Laser Scanning" },
    { value: "gnss-survey", label: "GNSS Survey" },
    { value: "total-station-survey", label: "Total Station Survey" },
    { value: "tidal-survey", label: "Tidal Survey" },
    { value: "3d-hand-scanning", label: "3D Hand Scanning" },
    { value: "3d-modelling-services", label: "3D Modelling Services" },
    { value: "visual-asset-management", label: "Visual Asset Management" },
    { value: "additive-manufacturing", label: "Additive Manufacturing" },
    { value: "mobile-mapping", label: "Mobile Mapping" },
    { value: "aerial-drone-survey", label: "Aerial Drone Survey" },
    { value: "underwater-survey", label: "Underwater Survey" },
  ];

  const contactInfo = [
    {
      icon: HiPhone,
      label: "Call us now",
      value: "+971 50 2134250",
      href: "tel:+971502134250",
      description: "Available 24/7 for urgent inquiries",
    },
    {
      icon: HiMail,
      label: "Send email",
      value: "commercial3dscan@ariesmar.com",
      href: "mailto:commercial3dscan@ariesmar.com",
      description: "We'll respond within 24 hours",
    },
    {
      icon: HiLocationMarker,
      label: "Visit office",
      value: "Tower 400 Building, 7th floor, Sharjah, UAE.",
      href: "https://maps.app.goo.gl/LF5UCSfwSJHGsi778",
      description: "Monday - Friday, 9:00 AM - 6:00 PM",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const heroVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const contactCardVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
    hover: { y: -5, transition: { duration: 0.3, ease: "easeOut" } },
  };

  const formVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const buttonVariants = {
    idle: { scale: 1 },
    hover: { scale: 1.05 },
    tap: { scale: 0.95 },
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="contact-hero-background"></div>
        <motion.div
          className="contact-hero-content"
          variants={heroVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Contact <span className="highlight">Our Experts</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Connect with our specialists for tailored engineering solutions.
          </motion.p>
        </motion.div>
      </section>

      {/* Main Content */}
      <section className="contact-main-content">
        <motion.div
          className="contact-section"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Contact Information */}
          <motion.div className="contact-details" variants={itemVariants}>
            <motion.div className="section-header" variants={itemVariants}>
              <h2>Get In Touch</h2>
              <p>Multiple ways to reach our team of precision engineering experts.</p>
            </motion.div>

            <motion.div className="contact-items" variants={containerVariants}>
              {contactInfo.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <motion.div
                    key={index}
                    className="contact-item"
                    variants={contactCardVariants}
                    whileHover="hover"
                    custom={index}
                  >
                    <div className="contact-card">
                      <motion.div
                        className="contact-icon"
                        whileHover={{ rotate: 5, scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <IconComponent />
                      </motion.div>
                      <div className="contact-content">
                        <div className="contact-label">{item.label}</div>
                        <motion.button
                          onClick={() => handleContactClick(item.href)}
                          className="contact-value contact-link-button"
                          whileHover={{ color: "#2563eb" }}
                          transition={{ duration: 0.2 }}
                        >
                          {item.value}
                        </motion.button>
                        <p className="contact-description">{item.description}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div className="contact-form-wrapper" variants={formVariants}>
            <motion.div
              className="contact-form"
              whileHover={{ boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
              transition={{ duration: 0.3 }}
            >
              <div className="form-header">
                <motion.h2
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  Send Message
                </motion.h2>
                <AnimatePresence>
                  {isSubmitted && (
                    <motion.div
                      className="success-badge"
                      initial={{ opacity: 0, scale: 0.8, x: 20 }}
                      animate={{ opacity: 1, scale: 1, x: 0 }}
                      exit={{ opacity: 0, scale: 0.8, x: 20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.div initial={{ rotate: 0 }} animate={{ rotate: 360 }} transition={{ duration: 0.5 }}>
                        <HiCheckCircle />
                      </motion.div>
                      <span>Message sent!</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <motion.form
                onSubmit={handleSubmit}
                className="form"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.div className="form-row" variants={itemVariants}>
                  <motion.div className={`form-group ${errors.name ? "error" : ""}`} variants={itemVariants}>
                    <label htmlFor="name">Full Name *</label>
                    <motion.input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Your full name"
                      whileFocus={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    />
                    {errors.name && <span className="error-text">{errors.name}</span>}
                  </motion.div>

                  <motion.div className={`form-group ${errors.email ? "error" : ""}`} variants={itemVariants}>
                    <label htmlFor="email">Email Address *</label>
                    <motion.input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="your.email@example.com"
                      whileFocus={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    />
                    {errors.email && <span className="error-text">{errors.email}</span>}
                  </motion.div>
                </motion.div>

                <motion.div className="form-row" variants={itemVariants}>
                  <motion.div className={`form-group ${errors.phone ? "error" : ""}`} variants={itemVariants}>
                    <label htmlFor="phone">Phone Number</label>
                    <motion.input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+971 50 000 0000"
                      whileFocus={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    />
                    {errors.phone && <span className="error-text">{errors.phone}</span>}
                  </motion.div>

                  <motion.div className="form-group" variants={itemVariants}>
                    <label htmlFor="service">Service Interest</label>
                    <motion.select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      whileFocus={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      {services.map((service) => (
                        <option key={service.value} value={service.value}>
                          {service.label}
                        </option>
                      ))}
                    </motion.select>
                  </motion.div>
                </motion.div>

                <motion.div className={`form-group ${errors.message ? "error" : ""}`} variants={itemVariants}>
                  <label htmlFor="message">Project Details *</label>
                  <motion.textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    placeholder="Tell us about your project requirements, timeline, and any specific challenges you're facing..."
                    whileFocus={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  />
                  {errors.message && <span className="error-text">{errors.message}</span>}
                </motion.div>

                {/* reCAPTCHA */}
                <div className="inputError-container">
                  <ReCAPTCHA
                    ref={recaptchaRef}
                    sitekey="6Ldxe20UAAAAAD_17wcLirt0F7WmMb_Ixgoi3AYt"
                    onChange={handleRecaptchaChange}
                    onExpired={handleRecaptchaExpired}
                  />
                  {errors.recaptcha && <span className="error-text">{errors.recaptcha}</span>}
                </div>

                {errors.server && (
                  <div className="server-error" role="alert" style={{ marginBottom: "0.75rem" }}>
                    <small className="error-text">{errors.server}</small>
                  </div>
                )}

                <motion.button
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                  className="submit-btn"
                  variants={buttonVariants}
                  initial="idle"
                  whileHover="hover"
                  whileTap="tap"
                  layout
                >
                  <AnimatePresence mode="wait">
                    {isSubmitting ? (
                      <motion.div
                        key="submitting"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
                      >
                        <motion.div
                          className="spinner"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        />
                        <span>Sending Message...</span>
                      </motion.div>
                    ) : isSubmitted ? (
                      <motion.div
                        key="submitted"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
                      >
                        <motion.div initial={{ rotate: 0 }} animate={{ rotate: 360 }} transition={{ duration: 0.5 }}>
                          <HiCheckCircle />
                        </motion.div>
                        <span>Message Sent Successfully!</span>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="idle"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
                      >
                        <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                          <HiPaperAirplane />
                        </motion.div>
                        <span>Send Message</span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.button>
              </motion.form>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <motion.section
        className="cta-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="cta-background"></div>
        <motion.div
          className="cta-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2 variants={itemVariants}>Ready to Start Your Project?</motion.h2>
          <motion.p variants={itemVariants}>
            Contact our experts today for a comprehensive consultation and custom solution tailored to your specific needs.
          </motion.p>
          <motion.div className="cta-buttons" variants={itemVariants}>
            <motion.button
              onClick={() => handleContactClick("tel:+971502134250")}
              className="cta-btn primary"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div whileHover={{ scale: 1.2 }} transition={{ duration: 0.2 }}>
                <HiPhone />
              </motion.div>
              Call Now
            </motion.button>
            <motion.button
              onClick={() => handleContactClick("mailto:commercial3dscan@ariesmar.com")}
              className="cta-btn secondary"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div whileHover={{ scale: 1.2 }} transition={{ duration: 0.2 }}>
                <HiMail />
              </motion.div>
              Send Email
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default ContactClient;
