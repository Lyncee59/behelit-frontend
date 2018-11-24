import React from 'react'
import { merge } from 'ramda'

// import { theme, ThemeProvider } from '@behelit/components'

const customTheme = merge(theme, {
  fontPrimary: "Roboto,sans-serif",
})

export default ({ children }) => (
  <ThemeProvider theme={customTheme}>{children}</ThemeProvider>
)
