const fs = require('fs')
const path = require('path')
const withBundleAnalyzer = require('@zeit/next-bundle-analyzer')
const version = require('./package.json').version
const settings = require('./settings.js')


const supportedCategories = () => {
  const files = fs.readdirSync(__dirname + '/static/icons')
  return files.map(file => file.slice(0, -4))
}

const buildVersionName = () => {
  const configSet = settings.NODE_CONFIG_SET
  return configSet === 'production' ? version : `${version} (${configSet})`
}

const supportedLanguages = {
  'en': 'English'
}

const nextConfig = {
  analyzeServer: ['server', 'both'].includes(process.env.BUNDLE_ANALYZE),
  analyzeBrowser: ['browser', 'both'].includes(process.env.BUNDLE_ANALYZE),
  bundleAnalyzerConfig: {
    server: {
      analyzerMode: 'static',
      reportFilename: '../bundles/server.html'
    },
    browser: {
      analyzerMode: 'static',
      reportFilename: './bundles/client.html'
    }
  },
  assetPrefix: settings.NODE_SERVER_PREFIX,
  useFileSystemPublicRoutes: false,
  publicRuntimeConfig: {
    config: {
      ENV: settings.NODE_ENV,
      CONFIG_SET: settings.NODE_CONFIG_SET,
      API_PUBLIC: settings.NODE_API_PUBLIC,
      API_INTERNAL: settings.NODE_API_INTERNAL,
      PATHS_BASE: settings.NODE_PATHS_BASE,
      SERVER_PORT: settings.NODE_SERVER_PORT,
      SERVER_PREFIX: settings.NODE_SERVER_PREFIX,
      SETTINGS_GOOGLE_ANALYTICS_ID: settings.NODE_SETTINGS_GOOGLE_ANALYTICS_ID,
      SETTINGS_LANGUAGE_COOKIE_NAME: settings.NODE_SETTINGS_LANGUAGE_COOKIE_NAME,
      SETTINGS_LANGUAGE_HEADER_NAME: settings.NODE_SETTINGS_LANGUAGE_HEADER_NAME
    },
    supportedCategories: supportedCategories(),
    supportedLanguages,
    version: buildVersionName()
  },

  webpack(config) {
    config.resolve.modules = [
      path.resolve(process.cwd(), 'node_modules'),
      ...config.resolve.modules,
    ]

    // Inject __webpack_nonce__ in client bundle
    if (config.name === 'client') {
      const originalEntry = config.entry
      config.entry = async () => {
        const entries = await originalEntry()
        if (entries['main.js']) {
          entries['main.js'].push('./scripts/create-nonce.js')
        }
        return entries
      }
    }

    return config
  }
}

module.exports = withBundleAnalyzer(nextConfig)
