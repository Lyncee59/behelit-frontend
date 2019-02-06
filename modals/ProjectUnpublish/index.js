import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import {
  FasGlobe,
  Modal,
  ModalHeader,
  ModalBody,
  ModalToggler,
  palette,
} from '@behelit/components'
import { PublishIcon } from 'components/Icons'
import { GrayText } from 'components/Typography'
import ProjectUnpublishForm from './ProjectUnpublishForm'

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  & > :not(:first-child) { margin-left: 0.5rem; }
`

const ProjectUnpublish = ({ onClose, ...rest }) => (
  <Modal width="400px">
    <ModalHeader>
      <TitleContainer>
        <PublishIcon size="24px" />
        <GrayText size="1.5rem" weight={400}>Unpublish Project</GrayText>
      </TitleContainer>
      <ModalToggler onClick={onClose} selectable />
    </ModalHeader>
    <ModalBody>
      <ProjectUnpublishForm onClose={onClose} {...rest} />
    </ModalBody>
  </Modal>
)

ProjectUnpublish.propTypes = {
  id: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
}

export default ProjectUnpublish
