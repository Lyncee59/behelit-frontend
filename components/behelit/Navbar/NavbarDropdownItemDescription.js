import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Text from '../Typography/Text'
import { screenSize, theme } from '../Tools/interpolation'


const Wrapper = styled(Text).attrs({
  size: '0.875rem',
  weight: 500,
})`
  color: ${theme('navbarDropdownDescriptionMobileColor')};

  @media (min-width: ${screenSize('sm')}) {
    color: ${theme('navbarDropdownDescriptionColor')};
  }
`

const NavbarDropdownItemDescription = ({ children, ...rest }) => (
  <Wrapper {...rest}>{children}</Wrapper>
)

NavbarDropdownItemDescription.propTypes = {
  children: PropTypes.node,
}

export default NavbarDropdownItemDescription
