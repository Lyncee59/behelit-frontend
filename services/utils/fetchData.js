/* eslint-disable no-console */
import { config } from 'services/config'

const fetchData = async (context, providers) => {
  try {
    const keys = Object.keys(providers)
    if (config.CONFIG_SET === 'local') {
      console.time('fetchData')
      const timeStart = Date.now()
      keys.forEach((k) =>
        providers[k].then(() => {
          let dTime = Date.now() - timeStart
          console.log(`  -> ${k} ~ ${dTime.toFixed(2)}ms`)
        }),
      )
    }

    const results = await Promise.all(keys.map((k) => providers[k]))

    const props = keys
      .map((key, i) => ({ key, result: results[i] }))
      .reduce(
        (acc, data) => Object.assign(acc, { [data.key]: data.result }),
        {},
      )

    if (config.CONFIG_SET === 'local') {
      console.timeEnd('fetchData')
    }

    return props
  } catch (error) {
    if (context.res) {
      context.res.redirect(`${config.PATHS_BASE}/error`)
    } else if (typeof window !== 'undefined') {
      window.location = `${config.PATHS_BASE}/error`
    }
  }
}

export default fetchData
/* eslint-enable no-console */
