import React from 'react'
import PropTypes from 'prop-types'

import Header from './Header'
import Content from './Content'
import Footer from './Footer'

const ArticleDetails = ({ article }) => (
  <React.Fragment>
    <Header article={article} />
    <Content article={article} />
    <Footer article={article} />
  </React.Fragment>
)

ArticleDetails.propTypes = {
  article: PropTypes.object
}

export default ArticleDetails
