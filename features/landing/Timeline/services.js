import { groupBy, prop } from 'ramda'

export const groupByCategory = (articles) => groupBy(prop('category'), articles)
