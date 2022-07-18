/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: function (config, options) {
    if (!options.isServer) {
      config.resolve.fallback.fs = false;
    }
    // The config.experiments = { asyncWebAssembly: true }; line is for using wasm files.
    config.experiments = { asyncWebAssembly: true };
    return config;
  },
};

module.exports = nextConfig;
