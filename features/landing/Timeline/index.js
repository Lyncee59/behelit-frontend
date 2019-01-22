import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { keys, prop } from 'ramda'

import { Text, palette, theme } from '@behelit/components'
import { groupByCategory } from './services'
import TimelineItem from './TimelineItem'
import { SectionTitle } from 'components/Typography'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  padding: 15px;
  box-sizing: border-box;
  background-color: ${theme('xslightgray')};
  border: 1px solid ${palette('silver')};
`
const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: align-items;
  width: 100%;
  margin-bottom: 15px;
`
const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
`

const Timeline = ({ articles }) => {
  const groupedArticles = groupByCategory(articles)
  const categories = keys(groupedArticles)

  return (
    <Wrapper>
      <Header>
        <SectionTitle>Articles</SectionTitle>
      </Header>
     <Content>
         {categories.map((category, index) => <TimelineItem key={index} category={category} articles={prop(category, groupedArticles)} />)}
      </Content>
    </Wrapper>
  )
}

Timeline.propTypes = {
  articles: PropTypes.array,
}

Timeline.defaultProps = {
  articles: []
}

export default Timeline
