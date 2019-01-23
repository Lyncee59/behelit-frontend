import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { FarFileAlt, palette } from '@behelit/components'
import { GrayCartridge } from 'components/Cartridges'
import { DefaultLink } from 'components/Links'
import { GrayText } from 'components/Typography'

const Wrapper = styled(GrayCartridge)`
  cursor: pointer;
`

const TogglerIcon = styled(FarFileAlt).attrs({ size: "16px", selectable: true })`
  fill: ${palette('black80')};
`

const ReadToggler = (props) => (
  <Wrapper as={DefaultLink} {...props}>
    <TogglerIcon />
    <GrayText size="1rem" weight={400}>Read</GrayText>
  </Wrapper>
) 

export default ReadToggler
