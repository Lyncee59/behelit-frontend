import styled from 'styled-components'
import { Link, palette } from '@behelit/components'

export const DefaultLink = styled(Link)`
  text-decoration: none;
  &:hover {
    text-decoration: none;
  }
`
export const HeaderLink = styled(DefaultLink).attrs({ size: '20px', underline: true, weight: 500 })`
  color: ${(props) => props.selected ? palette('crimson') : palette('white')};
  transition: 0.5s;

  &:hover { color: ${palette('crimson')}; }
`
export const CategoryLink = styled(DefaultLink).attrs({ size: '20px', uppercase: true, weight: 500 })`
  transition: 0.5s;
`
export const ArticleLink = styled(DefaultLink).attrs({ size: '20px', weight: 400 })`
  color: ${palette('black90')};
  transition: 0.5s;

  &:hover { color: ${palette('crimson')}; }
`
