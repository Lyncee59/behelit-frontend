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
  fill: ${palette('black80')};
`
const TogglerIconExpand = styled(FasArrowDown)`
  fill: ${palette('black80')};
`

const ExpandToggler = ({ toggled, ...rest }) => (
  <Wrapper as={DefaultLink} {...rest}>
    {toggled ? <TogglerIconCollapse size='1rem' selectable /> : <TogglerIconExpand size='1rem' selectable />}
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
