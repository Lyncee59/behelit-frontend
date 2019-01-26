import React from 'react'
import styled from 'styled-components'

import { palette } from '@behelit/components'

export const DataTable = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  padding: 1rem;
  box-sizing: border-box;
  background: ${palette('gray1')};
  border: 1px solid ${palette('gray2')};
  border-radius: 5px;

  & > :not(:first-child) {
    border-top: 1px dashed ${palette('gray2')}
  }
`

export default DataTable
