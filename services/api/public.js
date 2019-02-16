import { get, post } from './fetch'

const createComment = comment => post({ data: comment, endpoint: '/comments' })

const createReview = review => post({ data: review, endpoint: '/reviews' })

const getArticle = (articleId) => get({ endpoint: `/articles/${articleId}` })

const getArticles = () => get({ endpoint: '/articles' })

const getComments = (articleId) => get({ endpoint: `/comments/${articleId}` })

const getProjects = () => get({ endpoint: '/projects' })

const getReviews = () => get({ endpoint: '/reviews' })

const login = (username, password) => post({ data: { password, username }, endpoint: '/token' })

const sendEmail = email => post({ data: email, endpoint: '/contact' })

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
