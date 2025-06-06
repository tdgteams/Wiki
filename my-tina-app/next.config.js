/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  reactStrictMode: true,
  assetPrefix: isProd ? '/admin/' : '',
  basePath: isProd ? '/admin' : '',
  trailingSlash: true, // required to generate proper static paths

  async redirects() {
    return [
      {
        source: '/',
        destination: '/admin',
        permanent: false,
      },
    ]
  },

  // ✅ This is the key line to bypass the hostname restriction
  env: {
    NEXT_DISABLE_HOST_CHECK: 'true',
  },
}

module.exports = nextConfig
