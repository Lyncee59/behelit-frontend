const handlePublicRoutes = (app, server) => {
  server.get(`/`, async (req, res) => {
    app.render(req, res, '/landing')
  })

  server.get(`/about`, async (req, res) => {
    app.render(req, res, '/about')
  })

  server.get(`/article/:id`, async (req, res) => {
    app.render(req, res, '/article')
  })

  server.get(`/login`, async (req, res) => {
    app.render(req, res, '/login')
  })

  server.get(`/projects`, async (req, res) => {
    app.render(req, res, '/projects')
  })

  server.get(`/reviews`, async (req, res) => {
    app.render(req, res, '/reviews')
  })
}

module.exports = {
  handlePublicRoutes
}
