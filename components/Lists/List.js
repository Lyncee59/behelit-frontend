import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.ul`
  list-style-type: none;
  margin: 0;
  padding-left: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
`

const List = ({ children }) => (
  <Wrapper>
    {children}
  </Wrapper>
)

export default List
