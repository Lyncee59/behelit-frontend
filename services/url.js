import URL from 'url-parse'
import getConfig from 'next/config'
import Router from 'next/router'
import { path } from 'ramda'
import { config } from './config'

export const localizeUrl = (href, language) => {
  const url = new URL(href)
  const link = language === 'en' ? url : url.set('pathname', `${language}${url.pathname}`)
  return link.href
}

export const prefixUrl = (href) => {
  const url = new URL(href)
  const link = url.set('pathname', `${config.SERVER_PREFIX}${url.pathname}`)
  return link.href
}

export const localizeAndPrefixUrl = (href, language) => {
  const url = new URL(href)
  const link = url.set('pathname', `${language}${config.SERVER_PREFIX}${url.pathname}`)
  return link.href
}

export const getRouterPathname = () => {
  return typeof window !== 'undefined' ? path(['router', 'pathname'], Router) : undefined
}
