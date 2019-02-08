import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { palette } from '@behelit/components'
import { ReadToggler } from 'components/Togglers'
import { GrayText, CrimsonText } from 'components/Typography'

const Wrapper = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  margin-bottom: 10px;
  background: ${palette('gray1')};
  border: 1px solid ${palette('gray2')}
`
const Category = styled.a`
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 150px;
  background: ${palette('gray2')};

  @media(min-width: 768px) {
    display: flex;
  }
`
const CategoryImage = styled.img`
  width: 8rem;
  height: 8rem;
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
    <Category href={`/article/${article._id}`}>
      <CategoryImage src={`/static/icons/${article.category}.svg`} />
    </Category>
    <Content>
      <CrimsonText size="1.2rem" uppercase weight={700}>{article.title}</CrimsonText>
      <GrayText size="0.9rem" weight={300}>{article.description}</GrayText>
    </Content>
    <Toggler href={`/article/${article._id}`} />
  </Wrapper>
)

BlogItem.propTypes = {
  article: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    title: PropTypes.string.isRequired
  })
}

export default BlogItem
