import styled from 'styled-components'
import { Button, palette } from '@behelit/components'

export const CrimsonButton = Button

export const GrayButton = styled(Button)`
  background: ${palette('gray2')};
  border-color: ${palette('gray2')};
  color: ${palette('white')};

  &:hover { 
    background: ${palette('gray7')};
  }
`
