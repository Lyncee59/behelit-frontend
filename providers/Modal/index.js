import React from 'react'
import PropTypes from 'prop-types'

import { Contact, CreateArticle, EditArticle, DeleteArticle } from 'modals'
import ModalPortal from './ModalPortal'

class Modal extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = { opened: false }
    this.handleOpen = this.handleOpen.bind(this)
    this.handleClose = this.handleClose.bind(this)
    this.renderModals = this.renderModals.bind(this)
  }

  handleOpen () {
    this.setState({ opened: true })
  }

  handleClose () {
    this.setState({ opened: false })
  }

  renderModals () {
    if (this.state.opened) {
      switch (this.props.name) {
        case 'contact': return <Contact handleClose={this.handleClose} />
        case 'createArticle': return <CreateArticle handleClose={this.handleClose} />
        case 'editArticle': return <EditArticle handleClose={this.handleClose} />
        case 'deleteArticle': return <DeleteArticle handleClose={this.handleClose} />
      }
    }
  }

  render() {
    const { opened } = this.props
    const { children, ...rest } = this.props

    const childrenWithProps = React.Children.map(children, child =>
      React.cloneElement(child, { onClick: this.handleOpen, ...rest })
    )

    return (
      <React.Fragment>
        {childrenWithProps}
        {typeof window !== 'undefined' &&
          <ModalPortal>
            {this.renderModals()}
          </ModalPortal>
        }
      </React.Fragment>
    )
  }
}

export default Modal
