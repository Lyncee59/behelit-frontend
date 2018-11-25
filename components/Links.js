import styled from 'styled-components'
import { Link } from '@behelit/components'

export const DefaultLink = styled(Link)`
  text-decoration: none;
  &:hover {
    text-decoration: none;
  }
`
export const WhiteLink = styled(Link).attrs({ weight: 400 })`
  color: ${(props) => props.theme.palette['white']};
  text-decoration: underline;
  &:hover {
    color: ${(props) => props.theme.palette['white']};
    text-decoration: underline;
  }
`
