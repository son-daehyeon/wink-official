require("dotenv").config({
  path: `./config/.env`,
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com'
      }
    ]
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
