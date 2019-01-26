import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  padding: 1rem 0;
`

const Form = ({ children, ...rest }) => (
  <Wrapper {...rest}>
    {children}
  </Wrapper>
)

export default Form
