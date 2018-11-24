import URL from 'url-parse'
import getConfig from 'next/config'

const { publicRuntimeConfig: { SERVER_PREFIX } } = getConfig()

export const localizeUrl = (href, language) => {
  const url = new URL(href)
  const link = language === 'en' ? url : url.set('pathname', `${language}${url.pathname}`)
  return link.href
}

export const prefixUrl = (href) => {
  const url = new URL(href)
  const link = url.set('pathname', `${SERVER_PREFIX}${url.pathname}`)
  return link.href
}

export const localizeAndPrefixUrl = (href, language) => {
  const url = new URL(href)
  const link = url.set('pathname', `${language}${SERVER_PREFIX}${url.pathname}`)
  return link.href
}