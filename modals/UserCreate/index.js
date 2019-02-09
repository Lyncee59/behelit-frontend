import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalToggler
} from '@behelit/components'
import { CreateIcon } from 'components/Icons'
import { GrayText } from 'components/Typography'
import UserCreateForm from './UserCreateForm'

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  & > :not(:first-child) { margin-left: 0.5rem; }
`
const UserCreate = ({ onClose, ...rest }) => (
  <Modal width="600px">
    <ModalHeader>
      <TitleContainer>
        <CreateIcon size="24px" />
        <GrayText size="1.5rem" weight={400}>Create User</GrayText>
      </TitleContainer>
      <ModalToggler onClick={onClose} selectable />
    </ModalHeader>
    <ModalBody>
      <UserCreateForm onClose={onClose} {...rest} />
    </ModalBody>
  </Modal>
)

UserCreate.propTypes = {
  onClose: PropTypes.func.isRequired
}

export default UserCreate
