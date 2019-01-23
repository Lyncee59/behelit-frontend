import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { palette } from '@behelit/components'

const Wrapper = styled.div`
  width: 100%;
  height: 2px;
  background-color: ${palette('crimson')};
`

const Separator = ({ children }) => (
  <Wrapper>{children}</Wrapper>
)

export default Separator
