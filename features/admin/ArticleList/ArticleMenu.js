import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { DeleteIcon, EditIcon, PublishIcon } from 'components/Icons'
import Modal from 'providers/Modal'

const CustomPublishIcon = styled(PublishIcon)`
  fill: ${(props) => props.published === 1 ? props.theme.palette['green'] : props.theme.palette['red9']};
  &:hover {
    fill: ${(props) => props.published === 1 ? props.theme.palette['green'] : props.theme.palette['red9']};
  }
`
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`

const ArticleMenu = ({ id, isPublished }) => (
  <Wrapper>
    {!isPublished &&
      <Modal data={{ id }} name="articlePublish">
        <CustomPublishIcon published={isPublished ? 1 : 0} selectable size="24px" />
      </Modal>
    }
    {isPublished &&
      <Modal data={{ id }} name="articleUnpublish">
        <CustomPublishIcon published={isPublished ? 1 : 0} selectable size="24px" />
      </Modal>
    }
    <Modal data={{ id }} name="articleEdit">
      <EditIcon selectable size="24px" />
    </Modal>
    <Modal data={{ id }} name="articleDelete">
      <DeleteIcon selectable size="24px" />
    </Modal>
  </Wrapper>
)

ArticleMenu.propTypes = {
  id: PropTypes.string.isRequired,
  isPublished: PropTypes.bool.isRequired
}

export default ArticleMenu
