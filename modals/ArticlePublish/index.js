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
import ArticlePublishForm from './ArticlePublishForm'

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  & > :not(:first-child) { margin-left: 0.5rem; }
`

const ArticlePublish = ({ onClose, ...rest }) => (
  <Modal width="400px">
    <ModalHeader>
      <TitleContainer>
        <PublishIcon size="24px" />
        <GrayText size="1.5rem" weight={400}>Publish Article</GrayText>
      </TitleContainer>
      <ModalToggler onClick={onClose} selectable />
    </ModalHeader>
    <ModalBody>
      <ArticlePublishForm onClose={onClose} {...rest} />
    </ModalBody>
  </Modal>
)

ArticlePublish.propTypes = {
  id: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
}

export default ArticlePublish
