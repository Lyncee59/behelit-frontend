import { get, post, put } from './fetch'

export const createArticle = (article) => post({
  endpoint: '/articles',
  data: article
})

export const deleteArticle = (id) => del({
  endpoint: `/articles/${id}`
})

export const editArticle = (article) => put({
  endpoint: '/articles',
  data: article
})

export const getArticles = () => get({
  endpoint: '/articles',
})

export const publishArticle = (article) => post({
  endpoint: '/articles/publish',
  data: article
})

export const unpublishArticle = (article) => post({
  endpoint: '/articles/unpublish',
  data: article
})
