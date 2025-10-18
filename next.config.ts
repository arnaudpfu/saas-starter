import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  nodeMiddleware: true,
  experimental: {
    ppr: true,
    clientSegmentCache: true,
  }
};

export default nextConfig;
