import React from 'react'
import styled from 'styled-components'

import { Text, palette } from '@behelit/components'

export const CrimsonText = styled(Text)`
  color: ${palette('crimson')};
`
export const GrayText = Text

export const OddEvenText = styled(Text)`
  color: ${(props) => props.odd ? palette('black80') : palette('crimson')};
`
