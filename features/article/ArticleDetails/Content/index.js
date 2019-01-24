import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { palette } from '@behelit/components'
import { Markdown } from 'components/Markdown'

const Wrapper = styled.div`
  width: 100%;
  padding: 15px;
  box-sizing: border-box;
  background: ${palette('gray1')};
  border-left: 1px solid ${palette('gray2')};
  border-right: 1px solid ${palette('gray2')};
`

const Content = ({ article }) => (
  <Wrapper>
    <Markdown content={article.content} />
  </Wrapper>
)

Content.propTypes = {
  article: PropTypes.shape({
    content: PropTypes.string
  }).isRequired
}

Content.defaultProps = {
  article: {
    content: ''
  }
}

export default Content
