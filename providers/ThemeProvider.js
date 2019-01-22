import React from 'react'
import { merge } from 'ramda'

import { DefaultTheme, ThemeProvider } from '@behelit/components'

const customTheme = merge(DefaultTheme, {
  fontPrimary: "Roboto,sans-serif",
  xslightgray: '#F3F3F3'
})

export default ({ children }) => (
  <ThemeProvider theme={customTheme}>{children}</ThemeProvider>
)
