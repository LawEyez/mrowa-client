/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'hailer-images-bucket.s3.amazonaws.com',
      'images.pexels.com',
      'images.unsplash.com'
    ]
  }
}

module.exports = nextConfig
