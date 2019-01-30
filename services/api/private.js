import { get, post, put } from './fetch'

// =================================================
// ==================== ARTICLE ====================
// =================================================
export const createArticle = (article) => post({
  endpoint: '/admin/articles',
  data: article
})

export const deleteArticle = (id) => del({
  endpoint: `/admin/articles/${id}`
})

export const editArticle = (article) => put({
  endpoint: '/admin/articles',
  data: article
})

export const getArticles = () => get({
  endpoint: '/admin/articles',
})

export const publishArticle = (article) => post({
  endpoint: '/admin/articles/publish',
  data: article
})

export const unpublishArticle = (article) => post({
  endpoint: '/admin/articles/unpublish',
  data: article
})

// =================================================
// ====================== TAG ======================
// =================================================
export const createTag = (tag) => post({
  endpoint: '/admin/tags',
  data: tag,
})

export const deleteTag = (id) => del({
  endpoint: `/admin/tags/${id}`
})

export const editTag = (tag) => put({
  endpoint: '/admin/tags',
  data: tag
})

export const getTags = () => get({
  endpoint: '/admin/tags'
})
