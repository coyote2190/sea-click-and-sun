import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  compiler: {
    styledComponents: {
      displayName: true,
      minify: true,
      ssr: true
    }
  }
};

export default nextConfig;
