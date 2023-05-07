/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    serverComponentsExternalPackages:["mongoose"],
  },
  images:{
    domains:['occ-0-3933-116.1.nflxso.net','occ-0-2430-448.1.nflxso.net']
  }
}

module.exports = nextConfig
