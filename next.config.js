/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    // Suppress the punycode warning
    config.ignoreWarnings = [
      { module: /node_modules\/punycode/ }
    ];
    return config;
  },
  images: {
    domains: ['img.shields.io', 'raw.githubusercontent.com'],
    unoptimized: true,
  },
  // Enable experimental features
  experimental: {
    optimizeCss: true,
    scrollRestoration: true,
  }
}

module.exports = nextConfig
