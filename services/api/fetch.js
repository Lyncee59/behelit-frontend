
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

const get = ({ endpoint }) => query({ method: 'GET', endpoint })

const post = ({ endpoint, data }) => query({ method: 'POST', endpoint, data })

const put = ({ endpoint, data }) => query({ method: 'PUT', endpoint, data })

const del = ({ endpoint }) => query({ method: 'DELETE', endpoint })

export {
  get,
  post,
  put,
  del
}
