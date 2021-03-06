import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { prop, screenSize } from '../Tools/interpolation'

const Wrapper = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style-type: none;

  @media (max-width: ${screenSize('sm')}) {
    & > li:first-child {
      border-top: none;
    }
  }

  @media (min-width: ${screenSize('sm')}) {
    display: ${(props) => props.toggled ? 'flex' : 'none'};
    flex-direction: row;
    align-items: center;
    height: auto;
    width: ${prop('width')};
  }
`

const NavbarNav = ({ children, ...rest }) => (
  <Wrapper {...rest}>{children}</Wrapper>
)

NavbarNav.propTypes = {
  children: PropTypes.node,
  toggled: PropTypes.bool,
  width: PropTypes.string,
}

NavbarNav.defaultProps = {
  toggled: true,
  width: '100%',
}

export default NavbarNav
