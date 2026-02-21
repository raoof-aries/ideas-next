import { getSeoData } from "@/data/seoData";
import "../privacy-policy/LegalPages.css";

export function generateMetadata() {
  return getSeoData("/terms-and-conditions");
}

export default function TermsConditionsPage() {
  return (
    <div className="legal-container">
      <div className="legal-hero">
        <div className="hero-bg-pattern" />
        <div className="hero-content">
          <h1 className="legal-title">Terms &amp; Conditions</h1>
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
            These terms govern your use of Aries Ideas&apos; website and services. By
            using the site or engaging our services you agree to these terms.
          </p>
        </div>

        <div className="content-grid">
          <div className="content-section">
            <div className="section-number">01</div>
            <h2 className="section-title">Use of site</h2>
            <p>
              Use the site lawfully. Do not attempt to access restricted areas
              or misuse the site. We may suspend access for breaches.
            </p>
          </div>

          <div className="content-section">
            <div className="section-number">02</div>
            <h2 className="section-title">Services</h2>
            <p>
              Service details, deliverables, timelines and fees are set out in
              individual project agreements. Those agreements control if there
              is any conflict with these general terms.
            </p>
          </div>

          <div className="content-section">
            <div className="section-number">03</div>
            <h2 className="section-title">Payment</h2>
            <p>
              Invoices are due as per the project agreement. Late payments may
              incur interest as allowed by law.
            </p>
          </div>

          <div className="content-section">
            <div className="section-number">04</div>
            <h2 className="section-title">Liability</h2>
            <p>
              To the maximum extent permitted by law, Aries Ideas&apos; liability is
              limited to the fees paid for the specific service that caused the
              claim. We are not liable for indirect or consequential losses.
            </p>
          </div>

          <div className="content-section">
            <div className="section-number">05</div>
            <h2 className="section-title">Intellectual property</h2>
            <p>
              We (or our licensors) own the website content. Clients receive
              usage rights for deliverables as agreed in writing upon payment.
            </p>
          </div>

          <div className="content-section">
            <div className="section-number">06</div>
            <h2 className="section-title">Confidentiality</h2>
            <p>
              Each party should keep confidential information private and only
              use it for the project purpose. Confidentiality survives for a
              reasonable period after termination.
            </p>
          </div>

          <div className="content-section">
            <div className="section-number">07</div>
            <h2 className="section-title">Changes &amp; contact</h2>
            <p>
              We may update these terms; updates are effective when posted.
              Contact: legal@ariesideas.com for questions or notices.
            </p>
          </div>
        </div>

        <div className="acknowledgment-box">
          <div className="ack-icon">&#10003;</div>
          <div className="ack-content">
            <h3>Acknowledgment</h3>
            <p>
              By using our site or services you acknowledge and accept these
              simplified terms.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
