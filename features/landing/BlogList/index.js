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

const BlogList = ({ articles, handleClick }) => (
    <Wrapper>
      {articles.map((article, index) => <BlogItem key={index} article={article} handleClick={handleClick} />)}
    </Wrapper>
  )

BlogList.propTypes = {
  articles: PropTypes.array,
  handleClick: PropTypes.func.isRequired
}

BlogList.defaultProps = {
  articles: []
}

export default BlogList
