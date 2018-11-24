const csp = require('helmet-csp')
const uuidv4 = require('uuid/v4')
const { uniq } = require('ramda')
const parse = require('url-parse')
const settings = require('../../settings')

const { NODE_CONFIG_SET } = settings
const extractDomain = (url) => parse(url, true).origin
const filterDuplicates = (domains) => uniq(domains)
const urls = []
const domains = filterDuplicates(urls.map(extractDomain))

const handleCsp = (app) => {
  // Nonce generation
  app.use(function (req, res, next) {
    res.locals.nonce = uuidv4()
    next()
  })

  const nonce = (req, res) => `'nonce-${res.locals.nonce}'`
  // Content Security Policy: cf. https://www.npmjs.com/package/helmet-csp
  const directives = {
    defaultSrc: ["'none'"],
    connectSrc: ["'self'", 'https://www.google-analytics.com', 'https://stats.g.doubleclick.net'].concat(domains),
    scriptSrc: ["'self'", 'https://www.google-analytics.com', 'data:', nonce],
    styleSrc: ["'self'", 'https://www.google.com', 'https://fonts.googleapis.com', 'data:', nonce],
    fontSrc: ["'self'", 'https://fonts.gstatic.com', 'data:', nonce],
    imgSrc: ["'self'", 'https://www.google.com/', 'https://www.google.co.uk/', 'https://www.google-analytics.com', 'https://stats.g.doubleclick.net', 'data:', nonce],
    objectSrc: ["'none'"],
    upgradeInsecureRequests: false,
    workerSrc: false  // This is not set.
  }

  if (NODE_CONFIG_SET === 'local') {
    // To make everything work fine locally (HMR unhappy with styled-component nonce)
    directives.styleSrc = ["'self'", 'https://www.google.com', 'https://fonts.googleapis.com', "'unsafe-inline'", 'data:']
    directives.scriptSrc.push("'unsafe-eval'")
  }

  app.use(csp({
    directives,
    loose: true,
    reportOnly: false,
    setAllHeaders: false,
    disableAndroid: false,
    browserSniff: true
  }))
}

module.exports = {
  handleCsp
}