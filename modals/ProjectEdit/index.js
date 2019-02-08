import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { getProject, getTags } from 'services/api/private'
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalToggler
} from '@behelit/components'
import { EditIcon } from 'components/Icons'
import LoadingScreen from 'components/LoadingScreen'
import { GrayText } from 'components/Typography'
import ProjectEditForm from './ProjectEditForm'

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  & > :not(:first-child) { margin-left: 0.5rem; }
`

class ProjectEdit extends React.PureComponent {
  constructor (props) {
    super(props)
    this.state = {
      loading: true,
      project: {},
      tags: []
    }
  }

  componentDidMount () {
    const { id } = this.props
    Promise.all([getProject(id), getTags()]).then(r => {
      this.setState({ loading: false, project: r[0], tags: r[1] })
    })
  }

  render () {
    const { onClose, ...rest } = this.props
    const { project, loading, tags } = this.state

    return (
      <Modal width="600px">
        <ModalHeader>
          <TitleContainer>
            <EditIcon size="24px" />
            <GrayText size="1.5rem" weight={400}>Edit Project</GrayText>
          </TitleContainer>
          <ModalToggler onClick={onClose} selectable />
        </ModalHeader>
        <ModalBody>
          {loading
            ? <LoadingScreen height="300px" />
            : <ProjectEditForm onClose={onClose} project={project} tags={tags} {...rest} />
          }
        </ModalBody>
      </Modal>
    )
  }
}

ProjectEdit.propTypes = {
  id: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired
}

export default ProjectEdit
