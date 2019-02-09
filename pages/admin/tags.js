import React from 'react'
import PropTypes from 'prop-types'

import { getTags } from 'services/api/private'
import { fetchData } from 'services/utils'
import Layout from 'layouts/Admin'
import TagList from 'features/admin/TagList'

const Tags = ({ tags }) => (
  <Layout>
    <TagList tags={tags} />
  </Layout>
)

Tags.getInitialProps = (context) => {
  return fetchData(context, {
    tags: getTags()
  })
}

Tags.propTypes = {
  tags: PropTypes.array
}

export default Tags
