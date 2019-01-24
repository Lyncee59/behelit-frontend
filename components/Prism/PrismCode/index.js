import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import { FlatLoader, palette } from '@behelit/components'
import Prism from 'prismjs'
import Inline from './Inline'
import Multiline from './Multiline'

class PrismCode extends React.PureComponent {
  constructor (props) {
    super(props)
    this.state = { ready: false }
    this.containerRef = React.createRef()

  }

  componentDidMount() {
    this.setState({ ready: true })
    this.hightlight()
  }

  componentDidUpdate () {
    this.hightlight()
  }

  hightlight() {
    const node = ReactDOM.findDOMNode(this.containerRef.current)
    Prism.highlightElement(node, this.props.async)
  }

  render () {
    const { ready } = this.state
    const { code, language, inline } = this.props

    return inline
      ? <Inline code={code} ready={ready} ref={this.containerRef} />
      : <Multiline code={code} ready={ready} ref={this.containerRef} />
  }
}

PrismCode.propTypes = {
  children: PropTypes.string,
  inline: PropTypes.bool
}

PrismCode.defaultProps = {
  inline: false
}

export default PrismCode
