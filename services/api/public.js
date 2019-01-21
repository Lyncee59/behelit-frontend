import { get, post } from './fetch'

const createComment = comment => post({ endpoint: '/comments', data: comment })

const createReview = review => post({ endpoint: '/reviews', data: review })

const getArticle = (id) => get({ endpoint: `/articles/${id}` })

const getArticles = () => get({ endpoint: '/articles' })

const getComments = (articleId) => get({ endpoint: `/comments/${articleId}` })

const getProjects = () => get({ endpoint: '/projects' })

const getReviews = () => get({ endpoint: '/reviews' })

const login = (username, password) => post({ endpoint: '/token', data: { username, password } })

const sendEmail = email => post({ endpoint: '/contact', data: email })

export {
  createComment,
  createReview,
  getArticle,
  getArticles,
  getComments,
  getProjects,
  getReviews,
  login,
  sendEmail
}
