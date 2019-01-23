import React from 'react'
import styled from 'styled-components'

import { palette } from '@behelit/components'
import { GrayText } from '../Typography'

const Wrapper = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
`
const BulletPoint = styled.div`
  display: flex;
  flex-shrink: 0;
  width: 5px;
  height: 5px;
  border: 2px solid ${palette('crimson')};
  border-radius: 50%;
  margin-right: 10px;
  margin-top: 5px;
`

const ListItem = props => (
  <Wrapper>
    <BulletPoint />
    <GrayText size='16px' weight={300}>{props.children}</GrayText>
  </Wrapper>
)

export default ListItem
