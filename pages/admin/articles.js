import React from 'react'
import PropTypes from 'prop-types'

import { getArticles } from 'services/api/private'
import { fetchData } from 'services/utils'
import Layout from 'layouts/Admin'
import ArticleList from 'features/admin/ArticleList'

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
  articles: PropTypes.array
}

export default Articles
