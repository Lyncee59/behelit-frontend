import styled from 'styled-components'
import { palette } from '@behelit/components'

export const DataRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  background: ${palette('gray1')};
  cursor: ${(props) => props.disableHightlight ? 'pointer' : 'default'};

  &:hover { 
    background: ${(props) => props.disableHightlight ? palette('gray1') : palette('white')};
  }
`

export default DataRow
