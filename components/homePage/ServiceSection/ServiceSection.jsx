"use client";

import React, { useRef, useEffect, useMemo, useState } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import "./ServiceSection.css";
import serviceData from "@/data/serviceData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";
import Link from "next/link";
import "swiper/css";
import "swiper/css/navigation";

const containerVariants = { hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0, transition: { duration: 0.15, ease: "easeOut", when: "beforeChildren", staggerChildren: 0.05 } } };
const cardVariants = { hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0, transition: { duration: 0.15, ease: "easeOut" } } };

const ServiceCardContent = React.memo(function ServiceCardContent({ service, index }) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const shouldEager = index <= 1;

  useEffect(() => {
    const img = new Image();
    img.onload = () => setImageLoaded(true);
    img.src = service.img;
  }, [service.img]);

  const innerCard = (
    <motion.div className="service-card" variants={cardVariants}>
      <div className="service-image-container">
        {!imageLoaded && <div style={{ width: "100%", height: "200px", backgroundColor: "#f0f0f0", display: "flex", alignItems: "center", justifyContent: "center", color: "#999" }}>Loading...</div>}
        <img src={service.img} alt={service.title} className="service-image" loading={shouldEager ? "eager" : "lazy"} style={{ opacity: imageLoaded ? 1 : 0, transition: "opacity 0.2s ease-in-out" }} onLoad={() => setImageLoaded(true)} />
        <div className="service-overlay"><h3 className="service-title">{service.title}</h3><div className="service-ellipsis">...</div></div>
        <div className="service-hover-overlay" />
      </div>
    </motion.div>
  );

  const isExternal = typeof service.link === "string" && service.link.startsWith("http");
  if (!service.link) return innerCard;

  return isExternal ? (
    <a href={service.link} target="_blank" rel="noopener noreferrer" aria-label={service.title} style={{ textDecoration: "none", color: "inherit" }}>{innerCard}</a>
  ) : (
    <Link href={service.link} aria-label={service.title} style={{ textDecoration: "none", color: "inherit" }}>{innerCard}</Link>
  );
});

const ServiceSection = () => {
  const rootRef = useRef(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [navigationReady, setNavigationReady] = useState(false);
  const isInView = useInView(rootRef, { once: false, amount: 0.1 });
  const controls = useAnimation();

  useEffect(() => { isInView ? controls.start("visible") : controls.start("hidden"); }, [isInView, controls]);
  useEffect(() => { setNavigationReady(true); }, []);

  const slides = useMemo(() => serviceData.map((s, i) => (<SwiperSlide key={s.title}><ServiceCardContent service={s} index={i} /></SwiperSlide>)), []);

  const swiperProps = useMemo(() => ({
    modules: [Navigation, Autoplay],
    spaceBetween: 30, slidesPerView: 1,
    navigation: navigationReady ? { prevEl: prevRef.current, nextEl: nextRef.current } : false,
    autoplay: { delay: 4000, disableOnInteraction: false, pauseOnMouseEnter: true },
    breakpoints: { 640: { slidesPerView: 2, spaceBetween: 20 }, 768: { slidesPerView: 3, spaceBetween: 25 }, 1024: { slidesPerView: 4, spaceBetween: 30 } },
    className: "services-swiper",
    onSwiper: setSwiperInstance,
    speed: 300,
  }), [navigationReady]);

  useEffect(() => { if (swiperInstance && navigationReady) { swiperInstance.navigation.init(); swiperInstance.navigation.update(); } }, [swiperInstance, navigationReady]);

  return (
    <motion.div ref={rootRef} className="service-section-container" variants={containerVariants} initial="hidden" animate={controls}>
      <div className="service-section-headerContainer">
        <div className="horizontal-separator-section" />
        <div className="service-section-header-textBtn-container">
          <motion.p className="section-title" variants={cardVariants}>What do we do?</motion.p>
          <div className="swiper-navigation">
            <motion.button className="swiper-button-prev-custom" variants={cardVariants} ref={prevRef} aria-label="Previous slide" type="button"><IoArrowBack /></motion.button>
            <motion.button className="swiper-button-next-custom" variants={cardVariants} ref={nextRef} aria-label="Next slide" type="button"><IoArrowForward /></motion.button>
          </div>
        </div>
        <div className="horizontal-separator-section" />
      </div>
      <div className="service-slider-container"><Swiper {...swiperProps}>{slides}</Swiper></div>
    </motion.div>
  );
};

export default ServiceSection;
