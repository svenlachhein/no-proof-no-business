/** @type {import('next').NextConfig} */
// Statischer Export fuer Hosting ohne Node.js (one.com).
// API: public/api/*.php, Server-Konfiguration: public/.htaccess
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
