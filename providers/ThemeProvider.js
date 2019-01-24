import React from 'react'
import { merge } from 'ramda'

import { DefaultTheme, DefaultPalette, ThemeProvider } from '@behelit/components'

const customPalette = merge(DefaultPalette, {
  cerulean: '#007BA7'
})

const customTheme = merge(DefaultTheme, {
  fontPrimary: "Roboto,sans-serif",
  palette: customPalette
})

export default ({ children }) => (
  <ThemeProvider theme={customTheme}>{children}</ThemeProvider>
)
