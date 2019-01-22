import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { palette } from '@behelit/components'
import { CategoryLink, ArticleLink } from 'components/Links'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  margin-bottom: 10px;
`
const Articles = styled.ul`
  display: ${(props) => props.toggled ? 'flex' : 'none'};
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  padding: 0;
  margin: 10px;
  list-style: none;

  & > * {
    margin-left: 10px;
    margin-bottom: 10px;
  }
`

class TimelineItem extends React.PureComponent {
  constructor (props) {
    super(props)
    this.state = { toggled: false }
    this.handleToggle = this.handleToggle.bind(this)
  }

  handleToggle () {
    const { toggled } = this.state
    this.setState({ toggled: !toggled })
  }

  render () {
    const { toggled } = this.state
    const { category, articles } = this.props

    return (
    <Wrapper>
        <CategoryLink onClick={this.handleToggle}>{category}</CategoryLink>
        <Articles toggled={toggled}>
          {articles.map((article, index) => <ArticleLink key={index} size='16px' weight={300} onClick={() => handleClick(article._id)}>{article.title}</ArticleLink>)}
        </Articles>
      </Wrapper>
    )
  }
}

TimelineItem.propTypes = {
  category: PropTypes.string.isRequired,
  articles: PropTypes.array.isRequired
}

export default TimelineItem
