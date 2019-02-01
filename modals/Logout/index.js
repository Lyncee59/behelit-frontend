import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import {
  FasSignOutAlt,
  Modal,
  ModalHeader,
  ModalBody,
  ModalToggler,
  palette,
} from '@behelit/components'
import { GrayText } from 'components/Typography'
import LogoutForm from './LogoutForm'

const LogoutIcon = styled(FasSignOutAlt)`
  fill: ${palette('gray8')};
  &:hover { fill: ${palette('gray8')}; }
`
const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  & > :not(:first-child) { margin-left: 0.5rem; }
`

const Logout = ({ onClose, ...rest }) => (
  <Modal padding="0" width="400px">
    <ModalHeader>
      <TitleContainer>
        <LogoutIcon size="24px" />
        <GrayText size="1.5rem" weight={400}>Sign out</GrayText>
      </TitleContainer>
      <ModalToggler onClick={onClose} selectable />
    </ModalHeader>
    <ModalBody>
      <LogoutForm onClose={onClose} {...rest} />
    </ModalBody>
  </Modal>
)

Logout.propTypes = {
  onClose: PropTypes.func.isRequired,
}

export default Logout
