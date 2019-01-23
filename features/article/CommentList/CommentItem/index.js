import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { palette, theme } from '@behelit/components'
import { Markdown } from 'components/Markdown'
import { GrayText } from 'components/Typography'

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  padding: 1rem;
  margin-bottom: 0.5rem;
  box-sizing: border-box;
  background-color: ${theme('xslightgray')};
  border: 1px solid ${palette('silver')};
  border-radius: 5px;
`
const Content = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100% ;
`
const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100% ;
`

const CommentItem = ({ comment }) => (
  <Wrapper>
    <Content>
      <Markdown content={comment.message} />
    </Content>
    <Footer>
      <GrayText size='0.9rem' weight={700}>{comment.name}</GrayText>
      <GrayText size='0.9rem' weight={400} italic>{comment.createdAt}</GrayText>
    </Footer>
  </Wrapper>
)

CommentItem.propTypes = {
  comment: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired
  })
}

export default CommentItem
