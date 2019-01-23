import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { assoc, merge, path } from 'ramda'

import { fetchData } from 'services/utils'
import { getArticle, getComments } from 'services/api/public'
import Layout from 'layouts/Public'
import ArticleDetails from 'features/article/ArticleDetails'
import CommentList from 'features/article/CommentList'

const Wrapper = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
`
const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  margin-left: ${(props) => props.position === 'left' ? '0' : '1rem'};
  margin-right: ${(props) => props.position === 'left' ? '1rem' : '0'};
  
  @media(min-width: 992px) {
    width: ${(props) => props.position === 'left' ? '70%' : '30%'};
  }
`
const Article = ({ article, comments }) => (
  <Layout>
    <Wrapper>
      <Column position="left">
        <ArticleDetails article={article} />
      </Column>
      <Column>
        <CommentList comments={comments} />
      </Column>
    </Wrapper>
  </Layout>
)

Article.getInitialProps = (context) => {
  const { id } = context.req.params
  return fetchData(context, {
    article: getArticle(id),
    comments: getComments(id)
  })
}

Article.propTypes = {
  article: PropTypes.object,
  comments: PropTypes.array
}

export default Article
