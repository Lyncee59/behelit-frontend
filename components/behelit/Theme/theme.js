/* eslint-disable sort-keys */
import { darken, lighten } from 'polished'
import palette from './palette'

const theme = {
  palette,
  fontPrimary: "'Roboto, sans-serif;",
  screenSizes: {
    sm: '48rem',
    md: '62rem',
    lg: '75rem'
  },
  buttonBackgroundColor: palette['crimson'],
  buttonColor: palette['white'],
  buttonHoverColor: darken(0.05, palette['crimson'])
}

export default theme
/* eslint-enable sort-keys */