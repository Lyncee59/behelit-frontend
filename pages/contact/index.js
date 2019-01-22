import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { fetchData } from 'services/utils'
import { getArticles } from 'services/api/public'
import Layout from 'layouts/Public'

const Wrapper = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  margin-top: 1rem;
`

const Contact = ({ articles }) => (
  <Layout>
    <Wrapper>
      Contact
    </Wrapper>
  </Layout>
)

Contact.getInitialProps = (context) => fetchData(context, {
  articles: getArticles(),
})

Contact.propTypes = {
  articles: PropTypes.array,
}

export default Contact
