import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { FasQuoteLeft, FasQuoteRight, palette } from '@behelit/components'

const Wrapper = styled.div`
  position: relative;
  padding: 2rem;
  box-sizing: border-box;
  background-color: ${palette('gray1')};
  border: 1px solid ${palette('gray2')};
  border-radius: 5px;
`
const LeftQuote = styled(FasQuoteLeft)`
  position: absolute;
  top: 10px;
  left: 10px;
  fill: ${palette('gray4')};
`
const RightQuote = styled(FasQuoteRight)`
  position: absolute;
  bottom: 10px;
  right: 10px;
  fill: ${palette('gray4')};
`

const Quote = ({ children }) => (
  <Wrapper>
    <LeftQuote size="14px" />
    {children}
    <RightQuote size="14px" />
  </Wrapper>
)

Quote.propTypes = {
  children: PropTypes.node.isRequired
}

export default Quote
