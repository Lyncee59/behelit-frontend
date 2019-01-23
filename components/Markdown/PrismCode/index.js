import React from 'react'
import { PropTypes } from 'prop-types'

import Style from './style'
import Prism from 'prismjs'

class PrismCode extends React.PureComponent {
  componentDidMount() {
    this._hightlight()
  }

  componentDidUpdate() {
    this._hightlight()
  }

  _hightlight() {
    Prism.highlightElement(this._domNode, this.props.async)
  }

  _handleRefMount = (domNode) => {
    this._domNode = domNode
  }

  render () {
    const { code, language, inline } = this.props

    return (
      <React.Fragment>
        <Style />
        { inline 
          ? <code ref={this._handleRefMount} className={`language-${language}`}>{code}</code>
          : <pre ref={this._handleRefMount} className={`language-${language}`}><code>{code}</code></pre>
        }
      </React.Fragment>
    )
  }
}

PrismCode.propTypes = {
  children: PropTypes.string,
  language: PropTypes.node,
  inline: PropTypes.bool
}

PrismCode.defaultProps = {
  language: 'javascript',
  inline: false
}

export default PrismCode
