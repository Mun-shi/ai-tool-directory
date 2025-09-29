import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Simplified configuration since we're using optimized data URIs
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    // No external domains needed - using data URIs for fast loading
    domains: []
  }
};

export default nextConfig;
