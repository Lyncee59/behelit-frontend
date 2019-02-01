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
import { GrayText } from 'components/Typography'
import UnpublishArticleForm from './UnpublishArticleForm'

const UnpublishIcon = styled(FasGlobe)`
  fill: ${palette('red10')};
  &:hover { fill: ${palette('red10')}; }
`
const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  & > :not(:first-child) { margin-left: 0.5rem; }
`

const UnpublishArticle = ({ onClose, ...rest }) => (
  <Modal padding="0" width="400px">
    <ModalHeader>
      <TitleContainer>
        <UnpublishIcon size="24px" />
        <GrayText size="1.5rem" weight={400}>Unpublish Article</GrayText>
      </TitleContainer>
      <ModalToggler onClick={onClose} selectable />
    </ModalHeader>
    <ModalBody>
      <UnpublishArticleForm onClose={onClose} {...rest} />
    </ModalBody>
  </Modal>
)

UnpublishArticle.propTypes = {
  id: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
}

export default UnpublishArticle
