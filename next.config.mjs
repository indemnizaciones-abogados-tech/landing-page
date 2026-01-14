/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: false,
  async redirects() {
    return [
      // Redirect www to non-www
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.indemnizacionesabogados.com' }],
        destination: 'https://indemnizacionesabogados.com/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
