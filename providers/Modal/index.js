import React from 'react'
import PropTypes from 'prop-types'

import { ModalBackground } from '@behelit/components'
import { Contact, CreateArticle, EditArticle, DeleteArticle, Login, Logout } from 'modals'
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
    switch (this.props.name) {
      case 'contact': return <Contact handleClose={this.handleClose} />
      case 'createArticle': return <CreateArticle handleClose={this.handleClose} />
      case 'editArticle': return <EditArticle handleClose={this.handleClose} />
      case 'deleteArticle': return <DeleteArticle handleClose={this.handleClose} />
      case 'login': return <Login handleClose={this.handleClose} />
      case 'logout': return <Logout handleClose={this.handleClose} />
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
            {this.state.opened &&
              <ModalBackground>
                {this.renderModals()}
              </ModalBackground>
            }
          </ModalPortal>
        }
      </React.Fragment>
    )
  }
}

export default Modal
