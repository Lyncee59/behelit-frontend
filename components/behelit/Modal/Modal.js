import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { prop, screenSize, theme } from '../Tools/interpolation'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  background-color: ${theme('modalForegroundColor')};

  @media (min-width: ${screenSize('sm')}) {
    width: ${prop('width')};
    height: auto;
    border-radius: 5px;
  }
`

const Modal = ({ children, ...rest }) => (
  <Wrapper {...rest}>{children}</Wrapper>
)

Modal.propTypes = {
  children: PropTypes.node,
  width: PropTypes.string,
}

Modal.defaultProps = {
  width: '50%',
}

export default Modal
