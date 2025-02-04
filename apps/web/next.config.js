/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'picsum.photos',
      'images.unsplash.com', 
      'source.unsplash.com',
      'media.licdn.com',
      'via.placeholder.com',
      'savbihar.ac.in',
      'www.daudnagarcollege.ac.in',
    ],
  },
}

module.exports = nextConfig