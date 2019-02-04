import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { getComments } from 'services/api/private'
import { fetchData } from 'services/utils'
import Layout from 'layouts/Admin'
import CommentList from 'features/admin/CommentList'

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
