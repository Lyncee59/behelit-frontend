/* eslint-disable react/no-find-dom-node */
import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Prism from 'prismjs'

import { FlatLoader, palette } from '@behelit/components'

const Wrapper = styled.span`
  display: inline-flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0.2rem 0.4rem;
  box-sizing: border-box;
  background: ${palette('white')};
`

class Inline extends React.PureComponent {
  constructor (props) {
    super(props)
    this.state = { ready: false }
    this.containerRef = React.createRef()
  }

  componentDidMount () {
    this.setState({ ready: true })
    this.hightlight()
  }

  hightlight () {
    const node = ReactDOM.findDOMNode(this.containerRef.current)
    Prism.highlightElement(node, false)
  }

  render () {
    const { ready } = this.state
    const { code, language } = this.props

    return !ready ? (
      <Wrapper ref={this.containerRef}>
        <FlatLoader height="15px" width="70px" />
      </Wrapper>
    ) : (
      <code className={`language-${language}`} ref={this.containerRef}>{code}</code>
    )
  }
}

Inline.propTypes = {
  code: PropTypes.string,
  language: PropTypes.node
}

Inline.defaultProps = {
  language: 'javascript'
}

export default Inline
/* eslint-enable react/no-find-dom-node */
