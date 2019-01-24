import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { FasQuoteRight, FasQuoteLeft } from '@behelit/components'
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
          <GrayText size='1rem' italic>{review.message}</GrayText>
        </Row>
        <Row>
          <GrayText size='1rem' weight={700}>{review.name}</GrayText>
          <GrayText size='1rem' italic>{review.createdAt}</GrayText>
        </Row>
        <Row>
          <GrayText size='1rem'>{description}</GrayText>
        </Row>
      </Quote>
    </Wrapper>
  )
}

ReviewItem.propTypes = {
  review: PropTypes.shape({
    name: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    role: PropTypes.string
  }).isRequired
}

export default ReviewItem
