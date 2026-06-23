import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Lint is run separately; don't fail production builds on lint config mismatch.
  eslint: { ignoreDuringBuilds: true },
};

export default nextConfig;
