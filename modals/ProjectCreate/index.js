import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { getTags, getUsers } from 'services/api/private'
import {
  FasPlusSquare,
  Modal,
  ModalHeader,
  ModalBody,
  ModalToggler,
} from '@behelit/components'
import { CreateIcon } from 'components/Icons'
import LoadingScreen from 'components/LoadingScreen'
import { GrayText } from 'components/Typography'
import ProjectCreateForm from './ProjectCreateForm'

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  & > :not(:first-child) { margin-left: 0.5rem; }
`
class ProjectCreate extends React.PureComponent {
  constructor (props) {
    super(props)
    this.state = {
      loading: true,
      tags: []
    }
  }

  componentDidMount () {
    getTags().then(r => {
      this.setState({ loading: false, tags: r })
    })
  }

  render () {
    const { onClose, ...rest } = this.props
    const { loading, tags } = this.state

    return (
      <Modal width="600px">
        <ModalHeader>
          <TitleContainer>
            <CreateIcon size="24px" />
            <GrayText size="1.5rem" weight={400}>Create Project</GrayText>
          </TitleContainer>
          <ModalToggler onClick={onClose} selectable />
        </ModalHeader>
        <ModalBody>
          {loading 
            ? <LoadingScreen height="300px" />
            : <ProjectCreateForm tags={tags} onClose={onClose} {...rest} />
          }
        </ModalBody>
      </Modal>
    )
  }
}

ProjectCreate.propTypes = {
  onClose: PropTypes.func.isRequired,
}

export default ProjectCreate
