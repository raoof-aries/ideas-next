import Link from "next/link";
import "./Footer.css";
import { FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <div className="footer-logo">
          <img src="/images/common/logo.png" alt="Aries Ideas Logo" className="logo-img" />
        </div>
        <div className="footer-nav">
          <Link href="/" className="footer-link">Home</Link>
          <Link href="/services" className="footer-link">Services</Link>
          <Link href="/projects" className="footer-link">Projects</Link>
          <Link href="/gallery" className="footer-link">Gallery</Link>
          <Link href="/contact" className="footer-link">Contact</Link>
        </div>
        <div className="footer-social">
          <a href="http://linkedin.com/company/ariesmarine-and-egineering-services" className="social-link" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedinIn /></a>
          <a href="https://www.facebook.com/ariesmarineengg" className="social-link" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebookF /></a>
          <a href="https://twitter.com/Aries_Engg_Insp" className="social-link" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><FaXTwitter /></a>
        </div>
      </div>
      <div className="horizontal-separator-section-2"></div>
      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p className="copyright">
            &copy; 2025{" "}
            <a href="https://www.ariesesolutions.com/" target="_blank" rel="noopener noreferrer" className="copyright-link">Aries e-Solutions</a>
            . All rights reserved.
          </p>
          <div className="footer-legal">
            <Link href="/privacy-policy" className="legal-link">Privacy Policy</Link>
            <Link href="/terms-and-conditions" className="legal-link">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
