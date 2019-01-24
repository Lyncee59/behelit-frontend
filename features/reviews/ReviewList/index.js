import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import ReviewItem from './ReviewItem'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
`

const ReviewList = ({ reviews }) => (
    <Wrapper>
      {reviews.map((review, index) => <ReviewItem key={index} review={review} />)}
    </Wrapper>
  )

ReviewList.propTypes = {
  reviews: PropTypes.array,
}

ReviewList.defaultProps = {
  reviews: []
}

export default ReviewList
