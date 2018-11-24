const NODE_ENV = process.env.NODE_ENV || "development"
const NODE_CONFIG_SET = process.env.NODE_CONFIG_SET || "local"
const NODE_PATHS_BASE = process.env.NODE_PATHS_BASE || "https://www.behelit.co.uk"
const NODE_SERVER_PORT = process.env.NODE_SERVER_PORT || "8080"
const NODE_SERVER_PREFIX = process.env.NODE_SERVER_PREFIX || ""
const NODE_SETTINGS_GOOGLE_ANALYTICS_ID = process.env.NODE_SETTINGS_GOOGLE_ANALYTICS_ID || ""
const NODE_SETTINGS_LANGUAGE_COOKIE_NAME = process.env.NODE_SETTINGS_LANGUAGE_COOKIE_NAME || "clang"
const NODE_SETTINGS_LANGUAGE_HEADER_NAME = process.env.NODE_SETTINGS_LANGUAGE_HEADER_NAME || "x-behelit-language"

module.exports = {
  NODE_ENV,
  NODE_CONFIG_SET,
  NODE_PATHS_BASE,
  NODE_SERVER_PORT,
  NODE_SERVER_PREFIX,
  NODE_SETTINGS_GOOGLE_ANALYTICS_ID,
  NODE_SETTINGS_LANGUAGE_COOKIE_NAME,
  NODE_SETTINGS_LANGUAGE_HEADER_NAME
}
