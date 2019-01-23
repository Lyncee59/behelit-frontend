import styled from 'styled-components'
import { Button, palette, theme } from '@behelit/components'

export const CrimsonButton = Button

export const GrayButton = styled(Button)`
  background-color: ${palette('gray')};
  border-color: ${palette('gray')};
  color: ${palette('white')};

  &:hover { 
    background-color: ${palette('darkgray')};
  }
`
