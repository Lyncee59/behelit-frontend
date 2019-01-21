import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { FarFileAlt, Text, theme } from '@behelit/components'

const Wrapper = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  margin-bottom: 10px;
  background-color: ${theme('white')};
  border: 1px solid ${theme('red')};
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
const ReadToggler = styled.a`
  position: absolute;
  bottom: -5px;
  right: -5px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 90px;
  height: 30px;
  padding: 5px;
  box-sizing: border-box;
  background-color: ${theme('white')};
  border: 1px solid ${theme('red')};
  border-radius: 5px;
  cursor: pointer;

  &:hover { 
    & > * { color: ${theme('red')}!important; }
  }
`

const BlogItem = ({ article }) => (
  <Wrapper>
    <Category href={`/blog/${article._id}`}>
      {/* <Devicon name={article.category} cursor /> */}
    </Category>
    <Content>
      <Text size='18px' weight={500} color='brand-primary'>{article.title}</Text>
      <Text size='14px' weight={300}>{article.description}</Text>
    </Content>
    <ReadToggler href={`/blog/${article._id}`}>
      <FarFileAlt size='16px' selectable />
      <Text size='16px' color='black'>Read</Text>
    </ReadToggler>
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
