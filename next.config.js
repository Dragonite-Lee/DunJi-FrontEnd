/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    distDir: 'build',
    images: {
        loader: 'akamai',
        path: '/',
    },
    // staticPageGenerationTimeout: 1000,
    
};
module.exports = nextConfig;
