import styled from 'styled-components'

import { Text, palette } from '@behelit/components'

export const DefaultText = styled(Text)`
  display: ${(props) => props.paragraph ? 'block' : 'inline-block'};
  padding: ${(props) => props.paragraph ? '0.5rem 0' : '0'};
`
export const CrimsonText = styled(DefaultText)`
  color: ${palette('red10')};
`
export const GrayText = styled(DefaultText)`
  color: ${palette('gray8')};
`
export const GreenText = styled(DefaultText)`
  color: ${palette('green')};
`
export const RedText = styled(DefaultText)`
  color: ${palette('red10')};
`
export const OddEvenText = styled(DefaultText)`
  color: ${(props) => props.odd ? palette('gray8') : palette('red10')};
`
