const { handlePublicRoutes } = require('./publicRoutes')
const { handlePrivateRoutes } = require('./privateRoutes')
const { handleSystemRoutes } = require('./systemRoutes')

module.exports = {
  handlePublicRoutes,
  handlePrivateRoutes,
  handleSystemRoutes,
}