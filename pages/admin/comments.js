import React from 'react'
import PropTypes from 'prop-types'

import { getComments } from 'services/api/private'
import { fetchData } from 'services/utils'
import Layout from 'layouts/Admin'
import CommentList from 'features/admin/CommentList'

const Comments = ({ comments }) => (
  <Layout>
    <CommentList comments={comments} />
  </Layout>
)

Comments.getInitialProps = (context) => {
  return fetchData(context, {
    comments: getComments()
  })
}

Comments.propTypes = {
  comments: PropTypes.array
}

export default Comments
