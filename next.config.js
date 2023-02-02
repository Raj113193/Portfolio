/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'nvbdbg.dm.files.1drv.com',
        port: '',
        pathname: '/1/**',
      },
    ],
  },
}