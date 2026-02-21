import "./globals.css";
import Script from "next/script";
import { DM_Sans } from "next/font/google";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import { getDefaultMetadata } from "@/data/seoData";

// SEO metadata is read from public/seo-data.json — edit that file to update SEO
const defaultMeta = getDefaultMetadata();
const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-main",
  fallback: ["sans-serif"],
  adjustFontFallback: false,
});

export const metadata = {
  ...defaultMeta,
  icons: {
    icon: "/favicon.png",
  },
  verification: {
    google: "c2nLthPTW1ETb-9I5_NjWYu2YGUoeNBpGGMkbMsADXI",
  },
};

// Organization structured data for SEO
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Aries Ideas",
  url: "https://www.ideas.ariesmar.com",
  logo: "https://www.ideas.ariesmar.com/images/common/logo.png",
  description:
    "Aries Ideas specializes in advanced 3D laser scanning, intelligent modelling, geospatial and survey services for the marine, offshore, oil & gas, construction and industrial sectors.",
  foundingDate: "1998",
  founders: [{ "@type": "Person", name: "Dr. Sohan Roy" }],
  parentOrganization: {
    "@type": "Organization",
    name: "Aries Marine & Engineering Services",
    url: "https://www.ariesmar.com",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Tower 400 Building, 7th floor, Sharjah, UAE",
    addressLocality: "Sharjah",
    addressCountry: "AE",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "customer service",
      telephone: "+971 50 2134250",
      email: "commercial3dscan@ariesmar.com",
      areaServed: "AE",
    },
  ],
  sameAs: [
    "https://www.linkedin.com/company/ariesmarine-and-egineering-services",
    "https://www.facebook.com/ariesmarineengg",
  ],
  areaServed: { "@type": "Country", name: "United Arab Emirates" },
  keywords: [
    "3D laser scanning UAE",
    "surveying services",
    "total station survey",
    "GNSS survey UAE",
    "drone survey services UAE",
    "underwater survey",
    "3D modelling engineering UAE",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Aries Ideas Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "3D Laser Scanning",
          description:
            "High-accuracy 3D laser scanning and point cloud services for as-built documentation and reverse engineering.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "GNSS (GPS) Survey",
          description:
            "Global Navigation Satellite System surveying for precise geolocation and control networks.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Total Station Survey",
          description:
            "Total Station based surveying for engineering, construction and topographic mapping.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Tidal Survey",
          description:
            "Tidal observations and hydrographic survey services for marine and coastal projects.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "3D Hand Scanning",
          description:
            "Portable 3D hand scanning services for complex structures and equipment.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "3D Modelling",
          description:
            "Intelligent and non-intelligent 3D modelling for design, asset management and detailed engineering.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Visual Asset Management",
          description:
            "Visual asset inspection and digital twin creation for asset performance and lifecycle planning.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Additive Manufacturing",
          description:
            "Rapid prototyping and 3D printing services for industrial components and tooling.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Aerial Drone Survey",
          description:
            "UAV based aerial mapping, inspection, and visual survey services using certified drone operators.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Underwater Survey",
          description:
            "Hydrographic and underwater inspection services for marine infrastructure and offshore assets.",
        },
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
      </head>
      <body className={`${dmSans.className} ${dmSans.variable}`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NFXJZDD6"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        <Navbar />
        {children}
        <Footer />

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-C0CLT8XG91"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-C0CLT8XG91');
          `}
        </Script>

        {/* Google Tag Manager */}
        <Script id="gtm" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-NFXJZDD6');
          `}
        </Script>

        {/* reCAPTCHA */}
        <Script
          src="https://www.google.com/recaptcha/api.js"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
