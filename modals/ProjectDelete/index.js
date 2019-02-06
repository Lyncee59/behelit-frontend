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
import { DeleteIcon } from 'components/Icons'
import { GrayText } from 'components/Typography'
import ProjectDeleteForm from './ProjectDeleteForm'

const MailIcon = styled(FasEnvelope)`
  fill: ${(props) => props.theme.palette['gray8']};
  &:hover { ${(props) => props.theme.palette['gray8']}; }
`
const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  & > :not(:first-child) { margin-left: 0.5rem; }
`

const ProjectDelete = ({ onClose, ...rest }) =>  (
  <Modal width="400px">
    <ModalHeader>
      <TitleContainer>
        <DeleteIcon size="24px" />
        <GrayText size="1.5rem" weight={400}>Delete Project</GrayText>
      </TitleContainer>
      <ModalToggler onClick={onClose} selectable />
    </ModalHeader>
    <ModalBody>
      <ProjectDeleteForm onClose={onClose} {...rest} />
    </ModalBody>
  </Modal>
)

ProjectDelete.propTypes = {
  onClose: PropTypes.func.isRequired,
}

export default ProjectDelete
