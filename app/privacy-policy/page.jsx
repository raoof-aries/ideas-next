import { getSeoData } from "@/data/seoData";
import "./LegalPages.css";

export function generateMetadata() {
  return getSeoData("/privacy-policy");
}

export default function PrivacyPolicyPage() {
  return (
    <div className="legal-container">
      <div className="legal-hero">
        <div className="hero-bg-pattern" />
        <div className="hero-content">
          <h1 className="legal-title">Privacy Policy</h1>
          <p className="legal-meta">
            <span className="meta-item">Last Updated: November 6, 2025</span>
            <span className="meta-divider">&bull;</span>
            <span className="meta-item">Effective Date: November 6, 2025</span>
          </p>
        </div>
      </div>

      <div className="legal-content">
        <div className="content-intro">
          <p className="intro-text">
            Aries Ideas respects your privacy. This short policy explains what
            information we collect, how we use it, and your basic choices.
          </p>
        </div>

        <div className="content-grid">
          <div className="content-section">
            <div className="section-number">01</div>
            <h2 className="section-title">What we collect</h2>
            <p>
              We collect only the information you provide (name, email, company,
              message) and basic technical data (IP, browser, pages-visits) to
              operate the website and deliver our services.
            </p>
          </div>

          <div className="content-section">
            <div className="section-number">02</div>
            <h2 className="section-title">How we use it</h2>
            <p>
              We use your information to respond to inquiries, provide services,
              deliver invoices, send occasional updates, and improve the site.
            </p>
          </div>

          <div className="content-section">
            <div className="section-number">03</div>
            <h2 className="section-title">Sharing</h2>
            <p>
              We do not sell your personal data. We may share data with service
              providers who help run the site or fulfil projects, and when
              required by law.
            </p>
          </div>

          <div className="content-section">
            <div className="section-number">04</div>
            <h2 className="section-title">Cookies</h2>
            <p>
              We use cookies for essential site functions and basic analytics.
              You can control cookies through your browser settings.
            </p>
          </div>

          <div className="content-section">
            <div className="section-number">05</div>
            <h2 className="section-title">Your rights</h2>
            <p>
              You can request access, correction, deletion, or object to
              processing. Contact us at privacy@ariesideas.com to exercise these
              rights.
            </p>
          </div>

          <div className="content-section">
            <div className="section-number">06</div>
            <h2 className="section-title">Security &amp; updates</h2>
            <p>
              We take reasonable steps to protect data but cannot guarantee
              absolute security. We may update this policy; changes will be
              posted with a new date.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
