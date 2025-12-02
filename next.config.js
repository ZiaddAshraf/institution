/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove 'output: export' to enable API routes on Vercel
  // output: 'export', // Commented out - use SSR for API routes
  images: {
    unoptimized: true,
  },
  // trailingSlash: true, // May cause issues with API routes
  // Disable experimental features that may cause issues
  experimental: {},
}

module.exports = nextConfig
