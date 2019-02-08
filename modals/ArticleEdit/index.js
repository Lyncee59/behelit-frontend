import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { getArticle, getTags, getUsers } from 'services/api/private'
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalToggler
} from '@behelit/components'
import { EditIcon } from 'components/Icons'
import LoadingScreen from 'components/LoadingScreen'
import { GrayText } from 'components/Typography'
import ArticleEditForm from './ArticleEditForm'

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  & > :not(:first-child) { margin-left: 0.5rem; }
`

class ArticleEdit extends React.PureComponent {
  constructor (props) {
    super(props)
    this.state = {
      article: {},
      loading: true,
      tags: [],
      users: []
    }
  }

  componentDidMount () {
    const { id } = this.props
    Promise.all([getArticle(id), getTags(), getUsers()]).then(r => {
      this.setState({ article: r[0], loading: false, tags: r[1], users: r[2] })
    })
  }

  render () {
    const { onClose, ...rest } = this.props
    const { article, loading, tags, users } = this.state

    return (
      <Modal width="600px">
        <ModalHeader>
          <TitleContainer>
            <EditIcon size="24px" />
            <GrayText size="1.5rem" weight={400}>Edit Article</GrayText>
          </TitleContainer>
          <ModalToggler onClick={onClose} selectable />
        </ModalHeader>
        <ModalBody>
          {loading
            ? <LoadingScreen height="300px" />
            : <ArticleEditForm article={article} onClose={onClose} tags={tags} users={users} {...rest} />
          }
        </ModalBody>
      </Modal>
    )
  }
}

ArticleEdit.propTypes = {
  id: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired
}

export default ArticleEdit
