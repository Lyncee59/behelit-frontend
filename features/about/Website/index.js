import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { TextGroup, palette, theme } from '@behelit/components'
import { DefaultLink } from 'components/Links'
import { List, ListItem } from 'components/Lists'
import { CrimsonText, GrayText } from 'components/Typography'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  padding: 1rem;
  margin-bottom: 0.5rem;
  box-sizing: border-box;
  background-color: ${theme('xslightgray')};
  border: 1px solid ${palette('silver')};
  border-radius: 5px;
`
const Title = styled(CrimsonText)`
  width: 100%;
  margin-bottom: 15px;
  border-bottom: 1px solid ${palette('crimson')};
`

const Website = () => (
  <Wrapper>
    <Title size='1.2rem' uppercase weight={700}>About this website</Title>
    <TextGroup inline>
      <GrayText>
        Early 2017, I created this website in order to promote my projects.
        It was also the perfect opportunity to develop a web application in React using the following key points :
      </GrayText>
    </TextGroup>
    <List>
      <ListItem>React ES6</ListItem>
      <ListItem>Redux Saga</ListItem>
      <ListItem>.NET Core API</ListItem>
      <ListItem>Sass</ListItem>
      <ListItem>Bootstrap</ListItem>
      <ListItem>Webpack</ListItem>
      <ListItem>Webstorm</ListItem>
      <ListItem>AWS</ListItem>
    </List>
    <TextGroup inline>
      <GrayText>
        If you wish to know more about it, I also released the source code at this GIT repository addresses:
      </GrayText>
    </TextGroup>
    <List>
      <ListItem>
        <DefaultLink href='https://github.com/lyncee59/behelit-components' target='_blank'>https://github.com/lyncee59/behelit-components</DefaultLink>
      </ListItem>
      <ListItem>
        <DefaultLink href='https://github.com/lyncee59/behelit-frontend' target='_blank'>https://github.com/lyncee59/behelit-frontend</DefaultLink>
      </ListItem>
    </List>
  </Wrapper>
)

export default Website
