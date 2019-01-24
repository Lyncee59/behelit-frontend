import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { List, ListItem, TextGroup, palette } from '@behelit/components'
import { CrimsonText } from 'components/Typography'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  padding: 1rem;
  margin-bottom: 0.5rem;
  box-sizing: border-box;
  background: ${palette('gray1')};
  border: 1px solid ${palette('gray2')};
  border-radius: 5px;
`
const Title = styled(CrimsonText)`
  width: 100%;
  margin-bottom: 15px;
  border-bottom: 1px solid ${palette('red10')};
`

const Software = () => (
  <Wrapper>
    <Title size='1.2rem' uppercase weight={700}>Beloved Software</Title>
    <List>
      <ListItem>Microsoft Visual Studio Code</ListItem>
      <ListItem>Microsoft Visual Studio 2015 Update 3</ListItem>
      <ListItem>JetBrains ReSharper</ListItem>
      <ListItem>JetBrains WebStorm</ListItem>
      <ListItem>JetBrains Rider</ListItem>
      <ListItem>Paint .NET</ListItem>
    </List>
  </Wrapper>
)

export default Software
