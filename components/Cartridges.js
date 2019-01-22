import styled from 'styled-components'
import { palette, theme } from '@behelit/components'
import { DefaultLink } from './Links'

export const GrayCartridge = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 0.3rem 0.5rem;
  box-sizing: border-box;
  background-color: ${theme('xslightgray')};
  border: 1px solid ${palette('silver')};
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  transition: 0.3s;

  & > :first-child {
    margin-right: 0.3rem;
  }

  &:hover { 
    & > * {
      fill: ${palette('crimson')}!important;
      color: ${palette('crimson')}!important;
    }
  }
`
