import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { palette } from '@behelit/components'
import { DeleteIcon, PublishIcon } from 'components/Icons'
import Modal from 'providers/Modal'

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`
const CustomPublishIcon = styled(PublishIcon)`
  fill: ${(props) => props.published === 1 ? props.theme.palette['green'] : props.theme.palette['red9']};
  &:hover {
    fill: ${(props) => props.published === 1 ? props.theme.palette['green'] : props.theme.palette['red9']};
  }
`

const CommentMenu = ({ id, isPublished }) => (
  <Wrapper>
    {!isPublished &&
      <Modal name="commentPublish" data={{ id }}>
        <CustomPublishIcon selectable size="24px" published={isPublished ? 1 : 0} />
      </Modal>
    }
    {isPublished &&
      <Modal name="commentUnpublish" data={{ id }}>
        <CustomPublishIcon selectable size="24px" published={isPublished ? 1 : 0} />
      </Modal>
    }
    <Modal name="commentDelete" data={{ id }}>
      <DeleteIcon selectable size="24px" />
    </Modal>
  </Wrapper>
)

CommentMenu.propTypes = {
  id: PropTypes.string.isRequired,
  isPublished: PropTypes.bool.isRequired,
}

export default CommentMenu
