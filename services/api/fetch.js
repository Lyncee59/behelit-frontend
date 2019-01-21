
import fetch from 'isomorphic-fetch'
import 'es6-promise'
import { isNil } from 'ramda'
import { config } from 'services/config'

const query = ({ method, endpoint, data, token }) => {
  const { API_PUBLIC, API_INTERNAL } = config
  const path = typeof window !== 'undefined' ? API_PUBLIC : API_INTERNAL
  const headers = !isNil(token)
    ? { 'Content-Type': 'application/json', 'x-access-token': token }
    : { 'Content-Type': 'application/json' }

  return fetch(`${path}${endpoint}`, { method, headers })
    .then((r) => (r.ok ? Promise.resolve(r) : Promise.reject(r)))
    .then((r) => r.json())
}

const get = ({ endpoint, data, token }) => query({ method: 'GET', endpoint, token })

const post = ({ endpoint, data, token }) => query({ method: 'POST', endpoint, data, token })

const put = ({ endpoint, data, token }) => query({ method: 'PUT', endpoint, data, token })

const del = ({ endpoint, data, token }) => query({ method: 'DELETE', endpoint, token })

export {
  get,
  post,
  put,
  del
}
