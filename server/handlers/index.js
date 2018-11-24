const { handleCsp } = require('./cspHandler')
const { handleLanguage } = require('./languageHandler')
const { handleResources } = require('./resourceHandler')

module.exports = {
  handleCsp,
  handleLanguage,
  handleResources
}