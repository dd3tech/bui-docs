const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure pageExtensions to include md and mdx
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  // Optionally, add any other Next.js config below
  reactStrictMode: true,
  webpack: (config) => {
    config.resolve.alias['@/*'] = path.join(__dirname, './src/*');
    return config;
  },
}

// Merge MDX config with Next.js config
module.exports = nextConfig