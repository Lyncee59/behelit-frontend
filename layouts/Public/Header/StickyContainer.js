import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Container, palette } from '@behelit/components'

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  z-index: 100;
  opacity: 1;
  transform: translateZ(0);
  transition: transform 0.4s ease 0s;
  background-color: ${palette('black90')};
`

const StickyContainer = ({ children, enabled }) => {
  return enabled ? (
    <Wrapper>
      <Container>{children}</Container>
    </Wrapper>
  ) : (
      <Container>{children}</Container>
    )
}

StickyContainer.propTypes = {
  children: PropTypes.node,
  enabled: PropTypes.bool,
}

StickyContainer.defaultProps = {
  enabled: false,
}

export default StickyContainer
