import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { getTags, getUsers } from 'services/api/private'
import {
  FasEnvelope,
  Modal,
  ModalHeader,
  ModalBody,
  ModalToggler,
} from '@behelit/components'
import LoadingScreen from 'components/LoadingScreen'
import { GrayText } from 'components/Typography'
import CreateArticleForm from './CreateArticleForm'

const MailIcon = styled(FasEnvelope)`
  fill: ${(props) => props.theme.palette['gray8']};
  &:hover { ${(props) => props.theme.palette['gray8']}; }
`
const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  & > :not(:first-child) { margin-left: 0.5rem; }
`

class CreateArticle extends React.PureComponent {
  constructor (props) {
    super(props)
    this.state = {
      loading: true,
      tags: [],
      users: []
    }
  }

  componentDidMount () {
    Promise.all([getTags(), getUsers()]).then(r => {
      this.setState({ loading: false, tags: r[0], users: r[1] })
    })
  }

  render () {
    const { onClose, ...rest } = this.props
    const { loading, tags, users } = this.state

    return (
      <Modal padding="0" width="600px">
        <ModalHeader>
          <TitleContainer>
            <MailIcon size="24px" />
            <GrayText size="1.5rem" weight={400}>Create Article</GrayText>
          </TitleContainer>
          <ModalToggler onClick={onClose} selectable />
        </ModalHeader>
        <ModalBody>
          {loading 
            ? <LoadingScreen height="300px" />
            : <CreateArticleForm tags={tags} users={users} onClose={onClose} {...rest} />
          }
        </ModalBody>
      </Modal>
    )
  }
}

CreateArticle.propTypes = {
  onClose: PropTypes.func.isRequired,
}

export default CreateArticle
