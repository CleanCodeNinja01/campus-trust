import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: {
    allowedDevOrigins: [
      "http://9000-firebase-campustrust-1767537644211.cluster-cz5nqyh5nreq6ua6gaqd7okl7o.cloudworkstations.dev",
      "https://9000-firebase-campustrust-1767537644211.cluster-cz5nqyh5nreq6ua6gaqd7okl7o.cloudworkstations.dev",
    ],
  },
};

export default nextConfig;
