const handlePublicRoutes = (app, server) => {
  server.get(`/`, async (req, res) => {
    app.render(req, res, '/landing')
  })
}

module.exports = {
  handlePublicRoutes
}
