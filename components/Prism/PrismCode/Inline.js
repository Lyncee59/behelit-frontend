import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { FlatLoader, palette } from '@behelit/components'
import Prism from 'prismjs'

const Wrapper = styled.span`
  display: inline-block;
  padding: 0.2rem 0.4rem;
  box-sizing: border-box;
  background: ${palette('white')};
`

class Inline extends React.PureComponent {
  render () {
    const { code, language, ready, ...rest } = this.props

    return !ready ? (
      <Wrapper {...rest}>
        <FlatLoader width="70px" height="15px" />
      </Wrapper>
    ) : (
      <code className={`language-${language}`} {...rest}>{code}</code>
    )
  }
}

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
