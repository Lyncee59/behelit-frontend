const handlePublicRoutes = (app, server) => {
  server.get(`/`, async (req, res) => {
    app.render(req, res, '/landing')
  })

  server.get(`/projects`, async (req, res) => {
    app.render(req, res, '/projects')
  })

  server.get(`/reviews`, async (req, res) => {
    app.render(req, res, '/reviews')
  })

  server.get(`/contact`, async (req, res) => {
    app.render(req, res, '/contact')
  })

  server.get(`/about`, async (req, res) => {
    app.render(req, res, '/about')
  })
}

module.exports = {
  handlePublicRoutes
}
