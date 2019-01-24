import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { FormattedMessage } from 'react-intl'

import { ModalPortal } from 'providers/Portals'
import {
  FasEnvelope,
  Modal,
  ModalBackground,
  ModalHeader,
  ModalBody,
  ModalToggler,
} from '@behelit/components'
import { GrayText } from 'components/Typography'
import ContactForm from './ContactForm'

const MailIcon = styled(FasEnvelope)`
  fill: ${(props) => props.theme.palette['gray8']};
  &:hover { ${(props) => props.theme.palette['gray8']}; }
`
const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  & > :not(:first-child) { margin-left: 0.5rem; }
`

const Contact = ({ toggled, handleClose }) =>
  toggled ? (
    <ModalPortal>
      <ModalBackground>
        <Modal padding="0" width="600px">
          <ModalHeader>
            <TitleContainer>
              <MailIcon size="24px" />
              <GrayText size="1.5rem" weight={400}>Contact request</GrayText>
            </TitleContainer>
            <ModalToggler onClick={handleClose} selectable />
          </ModalHeader>
          <ModalBody>
            <ContactForm />
          </ModalBody>
        </Modal>
      </ModalBackground>
    </ModalPortal>
  ) : null

Contact.propTypes = {
  handleClose: PropTypes.func.isRequired,
  toggled: PropTypes.bool,
}

Contact.defaultProps = {
  toggled: false,
}

export default Contact
