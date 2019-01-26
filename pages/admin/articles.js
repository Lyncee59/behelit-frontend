import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { fetchData } from 'services/utils'
import { getArticles } from 'services/api/private'
import Layout from 'layouts/Public'
import ArticleList from 'features/admin/ArticleList'

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

const Articles = ({ articles }) => (
  <Layout>
    <ArticleList articles={articles} />
  </Layout>
)

Articles.getInitialProps = (context) => {
  return fetchData(context, {
    articles: getArticles()
  })
}

Articles.propTypes = {
  article: PropTypes.array
}

export default Articles
