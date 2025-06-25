import { NextConfig } from "next";

const nextConfig: NextConfig = {
  // …your existing settings…

  // add this block:
  eslint: {
    // Warning: only do this if you’re okay shipping with lint errors
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
