/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com'],
  },
    webpack: (config, { isServer }) => {
        if (!isServer) {
          config.resolve = {
            ...config.resolve,
            fallback: {
              
              net: false,
              dns: false,
              tls: false,
              assert: false,
              
              path: false,
              fs: false,
              
              events: false,
              
              process: false
            }
          };
        }
        config.module.exprContextCritical = false; 
        config.plugins.push(new webpack.IgnorePlugin({ resourceRegExp: /^pg-native$/ }));
    
        return config;
    },
};

export default nextConfig;
