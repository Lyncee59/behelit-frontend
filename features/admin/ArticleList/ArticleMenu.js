import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { FarEdit, FasGlobe, FarTrashAlt, palette } from '@behelit/components'
import Modal from 'providers/Modal'

const PublishButton = styled(FasGlobe)`
  fill: ${(props) => props.published === 1 ? props.theme.palette['green'] : props.theme.palette['red9']};
  &:hover {
    fill: ${(props) => props.published === 1 ? props.theme.palette['green'] : props.theme.palette['red9']};
  }
`
const EditButton = styled(FarEdit)`
  fill: ${palette('gray8')};
  &:hover {
    fill: ${palette('gray8')};
  }
`
const DeleteButton = styled(FarTrashAlt)`
  fill: ${palette('gray8')};
  &:hover {
    fill: ${palette('gray8')};
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
      <Modal name="publishArticle" data={{ id }}>
        <PublishButton selectable size="24px" published={isPublished ? 1 : 0} />
      </Modal>
    }
    {isPublished &&
      <Modal name="unpublishArticle" data={{ id }}>
        <PublishButton selectable size="24px" published={isPublished ? 1 : 0} />
      </Modal>
    }
    <Modal name="editArticle">
      <EditButton selectable size="24px" />
    </Modal>
    <Modal name="deleteArticle">
      <DeleteButton selectable size="24px" />
    </Modal>
  </Wrapper>
)

ArticleMenu.propTypes = {
  id: PropTypes.string.isRequired,
  isPublished: PropTypes.bool.isRequired,
}

export default ArticleMenu
