import React from 'react'
import styled from 'styled-components'
import { Text, palette, theme } from '@behelit/components' 

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0.5rem;
  box-sizing: border-box;
  font-family: ${theme('fontPrimary')};
  font-size: 1rem;
  font-weight: 400;
  color: ${(props) => props.selected ? props.theme.palette['white'] : props.theme.palette['gray8']};
  background: ${(props) => props.selected ? props.theme.palette['red10'] : props.theme.palette['gray1']};
  border: 1px solid ${(props) => props.selected ? props.theme.palette['red10'] : props.theme.palette['gray2']};
  cursor: pointer;
`

export default Wrapper
