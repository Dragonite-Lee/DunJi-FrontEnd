/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    distDir: 'build',
    images: {
        loader: 'akamai',
        path: '/',
    },
    
};
const withImages = require('next-images')
module.exports = withImages({
  inlineImageLimit: 16384,
  webpack(config, options) {
    return config
  }
});
module.exports = nextConfig;
