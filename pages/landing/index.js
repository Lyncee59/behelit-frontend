import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { fetchData } from 'services/utils'
import { getArticles } from 'services/api/public'
import Layout from 'layouts/Public'
import BlogList from 'features/landing/BlogList'
import Timeline from 'features/landing/Timeline'

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

const Landing = ({ articles }) => (
  <Layout>
    <Wrapper>
      <Column position='left'>
        <BlogList articles={articles} />
      </Column>
      <Column>
        <Timeline articles={articles} />
      </Column>
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
