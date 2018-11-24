const { readFileSync } = require('fs')
const { contains } = require('ramda')
const Cookies = require('universal-cookie')
const { NODE_SETTINGS_LANGUAGE_HEADER_NAME } = require('../../settings.js')

// We need to expose React Intl's locale data on the request for the user's
// locale. This function will also cache the scripts by lang in memory.
const localeDataCache = new Map()

const getLocaleDataScript = function (locale) {
  const lang = locale.split('-')[0]
  if (!localeDataCache.has(lang)) {
    const localeDataFile = require.resolve(`react-intl/locale-data/${lang}`)
    const localeDataScript = readFileSync(localeDataFile, 'utf8')
    localeDataCache.set(lang, localeDataScript)
  }
  return localeDataCache.get(lang)
}

const getMessages = (locale) => require(`../../lang/locales/${locale}.json`)

const validLanguages = [
  'cs', 'de', 'en', 'es', 'fr',
  'id', 'it', 'ja', 'ko', 'ms',
  'nl', 'pl', 'pt', 'ro', 'ru',
  'sv', 'th', 'tr', 'uk', 'vi',
  'zh'
]

const handleLanguage = (app) => {
  // Nonce generation
  app.use(function (req, res, next) {
    // Get language from header x-blockchain-language
    const langHeader = req.get(NODE_SETTINGS_LANGUAGE_HEADER_NAME) || 'en'
    // Fix for zh-cn
    const languageCode = contains('zh', langHeader) ? 'zh' : langHeader
    // We check if the language is supported
    const isLanguageAvailable = contains(languageCode, validLanguages)
    const language = isLanguageAvailable ? languageCode : 'en'

    req.locale = language
    req.localeDataScript = getLocaleDataScript(language)
    req.messages = getMessages(language)
    res.setHeader('Content-Language', language)
    next()
  })
}

module.exports = {
  handleLanguage
}