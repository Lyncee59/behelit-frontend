import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalToggler
} from '@behelit/components'
import { PublishIcon } from 'components/Icons'
import { GrayText } from 'components/Typography'
import ReviewPublishForm from './ReviewPublishForm'

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  & > :not(:first-child) { margin-left: 0.5rem; }
`

const ReviewPublish = ({ onClose, ...rest }) => (
  <Modal width="400px">
    <ModalHeader>
      <TitleContainer>
        <PublishIcon size="24px" />
        <GrayText size="1.5rem" weight={400}>Publish Review</GrayText>
      </TitleContainer>
      <ModalToggler onClick={onClose} selectable />
    </ModalHeader>
    <ModalBody>
      <ReviewPublishForm onClose={onClose} {...rest} />
    </ModalBody>
  </Modal>
)

ReviewPublish.propTypes = {
  id: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired
}

export default ReviewPublish