import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { screenSize } from '../Tools/interpolation'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  & > :last-child {
    margin-right: 0;
  }

  @media (min-width: ${screenSize('sm')}) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
    width: 100%;
  }

  @media (min-width: ${screenSize('md')}) {
    flex-wrap: nowrap;
  }
`

const FooterRow = ({ children, ...rest }) => (
  <Wrapper {...rest}>{children}</Wrapper>
)

FooterRow.propTypes = {
  children: PropTypes.node,
}

export default FooterRow
