import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Container } from '@behelit/components'

const OrientWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 4.5rem;
  background-color: ${(props) => props.theme.palette['bigStone']};
  z-index: 100;
  opacity: 1;
  transform: translate(0px, 0px);
  transition: transform 0.4s ease 0s;
`

const StickyContainer = ({ children, enabled }) => {
  return enabled ? (
    <OrientWrapper>
      <Container>{children}</Container>
    </OrientWrapper>
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