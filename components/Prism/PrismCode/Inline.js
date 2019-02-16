import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { FlatLoader, palette } from '@behelit/components'

const Wrapper = styled.span`
  display: inline-block;
  padding: 0.2rem 0.4rem;
  box-sizing: border-box;
  background: ${palette('white')};
`

const Inline = ({ code, language, ready, ...rest }) => !ready ? (
  <Wrapper {...rest}>
    <FlatLoader height="15px" width="70px" />
  </Wrapper>
) : (
  <code className={`language-${language}`} {...rest}>{code}</code>
)

Inline.propTypes = {
  code: PropTypes.string,
  language: PropTypes.node,
  ready: PropTypes.bool
}

Inline.defaultProps = {
  language: 'javascript',
  ready: false
}

export default Inline
