require("dotenv").config({
  path: `./config/.env`,
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["github.com"],
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
