import styled from 'styled-components'
import { Link, palette } from '@behelit/components'

export const DefaultLink = styled(Link)`
  text-decoration: none;
  transition: 0.5s;

  &:hover {
    text-decoration: none;
  }
`
export const BlackLink = styled(DefaultLink)`
  color: ${palette('black90')};

  &:hover {
    color: ${palette('crimson')};
  }
`
export const WhiteLink = styled(DefaultLink)`
  color: ${(props) => props.selected ? palette('crimson') : palette('white')};

  &:hover {
    color: ${palette('crimson')};
  }
` 
