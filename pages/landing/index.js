import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { assoc, merge, path } from 'ramda'

import { fetchData } from 'services/utils'
import { getArticles } from 'services/api/public'
import Layout from 'layouts/Public'
import BlogList from 'features/landing/BlogList'

const Wrapper = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
`
const ColumnLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  
  @media(min-width: 992px) {
    width: 70%;
  }
`
const ColumnRight = styled.div`
  display: none;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-left: 10px;

  @media(min-width: 992px) {
    display: flex;
    width: 30%;
  }
`

const Landing = ({ articles }) => (
  <Layout>
    <Wrapper>
      <ColumnLeft>
        <BlogList articles={articles} />
      </ColumnLeft>
      <ColumnRight>
        Column right
      </ColumnRight>
    </Wrapper>
  </Layout>
)

Landing.getInitialProps = (context) => fetchData(context, {
  articles: getArticles(),
})

Landing.propTypes = {
  articles: PropTypes.array,
}

export default Landing
