import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { FarEdit, FarThumbsDown, FarThumbsUp, FarTrashAlt, palette } from '@behelit/components'
import Modal from 'providers/Modal'

const PublishButton = styled(FarThumbsUp)`
  fill: ${(props) => props.toggled === 1 ? props.theme.palette['green'] : palette('gray8')};
  &:hover {
    fill: ${(props) => props.toggled === 1 ? props.theme.palette['green'] : palette('gray8')};
  }
`
const UnpublishButton = styled(FarThumbsDown)`
  fill: ${(props) => props.toggled === 1 ? props.theme.palette['red10'] : palette('gray8')};
  &:hover {
    fill: ${(props) => props.toggled === 1 ? props.theme.palette['red10'] : palette('gray8')};
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

const ArticleMenu = ({ isPublished }) => (
  <Wrapper>
    <PublishButton selectable size="24px" toggled={isPublished ? 1 : 0} />
    <UnpublishButton selectable size="24px" toggled={!isPublished ? 1 : 0} />
    <Modal name="editArticle">
      <EditButton selectable size="24px" />
    </Modal>
    <Modal name="deleteArticle">
      <DeleteButton selectable size="24px" />
    </Modal>
  </Wrapper>
)

export default ArticleMenu
