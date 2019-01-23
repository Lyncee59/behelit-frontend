import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { FarFileAlt, Text, palette, theme } from '@behelit/components'
import { GrayCartridge } from 'components/Cartridges'
import { ReadToggler } from 'components/Togglers'
import { ArticleTitle, ArticleDescription } from 'components/Typography'

const Wrapper = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  margin-bottom: 10px;
  background-color: ${theme('xslightgray')};
  border: 1px solid ${palette('silver')}
`
const Category = styled.a`
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 150px;
  cursor: pointer;

  @media(min-width: 768px) {
    display: flex;
  }
`
const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  padding: 10px;
  box-sizing: border-box;

  & > :first-child { margin-bottom: 10px; }

  @media(min-width: 768px) {
    width: calc(100% - 150px);
  }
`
const Toggler = styled(ReadToggler)`
  position: absolute;
  bottom: -5px;
  right: -5px;
  z-index: 10;
`

const BlogItem = ({ article }) => (
  <Wrapper>
    <Category href={`/blog/${article._id}`}>
      {/* <Devicon name={article.category} cursor /> */}
    </Category>
    <Content>
      <ArticleTitle>{article.title}</ArticleTitle>
      <ArticleDescription size='14px' weight={300}>{article.description}</ArticleDescription>
    </Content>
    <Toggler href={`/blog/${article._id}`} />
  </Wrapper>
)

BlogItem.propTypes = {
  article: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    createdAt: PropTypes.string.isRequired
  })
}

export default BlogItem
