import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { getTag } from 'services/api/private'
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalToggler
} from '@behelit/components'
import { EditIcon } from 'components/Icons'
import LoadingScreen from 'components/LoadingScreen'
import { GrayText } from 'components/Typography'
import TagEditForm from './TagEditForm'

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  & > :not(:first-child) { margin-left: 0.5rem; }
`

class TagEdit extends React.PureComponent {
  constructor (props) {
    super(props)
    this.state = {
      loading: true,
      tag: {}
    }
  }

  componentDidMount () {
    const { id } = this.props
    getTag(id).then(r => {
      this.setState({ loading: false, tag: r })
    })
  }

  render () {
    const { onClose, ...rest } = this.props
    const { loading, tag } = this.state

    return (
      <Modal width="600px">
        <ModalHeader>
          <TitleContainer>
            <EditIcon size="24px" />
            <GrayText size="1.5rem" weight={400}>Edit Tag</GrayText>
          </TitleContainer>
          <ModalToggler onClick={onClose} selectable />
        </ModalHeader>
        <ModalBody>
          {loading
            ? <LoadingScreen height="150px" />
            : <TagEditForm onClose={onClose} tag={tag} {...rest} />
          }
        </ModalBody>
      </Modal>
    )
  }
}

TagEdit.propTypes = {
  id: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired
}

export default TagEdit
