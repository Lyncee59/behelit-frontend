import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { FlatLoader } from '@behelit/components'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: ${(props) => props.height};
`
const LoadingScreen = ({ height }) => (
  <Wrapper height={height}>
    <FlatLoader />
  </Wrapper>
)

LoadingScreen.propTypes = {
  height: PropTypes.string
}

LoadingScreen.defaultProps = {
  height: 'auto'
}

export default LoadingScreen