import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  compiler: {
    styledComponents: {
      displayName: false,
      fileName: false,
      minify: true,
      pure: true,
      ssr: true
    }
  }
};

export default nextConfig;
