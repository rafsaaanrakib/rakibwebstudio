/** @type {import('next').NextConfig} */
const nextConfig = {
  // Fully static: every page is SSG, and the build can be exported as plain
  // HTML/CSS/JS, which keeps the site comfortably inside Vercel Hobby limits
  // (no server functions, no database, no hosted media).
  output: "export",
  images: { unoptimized: true },
  trailingSlash: false,
};

module.exports = nextConfig;
