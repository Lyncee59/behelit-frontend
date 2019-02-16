import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { FasArrowDown, FasArrowUp, palette } from '@behelit/components'
import { GrayCartridge } from 'components/Cartridges'
import { DefaultLink } from 'components/Links'
import { GrayText } from 'components/Typography'

const Wrapper = styled(GrayCartridge)`
  cursor: pointer;
`
const TogglerIconCollapse = styled(FasArrowUp)`
  fill: ${palette('gray8')};
`
const TogglerIconExpand = styled(FasArrowDown)`
  fill: ${palette('gray8')};
`

const ExpandToggler = ({ toggled, ...rest }) => (
  <Wrapper as={DefaultLink} {...rest}>
    {toggled ? <TogglerIconCollapse selectable size="16px" /> : <TogglerIconExpand selectable size="16px" />}
    <GrayText size="1rem" weight={400}>{toggled ? 'Collapse' : 'Expand'}</GrayText>
  </Wrapper>
)

ExpandToggler.propTypes = {
  toggled: PropTypes.bool
}

ExpandToggler.defaultProps = {
  toggled: false
}

export default ExpandToggler
