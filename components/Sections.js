import styled from 'styled-components'
import { Section, palette } from '@behelit/components'

export const GradientCrimsonSection = styled(Section)`
  background-image: linear-gradient(90deg, ${palette('red10')} 0%, ${palette('red5')} 100%);
`
export const DarkGraySection = styled(Section)`
  background: ${palette('gray9')};
`
