const handleResources = (app, handle) => {
  // Nonce generation
  app.use((req, res, next) => {
    const url = req.url
    // Check if the request concerns a page or assets
    const isPage = url.indexOf('/_next') === -1 && url.indexOf('/static') === -1
    if (!isPage) {
      console.log(`resource: ${req.url}`)
      return handle(req, res)
    }
    console.log(`page: ${req.url}`)
    next()
  })
}

module.exports = {
  handleResources
}
