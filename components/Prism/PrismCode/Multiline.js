import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { FlatLoader, palette } from '@behelit/components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  min-height: 200px;
  padding: 0.5rem 1rem;
  box-sizing: border-box;
  background: ${palette('white')};
`
const Multiline = ({ code, language, ready, ...rest }) => !ready ? (
  <Wrapper {...rest}>
    <FlatLoader height="40px" width="200px" />
  </Wrapper>
) : (
  <pre className={`language-${language}`} {...rest}><code>{code}</code></pre>
)

Multiline.propTypes = {
  code: PropTypes.string,
  language: PropTypes.node,
  ready: PropTypes.bool
}

Multiline.defaultProps = {
  language: 'javascript',
  ready: false
}

export default Multiline
