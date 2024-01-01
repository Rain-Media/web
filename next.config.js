/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["swiperjs.com"],
  },
};

module.exports = nextConfig;

const withVideos = require('next-videos')

module.exports = withVideos()

/*const nextConfig = {
  images: {
    domains: ["swiperjs.com"],
  },
};

module.exports = nextConfig;

const withVideos = require('next-videos')

module.exports = withVideos()*/
