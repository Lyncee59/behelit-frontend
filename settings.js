const NODE_ENV = process.env.NODE_ENV || 'development'
const NODE_CONFIG_SET = process.env.NODE_CONFIG_SET || 'local'
const NODE_API_PUBLIC = process.env.NODE_API_PUBLIC || 'http://localhost:9000' // "http://api-portfolio.behelit.uk"
const NODE_API_INTERNAL = process.env.NODE_API_INTERNAL || 'http://localhost:9000' // "http://api-portfolio.behelit.uk"
const NODE_PATHS_BASE = process.env.NODE_PATHS_BASE || 'http://www.behelit.uk'
const NODE_SERVER_PORT = process.env.NODE_SERVER_PORT || '4000'
const NODE_SERVER_PREFIX = process.env.NODE_SERVER_PREFIX || ''
const NODE_SETTINGS_GOOGLE_ANALYTICS_ID = process.env.NODE_SETTINGS_GOOGLE_ANALYTICS_ID || ''
const NODE_SETTINGS_LANGUAGE_COOKIE_NAME = process.env.NODE_SETTINGS_LANGUAGE_COOKIE_NAME || 'clang'
const NODE_SETTINGS_LANGUAGE_HEADER_NAME = process.env.NODE_SETTINGS_LANGUAGE_HEADER_NAME || 'x-behelit-language'

module.exports = {
  NODE_API_INTERNAL,
  NODE_API_PUBLIC,
  NODE_CONFIG_SET,
  NODE_ENV,
  NODE_PATHS_BASE,
  NODE_SERVER_PORT,
  NODE_SERVER_PREFIX,
  NODE_SETTINGS_GOOGLE_ANALYTICS_ID,
  NODE_SETTINGS_LANGUAGE_COOKIE_NAME,
  NODE_SETTINGS_LANGUAGE_HEADER_NAME
}
