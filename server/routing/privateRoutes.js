const handlePrivateRoutes = (app, server) => {
  server.get(`/admin/articles`, async (req, res) => {
    app.render(req, res, '/admin/articles')
  })

  server.get(`/admin/comments`, async (req, res) => {
    app.render(req, res, '/admin/comments')
  })

  server.get(`/admin/projects`, async (req, res) => {
    app.render(req, res, '/admin/projects')
  })

  server.get(`/admin/reviews`, async (req, res) => {
    app.render(req, res, '/admin/reviews')
  })

  server.get(`/admin/tags`, async (req, res) => {
    app.render(req, res, '/admin/tags')
  })

  server.get(`/admin/users`, async (req, res) => {
    app.render(req, res, '/admin/users')
  })
}

module.exports = {
  handlePrivateRoutes
}
