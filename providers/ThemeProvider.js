import React from 'react'
import PropTypes from 'prop-types'
import { merge } from 'ramda'

import { DefaultTheme, DefaultPalette, ThemeProvider } from '@behelit/components'

const customPalette = merge(DefaultPalette, {
  cerulean: '#007BA7',
  gold: '#FFD700',
  green: '#009900'
})

const customTheme = merge(DefaultTheme, {
  fontPrimary: 'Roboto,sans-serif',
  palette: customPalette
})

const CustomThemeProvider = ({ children }) => (
  <ThemeProvider theme={customTheme}>{children}</ThemeProvider>
)

CustomThemeProvider.propTypes = {
  children: PropTypes.node.isRequired
}

export default CustomThemeProvider
