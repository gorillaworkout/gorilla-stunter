/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  transpilePackages: ['three', '@react-three/fiber', '@react-three/drei'],
  webpack: (config) => {
    // Stub out React Native / Expo packages that @react-three/fiber v9
    // optionally depends on (for native platform support only)
    config.resolve.alias = {
      ...config.resolve.alias,
      'react-native': false,
      'expo-gl': false,
      'expo-asset': false,
      'expo-file-system': false,
      'expo': false,
    }
    return config
  },
}

export default nextConfig
