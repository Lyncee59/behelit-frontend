
import fetch from 'isomorphic-fetch'
import 'es6-promise'
import { config } from 'services/config'

const query = ({ method, endpoint, data }) => {
  const path = typeof window !== 'undefined' ? config.API_PUBLIC : config.API_INTERNAL

  let fetchOptions = {
    headers: {
      'Content-Type': 'application/json'
    },
    method
  }

  if (data) {
    fetchOptions.body = JSON.stringify(data)
  }

  return fetch(`${path}${endpoint}`, fetchOptions)
    .then((r) => (r.ok ? Promise.resolve(r) : Promise.reject(r)))
    .then((r) => r.json().catch(() => {}))
}

const get = ({ endpoint }) => query({ endpoint, method: 'GET' })

const post = ({ endpoint, data }) => query({ data, endpoint, method: 'POST' })

const put = ({ endpoint, data }) => query({ data, endpoint, method: 'PUT' })

const del = ({ endpoint }) => query({ endpoint, method: 'DELETE' })

export {
  get,
  post,
  put,
  del
}
