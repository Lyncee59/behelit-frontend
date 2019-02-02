import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import {
  FasSignInAlt,
  Modal,
  ModalHeader,
  ModalBody,
  ModalToggler,
} from '@behelit/components'
import { LoginIcon } from 'components/Icons'
import { GrayText } from 'components/Typography'
import LoginForm from './LoginForm'

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  & > :not(:first-child) { margin-left: 0.5rem; }
`

const Login = ({ onClose, ...rest }) => (
  <Modal width="400px">
    <ModalHeader>
      <TitleContainer>
        <LoginIcon size="24px" />
        <GrayText size="1.5rem" weight={400}>Sign in</GrayText>
      </TitleContainer>
      <ModalToggler onClick={onClose} selectable />
    </ModalHeader>
    <ModalBody>
      <LoginForm onClose={onClose} {...rest} />
    </ModalBody>
  </Modal>
)

Login.propTypes = {
  onClose: PropTypes.func.isRequired,
}

export default Login
