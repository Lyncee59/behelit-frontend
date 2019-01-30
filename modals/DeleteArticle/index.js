import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { FormattedMessage } from 'react-intl'

import {
  FasEnvelope,
  Modal,
  ModalHeader,
  ModalBody,
  ModalToggler,
} from '@behelit/components'
import { GrayText } from 'components/Typography'
import DeleteArticleForm from './DeleteArticleForm'

const MailIcon = styled(FasEnvelope)`
  fill: ${(props) => props.theme.palette['gray8']};
  &:hover { ${(props) => props.theme.palette['gray8']}; }
`
const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  & > :not(:first-child) { margin-left: 0.5rem; }
`

const Contact = ({ onClose }) =>  (
  <Modal padding="0" width="600px">
    <ModalHeader>
      <TitleContainer>
        <MailIcon size="24px" />
        <GrayText size="1.5rem" weight={400}>Delete Article</GrayText>
      </TitleContainer>
      <ModalToggler onClick={onClose} selectable />
    </ModalHeader>
    <ModalBody>
      <DeleteArticleForm onClose={onClose} />
    </ModalBody>
  </Modal>
)

Contact.propTypes = {
  onClose: PropTypes.func.isRequired,
}

export default Contact
