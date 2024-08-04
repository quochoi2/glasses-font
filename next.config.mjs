import { dirname, join } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    config.resolve.alias['@components'] = join(__dirname, 'components')
    config.resolve.alias['@styles'] = join(__dirname, 'styles')
    config.resolve.alias['routes'] = join(__dirname, 'routes')
    config.resolve.alias['seeds'] = join(__dirname, 'seeds')
    config.resolve.alias['lib'] = join(__dirname, 'lib')
    return config
  }
}

export default nextConfig
