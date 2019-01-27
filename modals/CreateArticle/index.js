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

const CreateArticle = ({ handleClose }) =>  (
  <Modal padding="0" width="600px">
    <ModalHeader>
      <TitleContainer>
        <MailIcon size="24px" />
        <GrayText size="1.5rem" weight={400}>Create Article</GrayText>
      </TitleContainer>
      <ModalToggler onClick={handleClose} selectable />
    </ModalHeader>
    <ModalBody>
      <CreateArticleForm />
    </ModalBody>
  </Modal>
)

CreateArticle.propTypes = {
  handleClose: PropTypes.func.isRequired,
}

export default CreateArticle
