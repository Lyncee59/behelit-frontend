import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { getUser } from 'services/api/private'
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalToggler
} from '@behelit/components'
import { EditIcon } from 'components/Icons'
import LoadingScreen from 'components/LoadingScreen'
import { GrayText } from 'components/Typography'
import UserEditForm from './UserEditForm'

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  & > :not(:first-child) { margin-left: 0.5rem; }
`

class UserEdit extends React.PureComponent {
  constructor (props) {
    super(props)
    this.state = {
      loading: true,
      user: {}
    }
  }

  componentDidMount () {
    const { id } = this.props
    getUser(id).then(r => {
      this.setState({ loading: false, user: r })
    })
  }

  render () {
    const { onClose, ...rest } = this.props
    const { loading, user } = this.state

    return (
      <Modal width="600px">
        <ModalHeader>
          <TitleContainer>
            <EditIcon size="24px" />
            <GrayText size="1.5rem" weight={400}>Edit User</GrayText>
          </TitleContainer>
          <ModalToggler onClick={onClose} selectable />
        </ModalHeader>
        <ModalBody>
          {loading
            ? <LoadingScreen height="150px" />
            : <UserEditForm onClose={onClose} user={user} {...rest} />
          }
        </ModalBody>
      </Modal>
    )
  }
}

UserEdit.propTypes = {
  id: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired
}

export default UserEdit
