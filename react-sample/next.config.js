/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    API_URL: "http://localhost:8081/service/backend/api",
    },
}

module.exports = nextConfig
