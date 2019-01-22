import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { FasArrowDown, FasArrowUp, Text, palette } from '@behelit/components'
import { GrayCartridge } from 'components/Cartridges'
import { DefaultLink } from 'components/Links'

const Wrapper = styled(GrayCartridge)`
  cursor: pointer;
`

const TogglerIconCollapse = styled(FasArrowUp).attrs({ size: "16px", selectable: true })`
  fill: ${palette('black80')};
`
const TogglerIconExpand = styled(FasArrowDown).attrs({ size: "16px", selectable: true })`
  fill: ${palette('black80')};
`
const TogglerText = styled(Text).attrs({ weight: 400 })``

const ExpandToggler = ({ toggled, ...rest }) => (
  <Wrapper as={DefaultLink} {...rest}>
    {toggled ? <TogglerIconCollapse /> : <TogglerIconExpand />}
    <TogglerText>{toggled ? 'Collapse' : 'Expand'}</TogglerText>
  </Wrapper>
)

ExpandToggler.propTypes = {
  toggled: PropTypes.bool
}

ExpandToggler.defaultProps = {
  toggled: false
}

export default ExpandToggler
