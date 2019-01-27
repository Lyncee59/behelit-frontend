import React from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'

class ModalPortal extends React.PureComponent {
  constructor(props) {
    super(props)
    this.el = document.createElement('div')
  }

  componentDidMount() {
    document.getElementById('modal-root').appendChild(this.el)
  }

  componentWillUnmount() {
    const { callback } = this.props
    if (callback) { callback() }
    document.getElementById('modal-root').removeChild(this.el)
  }

  render() {
    return ReactDOM.createPortal(this.props.children, this.el)
  }
}

ModalPortal.propTypes = {
  children: PropTypes.node.isRequired,
  callback: PropTypes.func
}

export default ModalPortal
