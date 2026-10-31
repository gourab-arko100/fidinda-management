import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  eslint: { ignoreDuringBuilds: true },

  /**
   * Redirects for old URLs (e.g. from the previous combined fidindasolutions.com site).
   * Uncomment the entries you need. `permanent: true` sends a 308 (SEO-friendly) redirect.
   */
  async redirects() {
    return [
      // {
      //   source: "/registration-and-licensing",
      //   destination: "/services/registration-and-licensing",
      //   permanent: true,
      // },
      // {
      //   source: "/contract-management-and-project-management",
      //   destination: "/services/contract-and-project-management",
      //   permanent: true,
      // },
      // {
      //   source: "/software-applications-and-cloud-services",
      //   destination: "/services/software-and-cloud",
      //   permanent: true,
      // },
      // {
      //   source: "/research-analysis-and-advisory",
      //   destination: "/services/research-analysis-advisory",
      //   permanent: true,
      // },
      // {
      //   source: "/training-and-capacity-building",
      //   destination: "/services/training-and-capacity-building",
      //   permanent: true,
      // },
    ];
  },
};

export default nextConfig;
