import React from 'react'
import styled from 'styled-components'

import { palette } from '@behelit/components'

const Wrapper = styled.div`
  width: 100%;
  overflow-x: auto;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  min-width: 1200px;
  padding: 1rem;
  box-sizing: border-box;
  background: ${palette('gray1')};
  border: 1px solid ${palette('gray2')};
  border-radius: 5px;

  & > :not(:first-child) {
    border-top: 1px dashed ${palette('gray2')}
  }
`

const DataTable = ({ children }) => (
  <Wrapper>
    <Container>
      {children}
    </Container>
  </Wrapper>
)

export default DataTable
