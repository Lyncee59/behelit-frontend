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
  color: ${palette('gray9')};

  &:hover {
    color: ${palette('red10')};
  }
`
export const WhiteLink = styled(DefaultLink)`
  color: ${(props) => props.selected ? palette('red10') : palette('white')};

  &:hover {
    color: ${palette('red10')};
  }
` 
