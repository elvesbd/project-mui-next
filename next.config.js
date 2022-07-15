/* module.exports = {
  async redirects() {
    return [
      {
        source: '/blog/post/:slug',
        destination: '/blog/:slug',
        permanent: true,
      },
    ]
  },
} */
// next.config.js
module.exports = {
  experimental: {
    forceSwcTransforms: true,
  },
}
