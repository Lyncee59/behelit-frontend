import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import BlogItem from './BlogItem'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
`

const BlogList = ({ articles }) => (
  <Wrapper>
    {articles.map((article, index) => <BlogItem article={article} key={article._id} />)}
  </Wrapper>
)

BlogList.propTypes = {
  articles: PropTypes.array
}

BlogList.defaultProps = {
  articles: []
}

export default BlogList
