import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import {
  FasEnvelope,
  Modal,
  ModalHeader,
  ModalBody,
  ModalToggler,
} from '@behelit/components'
import { ContactIcon } from 'components/Icons'
import { GrayText } from 'components/Typography'
import ContactForm from './ContactForm'

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  & > :not(:first-child) { margin-left: 0.5rem; }
`

const Contact = ({ onClose, ...rest }) => (
  <Modal width="600px">
    <ModalHeader>
      <TitleContainer>
        <ContactIcon size="24px" />
        <GrayText size="1.5rem" weight={400}>Contact request</GrayText>
      </TitleContainer>
      <ModalToggler onClick={onClose} selectable />
    </ModalHeader>
    <ModalBody>
      <ContactForm onClose={onClose} {...rest} />
    </ModalBody>
  </Modal>
)

Contact.propTypes = {
  onClose: PropTypes.func.isRequired,
}

export default Contact
