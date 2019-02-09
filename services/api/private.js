/* eslint-disable */
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

export const getArticle = (id) => get({
  endpoint: `/admin/articles/${id}`,
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
// ==================== COMMENT ====================
// =================================================
export const deleteComment = (id) => del({
  endpoint: `/admin/comments/${id}`
})

export const getComments = () => get({
  endpoint: '/admin/comments'
})

export const publishComment = (id) => post({
  endpoint: '/admin/comments/publish',
  data: { id }
})

export const unpublishComment = (id) => post({
  endpoint: '/admin/comments/unpublish',
  data: { id }
})

// =================================================
// ==================== PROJECT ====================
// =================================================
export const createProject = (project) => post({
  endpoint: '/admin/projects',
  data: project
})

export const deleteProject = (id) => del({
  endpoint: `/admin/projects/${id}`
})

export const editProject = (project) => put({
  endpoint: '/admin/projects',
  data: project
})

export const getProject = (id) => get({
  endpoint: `/admin/projects/${id}`
})

export const getProjects = () => get({
  endpoint: '/admin/projects'
})

export const publishProject = (id) => post({
  endpoint: '/admin/projects/publish',
  data: { id }
})

export const unpublishProject = (id) => post({
  endpoint: '/admin/projects/unpublish',
  data: { id }
})

// =================================================
// ==================== REVIEW =====================
// =================================================

export const createReview = (review) => post({
  endpoint: '/admin/reviews',
  data: review
})

export const deleteReview = (id) => del({
  endpoint: `/admin/reviews/${id}`
})

export const editReview = (review) => put({
  endpoint: '/admin/reviews',
  data: review
})

export const getReview = (id) => get({
  endpoint: `/admin/reviews/${id}`
})

export const getReviews = () => get({
  endpoint: '/admin/reviews'
})

export const publishReview = (id) => post({
  endpoint: '/admin/reviews/publish',
  data: { id }
})

export const unpublishReview = (id) => post({
  endpoint: '/admin/reviews/unpublish',
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

export const getTag = (id) => get({
  endpoint: `/admin/tags/${id}`
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

export const getUser = (id) => get({
  endpoint: `/admin/users/${id}`
})

export const getUsers = () => get({
  endpoint: '/admin/users'
})
/* eslint-enable */
