import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Text from '../Typography/Text'
import { screenSize, theme } from '../Tools/interpolation'

const Wrapper = styled(Text).attrs({
  size: '1rem',
  weight: 600,
})`
  color: ${theme('navbarDropdownTitleMobileColor')};

  @media (min-width: ${screenSize('sm')}) {
    color: ${theme('navbarDropdownTitleColor')};
  }
`

const NavbarDropdownItemTitle = ({ children, ...rest }) => (
  <Wrapper {...rest}>{children}</Wrapper>
)

NavbarDropdownItemTitle.propTypes = {
  children: PropTypes.node,
}

export default NavbarDropdownItemTitle
