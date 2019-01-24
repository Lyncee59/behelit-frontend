import React from 'react'
import styled from 'styled-components'

import { Text, palette } from '@behelit/components'

export const CrimsonText = styled(Text)`
  color: ${palette('red10')};
`
export const GrayText = Text

export const RedText = styled(Text)`
  color: ${palette('red10')};
`
export const OddEvenText = styled(Text)`
  color: ${(props) => props.odd ? palette('gray8') : palette('red10')};
`
