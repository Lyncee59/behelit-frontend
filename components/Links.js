import styled from 'styled-components'
import { Link, palette } from '@behelit/components'

export const DefaultLink = styled(Link)`
  text-decoration: none;
  &:hover {
    text-decoration: none;
  }
`
export const HeaderLink = styled(DefaultLink).attrs({ size: '20px', weight: 500 })`
  color: ${palette('white')};
  transition: 0.5s;

  &:hover { color: ${palette('crimson')}; }
`
