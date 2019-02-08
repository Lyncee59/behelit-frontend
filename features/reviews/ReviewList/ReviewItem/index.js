import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Quote } from 'components/Containers'
import { GrayText } from 'components/Typography'

const Wrapper = styled.div`
  margin-bottom: 10px;
  width: 100%;
`
const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: justify;
  width: 100%;
  margin-bottom: 10px;
`

const ReviewItem = ({ review }) => {
  const description = review.role ? `${review.role} @ ${review.company}` : review.company

  return (
    <Wrapper>
      <Quote>
        <Row>
          <GrayText italic size="1rem">{review.message}</GrayText>
        </Row>
        <Row>
          <GrayText italic size="1rem" weight={700}>{review.name}</GrayText>
          <GrayText italic size="1rem">{review.createdAt}</GrayText>
        </Row>
        <Row>
          <GrayText italic size="1rem">{description}</GrayText>
        </Row>
      </Quote>
    </Wrapper>
  )
}

ReviewItem.propTypes = {
  review: PropTypes.shape({
    company: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    role: PropTypes.string
  }).isRequired
}

export default ReviewItem
