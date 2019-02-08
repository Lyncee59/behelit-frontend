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
import ProjectPublishForm from './ProjectPublishForm'

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  & > :not(:first-child) { margin-left: 0.5rem; }
`

const ProjectPublish = ({ onClose, ...rest }) => (
  <Modal width="400px">
    <ModalHeader>
      <TitleContainer>
        <PublishIcon size="24px" />
        <GrayText size="1.5rem" weight={400}>Publish Project</GrayText>
      </TitleContainer>
      <ModalToggler onClick={onClose} selectable />
    </ModalHeader>
    <ModalBody>
      <ProjectPublishForm onClose={onClose} {...rest} />
    </ModalBody>
  </Modal>
)

ProjectPublish.propTypes = {
  id: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired
}

export default ProjectPublish
