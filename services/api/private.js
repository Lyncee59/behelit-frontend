import { del, get, post, put } from './fetch'
import { sortBy, prop } from 'ramda'

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

export const publishArticle = (id) => post({
  endpoint: '/admin/articles/publish',
  data: { id }
})

export const unpublishArticle = (id) => post({
  endpoint: '/admin/articles/unpublish',
  data: { id }
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
}).then(tags => sortBy(prop('title'), tags))

// =================================================
// ===================== USER ======================
// =================================================

export const createUser = (user) => post({
  endpoint: '/admin/users',
  data: user
})

export const deleteUser = (id) => del({
  endpoint: `/admin/users/${id}`
})

export const editUser = (user) => put({
  endpoint: '/admin/users',
  data: user
})

export const getUsers = () => get({
  endpoint: '/admin/users'
})
