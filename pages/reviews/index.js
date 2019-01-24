import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { fetchData } from 'services/utils'
import { getReviews } from 'services/api/public'
import Layout from 'layouts/Public'

import ReviewForm from 'features/reviews/ReviewForm'
import ReviewList from 'features/reviews/ReviewList'

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;

  @media(min-width: 992px) {
    flex-direction: row;
  }
`
const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;

  & > :last-child:not(:first-child) {
    margin-bottom: 0.5rem;
  }

  @media(min-width: 992px) {
    margin-left: ${(props) => props.position === 'left' ? '0' : '1rem'};
    margin-right: ${(props) => props.position === 'left' ? '1rem' : '0'};
    width: 50%;
  }
`

const Reviews = ({ reviews }) => (
  <Layout>
    <Wrapper>
      <Column position="left">
        <ReviewForm />
      </Column>
      <Column>
        <ReviewList reviews={reviews} />
      </Column>
    </Wrapper>
  </Layout>
)

Reviews.getInitialProps = (context) => fetchData(context, {
  reviews: getReviews(),
})

Reviews.propTypes = {
  reviews: PropTypes.array,
}

export default Reviews
