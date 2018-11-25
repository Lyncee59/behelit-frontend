import styled from 'styled-components'
import { Section, palette } from '@behelit/components'

export const GradientCrimsonSection = styled(Section)`
  background-image: linear-gradient(90deg, ${palette('crimson')} 0%, ${palette('boston')} 100%);
`