import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  // next dev würde sonst bei jedem Start einen Block an CLAUDE.md anhängen
  agentRules: false,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
