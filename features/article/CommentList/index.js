import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import CommentItem from './CommentItem'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
`

const CommentList = ({ comments }) => (
  <Wrapper>
    {comments.map((comment, index) => <CommentItem comment={comment} key={comment._id} />)}
  </Wrapper>
)

CommentList.propTypes = {
  comments: PropTypes.array
}

CommentList.defaultProps = {
  comments: []
}

export default CommentList
