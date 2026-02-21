/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Remove trailing slashes
      {
        source: "/:path+/",
        destination: "/:path+",
        permanent: true,
      },
      // Redirect non-www to www
      {
        source: "/:path*",
        has: [
          {
            type: "header",
            key: "host",
            value: "ideas.ariesmar.com",
          },
        ],
        destination: "https://www.ideas.ariesmar.com/:path*",
        permanent: true,
      },
    ];
  },
  images: {
    formats: ["image/webp"],
  },
};

export default nextConfig;
