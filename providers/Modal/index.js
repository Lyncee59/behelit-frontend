import React from 'react'

import { ModalBackground } from '@behelit/components'
import {
  Contact,
  CreateArticle,
  EditArticle,
  DeleteArticle,
  Login,
  Logout,
  PublishArticle,
  UnpublishArticle
} from 'modals'
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

  renderModals ({ name, data }) {
    switch (name) {
      case 'contact': return <Contact onClose={this.handleClose} {...data} />
      case 'createArticle': return <CreateArticle onClose={this.handleClose} {...data} />
      case 'editArticle': return <EditArticle onClose={this.handleClose} {...data} />
      case 'deleteArticle': return <DeleteArticle onClose={this.handleClose} {...data} />
      case 'login': return <Login onClose={this.handleClose} {...data} />
      case 'logout': return <Logout onClose={this.handleClose} {...data} />
      case 'publishArticle': return <PublishArticle onClose={this.handleClose} {...data} />
      case 'unpublishArticle': return <UnpublishArticle onClose={this.handleClose} {...data} />
    }
  }

  render() {
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
                {this.renderModals(rest)}
              </ModalBackground>
            }
          </ModalPortal>
        }
      </React.Fragment>
    )
  }
}

export default Modal
