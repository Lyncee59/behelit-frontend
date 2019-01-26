const handlePrivateRoutes = (app, server) => {
  server.get(`/admin`, async (req, res) => {
    app.render(req, res, '/admin')
  })

  server.get(`/admin/articles`, async (req, res) => {
    app.render(req, res, '/admin/articles')
  })
}

module.exports = {
  handlePrivateRoutes
}
