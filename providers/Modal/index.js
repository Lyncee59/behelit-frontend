import React from 'react'
import PropTypes from 'prop-types'

import { ModalBackground } from '@behelit/components'
import {
  ArticleCreate,
  ArticleDelete,
  ArticleEdit,
  ArticlePublish,
  ArticleUnpublish,
  CommentDelete,
  CommentPublish,
  CommentUnpublish,
  ProjectCreate,
  ProjectDelete,
  ProjectEdit,
  ProjectPublish,
  ProjectUnpublish,
  Contact,
  Login,
  Logout,
  ReviewDelete,
  ReviewPublish,
  ReviewUnpublish,
  TagCreate,
  TagDelete,
  TagEdit,
  UserCreate,
  UserDelete,
  UserEdit
} from 'modals'
import ModalPortal from './ModalPortal'

class Modal extends React.PureComponent {
  constructor (props) {
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
      case 'articleCreate': return <ArticleCreate onClose={this.handleClose} {...data} />
      case 'articleDelete': return <ArticleDelete onClose={this.handleClose} {...data} />
      case 'articleEdit': return <ArticleEdit onClose={this.handleClose} {...data} />
      case 'articlePublish': return <ArticlePublish onClose={this.handleClose} {...data} />
      case 'articleUnpublish': return <ArticleUnpublish onClose={this.handleClose} {...data} />
      case 'commentDelete': return <CommentDelete onClose={this.handleClose} {...data} />
      case 'commentPublish': return <CommentPublish onClose={this.handleClose} {...data} />
      case 'commentUnpublish': return <CommentUnpublish onClose={this.handleClose} {...data} />
      case 'projectCreate': return <ProjectCreate onClose={this.handleClose} {...data} />
      case 'projectDelete': return <ProjectDelete onClose={this.handleClose} {...data} />
      case 'projectEdit': return <ProjectEdit onClose={this.handleClose} {...data} />
      case 'projectPublish': return <ProjectPublish onClose={this.handleClose} {...data} />
      case 'projectUnpublish': return <ProjectUnpublish onClose={this.handleClose} {...data} />
      case 'login': return <Login onClose={this.handleClose} {...data} />
      case 'logout': return <Logout onClose={this.handleClose} {...data} />
      case 'reviewDelete': return <ReviewDelete onClose={this.handleClose} {...data} />
      case 'reviewPublish': return <ReviewPublish onClose={this.handleClose} {...data} />
      case 'reviewUnpublish': return <ReviewUnpublish onClose={this.handleClose} {...data} />
      case 'tagCreate': return <TagCreate onClose={this.handleClose} {...data} />
      case 'tagDelete': return <TagDelete onClose={this.handleClose} {...data} />
      case 'tagEdit': return <TagEdit onClose={this.handleClose} {...data} />
      case 'userCreate': return <UserCreate onClose={this.handleClose} {...data} />
      case 'userDelete': return <UserDelete onClose={this.handleClose} {...data} />
      case 'userEdit': return <UserEdit onClose={this.handleClose} {...data} />
    }
  }

  render () {
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

Modal.propTypes = {
  children: PropTypes.node.isRequired
}

export default Modal
