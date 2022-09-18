/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['placeimg.com',
              'i.pravatar.cc',
            'external-preview.redd.it'],
  },
}

module.exports = nextConfig
