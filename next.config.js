/** @type {import('next').NextConfig} */
const nextConfig = {
  // experimental: {
  //   serverActions: true,
  //   serverComponentsExternalPackages: ['mongoose']
  // },
  images: {
    //use images.remotePattern instead of images.domain as it is deprecated
    remotePatterns: [
      {
        protocol: "https",
        hostname: "m.media-amazon.com",
        pathname: "/**",

      }
    ]
  },
};

module.exports = nextConfig;
