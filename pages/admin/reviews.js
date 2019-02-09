import React from 'react'
import PropTypes from 'prop-types'

import { getReviews } from 'services/api/private'
import { fetchData } from 'services/utils'
import Layout from 'layouts/Admin'
import ReviewList from 'features/admin/ReviewList'

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
