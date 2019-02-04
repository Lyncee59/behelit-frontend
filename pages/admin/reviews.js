import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { getReviews } from 'services/api/private'
import { fetchData } from 'services/utils'
import Layout from 'layouts/Admin'
import ReviewList from 'features/admin/ReviewList'

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

const Reviews = ({ reviews }) => (
  <Layout>
    <ReviewList reviews={reviews} />
  </Layout>
)

Reviews.getInitialProps = (context) => {
  return fetchData(context, {
    reviews: getReviews()
  })
}

Reviews.propTypes = {
  reviews: PropTypes.array
}

export default Reviews
