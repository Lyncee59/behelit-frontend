import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { DefaultLink, BlackLink } from 'components/Links'

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
        <DefaultLink onClick={this.handleToggle} size="1.2rem" uppercase weight={700}>{category}</DefaultLink>
        <Articles toggled={toggled}>
          {articles.map((article, index) => <BlackLink href={`/article/${article._id}`} key={article._id} size="1rem" weight={400}>{article.title}</BlackLink>)}
        </Articles>
      </Wrapper>
    )
  }
}

TimelineItem.propTypes = {
  articles: PropTypes.array.isRequired,
  category: PropTypes.string.isRequired
}

export default TimelineItem
