const nextTranslate = require('next-translate')

module.exports = nextTranslate({
  reactStrictMode: false,
  pageExtensions: ['mdx', 'jsx', 'js'],
  images: {
    domains: [],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
})
