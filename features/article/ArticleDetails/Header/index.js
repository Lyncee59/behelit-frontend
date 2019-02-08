import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { palette } from '@behelit/components'
import { CrimsonText, GrayText, OddEvenText } from 'components/Typography'

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  box-sizing: border-box;
  background: ${palette('gray1')};
  border: 1px solid ${palette('gray2')};
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  overflow: hidden;
`
const Category = styled.div`
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
const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: space-between;
  width: 100%;
  padding: 10px;
  box-sizing: border-box;

  @media(min-width: 768px) {
    width: calc(100% - 150px);
  }
`
const Title = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;

  & > span { margin-bottom: 5px; }
`
const Tags = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  width: 100%;

  & > * { margin-right: 5px; }
`
const Header = ({ article }) => (
  <Wrapper>
    <Category>
      <CategoryImage src={`/static/icons/${article.category}.svg`} />
    </Category>
    <Description>
      <Title>
        <CrimsonText size="1.5rem" uppercase weight={400}>{article.title}</CrimsonText>
        <GrayText size="1rem" weight={700}>{article.description}</GrayText>
        <GrayText italic size="0.9rem" weight={400}>{`Published: ${article.createdAt}`}</GrayText>
      </Title>
      <Tags>
        {article.tags.map((tag, index) => <OddEvenText capitalize key={tag._id} odd={index % 2 !== 0} size="1rem" weight={400}>{tag}</OddEvenText>)}
      </Tags>
    </Description>
  </Wrapper>
)

Header.propTypes = {
  article: PropTypes.object
}

export default Header
