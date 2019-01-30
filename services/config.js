import getConfig from 'next/config'
import { path } from 'ramda'

export const config = path(['publicRuntimeConfig', 'config'], getConfig())

export const version = path(['publicRuntimeConfig', 'version'], getConfig())

export const categories = path(['publicRuntimeConfig', 'supportedCategories'], getConfig())
