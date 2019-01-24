import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { FlatLoader, palette } from '@behelit/components'
import Prism from 'prismjs'

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
class Multiline extends React.PureComponent {
  render () {
    const { code, language, ready, ...rest } = this.props

    return !ready ? (
      <Wrapper {...rest}>
        <FlatLoader width="200px" height="40px" />
      </Wrapper>
    ) : (
      <pre className={`language-${language}`} {...rest}><code>{code}</code></pre>
    )
  }
}

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
