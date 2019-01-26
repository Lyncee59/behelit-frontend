const next = require('next')
const compression = require('compression')
const express = require('express')
const settings = require('../settings')
const {
  handleCsp,
  handleLanguage,
  handleResources
} = require('./handlers')
const {
  handlePublicRoutes,
  handlePrivateRoutes,
  // handleSystemRoutes
} = require('./routing')


// Log settings at startup
console.log('Starting with settings:')
console.log(settings)

// Variables
const port = settings.NODE_SERVER_PORT
const dev = settings.NODE_CONFIG_SET === 'local'
const app = next({ dev })
const handle = app.getRequestHandler()

app
  .prepare()
  .then(() => {
    const server = express()

    // Add compression for responses (GZip)
    server.use(compression())

    // Add CSP
    handleCsp(server)

    // Handle resources
    handleResources(server, handle)

    // Handle language
    handleLanguage(server)

    // Handle public routes
    handlePublicRoutes(app, server)

    // Handle private routes
    handlePrivateRoutes(app, server)

    // Handle System routes
    // handleSystemRoutes(app, server)

    server.listen(port, (err) => {
      if (err) throw err
      console.log(`> Ready on http://localhost:${port}`)
    })
  })
  .catch((ex) => {
    console.error(ex.stack)
    process.exit(1)
  })