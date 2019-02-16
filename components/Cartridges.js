import styled from 'styled-components'
import { palette } from '@behelit/components'

export const GrayCartridge = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 0.3rem 0.5rem;
  box-sizing: border-box;
  background: ${palette('gray1')};
  border: 1px solid ${palette('gray2')};
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s;

  & > :first-child {
    margin-right: 0.3rem;
  }

  &:hover { 
    & > * {
      fill: ${palette('red10')}!important;
      color: ${palette('red10')}!important;
    }
  }
`
