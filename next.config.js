const path = require('path')
const withBundleAnalyzer = require('@zeit/next-bundle-analyzer')
const version = require('./package.json').version
const settings = require('./settings.js')

const buildVersionName = () => {
  const configSet = settings.NODE_CONFIG_SET
  return configSet === 'production' ? version : `${version} (${configSet})`
}

const supportedLanguages = {
  'id': 'Bahasa Indonesia',
  'ms': 'Bahasa Melayu',
  'de': 'Deutsch',
  'en': 'English',
  'fr': 'Français',
  'it': 'Italiano',
  'nl': 'Nederlands',
  'pl': 'Polski',
  'pt': 'Português',
  'ru': 'Русский',
  'ro': 'Română',
  'sv': 'Svenska',
  'vi': 'Tiếng',
  'tr': 'Türkçe',
  'cs': 'čeština',
  'uk': 'український',
  'zh': '中文(简体)',
  'ja': '日本語',
  'ko': '한국어',
  'th': 'ภาษาไทย',
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
    ENV: settings.NODE_ENV,
    CONFIG_SET: settings.NODE_CONFIG_SET,
    PATHS_BASE: settings.NODE_PATHS_BASE,
    SERVER_PORT: settings.NODE_SERVER_PORT,
    SERVER_PREFIX: settings.NODE_SERVER_PREFIX,
    SETTINGS_GOOGLE_ANALYTICS_ID: settings.NODE_SETTINGS_GOOGLE_ANALYTICS_ID,
    SETTINGS_LANGUAGE_COOKIE_NAME: settings.NODE_SETTINGS_LANGUAGE_COOKIE_NAME,
    SETTINGS_LANGUAGE_HEADER_NAME: settings.NODE_SETTINGS_LANGUAGE_HEADER_NAME,
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