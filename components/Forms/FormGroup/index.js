import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Input } from '@behelit/components'
import { CrimsonText } from 'components/Typography'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  margin-bottom: 0.5rem;

  & > :not(:first-child) {
    margin-top: 0.5rem;
  }
`
const FormGroup = ({ children }) => (
  <Wrapper>
    {children}
  </Wrapper>
)

export default FormGroup
