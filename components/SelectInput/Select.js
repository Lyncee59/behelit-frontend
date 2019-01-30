import React from 'react'
import styled from 'styled-components'

import { palette, theme } from '@behelit/components'

const Select = styled.select`
  display: block;
  width: 100%;
  height: 2.7rem;
  padding: 0 1.4rem;
  box-sizing: border-box;
  font-family: ${theme('fontPrimary')};
  font-size: 1rem;
  color: ${palette('gray8')};
  border-width: 1px;
  border-color: ${palette('gray2')};
  border-style: solid;
  border-radius: 0.125rem;
  background: ${palette('white')};
  background-image: none;
  outline-width: 0;
  user-select: text;
`

export default Select
