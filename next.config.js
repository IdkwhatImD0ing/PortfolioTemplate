/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config) => {
    // load worker files as a urls with `file-loader`
    config.module.rules.unshift({
      test: /pdf\.worker\.(min\.)?js/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[contenthash].[ext]',
            publicPath: '_next/static/worker',
            outputPath: 'static/worker',
          },
        },
      ],
    })

    return config
  },
  pwa: {
    dest: 'public',
    register: true,
    skipWaiting: true,
  },
}

module.exports = withPWA(nextConfig)
