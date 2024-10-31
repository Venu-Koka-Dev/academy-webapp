/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
              protocol: "https",
              hostname: "images.pexels.com",
          },      
          {
            protocol: "https",
            hostname: "flowbite.s3.amazonaws.com",
        },      
        ],
      },
};

export default nextConfig;


