import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalToggler
} from '@behelit/components'
import { DeleteIcon } from 'components/Icons'
import { GrayText } from 'components/Typography'
import TagDeleteForm from './TagDeleteForm'

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  & > :not(:first-child) { margin-left: 0.5rem; }
`

const TagDelete = ({ onClose, ...rest }) => (
  <Modal width="400px">
    <ModalHeader>
      <TitleContainer>
        <DeleteIcon size="24px" />
        <GrayText size="1.5rem" weight={400}>Delete Tag</GrayText>
      </TitleContainer>
      <ModalToggler onClick={onClose} selectable />
    </ModalHeader>
    <ModalBody>
      <TagDeleteForm onClose={onClose} {...rest} />
    </ModalBody>
  </Modal>
)

TagDelete.propTypes = {
  onClose: PropTypes.func.isRequired
}

export default TagDelete
