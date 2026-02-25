"use client";

import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";
import "./Navbar.css";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isMobileServicesDropdownOpen, setIsMobileServicesDropdownOpen] =
    useState(false);
  const [isHomepage, setIsHomepage] = useState(false);

  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    setIsHomepage(pathname === "/" || pathname === "/home");
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const heroSection = document.querySelector(".hero-section-container");
      const heroHeight = heroSection ? heroSection.offsetHeight : 800;
      if (isHomepage) {
        setIsScrolled(scrollTop > heroHeight * 0.1);
      } else {
        setIsScrolled(true);
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomepage]);

  const handleAboutUsClick = (e) => {
    e.preventDefault();
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
      setIsMobileServicesDropdownOpen(false);
    }
    if (isHomepage) {
      const aboutSection = document.getElementById("aboutSection");
      if (aboutSection) {
        const navbarHeight = 80;
        const elementPosition = aboutSection.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - navbarHeight;
        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      }
    } else {
      router.push("/#aboutSection");
    }
  };

  const services = [
    { name: "3D Laser Scanning", url: "/service/3d-laser-scanning" },
    { name: "GNSS Survey", url: "/service/gnss-survey" },
    { name: "Total Station", url: "/service/total-station-survey" },
    { name: "Tidal Survey", url: "/service/tidal-survey" },
    { name: "3D Hand Scanning", url: "/service/3d-hand-scanning" },
    {
      name: "3D Modelling",
      url: null,
      submenu: [
        {
          name: "Intelligent Modelling",
          url: "/service/3d-modelling-intelligent",
        },
        {
          name: "Non-Intelligent Modelling",
          url: "/service/3d-modelling-non-intelligent",
        },
      ],
    },
    {
      name: "Visual Asset Management",
      url: "/service/visual-asset-management",
    },
    { name: "Additive Manufacturing", url: "https://www.am3dlab.ariesmar.com/" },
    {
      name: "Aerial Drone Survey",
      url: "https://www.ariesmar.com/ae/en/drone-surveys",
    },
    {
      name: "Underwater Survey",
      url: "https://www.ariesmar.com/ae/en/underwater-inspection-and-surveys",
    },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (isMobileMenuOpen) setIsMobileServicesDropdownOpen(false);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsMobileServicesDropdownOpen(false);
  };

  const isExternal = (url) =>
    url && (url.startsWith("http://") || url.startsWith("https://"));

  const navbarClass = isScrolled ? "nav-container scrolled" : "nav-container";
  const currentLogo = isScrolled
    ? "/images/common/logo-og.png"
    : "/images/common/logo.png";

  return (
    <div className={navbarClass}>
      {/* Desktop Navigation */}
      <div className="nav-content desktop-nav">
        <div className="nav-left-container">
          <a href="#" className="nav-hero-links" onClick={handleAboutUsClick}>
            About Us
          </a>
          <div
            className="services-dropdown"
            onMouseEnter={() => setIsServicesDropdownOpen(true)}
            onMouseLeave={() => setIsServicesDropdownOpen(false)}
          >
            <Link href="/services" className="nav-hero-links">
              Services
              <IoIosArrowDown
                className={`dropdown-arrow ${isServicesDropdownOpen ? "open" : ""}`}
              />
            </Link>
            {isServicesDropdownOpen && (
              <div className="dropdown-menu">
                {services.map((service, index) => (
                  <div key={index} className="dropdown-item">
                    {isExternal(service.url) ? (
                      <a
                        href={service.url}
                        className="dropdown-link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {service.name}
                      </a>
                    ) : (
                      <Link href={service.url || "#"} className="dropdown-link">
                        {service.name}
                      </Link>
                    )}
                    {service.submenu && (
                      <div className="submenu">
                        {service.submenu.map((subItem, subIndex) =>
                          isExternal(subItem.url) ? (
                            <a
                              key={subIndex}
                              href={subItem.url}
                              className="submenu-link"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {subItem.name}
                            </a>
                          ) : (
                            <Link
                              key={subIndex}
                              href={subItem.url || "#"}
                              className="submenu-link"
                            >
                              {subItem.name}
                            </Link>
                          ),
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
          <Link href="/projects" className="nav-hero-links">
            Projects
          </Link>
        </div>

        <Link href="/">
          <img
            src={currentLogo}
            alt="Aries Ideas Logo"
            className="navHero-logo"
          />
        </Link>

        <div className="nav-right-container">
          <Link href="/gallery" className="nav-hero-links">
            Gallery
          </Link>
          <Link href="/contact" className="nav-hero-links transparent-btn">
            Contact
          </Link>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="mobile-nav">
        <Link href="/">
          <img src={currentLogo} alt="Logo" className="mobile-logo" />
        </Link>
        <button
          className="mobile-menu-toggle"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <span className={`hamburger ${isMobileMenuOpen ? "open" : ""}`}>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="mobile-menu-overlay">
          <div className="mobile-menu-header">
            <img src={currentLogo} alt="Logo" className="mobile-menu-logo" />
            <button
              className="mobile-menu-close"
              onClick={toggleMobileMenu}
              aria-label="Close mobile menu"
            >
              <span className="close-icon">
                <span></span>
                <span></span>
              </span>
            </button>
          </div>
          <div className="mobile-menu-content">
            <a
              href="#"
              className="mobile-nav-link"
              onClick={handleAboutUsClick}
            >
              About Us
            </a>
            <div className="mobile-services-dropdown">
              <div className="mobile-services-header">
                <Link
                  href="/services"
                  className="mobile-nav-link mobile-services-link"
                  onClick={closeMobileMenu}
                >
                  Services
                </Link>
                <button
                  className="mobile-dropdown-toggle-btn"
                  onClick={() =>
                    setIsMobileServicesDropdownOpen(
                      !isMobileServicesDropdownOpen,
                    )
                  }
                  aria-label="Toggle services dropdown"
                >
                  <IoIosArrowDown
                    className={`mobile-dropdown-arrow ${isMobileServicesDropdownOpen ? "open" : ""}`}
                  />
                </button>
              </div>
              {isMobileServicesDropdownOpen && (
                <div className="mobile-dropdown-menu">
                  {services.map((service, index) => (
                    <div key={index} className="mobile-dropdown-item">
                      {isExternal(service.url) ? (
                        <a
                          href={service.url}
                          className="mobile-dropdown-link"
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={closeMobileMenu}
                        >
                          {service.name}
                        </a>
                      ) : (
                        <Link
                          href={service.url || "#"}
                          className="mobile-dropdown-link"
                          onClick={closeMobileMenu}
                        >
                          {service.name}
                        </Link>
                      )}
                      {service.submenu && (
                        <div className="mobile-submenu">
                          {service.submenu.map((subItem, subIndex) =>
                            isExternal(subItem.url) ? (
                              <a
                                key={subIndex}
                                href={subItem.url}
                                className="mobile-submenu-link"
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={closeMobileMenu}
                              >
                                {subItem.name}
                              </a>
                            ) : (
                              <Link
                                key={subIndex}
                                href={subItem.url || "#"}
                                className="mobile-submenu-link"
                                onClick={closeMobileMenu}
                              >
                                {subItem.name}
                              </Link>
                            ),
                          )}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
            <Link
              href="/projects"
              className="mobile-nav-link"
              onClick={closeMobileMenu}
            >
              Projects
            </Link>
            <Link
              href="/gallery"
              className="mobile-nav-link"
              onClick={closeMobileMenu}
            >
              Gallery
            </Link>
            <Link
              href="/contact"
              className="mobile-nav-link mobile-contact-btn"
              onClick={closeMobileMenu}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
