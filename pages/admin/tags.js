import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { getTags } from 'services/api/private'
import { fetchData } from 'services/utils'
import Layout from 'layouts/Admin'
import TagList from 'features/admin/TagList'

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
