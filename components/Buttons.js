import styled from 'styled-components'
import { darken } from 'polished'
import { Button, palette } from '@behelit/components'

export const CrimsonButton = Button

export const GrayButton = styled(Button)`
  background: ${palette('gray2')};
  border-color: ${palette('gray2')};
  color: ${palette('white')};

  &:hover { 
    background: ${(props) => darken(0.1, props.theme.palette['gray2'])};
  }
`
export const GreenButton = styled(Button)`
  background: ${(props) => props.theme.palette['green']};

  &:hover { 
    background: ${(props) => darken(0.1, props.theme.palette['green'])};
  }
`
