import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { FormattedMessage } from 'react-intl'

import {
  FasSignInAlt,
  Modal,
  ModalHeader,
  ModalBody,
  ModalToggler,
} from '@behelit/components'
import { GrayText } from 'components/Typography'
import LoginForm from './LoginForm'

const LoginIcon = styled(FasSignInAlt)`
  fill: ${(props) => props.theme.palette['gray8']};
  &:hover { ${(props) => props.theme.palette['gray8']}; }
`
const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  & > :not(:first-child) { margin-left: 0.5rem; }
`

const Login = ({ handleClose }) => (
  <Modal padding="0" width="400px">
    <ModalHeader>
      <TitleContainer>
        <LoginIcon size="24px" />
        <GrayText size="1.5rem" weight={400}>Sign in</GrayText>
      </TitleContainer>
      <ModalToggler onClick={handleClose} selectable />
    </ModalHeader>
    <ModalBody>
      <LoginForm />
    </ModalBody>
  </Modal>
)

Login.propTypes = {
  handleClose: PropTypes.func.isRequired,
}

export default Login
