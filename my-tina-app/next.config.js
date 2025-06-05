/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  reactStrictMode: true,
  assetPrefix: isProd ? '/admin/' : '',
  basePath: isProd ? '/admin' : '',
  trailingSlash: true, // required to generate proper static paths

  // Optional: This helps avoid 404s on direct page reloads
  async redirects() {
    return [
      {
        source: '/',
        destination: '/admin',
        permanent: false,
      },
    ]
  },
}
